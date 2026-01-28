
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Independent Reviews of the Best Antivirus Software 2025
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-xl">
              Don't leave your digital life to chance. We test, rank, and compare the world's leading security suites so you can browse, bank, and shop with confidence.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/reviews" className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg font-bold text-center shadow-lg transition-all">
                View Top Recommendations
              </Link>
              <Link to="/comparison" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-bold text-center border border-blue-400 transition-all">
                Compare Side-by-Side
              </Link>
            </div>
            <div className="flex items-center space-x-4 text-sm text-blue-200">
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>
                Independent Testing
              </span>
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>
                Verified Comparisons
              </span>
            </div>
          </div>
          <div className="hidden lg:block">
            <img src="https://picsum.photos/seed/security-hero/600/400" alt="Security Dashboard" className="rounded-2xl shadow-2xl border-4 border-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
