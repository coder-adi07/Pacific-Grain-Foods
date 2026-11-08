import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function QuoteCTA({
  title = "Ready to Partner with California's Premier Dry Ingredient Supplier?",
  subtitle = "Whether you require truckloads of varietal dry beans, private label retail packaging, or custom 500 lb. blending formulations, Pacific Grain & Foods delivers unmatched quality from California's Central Valley.",
  showFeatures = true
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1C060D] via-[#2A0914] to-[#122409] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-b border-pgf-gold/30">
      {/* Decorative grain backdrop accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-pgf-gold/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-pgf-burgundy/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-pgf-gold text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" />
          Direct B2B Commercial Inquiries & Bulk Quotations
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight max-w-3xl mx-auto leading-tight">
          {title}
        </h2>

        <p className="text-base sm:text-lg text-gray-200/90 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        {showFeatures && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left pt-2 pb-2">
            {[
              "500 lb. Low Minimum Blends",
              "172K+ Sq. Ft. Operational Scale",
              "OK Kosher & Organic Certified",
              "Direct Rail & PGF Logistics"
            ].map((feat, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-lg text-xs font-semibold text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-pgf-gold shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            to="/contact?type=quote"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-pgf-gold hover:bg-pgf-gold-600 text-gray-950 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <span>Request a Custom Quote</span>
            <ArrowRight className="w-5 h-5 text-gray-950" />
          </Link>

          <a
            href="tel:5592762580"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all duration-200"
          >
            <Phone className="w-4 h-4 text-pgf-gold" />
            <span>Call Sales Desk: (559) 276-2580</span>
          </a>
        </div>

        <div className="text-xs text-gray-300 pt-2 flex items-center justify-center gap-2">
          <Clock className="w-3.5 h-3.5 text-pgf-gold" />
          <span>Fresno Main Office & Sales Desk: Mon &ndash; Fri 8:00 AM &ndash; 4:00 PM PST</span>
        </div>
      </div>
    </section>
  );
}

