
import React from 'react';
import { HashRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ReviewDetail from './pages/ReviewDetail';
import Comparison from './pages/Comparison';
import BlogList from './pages/BlogList';
import Contact from './pages/Contact';
import PolicyPage from './pages/PolicyPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reviews" element={<Home />} /> {/* Home acts as listing too in this layout */}
            <Route path="/reviews/:slug" element={<ReviewDetail />} />
            <Route path="/comparison" element={<Comparison />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/policies/:type" element={<PolicyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
