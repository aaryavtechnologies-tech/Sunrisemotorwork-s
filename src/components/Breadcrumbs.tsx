import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  currentPage: string;
  parentPage?: { name: string; path: string };
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ currentPage, parentPage }) => {
  return (
    <nav className="flex items-center text-xs text-zinc-400 py-3" aria-label="Breadcrumb">
      <Link to="/" className="flex items-center gap-1 hover:text-gold transition-colors">
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>

      {parentPage && (
        <>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-600 mx-2" />
          <Link to={parentPage.path} className="hover:text-gold transition-colors">
            {parentPage.name}
          </Link>
        </>
      )}

      <ChevronRight className="w-3.5 h-3.5 text-zinc-600 mx-2" />
      <span className="text-gold font-medium">{currentPage}</span>
    </nav>
  );
};

