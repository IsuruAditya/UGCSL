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
  { title: 'UGCSL Ranked Among Top 10 Universities in South Asia', category: 'Achievement', excerpt: 'United Global Campus of Sri Lanka has been recognized for academic excellence and research output in the 2025 QS World University Rankings.', date: new Date('2025-06-01') },
  { title: 'New Research Centre for Sustainable Technology Inaugurated', category: 'Research', excerpt: 'The state-of-the-art Sustainable Technology Research Centre opens its doors, fostering innovation in renewable energy and green computing.', date: new Date('2025-05-20') },
  { title: 'International Student Exchange Program Expanded to 30 Countries', category: 'Global', excerpt: 'UGCSL strengthens global partnerships, offering students opportunities to study at partner universities across Europe, Asia, and the Americas.', date: new Date('2025-05-10') },
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
