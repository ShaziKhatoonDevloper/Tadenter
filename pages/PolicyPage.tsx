
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { SITE_INFO } from '../constants';

const POLICY_CONTENT: Record<string, { title: string; content: string }> = {
  privacy: {
    title: 'Privacy Policy',
    content: `
      <h2>1. Information We Collect</h2>
      <p>TAD Reviews collects basic analytics data and information provided through our contact forms. This may include your name, email address, and IP address. We use this data to improve our services and respond to inquiries.</p>
      <h2>2. Use of Data</h2>
      <p>Your data is used solely for the purpose of maintaining the website functionality and providing security recommendations. We do not sell your personal data to third parties.</p>
      <h2>3. Third-Party Services</h2>
      <p>We use third-party analytics (like Google Analytics) and advertising services. These partners may use cookies to track your behavior across websites.</p>
    `
  },
  terms: {
    title: 'Terms of Use',
    content: `
      <h2>1. Acceptance of Terms</h2>
      <p>By accessing this website, you agree to be bound by these terms of use. If you do not agree, please exit the site immediately.</p>
      <h2>2. Disclaimer of Liability</h2>
      <p>The information provided on TAD Reviews is for informational purposes only. While we strive for accuracy, we cannot guarantee that the software recommended will prevent all types of cyberattacks.</p>
      <h2>3. User Responsibilities</h2>
      <p>Users are responsible for verifying pricing and terms on the official websites of the software providers.</p>
    `
  },
  affiliate: {
    title: 'Affiliate Disclosure',
    content: `
      <p>TAD Reviews is a participant in several affiliate programs. This means that if you click on a link to a product and make a purchase, we may receive a small commission at no extra cost to you.</p>
      <p>Our reviews remain independent and honest. Commissions help us fund the testing and hosting of this platform.</p>
    `
  },
  cookie: {
    title: 'Cookie Policy',
    content: `
      <p>This site uses cookies to enhance your browsing experience. Cookies are small text files stored on your device that help us analyze traffic and remember your preferences.</p>
      <p>You can manage cookie settings through your browser at any time.</p>
    `
  },
  advertiser: {
    title: 'Advertiser Disclosure',
    content: `
      <p>We may host advertisements from various providers. These ads are clearly marked. The presence of an ad does not imply an endorsement by TAD Reviews.</p>
    `
  },
  gdpr: {
    title: 'GDPR/CCPA Compliance',
    content: `
      <p>Under the GDPR and CCPA, you have the right to access, rectify, or delete your personal data. If you wish to exercise these rights, please contact us at ${SITE_INFO.email}.</p>
    `
  }
};

const PolicyPage: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const policy = type ? POLICY_CONTENT[type] : null;

  if (!policy) return <Navigate to="/" />;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">{policy.title}</h1>
      <div 
        className="prose prose-blue max-w-none prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed"
        dangerouslySetInnerHTML={{ __html: policy.content }}
      />
      <div className="mt-12 pt-8 border-t border-slate-200">
        <p className="text-sm text-slate-500">Last updated: May 20, 2024</p>
        <p className="text-sm text-slate-500 mt-2">© {new Date().getFullYear()} {SITE_INFO.companyName}</p>
      </div>
    </div>
  );
};

export default PolicyPage;
