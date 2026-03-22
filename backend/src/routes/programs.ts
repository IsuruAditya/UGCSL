import { Router, Request, Response } from 'express';
import Program from '../models/Program';

const router = Router();

const seedPrograms = [
  {
    title: 'Psychology',
    title_si: 'මනෝවිද්‍යාව',
    faculty: 'Faculty of Social Sciences',
    degree: 'Diploma',
    duration: '1 Year',
    description: 'Explore human behaviour, mental health, and cognitive processes through evidence-based study and practical application.',
    description_si: 'සාක්ෂි පදනම් කරගත් අධ්‍යයනය හා ප්‍රායෝගික යෙදුම් හරහා මිනිස් හැසිරීම්, මානසික සෞඛ්‍ය සහ සංජානන ක්‍රියාවලීන් ගවේෂණය කරන්න.',
    icon: '🧠',
    featured: true,
  },
  {
    title: 'Human Rights Studies',
    title_si: 'මානව හිමිකම් අධ්‍යයනය',
    faculty: 'Faculty of Social Sciences',
    degree: 'Diploma',
    duration: '1 Year',
    description: 'Study international human rights law, advocacy, and social justice with a focus on global and regional contexts.',
    description_si: 'ගෝලීය හා කලාපීය සන්දර්භයන් කෙරෙහි අවධානය යොමු කරමින් ජාත්‍යන්තර මානව හිමිකම් නීතිය, උපදේශනය සහ සමාජ සාධාරණත්වය අධ්‍යයනය කරන්න.',
    icon: '🕊️',
    featured: true,
  },
  {
    title: 'Business and Management',
    title_si: 'ව්‍යාපාර හා කළමනාකරණය',
    faculty: 'Faculty of Business',
    degree: 'Diploma',
    duration: '1 Year',
    description: 'Build expertise in organisational management, entrepreneurship, and strategic decision-making for a competitive economy.',
    description_si: 'තරඟකාරී ආර්ථිකයක් සඳහා ආයතනික කළමනාකරණය, ව්‍යවසායකත්වය සහ උපායමාර්ගික තීරණ ගැනීමේ ප්‍රවීණතාව ගොඩනගා ගන්න.',
    icon: '📈',
    featured: true,
  },
  {
    title: 'Social Development',
    title_si: 'සමාජ සංවර්ධනය',
    faculty: 'Faculty of Social Sciences',
    degree: 'Diploma',
    duration: '1 Year',
    description: 'Examine community development, policy, and sustainable social change to address real-world challenges.',
    description_si: 'සැබෑ ලෝකයේ අභියෝගවලට මුහුණ දීම සඳහා ප්‍රජා සංවර්ධනය, ප්‍රතිපත්ති සහ තිරසාර සමාජ වෙනස්කම් පරීක්ෂා කරන්න.',
    icon: '🌍',
    featured: true,
  },
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
