import 'dotenv/config';
import mongoose from 'mongoose';
import { Request, Response } from 'express';
import app from '../src/app';

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
