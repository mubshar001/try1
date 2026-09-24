import React from 'react';
import { VisualAsset } from './VisualAsset';
import { AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export const BeforeAfterSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-sky-400 block mb-2">
            Non-Invasive Diagnostic Case Study
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Before & After: Pinpoint Acoustic Precision
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Illustrative diagnostic case simulation showing how non-invasive acoustic and thermal detection avoids the disaster of exploratory demolition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-10">
          {/* Before Card */}
          <div className="bg-slate-800/80 rounded-2xl p-6 border border-red-500/30 flex flex-col">
            <div className="aspect-[4/3] w-full rounded-xl overflow-hidden mb-6">
              <VisualAsset
                type="before"
                alt="Concealed residential pipe leak causing foundation moisture and wall staining before pinpoint detection"
                className="w-full h-full"
              />
            </div>
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 rounded-lg bg-red-500/10 text-red-400 shrink-0 mt-0.5">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Before: Hidden Water Damage
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Homeowners face unexplained hot spots, moisture pooling beneath baseboards, skyrocketing water bills, and the threat of arbitrary foundation excavation.
                </p>
              </div>
            </div>
            <ul className="text-xs text-slate-400 space-y-2 mt-auto pt-4 border-t border-slate-700/60">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                Unchecked subterranean erosion under concrete slab
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                Uncertainty over where pipes run through the foundation
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                Risk of massive drywall and flooring demolition costs
              </li>
            </ul>
          </div>

          {/* After Card */}
          <div className="bg-slate-800/80 rounded-2xl p-6 border border-emerald-500/30 flex flex-col">
            <div className="aspect-[4/3] w-full rounded-xl overflow-hidden mb-6">
              <VisualAsset
                type="after"
                alt="Targeted spot repair and dry restored slab after non-invasive acoustic leak location"
                className="w-full h-full"
              />
            </div>
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  After: Surgical Spot Restoration
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Our ultrasonic ground sensors isolate the leak coordinate within inches. Only a single 12-inch access point is needed, keeping 99% of your flooring intact.
                </p>
              </div>
            </div>
            <ul className="text-xs text-slate-400 space-y-2 mt-auto pt-4 border-t border-slate-700/60">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Permanent, certified repair with zero unnecessary excavation
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Dry foundation footer with foundation settlement prevented
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Complete documentation provided for insurance and utility credits
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <a
            href="tel:+13527038206"
            className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl transition-colors shadow-lg shadow-sky-500/20 text-sm sm:text-base"
          >
            <span>Stop Active Water Damage — Call (352) 703-8206</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
