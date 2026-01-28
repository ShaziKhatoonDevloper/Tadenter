
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ANTIVIRUS_PRODUCTS } from '../constants';

export const Home: React.FC = () => {
  const topPicks = ANTIVIRUS_PRODUCTS.slice(0, 3);

  useEffect(() => {
    document.title = "Best Antivirus Software Reviews 2026 | Expert Rankings | TADENTER";
  }, []);

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-7xl font-black tracking-tight mb-8 leading-[1.1]">
              The Best Antivirus Software <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Tested & Ranked</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 font-medium">
              Expert, unbiased reviews of 2026's top security software. We monitor protection rates, 
              system impact, and privacy scores so you can browse safely.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/comparisons" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 px-10 rounded-2xl transition-all shadow-xl shadow-blue-600/20 text-lg">
                View 2026 Comparisons
              </Link>
              <Link to="/reviews" className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 font-bold py-5 px-10 rounded-2xl transition-all text-lg">
                Read Reviews
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>
      </section>

      {/* Top Picks Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-black text-slate-900">Top Rated Security Suites</h2>
            <p className="text-slate-500 text-lg mt-2">Our laboratory-tested favorites for maximum home protection in 2026.</p>
          </div>
          <Link to="/reviews" className="text-blue-600 font-bold hover:text-blue-700 inline-flex items-center group">
            See All 2026 Rankings 
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {topPicks.map((product) => (
            <div key={product.id} className="bg-white rounded-[2.5rem] shadow-sm border border-slate-200 overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 flex flex-col group">
              <div className="relative h-64 bg-slate-100 flex items-center justify-center p-8 overflow-hidden">
                <img src={product.productImage} alt={product.name} className="h-full w-auto object-contain transition-transform group-hover:scale-110 drop-shadow-2xl" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-xl shadow-sm">
                   <img src={product.logo} alt="" className="w-12 h-6 object-contain" />
                </div>
              </div>
              <div className="p-8 border-b border-slate-100 flex items-center justify-between">
                <span className="bg-blue-50 text-blue-700 text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                  {product.bestFor}
                </span>
                <div className="flex items-center text-amber-500">
                  <span className="text-2xl font-black mr-1">{product.rating}</span>
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                </div>
              </div>
              <div className="p-10 flex-grow space-y-6">
                <h3 className="text-2xl font-black text-slate-900 leading-tight">{product.name}</h3>
                <ul className="space-y-3">
                  {product.pros.map((pro, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-600 font-medium">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                      {pro}
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Pricing Guide</p>
                  <p className="text-slate-900 font-bold">{product.pricing}</p>
                </div>
              </div>
              <div className="p-8 bg-slate-50 border-t border-slate-100 mt-auto flex flex-col gap-3">
                <Link to={`/reviews/${product.id}`} className="block w-full text-center bg-white border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 text-slate-900 font-bold py-4 rounded-2xl transition-all">
                  Full Analysis
                </Link>
                <a href={product.link} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-blue-600/10">
                  Visit Official Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Preview Table */}
      <section className="bg-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Quick Side-by-Side</h2>
            <p className="text-slate-600 text-lg">Compare critical metrics for our top contenders.</p>
          </div>
          
          <div className="overflow-x-auto rounded-[2rem] border border-slate-200 shadow-xl bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-8 py-6 font-bold uppercase tracking-wider text-xs">Antivirus Suite</th>
                  <th className="px-8 py-6 font-bold uppercase tracking-wider text-xs">Rating</th>
                  <th className="px-8 py-6 font-bold uppercase tracking-wider text-xs">Protection</th>
                  <th className="px-8 py-6 font-bold uppercase tracking-wider text-xs">Specialty</th>
                  <th className="px-8 py-6 font-bold uppercase tracking-wider text-xs text-right">More Info</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {ANTIVIRUS_PRODUCTS.slice(0, 6).map((p) => (
                  <tr key={p.id} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 flex items-center justify-center p-1 bg-slate-50 rounded shadow-sm">
                           <img src={p.logo} alt="" className="w-full h-full object-contain" />
                        </div>
                        <span className="font-bold text-slate-900">{p.name}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center font-black">
                        <span className="text-blue-600 text-lg mr-1">{p.rating}</span>
                        <span className="text-slate-400">/ 5</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center">
                        <div className="w-12 h-1.5 bg-slate-100 rounded-full mr-3 overflow-hidden">
                          <div className="h-full bg-blue-500" style={{ width: `${p.performance.protection}%` }}></div>
                        </div>
                        <span className="text-slate-600 font-bold">{p.performance.protection}%</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-black uppercase text-slate-500 tracking-wider">
                        {p.bestFor}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <Link to={`/reviews/${p.id}`} className="text-blue-600 font-bold hover:underline">View Review</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
          {[
            { 
              icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", 
              title: "Expert Testing", 
              color: "blue",
              desc: "Rigorous lab testing against 10k+ samples." 
            },
            { 
              icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", 
              title: "Always Current", 
              color: "green",
              desc: "Rankings updated monthly for new threats." 
            },
            { 
              icon: "M13 10V3L4 14h7v7l9-11h-7z", 
              title: "Zero Lag", 
              color: "purple",
              desc: "We measure boot times and CPU impact." 
            },
            { 
              icon: "M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 003 11c0-2.778 1.125-5.247 2.948-7.11m9.872 9.463v.003l.052.09a10.003 10.003 0 01-5.641 5.308m5.14-17.752a11.947 11.947 0 013.273 3.303M13.44 3.9c.899 2.856 2.315 5.413 4.138 7.555m-9.471-3.593l.05.09A10.004 10.004 0 013 11c0-2.778 1.125-5.247 2.948-7.11m12.127 9.463l.05.09a10.005 10.005 0 01-5.64 5.308m5.139-17.752a11.948 11.948 0 013.273 3.303M13.44 3.9c.899 2.856 2.315 5.413 4.138 7.555", 
              title: "Privacy First", 
              color: "amber",
              desc: "Tested for best anti-phishing scores." 
            },
          ].map((badge, idx) => (
            <div key={idx} className="space-y-4 group">
              <div className={`w-16 h-16 bg-${badge.color}-100 text-${badge.color}-600 rounded-3xl flex items-center justify-center mx-auto transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={badge.icon}></path></svg>
              </div>
              <h3 className="font-black text-slate-900 text-lg">{badge.title}</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">{badge.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
