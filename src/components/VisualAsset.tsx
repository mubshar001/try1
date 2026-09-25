import React, { useState } from 'react';

export type VisualAssetType =
  | 'hero'
  | 'hero_plumber'
  | 'plumber_friendly'
  | 'tools'
  | 'technicians_team'
  | 'leak_detection'
  | 'drain_cleaning'
  | 'pipe_repair'
  | 'water_heater'
  | 'toilet_repair'
  | 'bathroom_remodeling'
  | 'before'
  | 'after'
  | 'acoustic'
  | 'thermal'
  | 'pool'
  | 'emergency'
  | 'map';

interface VisualAssetProps {
  type: VisualAssetType;
  alt: string;
  className?: string;
}

// Curated high-resolution professional photography matching the PlumbPro aesthetic
const PHOTO_ASSETS: Record<VisualAssetType, { src: string; fallbackText: string }> = {
  hero: {
    src: 'https://images.pexels.com/photos/8486972/pexels-photo-8486972.jpeg?auto=compress&cs=tinysrgb&w=1600',
    fallbackText: 'Professional Plumbing Service & Diagnostic Van'
  },
  hero_plumber: {
    src: 'https://images.pexels.com/photos/8486974/pexels-photo-8486974.jpeg?auto=compress&cs=tinysrgb&w=1200',
    fallbackText: 'Licensed Plumber Inspecting Pipes Under Sink'
  },
  plumber_friendly: {
    src: 'https://images.pexels.com/photos/8486977/pexels-photo-8486977.jpeg?auto=compress&cs=tinysrgb&w=1200',
    fallbackText: 'Friendly Certified Plumbing Technician'
  },
  tools: {
    src: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=1200',
    fallbackText: 'Precision Plumbing Diagnostics & Hand Tools'
  },
  technicians_team: {
    src: 'https://images.pexels.com/photos/8486927/pexels-photo-8486927.jpeg?auto=compress&cs=tinysrgb&w=1200',
    fallbackText: 'Experienced Local Plumbing Team'
  },
  leak_detection: {
    src: 'https://images.pexels.com/photos/8486915/pexels-photo-8486915.jpeg?auto=compress&cs=tinysrgb&w=800',
    fallbackText: 'Acoustic & Thermal Leak Detection'
  },
  drain_cleaning: {
    src: 'https://images.pexels.com/photos/6419124/pexels-photo-6419124.jpeg?auto=compress&cs=tinysrgb&w=800',
    fallbackText: 'Drain Cleaning & Hydro-Jetting'
  },
  pipe_repair: {
    src: 'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=800',
    fallbackText: 'Pressurized Pipe & Copper Line Repair'
  },
  water_heater: {
    src: 'https://images.pexels.com/photos/8486930/pexels-photo-8486930.jpeg?auto=compress&cs=tinysrgb&w=800',
    fallbackText: 'High-Efficiency Water Heater Diagnostics'
  },
  toilet_repair: {
    src: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
    fallbackText: 'Porcelain Toilet & Valve Repair'
  },
  bathroom_remodeling: {
    src: 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=800',
    fallbackText: 'Precision Bathroom & Fixture Plumbing'
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
      className={`relative overflow-hidden rounded-2xl bg-slate-100 border border-slate-200/80 ${className}`}
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
        /* Styled resilient fallback container */
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-sky-50 via-slate-100 to-sky-100 text-slate-800">
          <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-600 flex items-center justify-center mb-3">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="font-bold text-sm text-slate-800 mb-1">{asset.fallbackText}</span>
          <span className="text-xs text-sky-600 font-mono">Leesburg Leak Detection · Certified Inspection</span>
        </div>
      )}

      {/* Badges for specific operational contexts */}
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
    </div>
  );
};
