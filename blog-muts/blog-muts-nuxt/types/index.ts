export interface Profile {
  name: string;
  title: string;
  bio: string;
  roles: string[];
  contact: {
    phone: string;
    email: string;
    location: string;
  };
  socials: {
    twitter: string;
    linkedin: string;
    facebook: string;
  };
  cvUrl: string;
  photo?: string;
}

export interface PortfolioItem {
  title: string;
  category: string[];
  type: 'audio' | 'image' | 'video';
  thumbnail: string;
  src?: string;
  fullSrc?: string;
}

export interface TimelineItem {
  year?: string;
  period?: string;
  institution?: string;
  company?: string;
  role?: string;
  degree?: string;
  description: string;
}

export interface Skill {
  name: string;
  percent: number;
}

export interface Testimonial {
  author: string;
  company: string;
  quote: string;
  image: string;
}

export interface Client {
  name: string;
  logo: string;
  url: string;
}

export interface Certificate {
  title: string;
  id: string;
  date: string;
  issuer: string;
  logo: string;
}
