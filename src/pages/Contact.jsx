import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  MapPin, Phone, Mail, Clock, Send, ShieldCheck, CheckCircle2, 
  Building2, Package, Layers, Sparkles, AlertCircle, Check, X
} from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const prefillProduct = searchParams.get('product') || '';
  const prefillService = searchParams.get('service') || '';
  const prefillType = searchParams.get('type') || '';

  const [activeTab, setActiveTab] = useState('main'); // 'main' or 'nutbutter'

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    inquiryType: prefillService === 'packaging' ? 'Private Label Packaging' : 'Bulk Ingredient Supply',
    productInterest: prefillProduct || '',
    packagingType: '25 or 50 lb. 3-Ply Kraft Bags',
    orderVolume: '2,000 - 10,000 lbs.',
    timeline: 'Within 30 Days',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  useEffect(() => {
    if (prefillProduct) {
      setFormData(prev => ({
        ...prev,
        productInterest: prefillProduct,
        message: `I would like to request availability and a formal price quote for: ${prefillProduct}.`
      }));
    }
  }, [prefillProduct]);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company / Business Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Business Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData, referenceId: `PGF-${Math.floor(100000 + Math.random() * 900000)}` });
    }, 600);
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* Header */}
      <section className="bg-[#1A050B] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-vignette opacity-80"></div>
        <div className="relative z-10 max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-pgf-gold text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-pgf-gold" />
            Fresno Corporate Offices & Operations
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-white tracking-tight">
            Contact Us & Request a Quote
          </h1>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
            Connect directly with our commercial sales desk and processing team in Fresno, California. Whether you need a truckload commodity quote, custom recipe blending, or private label retail packaging, we're here to assist.
          </p>
        </div>
      </section>

      {/* Main Grid: Info & Maps on Left, Quote Form on Right */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Cards, Operating Hours, Map Embeds */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Contact Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
              <h2 className="text-xl font-serif font-bold text-gray-900 border-b border-gray-100 pb-3">
                Direct Contact Information
              </h2>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-pgf-burgundy/10 text-pgf-burgundy flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Commercial Sales Desk</div>
                    <a href="tel:5592762580" className="text-pgf-burgundy font-bold text-base hover:underline">
                      (559) 276-2580
                    </a>
                    <div className="text-xs text-gray-500 mt-0.5">Fax: (559) 276-2936</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-pgf-burgundy/10 text-pgf-burgundy flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Direct Business Email</div>
                    <a href="mailto:leep@pacificgrainfoods.com" className="text-pgf-burgundy font-semibold hover:underline break-all">
                      leep@pacificgrainfoods.com
                    </a>
                    <div className="text-xs text-gray-500 mt-0.5">Attn: Lee Perkins, Managing Partner</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-pgf-burgundy/10 text-pgf-burgundy flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Operating Hours (PST)</div>
                    <div className="text-xs text-gray-700 mt-0.5">
                      <strong>Office:</strong> Mon &ndash; Fri 8:00 AM &ndash; 4:00 PM
                    </div>
                    <div className="text-xs text-gray-700">
                      <strong>Shipping / Receiving:</strong> Mon &ndash; Fri 7:00 AM &ndash; 2:00 PM
                    </div>
                    <div className="text-xs text-gray-500 italic mt-0.5">
                      Closed Saturday & Sunday
                    </div>
                  </div>
                </div>
              </div>

              {/* Retail Outlet note */}
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 leading-relaxed">
                <strong>Retail Store Notice:</strong> Except for our small retail storefront located at our main Shaw Ave facility in Fresno, we do not sell products directly to the general public.
              </div>
            </div>

            {/* Locations & Google Map Toggle */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-5">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <h3 className="text-lg font-serif font-bold text-gray-900">
                  Facility Locations
                </h3>
                {/* Tabs */}
                <div className="flex rounded-lg bg-gray-100 p-1 text-xs font-bold">
                  <button
                    onClick={() => setActiveTab('main')}
                    className={`px-3 py-1 rounded-md transition-colors ${
                      activeTab === 'main' ? 'bg-white text-pgf-burgundy shadow-xs' : 'text-gray-600'
                    }`}
                  >
                    Main HQ
                  </button>
                  <button
                    onClick={() => setActiveTab('nutbutter')}
                    className={`px-3 py-1 rounded-md transition-colors ${
                      activeTab === 'nutbutter' ? 'bg-white text-pgf-burgundy shadow-xs' : 'text-gray-600'
                    }`}
                  >
                    Nut Butter Plant
                  </button>
                </div>
              </div>

              {activeTab === 'main' ? (
                <div className="space-y-3">
                  <div className="flex items-start gap-2 text-xs">
                    <MapPin className="w-4 h-4 text-pgf-burgundy shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 text-sm">Main Corporate Office & Production:</strong>
                      <div className="text-gray-600">4067 W Shaw Ave #116, Fresno, CA 93722</div>
                    </div>
                  </div>
                  <div className="rounded-xl overflow-hidden border border-gray-200 h-64 w-full">
                    <iframe
                      src={companyInfo.locations[0].mapEmbedUrl}
                      title="Pacific Grain & Foods Main Office Map"
                      className="w-full h-full border-0"
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-start gap-2 text-xs">
                    <MapPin className="w-4 h-4 text-pgf-burgundy shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 text-sm">Nut Butter & Processing Plant:</strong>
                      <div className="text-gray-600">4539 E Annadale Ave, Fresno, CA 93725</div>
                    </div>
                  </div>
                  <div className="rounded-xl overflow-hidden border border-gray-200 h-64 w-full">
                    <iframe
                      src={companyInfo.locations[1].mapEmbedUrl}
                      title="Pacific Grain & Foods Nut Butter Plant Map"
                      className="w-full h-full border-0"
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Comprehensive Business Inquiry / Quote Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-gray-200 shadow-xl space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-pgf-burgundy bg-pgf-burgundy/10 px-3 py-1 rounded-full mb-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-pgf-gold" />
                  Commercial Quote Request
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">
                  Request a Formal Price & Volume Quote
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Fill in your product and volume parameters below. Our sales desk reviews quotes daily and responds promptly with confirmed commodity rates.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none transition-all ${
                        errors.fullName ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-gray-300 focus:border-pgf-burgundy focus:ring-2 focus:ring-pgf-burgundy/20'
                      }`}
                    />
                    {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Company / Organization <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Valley Food Distributing, Inc."
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none transition-all ${
                        errors.companyName ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-gray-300 focus:border-pgf-burgundy focus:ring-2 focus:ring-pgf-burgundy/20'
                      }`}
                    />
                    {errors.companyName && <p className="text-xs text-red-500 mt-1">{errors.companyName}</p>}
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Business Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="s.jenkins@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none transition-all ${
                        errors.email ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-gray-300 focus:border-pgf-burgundy focus:ring-2 focus:ring-pgf-burgundy/20'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none transition-all ${
                        errors.phone ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-gray-300 focus:border-pgf-burgundy focus:ring-2 focus:ring-pgf-burgundy/20'
                      }`}
                    />
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Service Type & Product Interest */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm outline-none focus:border-pgf-burgundy focus:ring-2 focus:ring-pgf-burgundy/20 bg-white"
                    >
                      <option value="Bulk Ingredient Supply">Bulk Ingredient Supply</option>
                      <option value="Private Label Packaging">Private Label Retail Co-Packing</option>
                      <option value="Custom Blending & Formulation">Custom Recipe Blending (500 lb. min)</option>
                      <option value="Nut & Seed Butter Contract">Nut Butter Processing (Annadale Ave)</option>
                      <option value="Institutional / Food Service">State Institutional / Food Service</option>
                      <option value="General Commercial Inquiry">General Commercial Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Specific Product(s) of Interest
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Adzuki Beans, Quinoa, Chia, Basmati..."
                      value={formData.productInterest}
                      onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm outline-none focus:border-pgf-burgundy focus:ring-2 focus:ring-pgf-burgundy/20"
                    />
                  </div>
                </div>

                {/* Packaging & Order Volume */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Required Packaging Format
                    </label>
                    <select
                      value={formData.packagingType}
                      onChange={(e) => setFormData({ ...formData, packagingType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm outline-none focus:border-pgf-burgundy focus:ring-2 focus:ring-pgf-burgundy/20 bg-white"
                    >
                      <option value="25 or 50 lb. 3-Ply Kraft Bags">25 or 50 lb. 3-Ply Kraft Bags (Bulk Standard)</option>
                      <option value="1-Ton (2,000 lb.) FIBC Super Totes">1-Ton (2,000 lb.) FIBC Super Totes</option>
                      <option value="Retail Stand-Up Pouches (1, 2, 3, 5, 10 lbs)">Retail Stand-Up Pouches with Ziplock</option>
                      <option value="P.E.T. Plastic Jars / Canisters">P.E.T. Plastic Jars / Canisters</option>
                      <option value="Bulk Pails / Drums (Nut Butters)">Bulk Pails / Drums (Nut Butters)</option>
                      <option value="Not Sure / Please Consult">Not Sure / Please Consult with PGF Team</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Estimated Volume
                    </label>
                    <select
                      value={formData.orderVolume}
                      onChange={(e) => setFormData({ ...formData, orderVolume: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm outline-none focus:border-pgf-burgundy focus:ring-2 focus:ring-pgf-burgundy/20 bg-white"
                    >
                      <option value="500 - 2,000 lbs. (Minimum Blending Run)">500 &ndash; 2,000 lbs. (Minimum Blending Run)</option>
                      <option value="2,000 - 10,000 lbs. (LTL Pallets)">2,000 &ndash; 10,000 lbs. (LTL Pallets)</option>
                      <option value="10,000 - 40,000 lbs. (Full Truckload)">10,000 &ndash; 40,000 lbs. (Full Truckload FTL)</option>
                      <option value="Multi-Truckload / Rail Car Lot">Multi-Truckload / Rail Car Lot</option>
                      <option value="Ongoing Scheduled Contract">Ongoing Scheduled Annual Contract</option>
                    </select>
                  </div>
                </div>

                {/* Additional Message / Specs */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Specifications, Certifications, or Additional Notes
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Specify any certification requirements (Certified Organic, Kosher Pareve), custom grain proportions, delivery destination, or packaging artwork status..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm outline-none focus:border-pgf-burgundy focus:ring-2 focus:ring-pgf-burgundy/20"
                  ></textarea>
                </div>

                {/* Terms / Confirmation Notice */}
                <div className="text-[11px] text-gray-500 bg-gray-50 p-3 rounded-xl border border-gray-200">
                  <strong>Terms & Conditions Note:</strong> Prices are reviewed every six months and may be adjusted depending upon commodity and market factors. For some retail/wholesale and all bulk orders from 100 lbs. to container lots, quotes given are confirmed by the Sales or Bulk Order desks at (559) 276-2580.
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-pgf-burgundy hover:bg-pgf-burgundy-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 text-base"
                >
                  {isSubmitting ? (
                    <span>Processing Submission...</span>
                  ) : (
                    <>
                      <span>Submit Quote Request to Sales Desk</span>
                      <Send className="w-4 h-4 text-pgf-gold" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* Confirmation Modal (Demonstration State) */}
      {submittedData && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-5 shadow-2xl border border-gray-100 animate-fadeIn">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-2xl font-serif font-bold text-gray-900">
                Quote Request Registered
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Thank you, <strong>{submittedData.fullName}</strong>. Your inquiry has been generated with reference code:
              </p>
              <div className="inline-block px-3 py-1 rounded bg-pgf-burgundy/10 text-pgf-burgundy font-mono font-bold text-sm">
                {submittedData.referenceId}
              </div>
            </div>

            <div className="bg-[#FAF8F5] p-4 rounded-xl border border-gray-200 text-xs space-y-2">
              <div><strong>Company:</strong> {submittedData.companyName}</div>
              <div><strong>Email:</strong> {submittedData.email}</div>
              <div><strong>Phone:</strong> {submittedData.phone}</div>
              <div><strong>Inquiry Type:</strong> {submittedData.inquiryType}</div>
              {submittedData.productInterest && (
                <div><strong>Product Interest:</strong> {submittedData.productInterest}</div>
              )}
              <div><strong>Packaging Format:</strong> {submittedData.packagingType}</div>
              <div><strong>Estimated Volume:</strong> {submittedData.orderVolume}</div>
            </div>

            {/* Demo Notice */}
            <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-[11px] text-amber-900">
              <strong>Website Redesign Prototype Notice:</strong> This is a demonstration submission state for the Pacific Grain & Foods website redesign concept. Inquiries are validated in your browser. For actual live commercial orders, contact the real Fresno office directly at <strong>(559) 276-2580</strong> or <strong>leep@pacificgrainfoods.com</strong>.
            </div>

            <button
              onClick={() => setSubmittedData(null)}
              className="w-full py-3 bg-pgf-burgundy text-white font-bold rounded-xl text-sm hover:bg-pgf-burgundy-800 transition-colors"
            >
              Close Confirmation
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

