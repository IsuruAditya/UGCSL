import { Router, Request, Response } from 'express';
import Program from '../models/Program';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const page = Math.max(1, parseInt(req.query.page as string) || 1);
    const limit = Math.min(50, parseInt(req.query.limit as string) || 20);
    const programs = await Program.find().skip((page - 1) * limit).limit(limit);
    const total = await Program.countDocuments();
    res.json({ data: programs, total, page, pages: Math.ceil(total / limit) });
  } catch {
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/:slug', async (req: Request, res: Response) => {
  try {
    const program = await Program.findOne({ slug: req.params.slug });
    if (!program) return res.status(404).json({ message: 'Program not found' });
    res.json(program);
  } catch {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
