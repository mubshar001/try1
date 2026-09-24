import React, { useState } from 'react';

interface VisualAssetProps {
  type: 'hero' | 'before' | 'after' | 'acoustic' | 'thermal' | 'pool' | 'emergency' | 'map';
  alt: string;
  className?: string;
}

// Curated high-resolution professional photography
const PHOTO_ASSETS: Record<string, { src: string; fallbackText: string }> = {
  hero: {
    src: 'https://images.pexels.com/photos/8486972/pexels-photo-8486972.jpeg?auto=compress&cs=tinysrgb&w=1600',
    fallbackText: 'Professional Plumbing Service & Diagnostic Van'
  },
  before: {
    src: 'https://images.pexels.com/photos/6419121/pexels-photo-6419121.jpeg?auto=compress&cs=tinysrgb&w=1200',
    fallbackText: 'Concealed Water Leak & Ceiling Moisture Damage'
  },
  after: {
    src: 'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=1200',
    fallbackText: 'Restored Dry Piping & Clean Foundation Finish'
  },
  acoustic: {
    src: 'https://images.pexels.com/photos/8486927/pexels-photo-8486927.jpeg?auto=compress&cs=tinysrgb&w=1200',
    fallbackText: 'Ultrasonic & Acoustic Pipe Inspection Equipment'
  },
  thermal: {
    src: 'https://images.pexels.com/photos/8486915/pexels-photo-8486915.jpeg?auto=compress&cs=tinysrgb&w=1200',
    fallbackText: 'Infrared Thermal Imaging Inspection'
  },
  pool: {
    src: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1200',
    fallbackText: 'Florida In-Ground Swimming Pool & Plumbing Inspection'
  },
  emergency: {
    src: 'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1200',
    fallbackText: '24/7 Rapid Emergency Response Vehicle'
  },
  map: {
    src: 'https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg?auto=compress&cs=tinysrgb&w=1200',
    fallbackText: 'Leesburg & Lake County Geographic Coverage'
  }
};

export const VisualAsset: React.FC<VisualAssetProps> = ({ type, alt, className = '' }) => {
  const [imgError, setImgError] = useState(false);
  const asset = PHOTO_ASSETS[type] || PHOTO_ASSETS.hero;

  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-slate-900 border border-slate-800 shadow-md ${className}`}
    >
      {!imgError ? (
        <img
          src={asset.src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          onError={() => setImgError(true)}
        />
      ) : (
        /* Styled resilient fallback container if external host is blocked */
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950 text-white">
          <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-400/30 text-sky-400 flex items-center justify-center mb-3">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="font-bold text-sm text-slate-100 mb-1">{asset.fallbackText}</span>
          <span className="text-xs text-sky-400 font-mono">Leesburg Leak Detection · Certified Inspection</span>
        </div>
      )}

      {/* Subtle bottom gradient vignette for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

      {/* Badges / Overlays */}
      {type === 'hero' && (
        <div className="absolute bottom-3 left-3 bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800/80 text-[11px] font-mono text-sky-300 font-semibold flex items-center gap-1.5 shadow">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>LEESBURG RAPID RESPONSE FLEET</span>
        </div>
      )}

      {type === 'before' && (
        <div className="absolute top-3 left-3 bg-red-600/90 backdrop-blur-md px-3 py-1 rounded-md text-[11px] font-bold text-white uppercase tracking-wider shadow">
          Before: Active Water Damage
        </div>
      )}

      {type === 'after' && (
        <div className="absolute top-3 left-3 bg-emerald-600/90 backdrop-blur-md px-3 py-1 rounded-md text-[11px] font-bold text-white uppercase tracking-wider shadow">
          After: Surgical Restoration
        </div>
      )}

      {type === 'emergency' && (
        <div className="absolute bottom-3 left-3 bg-red-600/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold text-white flex items-center gap-1.5 shadow">
          <span>24/7 LEESBURG DISPATCH: (352) 703-8206</span>
        </div>
      )}
    </div>
  );
};
