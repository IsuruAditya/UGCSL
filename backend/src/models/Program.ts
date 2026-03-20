import mongoose, { Schema, Document } from 'mongoose';

export interface IProgram extends Document {
  title: string;
  faculty: string;
  degree: string;
  duration: string;
  description: string;
  icon: string;
  featured: boolean;
}

const ProgramSchema = new Schema<IProgram>({
  title: { type: String, required: true },
  faculty: { type: String, required: true },
  degree: { type: String, required: true },
  duration: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, default: '🎓' },
  featured: { type: Boolean, default: false },
});

export default mongoose.model<IProgram>('Program', ProgramSchema);
