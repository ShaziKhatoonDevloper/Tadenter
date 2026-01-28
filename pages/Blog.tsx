
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';

export const Blog: React.FC = () => {
  useEffect(() => {
    document.title = "Cybersecurity Blog & Security Tips | TADENTER";
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold mb-4">Security Insights & Advice</h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          Stay informed with the latest cybersecurity news, antivirus guides, and expert protection tips from the TAD Enterprises research team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <article key={post.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col group hover:shadow-xl transition-shadow">
            <Link to={`/blog/${post.id}`} className="relative h-48 overflow-hidden block">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
              <div className="absolute top-4 left-4">
                <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">{post.category}</span>
              </div>
            </Link>
            <div className="p-6 flex-grow flex flex-col">
              <div className="text-xs text-slate-500 mb-2 flex items-center">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>By {post.author}</span>
              </div>
              <Link to={`/blog/${post.id}`}>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors leading-tight">{post.title}</h3>
              </Link>
              <p className="text-slate-600 text-sm line-clamp-3 mb-6 flex-grow">{post.excerpt}</p>
              <Link 
                to={`/blog/${post.id}`} 
                className="text-blue-600 font-bold text-sm inline-flex items-center hover:translate-x-1 transition-transform"
              >
                Read Full Article
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
