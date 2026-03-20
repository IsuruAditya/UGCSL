import { Router, Request, Response } from 'express';
import Program from '../models/Program';

const router = Router();

const seedPrograms = [
  { title: 'Computer Science & Engineering', faculty: 'Faculty of Technology', degree: 'BSc (Hons)', duration: '4 Years', description: 'Cutting-edge curriculum covering AI, software engineering, cybersecurity, and cloud computing.', icon: '💻', featured: true },
  { title: 'Business Administration', faculty: 'Faculty of Business', degree: 'BBA (Hons)', duration: '3 Years', description: 'Develop leadership skills with a global business perspective, covering finance, marketing, and strategy.', icon: '📊', featured: true },
  { title: 'Medicine & Surgery', faculty: 'Faculty of Medicine', degree: 'MBBS', duration: '5 Years', description: 'World-class medical education with state-of-the-art simulation labs and clinical training.', icon: '🏥', featured: true },
  { title: 'Law & Legal Studies', faculty: 'Faculty of Law', degree: 'LLB (Hons)', duration: '3 Years', description: 'Comprehensive legal education with moot court practice and international law exposure.', icon: '⚖️', featured: true },
  { title: 'Architecture & Design', faculty: 'Faculty of Built Environment', degree: 'BArch', duration: '5 Years', description: 'Creative and technical training in sustainable architecture and urban design.', icon: '🏛️', featured: false },
  { title: 'Data Science & AI', faculty: 'Faculty of Technology', degree: 'BSc (Hons)', duration: '4 Years', description: 'Master machine learning, big data analytics, and artificial intelligence applications.', icon: '🤖', featured: true },
];

router.get('/', async (_req: Request, res: Response) => {
  try {
    let programs = await Program.find();
    if (programs.length === 0) {
      programs = await Program.insertMany(seedPrograms) as any;
    }
    res.json(programs);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
