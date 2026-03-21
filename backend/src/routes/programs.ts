import { Router, Request, Response } from 'express';
import Program from '../models/Program';

const router = Router();

const seedPrograms = [
  { title: 'Psychology', faculty: 'Faculty of Social Sciences', degree: 'Diploma', duration: '1 Year', description: 'Explore human behaviour, mental health, and cognitive processes through evidence-based study and practical application.', icon: '🧠', featured: true },
  { title: 'Human Rights Studies', faculty: 'Faculty of Social Sciences', degree: 'Diploma', duration: '1 Year', description: 'Study international human rights law, advocacy, and social justice with a focus on global and regional contexts.', icon: '🕊️', featured: true },
  { title: 'Business and Management', faculty: 'Faculty of Business', degree: 'Diploma', duration: '1 Year', description: 'Build expertise in organisational management, entrepreneurship, and strategic decision-making for a competitive economy.', icon: '📈', featured: true },
  { title: 'Social Development', faculty: 'Faculty of Social Sciences', degree: 'Diploma', duration: '1 Year', description: 'Examine community development, policy, and sustainable social change to address real-world challenges.', icon: '🌍', featured: true },
];

router.get('/', async (req: Request, res: Response) => {
  try {
    const page = Math.max(1, parseInt(req.query.page as string) || 1);
    const limit = Math.min(50, parseInt(req.query.limit as string) || 20);
    let programs = await Program.find().skip((page - 1) * limit).limit(limit);
    if (programs.length === 0 && page === 1) {
      programs = await Program.insertMany(seedPrograms) as any;
    }
    const total = await Program.countDocuments();
    res.json({ data: programs, total, page, pages: Math.ceil(total / limit) });
  } catch {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
