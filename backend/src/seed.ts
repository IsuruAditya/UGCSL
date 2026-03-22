import 'dotenv/config';
import mongoose from 'mongoose';
import Program from './models/Program';
import News from './models/News';

const seedPrograms = [
  { title: 'Psychology', title_si: 'මනෝවිද්‍යාව', faculty: 'Faculty of Social Sciences', degree: 'Diploma', duration: '1 Year', description: 'Explore human behaviour, mental health, and cognitive processes through evidence-based study and practical application.', description_si: 'සාක්ෂි පදනම් කරගත් අධ්‍යනය හා ප්‍රායෝගික යෙදුම හරහා මිනිස් හැසිරීම්, මානසික සෞඛ්‍ය සහ සංජානන ක්‍රියාවලීන් ගවේෂණය කරන්න.', icon: '🧠', featured: true },
  { title: 'Human Rights Studies', title_si: 'මානව හිමිකම් අධ්‍යනය', faculty: 'Faculty of Social Sciences', degree: 'Diploma', duration: '1 Year', description: 'Study international human rights law, advocacy, and social justice with a focus on global and regional contexts.', description_si: 'ගෝලීය හා කලාපීය සන්දර්භයන් කෙරෙහි අවධානය යොමු කරමින් ජාත්‍යන්තර මානව හිමිකම් නීතිය, උපදේශනය සහ සමාජ සාධාරණත්වය අධ්‍යනය කරන්න.', icon: '🕊️', featured: true },
  { title: 'Business and Management', title_si: 'ව්‍යාපාර හා කළමනාකරණය', faculty: 'Faculty of Business', degree: 'Diploma', duration: '1 Year', description: 'Build expertise in organisational management, entrepreneurship, and strategic decision-making for a competitive economy.', description_si: 'තරඟකාරී ආර්ථිකයක් සඳහා ආයතනික කළමනාකරණය, ව්‍යවසායකත්වය සහ උපායමාර්ගික තීරණ ගැනීමේ ප්‍රවීණතාව ගොඩනගා ගන්න.', icon: '📈', featured: true },
  { title: 'Social Development', title_si: 'සමාජ සංවර්ධනය', faculty: 'Faculty of Social Sciences', degree: 'Diploma', duration: '1 Year', description: 'Examine community development, policy, and sustainable social change to address real-world challenges.', description_si: 'සැබෑ ලෝකයේ අභියෝගවලට මුහුණ දීම සඳහා ප්‍රජා සංවර්ධනය, ප්‍රතිපත්ති සහ තිරසාර සමාජ වෙනස්කම් පරීක්ෂා කරන්න.', icon: '🌍', featured: true },
];

const seedNews = [
  { title: 'UGCSL Opens Admissions for Semester 1 – 2026', category: 'Admissions', excerpt: 'United Global Campus of Sri Lanka is now accepting applications for Semester 1, 2026. Diploma programs in Psychology, Human Rights Studies, Business and Management, and Social Development are open for enrollment.', date: new Date('2026-03-01') },
  { title: 'UGCSL Officially Established as a Higher Education Institution', category: 'Announcement', excerpt: 'United Global Campus (Pvt) Ltd. has been officially established with a vision to deliver nationally and internationally recognized higher education programs in Sri Lanka.', date: new Date('2026-01-15') },
  { title: 'Diploma Programs Designed for the Modern Professional', category: 'Academic', excerpt: 'UGCSL introduces four diploma programs focused on real-world skills and global relevance — Psychology, Human Rights Studies, Business and Management, and Social Development.', date: new Date('2026-02-10') },
];

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI!);
  console.log('Connected to MongoDB Atlas');

  await Program.deleteMany({});
  await Program.insertMany(seedPrograms);
  console.log(`Seeded ${seedPrograms.length} programs`);

  await News.deleteMany({});
  await News.insertMany(seedNews);
  console.log(`Seeded ${seedNews.length} news items`);

  await mongoose.disconnect();
  console.log('Done');
}

seed().catch(err => { console.error(err); process.exit(1); });
