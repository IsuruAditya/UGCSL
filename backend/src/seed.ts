import 'dotenv/config';
import mongoose from 'mongoose';
import Program from './models/Program';
import News from './models/News';

const seedPrograms = [
  { title: 'Psychology', faculty: 'Faculty of Social Sciences', degree: 'Diploma', duration: '1 Year', description: 'Explore human behaviour, mental health, and cognitive processes through evidence-based study and practical application.', icon: '🧠', featured: true },
  { title: 'Human Rights Studies', faculty: 'Faculty of Social Sciences', degree: 'Diploma', duration: '1 Year', description: 'Study international human rights law, advocacy, and social justice with a focus on global and regional contexts.', icon: '🕊️', featured: true },
  { title: 'Business and Management', faculty: 'Faculty of Business', degree: 'Diploma', duration: '1 Year', description: 'Build expertise in organisational management, entrepreneurship, and strategic decision-making for a competitive economy.', icon: '📈', featured: true },
  { title: 'Social Development', faculty: 'Faculty of Social Sciences', degree: 'Diploma', duration: '1 Year', description: 'Examine community development, policy, and sustainable social change to address real-world challenges.', icon: '🌍', featured: true },
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
