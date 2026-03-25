import mongoose, { Schema, Document } from 'mongoose';

export interface IProgram extends Document {
  title: string;
  title_si: string;
  slug: string;
  faculty: string;
  degree: string;
  duration: string;
  description: string;
  description_si: string;
  icon: string;
  featured: boolean;
  overview: string;
  modules: string[];
  outcomes: string[];
  careers: string[];
  requirements: string[];
  fees: string;
  intake: string;
}

const ProgramSchema = new Schema<IProgram>({
  title: { type: String, required: true },
  title_si: { type: String, default: '' },
  slug: { type: String, required: true, unique: true },
  faculty: { type: String, required: true },
  degree: { type: String, required: true },
  duration: { type: String, required: true },
  description: { type: String, required: true },
  description_si: { type: String, default: '' },
  icon: { type: String, default: '🎓' },
  featured: { type: Boolean, default: false },
  overview: { type: String, default: '' },
  modules: [{ type: String }],
  outcomes: [{ type: String }],
  careers: [{ type: String }],
  requirements: [{ type: String }],
  fees: { type: String, default: '' },
  intake: { type: String, default: '' },
});

export default mongoose.model<IProgram>('Program', ProgramSchema);
