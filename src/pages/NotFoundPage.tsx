import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { BrandLogo } from '../components/BrandLogo';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] bg-[#050505] flex items-center justify-center px-4 py-20 text-center">
      <div className="max-w-md space-y-6">
        <BrandLogo size="lg" showText={false} className="justify-center mx-auto" />
        
        <div>
          <h1 className="font-display text-7xl font-extrabold text-gold">404</h1>
          <h2 className="font-heading text-2xl font-bold uppercase text-white mt-2">
            Page Not Found
          </h2>
          <p className="text-sm text-zinc-400 mt-2">
            The page you are looking for doesn't exist or has been relocated.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 bg-gold hover:bg-gold-light text-black font-heading font-bold text-xs uppercase tracking-wider rounded-lg transition-all flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 font-heading font-semibold text-xs uppercase tracking-wider rounded-lg transition-all flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};

