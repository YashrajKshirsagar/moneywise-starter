import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { ArticleView } from './views/ArticleView';
import { MatrixView } from './views/MatrixView';
import { DebtManagementView } from './views/DebtManagementView';
import { ARTICLES_DATA } from './data/articlesData';

export default function App() {
  // Normalize current path from browser URL
  const getInitialPath = (): string => {
    if (typeof window === 'undefined') return '/';
    let path = window.location.pathname;
    
    // Support hash-based fallback (e.g. /#/budgeting-for-beginners/) if hosting requires it
    if (window.location.hash && window.location.hash.startsWith('#/')) {
      path = window.location.hash.slice(1);
    }
    
    // Ensure trailing slash for article paths if not present
    if (path.length > 1 && !path.endsWith('/')) {
      path = `${path}/`;
    }
    return path || '/';
  };

  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);

  // Sync with browser history back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      let path = window.location.pathname;
      if (window.location.hash && window.location.hash.startsWith('#/')) {
        path = window.location.hash.slice(1);
      }
      if (path.length > 1 && !path.endsWith('/')) {
        path = `${path}/`;
      }
      setCurrentPath(path || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    let normalized = path;
    if (normalized.length > 1 && !normalized.endsWith('/')) {
      normalized = `${normalized}/`;
    }
    
    try {
      window.history.pushState({}, '', normalized);
    } catch {
      // Fallback if pushState is restricted
      window.location.hash = normalized;
    }
    
    setCurrentPath(normalized);
  };

  // Find matching article if path matches an article URL
  const currentArticle = ARTICLES_DATA.find(
    (art) => art.url === currentPath || `${art.url.replace(/\/$/, '')}` === currentPath.replace(/\/$/, '')
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-[#242926]">
      {/* Top Bar Header */}
      <Header currentPath={currentPath} onNavigate={navigateTo} />

      {/* Main Content View Container */}
      <main className="flex-1">
        {currentPath === '/' ? (
          <HomeView onNavigate={navigateTo} />
        ) : currentPath.includes('/seo-project-matrix') ? (
          <MatrixView onNavigate={navigateTo} />
        ) : currentPath.includes('/debt-management') ? (
          <DebtManagementView onNavigate={navigateTo} />
        ) : currentArticle ? (
          <ArticleView article={currentArticle} onNavigate={navigateTo} />
        ) : (
          /* 404 Fallback View with friendly redirect */
          <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-4">
            <h1 className="text-3xl font-serif font-bold text-[#16382c]">
              Page Not Found
            </h1>
            <p className="text-sm text-[#5d6b63]">
              The page you requested ({currentPath}) could not be located.
            </p>
            <button
              type="button"
              onClick={() => navigateTo('/')}
              className="mt-4 px-5 py-2.5 bg-[#16382c] text-white text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#112920] transition-colors"
            >
              Return to MoneyWise Starter Home
            </button>
          </div>
        )}
      </main>

      {/* Editorial Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
