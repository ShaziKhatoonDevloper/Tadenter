
import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';

const BlogList: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Security Insights & Cybersecurity News</h1>
        <p className="text-slate-600">The latest analysis from our team of security researchers.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map(post => (
          <article key={post.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6 flex-grow flex flex-col">
              <div className="text-xs font-semibold text-blue-600 uppercase mb-2 tracking-wider">{post.category}</div>
              <h2 className="text-xl font-bold mb-3 hover:text-blue-600 transition-colors">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-slate-600 text-sm mb-6 line-clamp-3">{post.excerpt}</p>
              <div className="mt-auto flex items-center justify-between text-xs text-slate-500 font-medium">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-slate-200 mr-2 flex items-center justify-center text-[10px] uppercase font-bold text-slate-500">
                    {post.author.substring(0, 2)}
                  </div>
                  {post.author}
                </div>
                <div>{new Date(post.date).toLocaleDateString()}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
