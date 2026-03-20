import { Router, Request, Response } from 'express';
import News from '../models/News';

const router = Router();

const seedNews = [
  { title: 'UGCSL Ranked Among Top 10 Universities in South Asia', category: 'Achievement', excerpt: 'United Global Campus of Sri Lanka has been recognized for academic excellence and research output in the 2025 QS World University Rankings.', date: new Date('2025-06-01') },
  { title: 'New Research Centre for Sustainable Technology Inaugurated', category: 'Research', excerpt: 'The state-of-the-art Sustainable Technology Research Centre opens its doors, fostering innovation in renewable energy and green computing.', date: new Date('2025-05-20') },
  { title: 'International Student Exchange Program Expanded to 30 Countries', category: 'Global', excerpt: 'UGCSL strengthens global partnerships, offering students opportunities to study at partner universities across Europe, Asia, and the Americas.', date: new Date('2025-05-10') },
];

router.get('/', async (_req: Request, res: Response) => {
  try {
    let news = await News.find().sort({ date: -1 });
    if (news.length === 0) {
      news = await News.insertMany(seedNews) as any;
    }
    res.json(news);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
