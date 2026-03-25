import 'dotenv/config';
import mongoose from 'mongoose';
import Program from './models/Program';
import News from './models/News';

const seedPrograms = [
  {
    title: 'Psychology',
    title_si: 'මනෝවිද්‍යාව',
    slug: 'psychology',
    faculty: 'Faculty of Social Sciences',
    degree: 'Diploma',
    duration: '1 Year',
    description: 'Explore human behaviour, mental health, and cognitive processes through evidence-based study and practical application.',
    description_si: 'සාක්ෂි පදනම් කරගත් අධ්‍යයනය හා ප්‍රායෝගික යෙදුම් හරහා මිනිස් හැසිරීම්, මානසික සෞඛ්‍යය සහ සංජානන ක්‍රියාවලීන් ගවේෂණය කරන්න.',
    icon: '🧠',
    featured: true,
    overview: 'The Diploma in Psychology at UGCSL provides a comprehensive introduction to the science of human behaviour and mental processes.',
    overview_si: 'UGCSL හි මනෝවිද්‍යා ඩිප්ලෝමාව මගින් මිනිස් හැසිරීම් සහ මානසික ක්‍රියාවලීන් පිළිබඳ විද්‍යාව පිළිබඳ සවිස්තරාත්මක හැඳින්වීමක් සපයයි.',
    modules: ['Introduction to Psychology', 'Developmental Psychology', 'Social Psychology', 'Counselling Skills & Ethics'],
    modules_si: ['මනෝවිද්‍යාව පිළිබඳ හැඳින්වීම', 'වර්ධන මනෝවිද්‍යාව', 'සමාජ මනෝවිද්‍යාව', 'උපදේශන නිපුණතා සහ ආචාර ධර්ම'],
    outcomes: ['Understand core psychological theories', 'Apply basic counselling techniques'],
    outcomes_si: ['මූලික මනෝවිද්‍යාත්මක න්‍යායන් තේරුම් ගැනීම', 'මූලික උපදේශන තාක්ෂණික ක්‍රම භාවිත කිරීම'],
    careers: ['Counselling Support Worker', 'Human Resources Assistant'],
    careers_si: ['උපදේශන සහායක සේවක', 'මානව සම්පත් සහායක'],
    requirements: ['O/L or equivalent qualification', 'English proficiency (basic)'],
    requirements_si: ['අපොස සාමාන්‍ය පෙළ හෝ ඊට සමාන සුදුසුකම්', 'ඉංග්‍රීසි භාෂා ප්‍රවීණතාව (මූලික)'],
    fees: 'LKR 45,000 per semester',
    fees_si: 'සෙමෙස්ටරයකට රු. 45,000 කි',
    intake: 'Semester 1 – 2026',
    intake_si: '1 වන සෙමෙස්ටරය – 2026',
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
    overview: 'The Diploma in Human Rights Studies offers a rigorous grounding in international human rights law and advocacy strategies.',
    overview_si: 'මානව හිමිකම් අධ්‍යයනය පිළිබඳ ඩිප්ලෝමාව ජාත්‍යන්තර මානව හිමිකම් නීතිය සහ උපදේශන උපාය මාර්ග පිළිබඳ දැඩි පදනමක් ලබා දෙයි.',
    modules: ['Foundations of Human Rights', 'International Human Rights Law', 'Gender, Equality & Social Justice'],
    modules_si: ['මානව හිමිකම් පදනම', 'ජාත්‍යන්තර මානව හිමිකම් නීතිය', 'ස්ත්‍රී පුරුෂ භාවය, සමානාත්මතාවය සහ සමාජ සාධාරණත්වය'],
    outcomes: ['Interpret key international human rights instruments', 'Design advocacy campaigns'],
    outcomes_si: ['ප්‍රධාන ජාත්‍යන්තර මානව හිමිකම් ප්‍රඥප්ති අර්ථකථනය කිරීම', 'උපදේශන ව්‍යාපාර සැලසුම් කිරීම'],
    careers: ['Human Rights Officer (NGO)', 'Community Advocacy Worker'],
    careers_si: ['මානව හිමිකම් නිලධාරී (රාජ්‍ය නොවන සංවිධාන)', 'ප්‍රජා උපදේශන සේවක'],
    requirements: ['O/L or equivalent qualification'],
    requirements_si: ['අපොස සාමාන්‍ය පෙළ හෝ ඊට සමාන සුදුසුකම්'],
    fees: 'LKR 45,000 per semester',
    fees_si: 'සෙමෙස්ටරයකට රු. 45,000 කි',
    intake: 'Semester 1 – 2026',
    intake_si: '1 වන සෙමෙස්ටරය – 2026',
  },
  {
    title: 'Business and Management',
    title_si: 'ව්‍යාපාර හා කළමනාකරණය',
    slug: 'business-and-management',
    faculty: 'Faculty of Business',
    degree: 'Diploma',
    duration: '1 Year',
    description: 'Build expertise in organisational management, entrepreneurship, and strategic decision-making.',
    description_si: 'ආයතනික කළමනාකරණය, ව්‍යවසායකත්වය සහ උපායමාර්ගික තීරණ ගැනීමේ ප්‍රවීණතාව ගොඩනගා ගන්න.',
    icon: '📈',
    featured: true,
    overview: 'This program prepares students for the dynamic world of modern business covering core management principles.',
    overview_si: 'මෙම වැඩසටහන මූලික කළමනාකරණ මූලධර්ම ආවරණය කරමින් නවීන ව්‍යාපාරික ලෝකය සඳහා සිසුන් සූදානම් කරයි.',
    modules: ['Principles of Management', 'Introduction to Marketing', 'Entrepreneurship & Innovation'],
    modules_si: ['කළමනාකරණ මූලධර්ම', 'අලෙවිකරණ හැඳින්වීම', 'ව්‍යවසායකත්වය සහ නවෝත්පාදනය'],
    outcomes: ['Apply core management theories', 'Develop business plans'],
    outcomes_si: ['මූලික කළමනාකරණ න්‍යායන් ප්‍රායෝගිකව යෙදීම', 'ව්‍යාපාර සැලසුම් සකස් කිරීම'],
    careers: ['Marketing Coordinator', 'Entrepreneur'],
    careers_si: ['අලෙවිකරණ සම්බන්ධීකාරක', 'ව්‍යවසායකයා'],
    requirements: ['O/L or equivalent qualification'],
    requirements_si: ['අපොස සාමාන්‍ය පෙළ හෝ ඊට සමාන සුදුසුකම්'],
    fees: 'LKR 45,000 per semester',
    fees_si: 'සෙමෙස්ටරයකට රු. 45,000 කි',
    intake: 'Semester 1 – 2026',
    intake_si: '1 වන සෙමෙස්ටරය – 2026',
  },
  {
    title: 'Social Development',
    title_si: 'සමාජ සංවර්ධනය',
    slug: 'social-development',
    faculty: 'Faculty of Social Sciences',
    degree: 'Diploma',
    duration: '1 Year',
    description: 'Examine community development, policy, and sustainable social change.',
    description_si: 'ප්‍රජා සංවර්ධනය, ප්‍රතිපත්ති සහ තිරසාර සමාජ වෙනස්කම් පරීක්ෂා කරන්න.',
    icon: '🌍',
    featured: true,
    overview: 'Equips students with the tools to drive meaningful change in communities and organisations.',
    overview_si: 'ප්‍රජාවන් සහ ආයතන තුළ අර්ථවත් වෙනසක් ඇති කිරීමට අවශ්‍ය මෙවලම් සිසුන්ට ලබා දෙයි.',
    modules: ['Introduction to Social Development', 'Community Engagement', 'Project Planning & Management'],
    modules_si: ['සමාජ සංවර්ධනය පිළිබඳ හැඳින්වීම', 'ප්‍රජා සහභාගීත්වය', 'ව්‍යාපෘති සැලසුම් කිරීම සහ කළමනාකරණය'],
    outcomes: ['Design and manage community projects', 'Analyse social policies'],
    outcomes_si: ['ප්‍රජා ව්‍යාපෘති සැලසුම් කිරීම සහ කළමනාකරණය', 'සමාජ ප්‍රතිපත්ති විශ්ලේෂණය කිරීම'],
    careers: ['Community Development Officer', 'NGO Programme Coordinator'],
    careers_si: ['ප්‍රජා සංවර්ධන නිලධාරී', 'රාජ්‍ය නොවන සංවිධාන වැඩසටහන් සම්බන්ධීකාරක'],
    requirements: ['O/L or equivalent qualification'],
    requirements_si: ['අපොස සාමාන්‍ය පෙළ හෝ ඊට සමාන සුදුසුකම්'],
    fees: 'LKR 45,000 per semester',
    fees_si: 'සෙමෙස්ටරයකට රු. 45,000 කි',
    intake: 'Semester 1 – 2026',
    intake_si: '1 වන සෙමෙස්ටරය – 2026',
  },
];

const seedNews = [
  { 
    title: 'UGCSL Opens Admissions for Semester 1 – 2026', 
    category: 'Admissions', 
    excerpt: 'United Global Campus of Sri Lanka is now accepting applications for Semester 1, 2026.', 
    date: new Date('2026-03-01') 
  },
  { 
    title: 'UGCSL Officially Established as a Higher Education Institution', 
    category: 'Announcement', 
    excerpt: 'United Global Campus (Pvt) Ltd. has been officially established in Sri Lanka.', 
    date: new Date('2026-01-15') 
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log('Connected to MongoDB');

    await Program.deleteMany({});
    await Program.insertMany(seedPrograms);
    console.log(`Seeded ${seedPrograms.length} programs`);

    await News.deleteMany({});
    await News.insertMany(seedNews);
    console.log(`Seeded ${seedNews.length} news items`);

    await mongoose.disconnect();
    console.log('Database seeding completed successfully');
  } catch (err) {
    console.error('Error seeding database:', err);
    process.exit(1);
  }
}

seed();