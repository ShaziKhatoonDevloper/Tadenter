
import React, { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ANTIVIRUS_PRODUCTS } from '../constants';

interface UserReview {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export const ReviewDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = ANTIVIRUS_PRODUCTS.find((p) => p.id === id);

  // User Reviews State
  const [reviews, setReviews] = useState<UserReview[]>([
    { id: '1', name: 'Michael R.', rating: 5, comment: 'Been using this for 6 months now. Extremely light on resources and caught a phishing attempt yesterday.', date: 'Oct 12, 2025' },
    { id: '2', name: 'Sarah L.', rating: 4, comment: 'Great protection, though the initial scan took quite a while on my old laptop.', date: 'Nov 03, 2025' }
  ]);

  // Form State
  const [newName, setNewName] = useState('');
  const [newRating, setNewRating] = useState(0);
  const [newComment, setNewComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (product) {
      document.title = `${product.name} Review 2026 | TADENTER`;
    }
  }, [product]);

  if (!product) {
    return <Navigate to="/reviews" />;
  }

  const averageUserRating = reviews.length > 0 
    ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
    : 0;

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (newRating === 0) return;
    
    setIsSubmitting(true);
    // Mock submission
    setTimeout(() => {
      const review: UserReview = {
        id: Date.now().toString(),
        name: newName || 'Anonymous',
        rating: newRating,
        comment: newComment,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      };
      setReviews([review, ...reviews]);
      setNewName('');
      setNewRating(0);
      setNewComment('');
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1000);
  };

  return (
    <div className="pb-20">
      {/* Product Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 rounded-2xl bg-white p-4 flex items-center justify-center shadow-lg">
              <img src={product.logo} alt={product.name} className="w-full h-full object-contain" />
            </div>
            <div className="text-center md:text-left flex-grow">
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                <span className="bg-blue-600 px-3 py-1 rounded text-xs font-bold uppercase">{product.category} Choice</span>
                <span className="bg-slate-800 px-3 py-1 rounded text-xs font-bold uppercase">{product.bestFor}</span>
              </div>
              <h1 className="text-4xl font-extrabold mb-2">{product.name}</h1>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-5 h-5 fill-current ${i < Math.floor(product.rating) ? 'text-amber-400' : 'text-slate-600'}`} viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
                <span className="text-lg font-bold">{product.rating}/5.0</span>
              </div>
            </div>
            <div className="flex flex-col gap-3 min-w-[200px]">
              <a href={product.link} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-center transition-all">
                Visit Official Site
              </a>
              <p className="text-xs text-center text-slate-400">Current Price: {product.pricing}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-6">Software Visuals</h2>
              <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-slate-200 flex justify-center">
                <div className="relative group max-w-sm">
                  <img src={product.productImage} alt={`${product.name} box art`} className="w-full h-auto rounded-xl shadow-2xl transition-transform duration-500 group-hover:-rotate-2 group-hover:scale-105" />
                  <div className="absolute -inset-4 bg-blue-600/5 blur-3xl rounded-full -z-10 group-hover:bg-blue-600/10 transition-colors"></div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2026 Product Overview</h2>
              <p className="text-slate-600 leading-relaxed text-lg">{product.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-green-50 border border-green-100 p-6 rounded-xl">
                  <h3 className="font-bold text-green-800 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Pros
                  </h3>
                  <ul className="space-y-2 text-sm text-green-900/80">
                    {product.pros.map((pro, i) => <li key={i}>• {pro}</li>)}
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-100 p-6 rounded-xl">
                  <h3 className="font-bold text-red-800 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    Cons
                  </h3>
                  <ul className="space-y-2 text-sm text-red-900/80">
                    {product.cons.map((con, i) => <li key={i}>• {con}</li>)}
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Detailed Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-center p-4 bg-white border border-slate-200 rounded-lg">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <h2 className="text-2xl font-bold mb-6">Performance Labs Results (Q1 2026)</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-bold text-sm">Protection (Real-world)</span>
                    <span className="font-bold text-sm">{product.performance.protection}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${product.performance.protection}%` }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-bold text-sm">System Speed / Performance</span>
                    <span className="font-bold text-sm">{product.performance.performance}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${product.performance.performance}%` }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-bold text-sm">Usability & UI</span>
                    <span className="font-bold text-sm">{product.performance.usability}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${product.performance.usability}%` }}></div>
                  </div>
                </div>
              </div>
            </section>

            {/* User Reviews Section */}
            <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">User Reviews & Ratings</h2>
                  <p className="text-slate-500 text-sm mt-1">Based on {reviews.length} community submissions</p>
                </div>
                <div className="flex items-center bg-blue-50 px-4 py-2 rounded-xl">
                  <div className="text-3xl font-black text-blue-600 mr-3">{averageUserRating}</div>
                  <div>
                    <div className="flex text-amber-400">
                       {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-4 h-4 fill-current ${i < Math.round(Number(averageUserRating)) ? 'text-amber-400' : 'text-slate-200'}`} viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      ))}
                    </div>
                    <p className="text-[10px] font-bold text-blue-800 uppercase tracking-widest">Average Rating</p>
                  </div>
                </div>
              </div>

              {/* Review Form */}
              <div className="mb-12 bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-4">Write a Review</h3>
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Your Name</label>
                      <input 
                        type="text" 
                        required
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        placeholder="e.g. John D."
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Star Rating</label>
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setNewRating(star)}
                            className={`p-1 transition-colors ${newRating >= star ? 'text-amber-400' : 'text-slate-300'}`}
                          >
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Your Feedback</label>
                    <textarea 
                      required
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      rows={3}
                      className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                      placeholder="Share your experience with this software..."
                    ></textarea>
                  </div>
                  <div className="flex items-center justify-between">
                    <button 
                      type="submit"
                      disabled={isSubmitting || newRating === 0}
                      className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold py-2 px-6 rounded-lg transition-all flex items-center"
                    >
                      {isSubmitting ? 'Posting...' : 'Post Review'}
                    </button>
                    {showSuccess && (
                      <span className="text-green-600 text-xs font-bold flex items-center animate-bounce">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        Review published!
                      </span>
                    )}
                  </div>
                </form>
              </div>

              {/* Reviews List */}
              <div className="space-y-6">
                {reviews.map((r) => (
                  <div key={r.id} className="border-b border-slate-100 pb-6 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold text-xs mr-3">
                          {r.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 text-sm">{r.name}</p>
                          <div className="flex text-amber-400">
                             {[...Array(5)].map((_, i) => (
                              <svg key={i} className={`w-3 h-3 fill-current ${i < r.rating ? 'text-amber-400' : 'text-slate-200'}`} viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                            ))}
                          </div>
                        </div>
                      </div>
                      <span className="text-xs text-slate-400 font-medium">{r.date}</span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed italic">"{r.comment}"</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="border-t border-slate-200 pt-12">
              <h2 className="text-2xl font-bold mb-4">The 2026 Verdict</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Based on our intensive testing throughout late 2025 and early 2026, <strong>{product.name}</strong> remains one of the best choices for users 
                looking for {product.bestFor.toLowerCase()}. While no software is perfect, its high protection score of 
                {product.performance.protection}% makes it a formidable barrier against modern web threats including AI-driven phishing and ransomware.
              </p>
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex items-center gap-6">
                <div className="text-4xl font-black text-blue-600">{product.overallScore}</div>
                <div>
                  <h4 className="font-bold text-blue-900">Expert Consensus Score</h4>
                  <p className="text-sm text-blue-800/70">Calculated from 12 independent lab reports and our hands-on testing in 2026.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 sticky top-24">
              <h3 className="text-xl font-bold mb-6">Best Offers</h3>
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <p className="text-xs font-bold text-slate-500 uppercase">Standard Plan</p>
                  <p className="text-2xl font-black mb-1">{product.pricing.split(' ')[2]}</p>
                  <p className="text-xs text-slate-500 mb-4">Per year, for first time users</p>
                  <a href={product.link} target="_blank" rel="noopener noreferrer" className="block text-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-colors">
                    Get the Deal
                  </a>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-slate-100">
                <h4 className="font-bold mb-4">Other Reviews</h4>
                <div className="space-y-3">
                  {ANTIVIRUS_PRODUCTS.filter(p => p.id !== product.id).slice(0, 5).map(p => (
                    <Link key={p.id} to={`/reviews/${p.id}`} className="flex items-center space-x-3 group">
                      <div className="w-8 h-8 flex items-center justify-center p-0.5 bg-slate-50 rounded shadow-sm">
                        <img src={p.logo} alt="" className="w-full h-full object-contain" />
                      </div>
                      <span className="text-sm font-medium group-hover:text-blue-600 truncate">{p.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
