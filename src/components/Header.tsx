import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Budgeting', path: '/budgeting-for-beginners/' },
    { label: 'Saving Money', path: '/save-money-on-low-income/' },
    { label: 'Credit Basics', path: '/credit-score-basics/' },
    { label: 'Debt Management', path: '/debt-management/' },
    { label: 'Investing Basics', path: '/investing-for-beginners/' },
  ];

  const handleLinkClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#faf8f5]/95 backdrop-blur-md border-b border-[#e7e1d5] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Single Brand Wordmark */}
          <a
            href="/"
            onClick={(e) => handleLinkClick('/', e)}
            className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-[#16382c] whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
          >
            MoneyWise Starter
          </a>

          {/* Zone 2: Single-line Text Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#444f48]">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleLinkClick(link.path, e)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors ${
                    isActive
                      ? 'text-[#16382c] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#16382c]'
                      : 'hover:text-[#16382c]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="/seo-project-matrix/"
              onClick={(e) => handleLinkClick('/seo-project-matrix/', e)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-all whitespace-nowrap shrink-0 ${
                currentPath === '/seo-project-matrix/'
                  ? 'bg-[#16382c] text-white shadow-sm'
                  : 'bg-[#ede7db] text-[#16382c] hover:bg-[#e2dacb]'
              }`}
            >
              <span>SEO Matrix</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#16382c] hover:bg-[#ede7db] rounded-md focus:outline-none focus:ring-2 focus:ring-[#16382c]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#e7e1d5] bg-[#faf8f5] px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleLinkClick(link.path, e)}
                className={`block px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-[#ede7db] text-[#16382c] font-semibold'
                    : 'text-[#444f48] hover:bg-[#f3ede3] hover:text-[#16382c]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <div className="pt-3 border-t border-[#e7e1d5]">
            <a
              href="/seo-project-matrix/"
              onClick={(e) => handleLinkClick('/seo-project-matrix/', e)}
              className="block w-full text-center px-4 py-2.5 text-sm font-semibold uppercase tracking-wider text-white bg-[#16382c] rounded-md hover:bg-[#112920] transition-colors"
            >
              View SEO Project Matrix
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
