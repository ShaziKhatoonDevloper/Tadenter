
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-blue-600 text-white p-1.5 rounded-md">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">TAD Reviews</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/reviews" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Reviews</Link>
            <Link to="/comparison" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Comparison</Link>
            <Link to="/blog" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Blog</Link>
            <Link to="/contact" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Contact</Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-blue-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/reviews" className="block px-3 py-2 text-slate-600 hover:text-blue-600 font-medium">Reviews</Link>
            <Link to="/comparison" className="block px-3 py-2 text-slate-600 hover:text-blue-600 font-medium">Comparison</Link>
            <Link to="/blog" className="block px-3 py-2 text-slate-600 hover:text-blue-600 font-medium">Blog</Link>
            <Link to="/contact" className="block px-3 py-2 text-slate-600 hover:text-blue-600 font-medium">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
