
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ReviewDetail } from './pages/ReviewDetail';
import { Blog } from './pages/Blog';
import { BlogDetail } from './pages/BlogDetail';
import { Comparisons } from './pages/Comparisons';
import { Contact } from './pages/Contact';
import { PolicyPage } from './pages/PolicyPage';
import { ANTIVIRUS_PRODUCTS } from './constants';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const ReviewsList: React.FC = () => {
  useEffect(() => {
    document.title = "Antivirus Reviews 2026 - Complete Rankings | TADENTER";
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4">Complete Antivirus Rankings 2026</h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          Our team of security experts has tested dozens of antivirus solutions to bring you the definitive ranking of the best protection available today.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ANTIVIRUS_PRODUCTS.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all flex flex-col group">
            <div className="h-48 overflow-hidden relative">
              <img src={product.productImage} alt={product.name} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
              <div className="absolute top-4 left-4">
                 <span className="text-[10px] font-black text-blue-600 bg-white/90 px-2 py-1 rounded uppercase shadow-sm">{product.bestFor}</span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 flex items-center justify-center p-1 bg-slate-50 rounded overflow-hidden">
                  <img src={product.logo} alt={product.name} className="w-full h-full object-contain" />
                </div>
                <h3 className="font-bold text-lg">{product.name}</h3>
              </div>
              <div className="space-y-3 flex-grow">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">Expert Score:</span>
                  <span className="font-bold text-blue-600">{product.overallScore}/100</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">Protection:</span>
                  <span className="font-bold text-green-600">{product.performance.protection}%</span>
                </div>
                <p className="text-sm text-slate-600 line-clamp-2">{product.description}</p>
              </div>
              <div className="mt-6 space-y-3">
                <Link to={`/reviews/${product.id}`} className="block w-full text-center bg-slate-900 text-white font-bold py-3 rounded-lg hover:bg-slate-800 transition-colors">
                  Read Detailed Review
                </Link>
                <a href={product.link} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Visit Official Site
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<ReviewsList />} />
          <Route path="/reviews/:id" element={<ReviewDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/comparisons" element={<Comparisons />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policy/:type" element={<PolicyPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
