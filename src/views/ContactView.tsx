import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, AlertTriangle, Send, CheckCircle2, ChevronRight } from 'lucide-react';
import { SchemaJsonLd } from '../components/SchemaJsonLd';
import { InteractiveMap } from '../components/InteractiveMap';
import { ALL_SERVICES } from '../data/servicesData';

interface ContactViewProps {
  lang: 'en' | 'es';
  onNavigate: (path: string) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ lang, onNavigate }) => {
  const prefix = lang === 'es' ? '/es' : '';
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: 'slab-leak-detection',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const breadcrumbs = [
    { name: 'Home', url: 'https://leakdetectionleesburg.com/' },
    { name: 'Contact', url: 'https://leakdetectionleesburg.com/contact/' }
  ];

  return (
    <div className="bg-white text-slate-800 py-8">
      <SchemaJsonLd
        type="contact"
        title="Contact Leesburg Leak Detection | 24/7 Water & Slab Leak Dispatch"
        description="Contact Leesburg Leak Detection at 719 Pa Walker Rd, Leesburg, FL 34748. Call (352) 703-8206 for 24/7 emergency water leak dispatch arriving in 30-45 minutes."
        url="https://leakdetectionleesburg.com/contact/"
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <a href={`${prefix}/`} onClick={(e) => { e.preventDefault(); onNavigate(prefix || '/'); }} className="hover:text-sky-600">Home</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-sky-600 font-semibold">Contact & Dispatch</span>
        </nav>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 block mb-2">
            24/7 Customer Care & Rapid Dispatch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4">
            Contact Leesburg Leak Detection
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Need immediate leak detection or want to schedule a comprehensive whole-home plumbing diagnostic? We are available 24 hours a day, 7 days a week.
          </p>
        </div>

        {/* Emergency Callout Card */}
        <div className="bg-gradient-to-r from-red-600 to-rose-700 text-white rounded-2xl p-6 sm:p-8 mb-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 rounded-xl text-white shrink-0">
              <AlertTriangle className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-white mb-1">
                Facing an Urgent Active Water Leak?
              </h2>
              <p className="text-xs sm:text-sm text-red-100">
                Confirmed arrival time is 30 to 45 minutes across Leesburg and Lake County (call to confirm immediate availability).
              </p>
            </div>
          </div>
          <a
            href="tel:+13527038206"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-8 py-3.5 rounded-full text-sm sm:text-base shadow-lg shadow-black/10 whitespace-nowrap transition-all hover:scale-[1.02]"
          >
            <Phone className="w-4 h-4 fill-slate-950" />
            <span>Call (352) 703-8206</span>
          </a>
        </div>

        {/* Grid: NAP Details & Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Left: Strict NAP & Hours */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50/80 rounded-3xl p-8 border border-slate-200/80 shadow-xs">
              <h2 className="text-xl font-extrabold text-slate-900 mb-6">
                Official Business Information (NAP)
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Physical Facility:</strong>
                    <span>719 Pa Walker Rd, Leesburg, FL 34748</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Primary Telephone (24/7):</strong>
                    <a href="tel:+13527038206" className="text-sky-700 hover:text-sky-800 font-extrabold text-base font-mono">
                      (352) 703-8206
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Email Dispatch:</strong>
                    <a href="mailto:info@leakdetectionleesburg.com" className="text-sky-700 hover:underline">
                      info@leakdetectionleesburg.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Operating Schedule:</strong>
                    <span className="text-emerald-600 font-semibold">24/7 Available (Open All Holidays)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/80 text-xs text-slate-600 space-y-2">
              <span className="font-bold text-slate-900 block">Licensing & Regulatory Compliance:</span>
              <p>State of Florida Certified Plumbing Contractor #CFC142890.</p>
              <p>Bonded & Fully Insured for Residential & Commercial Subsurface Detection.</p>
            </div>
          </div>

          {/* Right: Inspection Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50/80 rounded-3xl p-8 border border-slate-200/80 shadow-xs">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-2">
                Request an On-Site Inspection
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Fill out the form below or call directly. For immediate emergencies, calling gives you confirmed arrival in 30-45 minutes.
              </p>

              {formSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="text-xl font-bold text-slate-900">Inspection Request Received!</h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Thank you. Our dispatch coordinator is reviewing your details and will call you back within 15 minutes. For immediate emergencies, please call (352) 703-8206.
                  </p>
                  <a
                    href="tel:+13527038206"
                    className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold px-6 py-3 rounded-full text-sm shadow-xs"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Us Directly: (352) 703-8206</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-sky-500 shadow-2xs"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Telephone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(352) 555-0199"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-sky-500 shadow-2xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Email Address</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-sky-500 shadow-2xs"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Service Needed *</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-sky-500 shadow-2xs"
                      >
                        {ALL_SERVICES.map((s) => (
                          <option key={s.slug} value={s.slug}>
                            {s.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Property Address in Leesburg / Lake County</label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="Street address and ZIP code"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-sky-500 shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Describe the Water Leak or Warning Signs</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="E.g., warm floor spot, spinning meter, sudden high water bill, soggy lawn near driveway..."
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-sky-500 shadow-2xs"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black py-3.5 px-6 rounded-full text-sm flex items-center justify-center gap-2 shadow-xs transition-all hover:scale-[1.01] cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inspection Request</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Large / Full Map */}
        <div className="bg-slate-50/70 rounded-3xl p-8 border border-slate-200/80 mb-12 shadow-xs">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-2">
            Our Central Leesburg Facility & Lake County Dispatch Map
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mb-6">
            Stationed at 719 Pa Walker Rd, Leesburg, FL 34748 with instant access to US-27, US-441, and County Road 44 East.
          </p>
          <InteractiveMap />
        </div>
      </div>
    </div>
  );
};
