import mongoose, { Schema, Document } from 'mongoose';

export interface IProgram extends Document {
  title: string;
  title_si: string;
  faculty: string;
  degree: string;
  duration: string;
  description: string;
  description_si: string;
  icon: string;
  featured: boolean;
}

const ProgramSchema = new Schema<IProgram>({
  title: { type: String, required: true },
  title_si: { type: String, default: '' },
  faculty: { type: String, required: true },
  degree: { type: String, required: true },
  duration: { type: String, required: true },
  description: { type: String, required: true },
  description_si: { type: String, default: '' },
  icon: { type: String, default: '🎓' },
  featured: { type: Boolean, default: false },
});

export default mongoose.model<IProgram>('Program', ProgramSchema);
