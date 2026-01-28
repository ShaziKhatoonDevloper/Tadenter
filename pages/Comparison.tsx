
import React from 'react';
import { ANTIVIRUS_PRODUCTS } from '../constants';

const Comparison: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Antivirus Comparison 2025</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">Compare the top-performing security suites side-by-side to find the perfect match for your devices and budget.</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-1 border-slate-200">
              <th className="p-6 text-left bg-white sticky left-0 z-10 w-64 min-w-[256px]">Feature</th>
              {ANTIVIRUS_PRODUCTS.map(product => (
                <th key={product.id} className="p-6 text-center min-w-[200px]">
                  <img src={product.logo} alt={product.name} className="w-12 h-12 mx-auto rounded-lg mb-4" />
                  <div className="font-bold text-slate-900">{product.name}</div>
                  <div className="text-blue-600 font-bold text-sm">{product.rating}/5.0</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr>
              <td className="p-6 font-semibold bg-white sticky left-0 z-10">Starting Price</td>
              {ANTIVIRUS_PRODUCTS.map(p => (
                <td key={p.id} className="p-6 text-center text-sm font-medium">{p.price}</td>
              ))}
            </tr>
            <tr>
              <td className="p-6 font-semibold bg-white sticky left-0 z-10">Protection Sscore</td>
              {ANTIVIRUS_PRODUCTS.map(p => (
                <td key={p.id} className="p-6 text-center">
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                    {p.performanceScores.protection * 10}%
                  </span>
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-6 font-semibold bg-white sticky left-0 z-10">System Impact</td>
              {ANTIVIRUS_PRODUCTS.map(p => (
                <td key={p.id} className="p-6 text-center text-sm">
                   {p.performanceScores.performance >= 9.5 ? 'Very Low' : 'Low'}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-6 font-semibold bg-white sticky left-0 z-10">Ransomware Shield</td>
              {ANTIVIRUS_PRODUCTS.map(p => (
                <td key={p.id} className="p-6 text-center">
                  <svg className="w-6 h-6 mx-auto text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-6 font-semibold bg-white sticky left-0 z-10">VPN Included</td>
              {ANTIVIRUS_PRODUCTS.map(p => (
                <td key={p.id} className="p-6 text-center">
                  {p.features.some(f => f.includes('VPN')) ? (
                     <svg className="w-6 h-6 mx-auto text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  ) : (
                    <span className="text-slate-300">N/A</span>
                  )}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-6 font-semibold bg-white sticky left-0 z-10">Identity Protection</td>
              {ANTIVIRUS_PRODUCTS.map(p => (
                <td key={p.id} className="p-6 text-center">
                  {p.features.some(f => f.includes('Identity')) ? (
                    <svg className="w-6 h-6 mx-auto text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  ) : (
                    <span className="text-slate-300">Limited</span>
                  )}
                </td>
              ))}
            </tr>
          </tbody>
          <tfoot>
            <tr className="border-t border-slate-200">
              <td className="p-6 bg-white sticky left-0 z-10"></td>
              {ANTIVIRUS_PRODUCTS.map(p => (
                <td key={p.id} className="p-6 text-center">
                  <a href={p.affiliateUrl} className="block w-full bg-blue-600 text-white py-2 rounded font-bold text-xs hover:bg-blue-700 transition-colors uppercase">
                    Buy Now
                  </a>
                </td>
              ))}
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Comparison;
