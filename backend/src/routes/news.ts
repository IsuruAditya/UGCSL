import { Router, Request, Response } from 'express';
import News from '../models/News';

const router = Router();

const seedNews = [
  { title: 'UGCSL Opens Admissions for Semester 1 – 2026', category: 'Admissions', excerpt: 'United Global Campus of Sri Lanka is now accepting applications for Semester 1, 2026. Diploma programs in Psychology, Human Rights Studies, Business and Management, and Social Development are open for enrollment.', date: new Date('2026-03-01') },
  { title: 'UGCSL Officially Established as a Higher Education Institution', category: 'Announcement', excerpt: 'United Global Campus (Pvt) Ltd. has been officially established with a vision to deliver nationally and internationally recognized higher education programs in Sri Lanka.', date: new Date('2026-01-15') },
  { title: 'Diploma Programs Designed for the Modern Professional', category: 'Academic', excerpt: 'UGCSL introduces four diploma programs focused on real-world skills and global relevance — Psychology, Human Rights Studies, Business and Management, and Social Development.', date: new Date('2026-02-10') },
];

router.get('/', async (req: Request, res: Response) => {
  try {
    const page = Math.max(1, parseInt(req.query.page as string) || 1);
    const limit = Math.min(20, parseInt(req.query.limit as string) || 10);
    let news = await News.find().sort({ date: -1 }).skip((page - 1) * limit).limit(limit);
    if (news.length === 0 && page === 1) {
      news = await News.insertMany(seedNews) as any;
    }
    const total = await News.countDocuments();
    res.json({ data: news, total, page, pages: Math.ceil(total / limit) });
  } catch {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
