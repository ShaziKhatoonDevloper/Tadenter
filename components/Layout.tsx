
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { COMPANY_DETAILS, ANTIVIRUS_PRODUCTS, BLOG_POSTS } from '../constants';

const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link
      to={to}
      className={`px-3 py-2 text-sm font-medium transition-colors ${
        isActive ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-600 hover:text-blue-600'
      }`}
    >
      {children}
    </Link>
  );
};

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const filteredProducts = query.length > 1 
    ? ANTIVIRUS_PRODUCTS.filter(p => p.name.toLowerCase().includes(query.toLowerCase())) 
    : [];
  
  const filteredPosts = query.length > 1 
    ? BLOG_POSTS.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) 
    : [];

  const hasResults = filteredProducts.length > 0 || filteredPosts.length > 0;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleResultClick = (path: string) => {
    navigate(path);
    setQuery('');
    setIsOpen(false);
  };

  return (
    <div className="relative flex-grow max-w-xs mx-4 hidden sm:block" ref={dropdownRef}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-full leading-5 bg-slate-50 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-white sm:text-sm transition-all"
          placeholder="Search reviews or tips..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
        />
      </div>

      {isOpen && query.length > 1 && (
        <div className="absolute mt-2 w-full bg-white rounded-2xl shadow-2xl border border-slate-100 z-[60] overflow-hidden max-h-[400px] overflow-y-auto">
          {!hasResults ? (
            <div className="p-4 text-sm text-slate-500 text-center">No matches found for "{query}"</div>
          ) : (
            <div className="py-2">
              {filteredProducts.length > 0 && (
                <div>
                  <div className="px-4 py-1 text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50">Antivirus Reviews</div>
                  {filteredProducts.map(product => (
                    <button
                      key={product.id}
                      onClick={() => handleResultClick(`/reviews/${product.id}`)}
                      className="w-full text-left px-4 py-3 hover:bg-blue-50 flex items-center space-x-3 transition-colors"
                    >
                      <img src={product.logo} alt="" className="w-6 h-6 object-contain bg-slate-100 rounded p-0.5" />
                      <span className="text-sm font-semibold text-slate-900">{product.name}</span>
                    </button>
                  ))}
                </div>
              )}
              {filteredPosts.length > 0 && (
                <div className={filteredProducts.length > 0 ? 'mt-2' : ''}>
                  <div className="px-4 py-1 text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50">Blog Posts</div>
                  {filteredPosts.map(post => (
                    <button
                      key={post.id}
                      onClick={() => handleResultClick(`/blog/${post.id}`)}
                      className="w-full text-left px-4 py-3 hover:bg-blue-50 flex flex-col transition-colors"
                    >
                      <span className="text-sm font-semibold text-slate-900 line-clamp-1">{post.title}</span>
                      <span className="text-[10px] text-slate-500">{post.category}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscribeEmail || !subscribeEmail.includes('@')) return;

    setSubscribeStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setSubscribeStatus('success');
      setSubscribeEmail('');
      // Reset back to idle after 5 seconds to allow another subscription if needed
      setTimeout(() => setSubscribeStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center flex-shrink-0">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold">T</div>
                <span className="text-xl font-bold tracking-tight text-slate-900">TADENTER</span>
              </Link>
            </div>
            
            <SearchBar />

            <nav className="hidden md:flex space-x-4">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/reviews">Reviews</NavLink>
              <NavLink to="/comparisons">Comparisons</NavLink>
              <NavLink to="/blog">Blog</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </nav>

            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-blue-600"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 py-4 px-4 space-y-2">
            <div className="pb-4 pt-2">
               <SearchBar />
            </div>
            <Link to="/" className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/reviews" className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md" onClick={() => setIsMenuOpen(false)}>Reviews</Link>
            <Link to="/comparisons" className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md" onClick={() => setIsMenuOpen(false)}>Comparisons</Link>
            <Link to="/blog" className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <Link to="/contact" className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link to="/" className="flex items-center space-x-2 text-white">
                <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-xs font-bold">T</div>
                <span className="text-lg font-bold">TADENTER</span>
              </Link>
              <p className="text-sm">Comprehensive security software reviews and comparisons to help you stay safe online.</p>
              <div className="text-xs space-y-1">
                <p>Email: {COMPANY_DETAILS.email}</p>
                <p>Address: {COMPANY_DETAILS.address}</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/reviews" className="hover:text-blue-400">Antivirus Reviews</Link></li>
                <li><Link to="/comparisons" className="hover:text-blue-400">Best Antivirus 2026</Link></li>
                <li><Link to="/blog" className="hover:text-blue-400">Security Blog</Link></li>
                <li><Link to="/contact" className="hover:text-blue-400">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/policy/privacy" className="hover:text-blue-400">Privacy Policy</Link></li>
                <li><Link to="/policy/terms" className="hover:text-blue-400">Terms of Use</Link></li>
                <li><Link to="/policy/affiliate" className="hover:text-blue-400">Affiliate Disclosure</Link></li>
                <li><Link to="/policy/cookies" className="hover:text-blue-400">Cookie Policy</Link></li>
                <li><Link to="/policy/advertiser" className="hover:text-blue-400">Advertiser Disclosure</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Subscribe</h4>
              <p className="text-sm mb-4">Get the latest security alerts and reviews in your inbox.</p>
              {subscribeStatus === 'success' ? (
                <div className="bg-green-600/20 border border-green-600/30 text-green-400 p-4 rounded-xl text-sm animate-pulse">
                  <span className="font-bold block">Awesome!</span> You're now on the list.
                </div>
              ) : (
                <form className="flex flex-col sm:flex-row gap-2" onSubmit={handleSubscribe}>
                  <input 
                    type="email" 
                    required
                    placeholder="Your email" 
                    value={subscribeEmail}
                    onChange={(e) => setSubscribeEmail(e.target.value)}
                    className="bg-slate-800 border-none rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 w-full disabled:opacity-50"
                    disabled={subscribeStatus === 'loading'}
                  />
                  <button 
                    type="submit"
                    disabled={subscribeStatus === 'loading'}
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-2 text-sm font-medium transition-all disabled:opacity-50 flex items-center justify-center min-w-[80px]"
                  >
                    {subscribeStatus === 'loading' ? (
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : 'Join'}
                  </button>
                </form>
              )}
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} Tadenter, owned and operated by TAD ENTERPRISES. All rights reserved.</p>
            <p className="mt-2 italic">Affiliate Disclosure: We may earn a commission when you purchase through our links at no extra cost to you.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
