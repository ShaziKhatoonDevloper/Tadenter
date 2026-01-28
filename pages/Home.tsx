
import React from 'react';
import Hero from '../components/Hero';
import { ANTIVIRUS_PRODUCTS, BLOG_POSTS } from '../constants';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const topProducts = ANTIVIRUS_PRODUCTS.slice(0, 3);
  const featuredPosts = BLOG_POSTS.slice(0, 3);

  return (
    <div className="space-y-20 pb-20">
      <Hero />

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Top Rated Antivirus 2025</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">We've spent hundreds of hours testing these security suites against the latest malware, ransomware, and phishing threats.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <img src={product.logo} alt={product.name} className="w-16 h-16 rounded-lg object-cover" />
                  <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">
                    ★ {product.rating}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{product.name}</h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">{product.overview}</p>
                <ul className="space-y-2 mb-6">
                  {product.pros.slice(0, 3).map((pro, idx) => (
                    <li key={idx} className="flex items-center text-xs text-slate-700">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {pro}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="font-bold text-slate-900">{product.price}</span>
                  <Link to={`/reviews/${product.slug}`} className="text-blue-600 font-semibold text-sm hover:underline">Full Review &rarr;</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="bg-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">At a Glance Comparison</h2>
          <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Product</th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">Rating</th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">Best For</th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {ANTIVIRUS_PRODUCTS.map((product) => (
                  <tr key={product.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img className="h-10 w-10 rounded-md" src={product.logo} alt="" />
                        <div className="ml-4">
                          <div className="text-sm font-bold text-slate-900">{product.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <div className="text-sm text-slate-900 font-bold">{product.rating}/5.0</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <div className="text-sm text-slate-900">{product.price}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        {product.category[0]}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link to={`/reviews/${product.slug}`} className="text-blue-600 hover:text-blue-900 font-bold">Details</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Latest from Blog */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Security Insights & Guides</h2>
            <p className="text-slate-600">The latest news on malware threats and how to stay protected.</p>
          </div>
          <Link to="/blog" className="hidden md:block text-blue-600 font-bold hover:underline">View All Posts &rarr;</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="group">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden h-full">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-6">
                  <div className="text-xs font-semibold text-blue-600 uppercase mb-2">{post.category}</div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{post.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="text-slate-400 text-xs flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
