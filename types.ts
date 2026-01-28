
export interface AntivirusProduct {
  id: string;
  name: string;
  slug: string;
  logo: string;
  rating: number;
  price: string;
  priceDetails: string;
  pros: string[];
  cons: string[];
  features: string[];
  overview: string;
  performanceScores: {
    protection: number;
    performance: number;
    usability: number;
  };
  verdict: string;
  affiliateUrl: string;
  category: ('Overall' | 'Free' | 'Windows' | 'Mac' | 'Business')[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

export interface SiteInfo {
  companyName: string;
  address: string;
  email: string;
  websiteUrl: string;
}
