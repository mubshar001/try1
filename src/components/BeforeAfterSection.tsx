import React from 'react';
import { VisualAsset } from './VisualAsset';
import { AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export const BeforeAfterSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 block mb-2">
            — DIAGNOSTIC CASE STUDY —
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
            Before & After: <span className="text-sky-600">Pinpoint Acoustic Precision</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Illustrative diagnostic case simulation showing how non-invasive acoustic and thermal detection avoids the disaster of exploratory demolition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-12">
          {/* Before Card */}
          <div className="bg-slate-50/70 rounded-3xl p-6 sm:p-8 border border-red-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden mb-6 shadow-sm border border-slate-200">
                <VisualAsset
                  type="before"
                  alt="Concealed residential pipe leak causing foundation moisture and wall staining before pinpoint detection"
                  className="w-full h-full"
                />
              </div>
              <div className="flex items-start gap-3.5 mb-4">
                <div className="p-2.5 rounded-xl bg-red-100 text-red-600 shrink-0 mt-0.5">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">
                    Before: Hidden Water Damage
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Homeowners face unexplained hot spots, moisture pooling beneath baseboards, skyrocketing water bills, and the threat of arbitrary foundation excavation.
                  </p>
                </div>
              </div>
            </div>

            <ul className="text-xs text-slate-500 space-y-2.5 pt-4 border-t border-slate-200/80">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                <span>Unchecked subterranean erosion under concrete slab</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                <span>Uncertainty over where pipes run through the foundation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                <span>Risk of massive drywall and flooring demolition costs</span>
              </li>
            </ul>
          </div>

          {/* After Card */}
          <div className="bg-slate-50/70 rounded-3xl p-6 sm:p-8 border border-emerald-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden mb-6 shadow-sm border border-slate-200">
                <VisualAsset
                  type="after"
                  alt="Targeted spot repair and dry restored slab after non-invasive acoustic leak location"
                  className="w-full h-full"
                />
              </div>
              <div className="flex items-start gap-3.5 mb-4">
                <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-600 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">
                    After: Surgical Spot Restoration
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Our ultrasonic ground sensors isolate the leak coordinate within inches. Only a single 12-inch access point is needed, keeping 99% of your flooring intact.
                  </p>
                </div>
              </div>
            </div>

            <ul className="text-xs text-slate-500 space-y-2.5 pt-4 border-t border-slate-200/80">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                <span>Permanent, certified repair with zero unnecessary excavation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                <span>Dry foundation footer with foundation settlement prevented</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                <span>Complete documentation provided for insurance and utility credits</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <a
            href="tel:+13527038206"
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold px-8 py-3.5 rounded-full transition-all hover:scale-[1.02] shadow-sm text-sm sm:text-base"
          >
            <span>Stop Active Water Damage — Call (352) 703-8206</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
