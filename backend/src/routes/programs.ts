import { Router, Request, Response } from 'express';
import Program from '../models/Program';

const router = Router();

const seedPrograms = [
  {
    title: 'Psychology',
    title_si: 'මනෝවිද්‍යාව',
    slug: 'psychology',
    faculty: 'Faculty of Social Sciences',
    degree: 'Diploma',
    duration: '1 Year',
    description: 'Explore human behaviour, mental health, and cognitive processes through evidence-based study and practical application.',
    description_si: 'සාක්ෂි පදනම් කරගත් අධ්‍යයනය හා ප්‍රායෝගික යෙදුම් හරහා මිනිස් හැසිරීම්, මානසික සෞඛ්‍ය සහ සංජානන ක්‍රියාවලීන් ගවේෂණය කරන්න.',
    icon: '🧠',
    featured: true,
    overview: 'The Diploma in Psychology at UGCSL provides a comprehensive introduction to the science of human behaviour and mental processes. Delivered entirely online, this program equips students with foundational knowledge in psychological theory, research methods, and applied practice — preparing them for careers in counselling, social work, education, and human resources.',
    modules: [
      'Introduction to Psychology',
      'Developmental Psychology',
      'Social Psychology',
      'Abnormal Psychology & Mental Health',
      'Cognitive Psychology',
      'Research Methods in Psychology',
      'Counselling Skills & Ethics',
      'Applied Psychology in the Workplace',
    ],
    outcomes: [
      'Understand core psychological theories and their real-world applications',
      'Analyse human behaviour across developmental stages',
      'Apply basic counselling and communication techniques',
      'Conduct and interpret psychological research',
      'Identify and respond to common mental health challenges',
      'Demonstrate ethical practice in psychological contexts',
    ],
    careers: [
      'Counselling Support Worker',
      'Human Resources Assistant',
      'Community Outreach Officer',
      'Mental Health Support Worker',
      'Social Services Assistant',
      'Education Support Specialist',
    ],
    requirements: [
      'O/L or equivalent qualification',
      'Minimum credits in relevant subjects',
      'English proficiency (basic)',
      'Completed application form',
      'Copy of NIC or passport',
    ],
    fees: 'LKR 45,000 per semester (2 semesters). Scholarship opportunities available.',
    intake: 'Semester 1 – 2026 (Applications open)',
  },
  {
    title: 'Human Rights Studies',
    title_si: 'මානව හිමිකම් අධ්‍යයනය',
    slug: 'human-rights-studies',
    faculty: 'Faculty of Social Sciences',
    degree: 'Diploma',
    duration: '1 Year',
    description: 'Study international human rights law, advocacy, and social justice with a focus on global and regional contexts.',
    description_si: 'ගෝලීය හා කලාපීය සන්දර්භයන් කෙරෙහි අවධානය යොමු කරමින් ජාත්‍යන්තර මානව හිමිකම් නීතිය, උපදේශනය සහ සමාජ සාධාරණත්වය අධ්‍යයනය කරන්න.',
    icon: '🕊️',
    featured: true,
    overview: 'The Diploma in Human Rights Studies offers a rigorous grounding in international human rights law, humanitarian principles, and advocacy strategies. Students examine global and regional human rights frameworks, explore case studies from South Asia, and develop the skills to work in NGOs, legal aid, policy, and civil society organisations.',
    modules: [
      'Foundations of Human Rights',
      'International Human Rights Law',
      'United Nations Systems & Mechanisms',
      'Human Rights in South Asia',
      'Gender, Equality & Social Justice',
      'Refugee Law & Humanitarian Action',
      'Advocacy, Campaigning & Communication',
      'Research Methods for Human Rights',
    ],
    outcomes: [
      'Explain the historical and philosophical foundations of human rights',
      'Interpret key international human rights instruments and treaties',
      'Analyse human rights situations using legal and ethical frameworks',
      'Design and evaluate human rights advocacy campaigns',
      'Apply gender and intersectionality lenses to rights issues',
      'Produce research reports on human rights topics',
    ],
    careers: [
      'Human Rights Officer (NGO)',
      'Legal Aid Assistant',
      'Policy Research Assistant',
      'Community Advocacy Worker',
      'Humanitarian Aid Coordinator',
      'Journalist / Human Rights Reporter',
    ],
    requirements: [
      'O/L or equivalent qualification',
      'Minimum credits in relevant subjects',
      'English proficiency (basic)',
      'Completed application form',
      'Copy of NIC or passport',
    ],
    fees: 'LKR 45,000 per semester (2 semesters). Scholarship opportunities available.',
    intake: 'Semester 1 – 2026 (Applications open)',
  },
  {
    title: 'Business and Management',
    title_si: 'ව්‍යාපාර හා කළමනාකරණය',
    slug: 'business-and-management',
    faculty: 'Faculty of Business',
    degree: 'Diploma',
    duration: '1 Year',
    description: 'Build expertise in organisational management, entrepreneurship, and strategic decision-making for a competitive economy.',
    description_si: 'තරඟකාරී ආර්ථිකයක් සඳහා ආයතනික කළමනාකරණය, ව්‍යවසායකත්වය සහ උපායමාර්ගික තීරණ ගැනීමේ ප්‍රවීණතාව ගොඩනගා ගන්න.',
    icon: '📈',
    featured: true,
    overview: 'The Diploma in Business and Management at UGCSL prepares students for the dynamic world of modern business. Covering core management principles, entrepreneurship, finance, and marketing, this fully online program is designed for aspiring entrepreneurs, working professionals, and recent school leavers seeking a strong business foundation.',
    modules: [
      'Principles of Management',
      'Business Communication',
      'Introduction to Marketing',
      'Financial Accounting Fundamentals',
      'Entrepreneurship & Innovation',
      'Organisational Behaviour',
      'Business Law & Ethics',
      'Strategic Management',
    ],
    outcomes: [
      'Apply core management theories to real business scenarios',
      'Develop and evaluate basic business plans',
      'Understand financial statements and business performance metrics',
      'Design marketing strategies for products and services',
      'Demonstrate effective business communication skills',
      'Analyse ethical and legal dimensions of business decisions',
    ],
    careers: [
      'Business Development Assistant',
      'Marketing Coordinator',
      'Operations Supervisor',
      'Entrepreneur / Small Business Owner',
      'Administrative Manager',
      'Sales & Customer Relations Officer',
    ],
    requirements: [
      'O/L or equivalent qualification',
      'Minimum credits in relevant subjects',
      'English proficiency (basic)',
      'Completed application form',
      'Copy of NIC or passport',
    ],
    fees: 'LKR 45,000 per semester (2 semesters). Scholarship opportunities available.',
    intake: 'Semester 1 – 2026 (Applications open)',
  },
  {
    title: 'Social Development',
    title_si: 'සමාජ සංවර්ධනය',
    slug: 'social-development',
    faculty: 'Faculty of Social Sciences',
    degree: 'Diploma',
    duration: '1 Year',
    description: 'Examine community development, policy, and sustainable social change to address real-world challenges.',
    description_si: 'සැබෑ ලෝකයේ අභියෝගවලට මුහුණ දීම සඳහා ප්‍රජා සංවර්ධනය, ප්‍රතිපත්ති සහ තිරසාර සමාජ වෙනස්කම් පරීක්ෂා කරන්න.',
    icon: '🌍',
    featured: true,
    overview: 'The Diploma in Social Development equips students with the knowledge and tools to drive meaningful change in communities and organisations. Covering social policy, community engagement, development theory, and project management, this program is ideal for those seeking careers in NGOs, government, international development, and civil society.',
    modules: [
      'Introduction to Social Development',
      'Community Engagement & Participation',
      'Social Policy Analysis',
      'Development Theory & Practice',
      'Project Planning & Management',
      'Gender & Development',
      'Monitoring, Evaluation & Impact',
      'Research Methods for Social Development',
    ],
    outcomes: [
      'Understand key theories and models of social and community development',
      'Design and manage community development projects',
      'Analyse social policies and their impact on vulnerable populations',
      'Apply participatory approaches to community engagement',
      'Evaluate development programs using monitoring and evaluation frameworks',
      'Communicate development findings to diverse stakeholders',
    ],
    careers: [
      'Community Development Officer',
      'NGO Programme Coordinator',
      'Social Policy Analyst',
      'Development Project Manager',
      'Government Social Services Officer',
      'International Development Worker',
    ],
    requirements: [
      'O/L or equivalent qualification',
      'Minimum credits in relevant subjects',
      'English proficiency (basic)',
      'Completed application form',
      'Copy of NIC or passport',
    ],
    fees: 'LKR 45,000 per semester (2 semesters). Scholarship opportunities available.',
    intake: 'Semester 1 – 2026 (Applications open)',
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
