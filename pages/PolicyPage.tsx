
import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { COMPANY_DETAILS } from '../constants';
import { PolicyType } from '../types';

export const PolicyPage: React.FC = () => {
  const { type } = useParams<{ type: PolicyType }>();

  useEffect(() => {
    if (type) {
      document.title = `${type.charAt(0).toUpperCase() + type.slice(1)} Policy | TADENTER`;
    }
  }, [type]);

  const getPolicyContent = (type: PolicyType | undefined) => {
    switch (type) {
      case 'privacy':
        return {
          title: 'Privacy Policy',
          content: `
            <p>Last updated: October 2023</p>
            <p>At ${COMPANY_DETAILS.name}, accessible from ${COMPANY_DETAILS.website}, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by TADENTER and how we use it.</p>
            <h3>1. Data Collection</h3>
            <p>We collect information that you provide to us directly, such as when you subscribe to our newsletter, contact us via our form, or leave a comment. This may include your name, email address, and any message content.</p>
            <h3>2. Log Files</h3>
            <p>TADENTER follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.</p>
            <h3>3. Cookies and Web Beacons</h3>
            <p>Like any other website, TADENTER uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>
            <h3>4. Your Data Protection Rights (GDPR/CCPA)</h3>
            <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
            <ul>
              <li><strong>The right to access:</strong> You have the right to request copies of your personal data.</li>
              <li><strong>The right to rectification:</strong> You have the right to request that we correct any information you believe is inaccurate.</li>
              <li><strong>The right to erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
              <li><strong>The right to restrict processing:</strong> You have the right to request that we restrict the processing of your personal data.</li>
            </ul>
            <p>If you would like to exercise any of these rights, please contact us at ${COMPANY_DETAILS.email}.</p>
          `
        };
      case 'affiliate':
        return {
          title: 'Affiliate Disclosure',
          content: `
            <p>In compliance with the FTC guidelines, please assume the following about links and posts on this site:</p>
            <h3>Transparent Partnerships</h3>
            <p>Many of the links on ${COMPANY_DETAILS.website} are affiliate links. This means that if you click on the link and purchase the item, TADENTER will receive an affiliate commission. This comes at no extra cost to you.</p>
            <h3>Unbiased Reviews</h3>
            <p>Regardless of whether we receive a commission, our reviews and recommendations are based on objective testing and honest opinions. We prioritize our readers' security over profit.</p>
            <h3>Why Affiliate Links?</h3>
            <p>Maintaining a dedicated security lab and a team of expert researchers requires resources. Affiliate commissions help us provide high-quality, free content to the public without resorting to intrusive banner ads.</p>
          `
        };
      case 'terms':
        return {
          title: 'Terms of Use',
          content: `
            <p>Welcome to TADENTER. By accessing this website, you agree to be bound by these Terms of Use.</p>
            <h3>1. Content Disclaimer</h3>
            <p>The information provided on this website is for general informational purposes only. While we strive for accuracy, TADENTER makes no representations or warranties of any kind regarding the completeness or reliability of the information.</p>
            <h3>2. Limitation of Liability</h3>
            <p>TADENTER shall not be held liable for any data loss, system damage, or security breaches resulting from the use or installation of third-party software recommended on this site.</p>
            <h3>3. User Conduct</h3>
            <p>Users are prohibited from using this site to transmit malware, scrape data, or infringe upon the intellectual property rights of ${COMPANY_DETAILS.name}.</p>
          `
        };
      case 'advertiser':
        return {
          title: 'Advertiser Disclosure',
          content: `
            <p>This website may display advertisements from third-party networks. These ads are served based on user interests and browsing history.</p>
            <h3>Third-Party Ad Servers</h3>
            <p>Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on TADENTER. They automatically receive your IP address when this occurs.</p>
            <p>Note that TADENTER has no access to or control over these cookies that are used by third-party advertisers.</p>
          `
        };
      case 'cookies':
        return {
          title: 'Cookie Policy',
          content: `
            <p>This site uses cookies to enhance your experience. By continuing to browse, you agree to our use of cookies.</p>
            <h3>What are Cookies?</h3>
            <p>Cookies are small text files stored on your computer. They help websites remember you and your preferences.</p>
            <h3>Managing Cookies</h3>
            <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.</p>
          `
        };
      case 'gdpr':
        return {
          title: 'GDPR/CCPA Compliance Notes',
          content: `
            <p>TADENTER is committed to the highest standards of data protection. We comply with both the European General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).</p>
            <h3>Data Subject Access Requests (DSAR)</h3>
            <p>If you wish to submit a request for data access or deletion, please email <strong>${COMPANY_DETAILS.email}</strong> with the subject line "Data Request". Our compliance officer will process your request within 30 days.</p>
          `
        };
      default:
        return null;
    }
  };

  const policy = getPolicyContent(type);

  if (!policy) return <Navigate to="/" />;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-extrabold mb-8 text-slate-900 leading-tight">{policy.title}</h1>
      <div 
        className="prose prose-slate prose-lg max-w-none 
          prose-headings:text-slate-900 prose-headings:font-bold prose-headings:mt-12 prose-headings:mb-4
          prose-p:text-slate-600 prose-p:mb-6 prose-li:text-slate-600 prose-ul:mb-6"
        dangerouslySetInnerHTML={{ __html: policy.content }}
      />
      <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between text-sm text-slate-500 gap-4">
        <div>
          <p className="font-bold text-slate-700">TADENTER Legal Dept.</p>
          <p>{COMPANY_DETAILS.address}</p>
        </div>
        <div className="text-right sm:text-right">
          <p>Last Updated: October 2023</p>
          <p>Contact: {COMPANY_DETAILS.email}</p>
        </div>
      </div>
    </div>
  );
};
