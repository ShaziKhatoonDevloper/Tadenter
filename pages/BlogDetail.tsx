
import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';

export const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === id);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | TADENTER Blog`;
    }
  }, [post]);

  if (!post) return <Navigate to="/blog" />;

  const relatedPosts = BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <div className="pb-20">
      {/* Blog Hero */}
      <header className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 font-medium">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Back to Blog
          </Link>
          <div className="space-y-4">
            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{post.category}</span>
            <h1 className="text-4xl md:text-5xl font-black leading-tight">{post.title}</h1>
            <div className="flex items-center space-x-4 text-slate-400 text-sm pt-4">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-2 text-xs">
                  {post.author.charAt(0)}
                </div>
                <span>{post.author}</span>
              </div>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <img src={post.image} alt={post.title} className="w-full h-auto rounded-2xl shadow-lg mb-12" />
            
            <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-a:text-blue-600">
              <p className="text-xl text-slate-600 leading-relaxed font-medium mb-8">
                {post.excerpt}
              </p>
              
              <div className="space-y-6 text-slate-700 leading-relaxed">
                <p>{post.content}</p>
                <p>In today's 2026 digital landscape, protection is no longer optional. As cyber threats evolve from simple viruses to complex ransomware-as-a-service models and AI-powered phishing, users must stay vigilant. This guide breaks down exactly what you need to know to stay secure.</p>
                
                <h2 className="text-2xl font-bold text-slate-900 mt-12">Key Considerations for Modern Security</h2>
                <p>When evaluating your security posture in 2026, consider the following critical layers:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Real-time AI behavioral analysis:</strong> Detecting threats based on zero-day patterns rather than just known signatures.</li>
                  <li><strong>Cloud-first protection:</strong> Instant synchronization with global threat databases.</li>
                  <li><strong>Integrated privacy suites:</strong> Built-in unlimited VPNs, secure browsers, and identity insurance.</li>
                </ul>

                <blockquote className="border-l-4 border-blue-600 pl-6 py-4 bg-blue-50 text-blue-900 italic font-medium my-8">
                  "The best security tool is an educated user, followed closely by a robust, 2026-ready antivirus engine."
                </blockquote>

                <p>We recommend regularly updating your software and utilizing hardware security keys wherever possible. Combine these habits with one of our top-rated antivirus solutions for the ultimate peace of mind.</p>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-slate-200">
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                <h3 className="text-xl font-bold mb-4">About TADENTER Reviews</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our reviews are based on independent lab data and hands-on testing. We prioritize objectivity to ensure our readers get the most accurate security advice possible. 
                  Learn more about our testing methodology on our <Link to="/policy/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link> page.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-12">
            <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-8 sticky top-24">
              <h3 className="text-xl font-bold mb-6">Related Articles</h3>
              <div className="space-y-6">
                {relatedPosts.map(rp => (
                  <Link key={rp.id} to={`/blog/${rp.id}`} className="group flex flex-col space-y-2">
                    <img src={rp.image} alt="" className="w-full h-24 object-cover rounded-lg" />
                    <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                      {rp.title}
                    </h4>
                    <span className="text-xs text-slate-500">{rp.date}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-slate-100 text-center">
                <Link to="/blog" className="text-blue-600 font-bold hover:underline">View All Articles</Link>
              </div>
            </div>

            <div className="bg-blue-600 rounded-2xl p-8 text-white shadow-lg">
              <h3 className="text-xl font-bold mb-4">Need Protection?</h3>
              <p className="text-sm text-blue-100 mb-6">Check out our comparison of the top 5 antivirus programs for 2026.</p>
              <Link to="/comparisons" className="block w-full text-center bg-white text-blue-600 font-bold py-3 rounded-lg hover:bg-blue-50 transition-colors">
                View 2026 Rankings
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
