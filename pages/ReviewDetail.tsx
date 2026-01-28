
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ANTIVIRUS_PRODUCTS } from '../constants';

const ReviewDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = ANTIVIRUS_PRODUCTS.find(p => p.slug === slug);

  if (!product) return <Navigate to="/reviews" />;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="mb-8 flex text-sm text-slate-500">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/reviews" className="hover:text-blue-600">Reviews</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900 font-medium">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          {/* Main Info */}
          <section>
            <div className="flex items-center space-x-6 mb-6">
              <img src={product.logo} alt={product.name} className="w-24 h-24 rounded-2xl shadow-sm border border-slate-200" />
              <div>
                <h1 className="text-4xl font-bold text-slate-900 mb-2">{product.name} Review 2025</h1>
                <div className="flex items-center space-x-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-slate-300 fill-current'}`} viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    ))}
                  </div>
                  <span className="text-slate-700 font-bold">{product.rating}/5.0</span>
                </div>
              </div>
            </div>
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-600 leading-relaxed mb-6">{product.overview}</p>
            </div>
          </section>

          {/* Performance Scores */}
          <section className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold mb-6">Independent Lab Test Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(product.performanceScores).map(([key, score]) => (
                <div key={key} className="text-center">
                  <div className="relative inline-flex items-center justify-center mb-4">
                    <svg className="w-24 h-24">
                      <circle className="text-slate-200" strokeWidth="5" stroke="currentColor" fill="transparent" r="40" cx="48" cy="48" />
                      <circle className="text-blue-600" strokeWidth="5" strokeDasharray={251} strokeDashoffset={251 - (251 * score) / 10} strokeLinecap="round" stroke="currentColor" fill="transparent" r="40" cx="48" cy="48" />
                    </svg>
                    <span className="absolute text-xl font-bold">{score}</span>
                  </div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-slate-500">{key}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Pros & Cons */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-xl p-6 border border-green-100">
              <h3 className="text-green-800 font-bold mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                The Pros
              </h3>
              <ul className="space-y-3">
                {product.pros.map((pro, i) => (
                  <li key={i} className="text-sm text-green-700 font-medium">{pro}</li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-6 border border-red-100">
              <h3 className="text-red-800 font-bold mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                The Cons
              </h3>
              <ul className="space-y-3">
                {product.cons.map((con, i) => (
                  <li key={i} className="text-sm text-red-700 font-medium">{con}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Features */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Detailed Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.features.map((feature, i) => (
                <div key={i} className="flex items-start space-x-3 p-4 bg-white border border-slate-100 rounded-lg shadow-sm">
                  <div className="bg-blue-100 text-blue-600 p-1 rounded-md">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Verdict */}
          <section className="bg-blue-900 text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">The Verdict</h2>
            <p className="text-blue-100 text-lg italic mb-6">"{product.verdict}"</p>
            <a href={product.affiliateUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
              Visit Official Website
            </a>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-white rounded-xl border border-slate-200 p-6 sticky top-24 shadow-sm">
            <h3 className="text-lg font-bold mb-4">Pricing Plans</h3>
            <div className="text-3xl font-bold text-blue-600 mb-2">{product.price}</div>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">{product.priceDetails}</p>
            <a href={product.affiliateUrl} className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg font-bold mb-4 hover:bg-blue-700 transition-colors">
              Get Started Now
            </a>
            <div className="text-[10px] text-center text-slate-400">
              *Price shown for first-year subscription. Terms apply.
            </div>
          </div>

          <div className="bg-slate-900 rounded-xl p-6 text-white">
            <h3 className="font-bold mb-4">Need More Options?</h3>
            <p className="text-xs text-slate-400 mb-4">See how {product.name} stacks up against the competition in our comparison table.</p>
            <Link to="/comparison" className="text-blue-400 font-bold text-sm hover:underline">Compare All Products &rarr;</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetail;
