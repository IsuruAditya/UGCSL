export interface Program {
  _id: string;
  title: string;
  title_si?: string;
  faculty: string;
  degree: string;
  duration: string;
  description: string;
  description_si?: string;
  icon: string;
  featured: boolean;
}

export interface NewsItem {
  _id: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pages: number;
}
