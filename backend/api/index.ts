import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import cookieParser from 'cookie-parser';
import { randomBytes } from 'crypto';
import dotenv from 'dotenv';
import contactRoutes from '../src/routes/contact';
import programRoutes from '../src/routes/programs';
import newsRoutes from '../src/routes/news';

dotenv.config();

const app = express();
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

app.get('/api/csrf-token', (_req: Request, res: Response) => {
  const token = randomBytes(32).toString('hex');
  res.cookie('csrf_token', token, { httpOnly: true, sameSite: 'strict', secure: IS_PROD, signed: true });
  res.json({ csrfToken: token });
});

app.use('/api/contact', contactRoutes);
app.use('/api/programs', programRoutes);
app.use('/api/news', newsRoutes);

app.get('/api/health', (_req, res) => res.json({ status: 'ok', campus: 'UGCSL' }));

app.use((_req, res) => res.status(404).json({ message: 'Route not found' }));

let isConnected = false;
async function connectDb() {
  if (isConnected) return;
  await mongoose.connect(process.env.MONGODB_URI as string);
  isConnected = true;
}

export default async function handler(req: Request, res: Response) {
  await connectDb();
  return app(req, res);
}
