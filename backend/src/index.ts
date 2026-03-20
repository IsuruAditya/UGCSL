import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import app from './app';

const PORT = process.env.PORT || 5000;

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
