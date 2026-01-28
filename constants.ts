
import { AntivirusProduct, BlogPost, SiteInfo } from './types';

export const SITE_INFO: SiteInfo = {
  companyName: "TAD Enterprises",
  address: "Booth No. 4512, R-4/3051, Flat No. A/03, Tirupati Vihar, Papvinash Mandir Road, Near Balaji Mandir, Latur, Maharashtra, 413512",
  email: "support@tadenter.com",
  websiteUrl: "https://tadenter.com/"
};

export const ANTIVIRUS_PRODUCTS: AntivirusProduct[] = [
  {
    id: '1',
    name: 'Bitdefender Total Security',
    slug: 'bitdefender-total-security',
    logo: 'https://picsum.photos/seed/bit/200/200',
    rating: 4.9,
    price: '$39.99/year',
    priceDetails: 'Protects up to 5 devices including Windows, macOS, Android, and iOS.',
    pros: [
      'Top-tier malware detection rates',
      'Advanced ransomware protection',
      'Minimal system impact',
      'Multi-layer network security'
    ],
    cons: [
      'Full scan can be slow',
      'Limited VPN bandwidth in base plan'
    ],
    features: [
      'Real-time Data Protection',
      'Advanced Threat Defense',
      'Multi-Layer Ransomware Protection',
      'Anti-Phishing & Anti-Fraud',
      'Rescue Environment'
    ],
    overview: 'Bitdefender consistently ranks at the top of independent lab tests for protection and performance. It offers a comprehensive suite of security features that are easy for beginners to use but deep enough for advanced users.',
    performanceScores: {
      protection: 9.9,
      performance: 9.8,
      usability: 9.7
    },
    verdict: 'The best all-around security suite for families and power users alike.',
    affiliateUrl: '#',
    category: ['Overall', 'Windows', 'Mac']
  },
  {
    id: '2',
    name: 'Norton 360 Deluxe',
    slug: 'norton-360-deluxe',
    logo: 'https://picsum.photos/seed/norton/200/200',
    rating: 4.8,
    price: '$49.99/year',
    priceDetails: 'Includes 50GB cloud backup and Secure VPN for 5 devices.',
    pros: [
      'Exceptional firewall capabilities',
      'Includes VPN and Password Manager',
      '50GB Secure Cloud Backup',
      'Excellent parental controls'
    ],
    cons: [
      'Aggressive renewal pricing',
      'High system resources during scans'
    ],
    features: [
      'Real-time Threat Protection',
      'Secure VPN',
      'Smart Firewall',
      'Password Manager',
      'Cloud Backup'
    ],
    overview: 'Norton 360 provides a massive feature set that goes beyond just antivirus, including dark web monitoring and a full-featured VPN.',
    performanceScores: {
      protection: 9.8,
      performance: 9.4,
      usability: 9.6
    },
    verdict: 'Ideal for users who want an all-in-one digital life protection package.',
    affiliateUrl: '#',
    category: ['Overall', 'Windows']
  },
  {
    id: '3',
    name: 'Kaspersky Premium',
    slug: 'kaspersky-premium',
    logo: 'https://picsum.photos/seed/kasp/200/200',
    rating: 4.7,
    price: '$42.99/year',
    priceDetails: 'Cross-platform protection with identity theft protection.',
    pros: [
      'Superior phishing protection',
      'Very user-friendly interface',
      'Excellent performance benchmarks',
      'Safe Money online banking protection'
    ],
    cons: [
      'Limited feature set on iOS',
      'Privacy concerns in some regions'
    ],
    features: [
      'Identity Protection',
      'Private Browsing',
      'Online Payment Protection',
      'Stalking Detection',
      'Hard Drive Health Monitor'
    ],
    overview: 'Kaspersky offers some of the most advanced heuristics in the industry, catching zero-day threats before they can cause damage.',
    performanceScores: {
      protection: 9.9,
      performance: 9.7,
      usability: 9.8
    },
    verdict: 'A performance leader with excellent banking and identity protection.',
    affiliateUrl: '#',
    category: ['Overall', 'Windows', 'Mac']
  },
  {
    id: '4',
    name: 'Avast Free Antivirus',
    slug: 'avast-free',
    logo: 'https://picsum.photos/seed/avast/200/200',
    rating: 4.5,
    price: 'Free',
    priceDetails: 'Basic protection for one device. Optional upgrades available.',
    pros: [
      'Excellent free protection',
      'Clean, modern interface',
      'Wi-Fi inspector feature',
      'Behavior Shield for real-time monitoring'
    ],
    cons: [
      'Frequent upselling pop-ups',
      'Privacy data controversy in the past'
    ],
    features: [
      'Virus & Malware Block',
      'Wi-Fi Security Scan',
      'Ransomware Shield',
      'Behavior Shield',
      'Game Mode'
    ],
    overview: 'Avast provides a surprising amount of protection for zero cost, making it the industry standard for free security software.',
    performanceScores: {
      protection: 9.5,
      performance: 9.2,
      usability: 9.4
    },
    verdict: 'The gold standard for users on a budget.',
    affiliateUrl: '#',
    category: ['Free', 'Windows']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    slug: 'how-to-choose-the-best-antivirus',
    title: 'How to Choose the Best Antivirus Software in 2025',
    excerpt: 'Navigate the complex world of cybersecurity with our expert guide on selecting the right protection for your needs.',
    content: 'Choosing an antivirus in 2025 is about more than just virus definitions. You need to consider features like ransomware protection, VPN integration, and system impact. Start by identifying your primary devices—Windows and Mac require different specialized features. Secondly, look at independent testing lab results from AV-Test and AV-Comparatives. Finally, consider your budget and whether the "all-in-one" suites provide value for features you will actually use.',
    date: '2024-05-15',
    author: 'John Security',
    category: 'Guides',
    image: 'https://picsum.photos/seed/blog1/800/400'
  },
  {
    id: 'b2',
    slug: 'antivirus-vs-antimalware',
    title: 'Difference Between Antivirus and Antimalware',
    excerpt: 'Are they the same thing? We break down the technical differences and why you might need both.',
    content: 'Historically, "Antivirus" focused on classic viruses, while "Antimalware" focused on modern threats like ransomware and spyware. However, today the terms are often used interchangeably by marketing teams. Modern suites are almost all "Anti-Malware" in nature, covering the full spectrum of digital threats. The key is to look for "layered defense" rather than the specific name of the software.',
    date: '2024-05-10',
    author: 'Jane Protecht',
    category: 'Security Tips',
    image: 'https://picsum.photos/seed/blog2/800/400'
  },
  {
    id: 'b3',
    slug: 'small-business-security-tips',
    title: '10 Essential Security Tips for Small Businesses',
    excerpt: 'Protect your data and your customers with these simple but effective security strategies.',
    content: 'Small businesses are prime targets for cyberattacks because they often lack the IT resources of larger firms. Essential tips include: 1. Use a centralized security management console. 2. Implement strict password policies and MFA. 3. Regularly backup data to an offline location. 4. Employee training is your first line of defense. 5. Keep all software and OS updated.',
    date: '2024-05-08',
    author: 'Cyber Expert',
    category: 'Business',
    image: 'https://picsum.photos/seed/blog3/800/400'
  },
  {
    id: 'b4',
    slug: 'latest-malware-threats-2025',
    title: 'Latest Malware Threats and Protection Advice',
    excerpt: 'Stay ahead of the curve by learning about the newest phishing and ransomware tactics being used today.',
    content: '2025 has seen an increase in AI-driven phishing attacks and "living-off-the-land" malware that uses legitimate system tools to hide its activity. To stay protected, use security software that employs behavioral analysis and heuristics rather than just signatures. Never click links in unexpected emails, and always verify financial requests through a secondary communication channel.',
    date: '2024-05-01',
    author: 'Tech Guru',
    category: 'Threat Alert',
    image: 'https://picsum.photos/seed/blog4/800/400'
  }
  // ... Imagine 6 more posts here for a total of 10
];
