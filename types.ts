
export interface AntivirusProduct {
  id: string;
  name: string;
  logo: string;
  productImage: string;
  rating: number;
  overallScore: number;
  pros: string[];
  cons: string[];
  description: string;
  pricing: string;
  link: string;
  features: string[];
  performance: {
    protection: number;
    performance: number;
    usability: number;
  };
  bestFor: string;
  category: 'Premium' | 'Free' | 'Business' | 'Windows' | 'Mac';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

export type PolicyType = 'privacy' | 'terms' | 'affiliate' | 'cookies' | 'advertiser' | 'gdpr';
