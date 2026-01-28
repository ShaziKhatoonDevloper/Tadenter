
import React, { useState, useEffect } from 'react';
import { ANTIVIRUS_PRODUCTS } from '../constants';
import { Link } from 'react-router-dom';

type FilterType = 'All' | 'Best Overall' | 'Best Free' | 'Best for Windows' | 'Best for Mac';

export const Comparisons: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');

  useEffect(() => {
    document.title = "Compare Best Antivirus Software 2026 | TADENTER";
  }, []);

  const filteredProducts = ANTIVIRUS_PRODUCTS.filter((p) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Best Overall') return p.bestFor === 'Best Overall';
    if (activeFilter === 'Best Free') return p.category === 'Free';
    if (activeFilter === 'Best for Windows') return p.category === 'Windows';
    if (activeFilter === 'Best for Mac') return p.category === 'Mac';
    return true;
  });

  const filters: FilterType[] = ['All', 'Best Overall', 'Best Free', 'Best for Windows', 'Best for Mac'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4">Best Antivirus Software Comparison 2026</h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Compare features, performance scores, and pricing for the industry's top-rated security solutions.
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="bg-slate-200 p-1 rounded-xl flex flex-wrap justify-center gap-1">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                activeFilter === filter 
                  ? 'bg-white text-blue-600 shadow-sm' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto rounded-2xl shadow-lg border border-slate-200 bg-white">
        <table className="w-full text-left min-w-[900px]">
          <thead>
            <tr className="bg-slate-900 text-white">
              <th className="px-6 py-6 font-bold">Product</th>
              <th className="px-6 py-6 font-bold text-center">Score</th>
              <th className="px-6 py-6 font-bold">Best For</th>
              <th className="px-6 py-6 font-bold">Key Benefit</th>
              <th className="px-6 py-6 font-bold">Protection</th>
              <th className="px-6 py-6 font-bold">Starting Price</th>
              <th className="px-6 py-6 font-bold text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((p) => (
                <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-6">
                    <Link to={`/reviews/${p.id}`} className="flex items-center space-x-3 group">
                      <img src={p.logo} alt="" className="w-10 h-10 rounded shadow-sm object-contain bg-white p-0.5 border" />
                      <div>
                        <span className="font-bold block group-hover:text-blue-600">{p.name}</span>
                        <span className="text-xs text-slate-500">{p.category} Suite</span>
                      </div>
                    </Link>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex flex-col items-center">
                      <span className="text-xl font-black text-blue-600 leading-none">{p.rating}</span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Excellent</span>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                      {p.bestFor}
                    </span>
                  </td>
                  <td className="px-6 py-6">
                    <span className="text-sm text-slate-600 italic">"{p.pros[0]}"</span>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex items-center">
                      <div className="w-16 h-1.5 bg-slate-100 rounded-full mr-2 overflow-hidden">
                        <div className="h-full bg-green-500" style={{ width: `${p.performance.protection}%` }}></div>
                      </div>
                      <span className="text-sm font-bold text-slate-700">{p.performance.protection}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <span className="font-bold text-slate-900">{p.pricing.split(' ').slice(2).join(' ')}</span>
                  </td>
                  <td className="px-6 py-6 text-right">
                    <div className="flex flex-col space-y-2 items-end">
                      <a 
                        href={p.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2 px-6 rounded-lg text-center transition-colors shadow-sm"
                      >
                        Visit Site
                      </a>
                      <Link to={`/reviews/${p.id}`} className="text-blue-600 text-xs font-bold hover:underline pr-2">
                        Full Review
                      </Link>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="px-6 py-12 text-center text-slate-500 italic">
                  No products found for this filter. Try another category!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-slate-900 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Why Trust Our Rankings?</h2>
          <p className="text-slate-400 mb-6 leading-relaxed">
            We don't just aggregate scores. We run our own controlled malware extraction tests and monitor system impact on both legacy and modern hardware.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <span className="text-sm">Independent Laboratory Data</span>
            </div>
            <div className="flex items-center">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <span className="text-sm">Real-world Malware Samples</span>
            </div>
            <div className="flex items-center">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <span className="text-sm">Hands-on UI & Ease-of-Use Analysis</span>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4 text-slate-900">Still Not Sure?</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Our security concierge service can help you pick the perfect plan for your specific needs—whether you're a gamer, a small business owner, or a concerned parent.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center bg-blue-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">
            Ask an Expert
          </Link>
        </div>
      </div>
    </div>
  );
};
