export interface Program {
  _id: string;
  title: string;
  title_si?: string;
  slug: string;
  faculty: string;
  degree: string;
  duration: string;
  description: string;
  description_si?: string;
  icon: string;
  featured: boolean;
  overview?: string;
  overview_si?: string;
  modules?: string[];
  modules_si?: string[];
  outcomes?: string[];
  outcomes_si?: string[];
  careers?: string[];
  careers_si?: string[];
  requirements?: string[];
  requirements_si?: string[];
  fees?: string;
  fees_si?: string;
  intake?: string;
  intake_si?: string;
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
