import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact';
import programRoutes from './routes/programs';
import newsRoutes from './routes/news';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());

app.use('/api/contact', contactRoutes);
app.use('/api/programs', programRoutes);
app.use('/api/news', newsRoutes);

app.get('/api/health', (_req, res) => res.json({ status: 'ok', campus: 'UGCSL' }));

mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error('MongoDB connection error:', err));
