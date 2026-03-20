import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import cookieParser from 'cookie-parser';
import { randomBytes } from 'crypto';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact';
import programRoutes from './routes/programs';
import newsRoutes from './routes/news';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const IS_PROD = process.env.NODE_ENV === 'production';

const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || 'http://localhost:5173').split(',');

app.use(helmet());
app.use(cors({
  origin: (origin, cb) => {
    if (!origin || ALLOWED_ORIGINS.includes(origin)) return cb(null, true);
    cb(new Error('Not allowed by CORS'));
  },
  credentials: true,
}));
app.use(cookieParser(process.env.COOKIE_SECRET || 'ugcsl-dev-secret'));
app.use(express.json({ limit: '10kb' }));

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100, standardHeaders: true, legacyHeaders: false });
app.use('/api', limiter);

// Issue a CSRF token — token returned in JSON body only (httpOnly cookie approach)
// Frontend stores token in memory and sends it via x-csrf-token header
app.get('/api/csrf-token', (_req: Request, res: Response) => {
  const token = randomBytes(32).toString('hex');
  // Store token in a signed, httpOnly, sameSite=strict cookie so JS cannot read it directly
  // The token value is also returned in the body for the frontend to store in memory
  res.cookie('csrf_token', token, { httpOnly: true, sameSite: 'strict', secure: IS_PROD, signed: true });
  res.json({ csrfToken: token });
});

app.use('/api/contact', contactRoutes);
app.use('/api/programs', programRoutes);
app.use('/api/news', newsRoutes);

app.get('/api/health', (_req, res) => res.json({ status: 'ok', campus: 'UGCSL' }));

app.use((_req, res) => res.status(404).json({ message: 'Route not found' }));

mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    const msg = err instanceof Error ? err.message.replace(/[\r\n]/g, ' ') : 'Unknown error';
    console.error('MongoDB connection error:', msg);
    process.exit(1);
  });
