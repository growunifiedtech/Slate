'use client';

import React, { useState } from 'react';
import { BRAND_INFO } from '@/lib/constants';
import { Product } from '@/data/products';
import { Send, MessageSquare, CheckCircle, MapPin, Mail, Phone, UploadCloud, FileCheck } from 'lucide-react';

interface BulkInquiryFormProps {
  preselectedProduct?: Product | null;
}

interface InquiryFormData {
  fullName: string;
  companyName: string;
  email: string;
  whatsappNumber: string;
  country: string;
  category: string;
  productsRequired: string;
  estimatedQuantity: string;
  privateLabel: string;
  message: string;
}

export default function BulkInquiryForm({ preselectedProduct }: BulkInquiryFormProps) {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    companyName: '',
    email: '',
    whatsappNumber: '',
    country: 'India',
    category: preselectedProduct?.category || 'WINTERS',
    productsRequired: preselectedProduct?.name || '',
    estimatedQuantity: '100 - 500 pcs',
    privateLabel: 'Yes',
    message: '',
  });

  const [fileName, setFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <section id="contact" className="relative z-20 bg-[#040507] text-[#f8fafc] py-28 sm:py-36 px-5 sm:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Contact Banner Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-white/10 bg-white/5 text-[10px] font-mono tracking-widest text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            DIRECT B2B MANUFACTURING INQUIRIES
          </div>

          <h2 className="text-3xl sm:text-7xl font-bold tracking-tight text-white uppercase font-display mb-4">
            READY TO BUILD YOUR COLLECTION?
          </h2>

          <p className="text-slate-400 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed mb-8">
            Tell us what you need and let&apos;s discuss your bulk manufacturing requirements. Custom tech packs, sampling, and high-volume line bookings.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#inquiry-form"
              className="px-8 py-3.5 border border-white bg-white text-black hover:bg-slate-200 font-mono text-xs tracking-widest uppercase font-bold transition-all shadow-2xl"
            >
              REQUEST A QUOTE
            </a>

            <a
              href={BRAND_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-white/20 bg-white/5 hover:bg-white/10 text-white font-mono text-xs tracking-widest uppercase flex items-center gap-2 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WHATSAPP US</span>
            </a>
          </div>
        </div>

        {/* Form & Facility Info Grid */}
        <div id="inquiry-form" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Plant Coordinates & Logistics (5 cols) */}
          <div className="lg:col-span-5 bg-[#080b11] border border-white/10 p-8 space-y-8">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
                PRODUCTION HEADQUARTERS
              </span>
              <h3 className="text-xl font-bold font-mono tracking-widest text-white uppercase mt-1 mb-4">
                SLATE APPARELS
              </h3>
              <p className="text-xs font-mono text-slate-400 uppercase leading-relaxed">
                {BRAND_INFO.businessType}
              </p>
            </div>

            <div className="space-y-6 text-xs font-mono">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-500 block mb-1">PLANT LOCATION:</span>
                  <p className="text-slate-200 leading-relaxed">
                    {BRAND_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-500 block mb-1">DIRECT WHATSAPP:</span>
                  <a
                    href={BRAND_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline text-sm font-bold tracking-wider"
                  >
                    {BRAND_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-500 block mb-1">OFFICIAL EMAIL:</span>
                  <a
                    href={`mailto:${BRAND_INFO.email}`}
                    className="text-white hover:underline tracking-wider"
                  >
                    {BRAND_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Business Terms Notice */}
            <div className="p-4 bg-black/60 border border-white/10 text-[11px] font-mono text-slate-400 space-y-2">
              <div className="text-white font-bold tracking-widest">BULK ORDER STANDARDS:</div>
              <div>• Minimum order quantities structured per style & colorway.</div>
              <div>• Sampling fee adjustable against approved bulk order production.</div>
              <div>• Nationwide transport & global sea/air container logistics.</div>
            </div>
          </div>

          {/* Right Column: Interactive B2B Lead-Generation Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#080b11] border border-white/15 p-8 sm:p-10">
            {isSubmitted ? (
              <div className="py-16 text-center flex flex-col items-center">
                <div className="w-16 h-16 border border-white bg-white text-black flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-mono tracking-widest text-white uppercase mb-3">
                  INQUIRY RECEIVED
                </h3>
                <p className="text-sm font-mono text-slate-300 tracking-wider uppercase max-w-md mb-6">
                  THANK YOU. OUR PRODUCTION TEAM WILL CONTACT YOU SHORTLY.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 border border-white/30 text-xs font-mono tracking-widest uppercase hover:bg-white hover:text-black transition-all"
                >
                  SUBMIT ANOTHER INQUIRY
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold font-mono tracking-widest text-white uppercase mb-1">
                    BULK MANUFACTURING INQUIRY
                  </h3>
                  <p className="text-xs text-slate-400 font-light">
                    Fill in your project specifications for quote formulation and lead times.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-2.5 bg-black/60 border border-white/15 text-white font-mono text-xs focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-2">
                      Company / Brand Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Slate Studio"
                      className="w-full px-4 py-2.5 bg-black/60 border border-white/15 text-white font-mono text-xs focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="brand@domain.com"
                      className="w-full px-4 py-2.5 bg-black/60 border border-white/15 text-white font-mono text-xs focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-2">
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.whatsappNumber}
                      onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                      placeholder="+91 95990 84873"
                      className="w-full px-4 py-2.5 bg-black/60 border border-white/15 text-white font-mono text-xs focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-2">
                      Country *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="India / UAE / UK / USA"
                      className="w-full px-4 py-2.5 bg-black/60 border border-white/15 text-white font-mono text-xs focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-2">
                      Product Category *
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-2.5 bg-black border border-white/15 text-white font-mono text-xs focus:outline-none focus:border-white transition-colors"
                    >
                      <option value="WINTERS">WINTERS</option>
                      <option value="SUMMERS">SUMMERS</option>
                      <option value="TOP WEAR">TOP WEAR</option>
                      <option value="BOTTOM WEAR">BOTTOM WEAR</option>
                      <option value="CUSTOM TECH PACK">CUSTOM TECH PACK / OTHER</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-2">
                      Products Required
                    </label>
                    <input
                      type="text"
                      value={formData.productsRequired}
                      onChange={(e) => setFormData({ ...formData, productsRequired: e.target.value })}
                      placeholder="e.g. Oversized Hoodies, Varsity Jackets"
                      className="w-full px-4 py-2.5 bg-black/60 border border-white/15 text-white font-mono text-xs focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-2">
                      Estimated Quantity *
                    </label>
                    <select
                      value={formData.estimatedQuantity}
                      onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                      className="w-full px-4 py-2.5 bg-black border border-white/15 text-white font-mono text-xs focus:outline-none focus:border-white transition-colors"
                    >
                      <option value="100 - 500 pcs">100 - 500 PIECES</option>
                      <option value="500 - 2,000 pcs">500 - 2,000 PIECES</option>
                      <option value="2,000 - 10,000 pcs">2,000 - 10,000 PIECES</option>
                      <option value="10,000+ pcs">10,000+ PIECES (LARGE SCALE)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-2">
                    Custom / Private Label Required?
                  </label>
                  <div className="flex gap-4">
                    {['Yes', 'No', 'Exploring Options'].map((opt) => (
                      <label key={opt} className="flex items-center gap-2 cursor-pointer text-xs font-mono">
                        <input
                          type="radio"
                          name="privateLabel"
                          value={opt}
                          checked={formData.privateLabel === opt}
                          onChange={(e) => setFormData({ ...formData, privateLabel: e.target.value })}
                          className="accent-white"
                        />
                        <span className="text-slate-300">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* File Upload Reference Simulator */}
                <div>
                  <label className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-2">
                    Upload Tech Pack / Design Reference (Optional)
                  </label>
                  <label className="border border-dashed border-white/20 bg-black/40 hover:border-white/50 p-4 flex flex-col items-center justify-center cursor-pointer transition-colors">
                    <input
                      type="file"
                      onChange={handleFileUpload}
                      className="hidden"
                      accept=".pdf,.png,.jpg,.jpeg,.ai,.psd"
                    />
                    {fileName ? (
                      <div className="flex items-center gap-2 text-xs font-mono text-white">
                        <FileCheck className="w-4 h-4 text-white" />
                        <span>ATTACHED: {fileName}</span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center text-center">
                        <UploadCloud className="w-5 h-5 text-slate-400 mb-1" />
                        <span className="text-xs font-mono text-slate-300">
                          Click to attach Tech Pack / Reference Design (PDF, PNG, JPG)
                        </span>
                      </div>
                    )}
                  </label>
                </div>

                <div>
                  <label className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-2">
                    Message / Specifications
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe specific fabric GSM, delivery deadline, custom wash, or questions..."
                    className="w-full px-4 py-2.5 bg-black/60 border border-white/15 text-white font-mono text-xs focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 border border-white bg-white text-black hover:bg-slate-200 font-mono text-xs tracking-widest uppercase font-bold flex items-center justify-center gap-2 transition-all shadow-xl"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'TRANSMITTING SPECIFICATIONS...' : 'SEND INQUIRY'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
