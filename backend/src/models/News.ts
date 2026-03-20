import mongoose, { Schema, Document } from 'mongoose';

export interface INews extends Document {
  title: string;
  category: string;
  excerpt: string;
  date: Date;
  image?: string;
}

const NewsSchema = new Schema<INews>({
  title: { type: String, required: true },
  category: { type: String, required: true },
  excerpt: { type: String, required: true },
  date: { type: Date, default: Date.now },
  image: { type: String },
});

export default mongoose.model<INews>('News', NewsSchema);
