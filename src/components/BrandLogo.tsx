import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  variant?: 'gold' | 'white' | 'badge' | 'original';
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showText = true,
  variant = 'gold',
  className = '',
}) => {
  const sizeMap = {
    sm: 'w-9 h-9',
    md: 'w-12 h-12',
    lg: 'w-20 h-20',
    xl: 'w-32 h-32',
  };

  const imageMap = {
    gold: '/images/sunrise-logo-gold.png',
    white: '/images/sunrise-logo-white.png',
    badge: '/images/sunrise-badge-dark.png',
    original: '/images/sunrise-logo-original.jpg',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Authentic Vintage Car Emblem Container */}
      <div 
        className={`relative flex-shrink-0 ${sizeMap[size]} rounded-full bg-[#0E0E0E] p-1 border border-gold/40 shadow-[0_0_12px_rgba(245,184,0,0.2)] transition-transform duration-300 hover:scale-105 flex items-center justify-center`}
      >
        <img
          src={imageMap[variant]}
          alt="Sunrise Motor's Vintage Logo"
          className="w-full h-full object-contain filter drop-shadow-[0_1px_4px_rgba(245,184,0,0.4)]"
        />
      </div>

      {showText && (
        <div className="flex flex-col justify-center min-w-0">
          <span className="font-heading text-lg sm:text-xl font-black tracking-wider text-white whitespace-nowrap leading-tight">
            SUNRISE <span className="text-gold">MOTOR WORK'S</span>
          </span>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-zinc-400 font-semibold whitespace-nowrap flex items-center gap-1.5 mt-0.5">
            <span>Car Repair & Detailing</span>
            <span className="w-1 h-1 rounded-full bg-gold"></span>
            <span className="text-gold font-bold">Since 2010</span>
          </span>
        </div>
      )}
    </div>
  );
};
