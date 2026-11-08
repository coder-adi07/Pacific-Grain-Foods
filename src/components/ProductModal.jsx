import React from 'react';
import { X, ShieldCheck, Package, Layers, Sparkles, ArrowRight, Tag, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ProductModal({ product, onClose }) {
  const navigate = useNavigate();

  if (!product) return null;

  const handleRequestQuote = () => {
    onClose();
    navigate(`/contact?product=${encodeURIComponent(product.name)}&category=${product.categoryKey}&type=quote`);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Category Color Bar */}
        <div className="bg-gradient-to-r from-pgf-burgundy to-pgf-burgundy-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-pgf-gold text-gray-900 mb-2">
            {product.categoryName}
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-wide">
            {product.name}
          </h3>

          {product.aka && (
            <p className="text-white/80 text-sm mt-1 flex items-center gap-1.5">
              <span className="font-medium text-pgf-gold">Also Known As:</span> {product.aka}
            </p>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Item Identification & Certification Badges */}
          <div className="flex flex-wrap gap-2.5 items-center">
            {product.itemId && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold bg-gray-100 text-gray-800 border border-gray-200">
                <Tag className="w-3.5 h-3.5 text-pgf-burgundy" />
                Conventional SKU: {product.itemId}
              </span>
            )}
            {product.organicId && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Organic SKU: {product.organicId}
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              Certified Kosher
            </span>
          </div>

          {/* Flavor Profile & Description */}
          {product.description && (
            <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#EDE4D5]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-pgf-burgundy mb-1.5 flex items-center gap-1.5">
                <Info className="w-4 h-4" />
                Flavor Profile & Culinary Notes
              </h4>
              <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
                {product.description}
              </p>
            </div>
          )}

          {/* Tidbit / Lore from Official Database */}
          {product.tidbits && (
            <div className="bg-amber-50/80 p-4 rounded-xl border border-amber-200/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-1 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-pgf-gold" />
                Ingredient Highlight & Lore
              </h4>
              <p className="text-sm text-amber-950 italic">
                "{product.tidbits}"
              </p>
            </div>
          )}

          {/* Available Packaging Options */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-1.5">
              <Package className="w-4 h-4 text-pgf-burgundy" />
              Available Packaging & Supply Formats
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-lg border border-gray-200 bg-white">
                <div className="text-xs font-bold text-gray-900">Retail Private Label</div>
                <div className="text-xs text-gray-600 mt-0.5">1/2, 1, 2, 5 & 10 lb. Stand-Up Pouches with Ziplock & Gusset</div>
              </div>
              <div className="p-3 rounded-lg border border-gray-200 bg-white">
                <div className="text-xs font-bold text-gray-900">Commercial Bulk</div>
                <div className="text-xs text-gray-600 mt-0.5">25 lb. & 50 lb. 3-Ply Kraft Paper Bags with Poly Inner Liners</div>
              </div>
              <div className="p-3 rounded-lg border border-gray-200 bg-white">
                <div className="text-xs font-bold text-gray-900">Industrial Super Tote</div>
                <div className="text-xs text-gray-600 mt-0.5">1-Ton (2,000 lb.) FIBC Bulk Sacks with Discharge Spouts</div>
              </div>
            </div>
          </div>

          {/* Custom Blending Capability Note */}
          <div className="text-xs text-gray-600 flex items-start gap-2 bg-gray-50 p-3 rounded-lg border border-gray-200">
            <Layers className="w-4 h-4 text-pgf-burgundy shrink-0 mt-0.5" />
            <span>
              <strong>Custom Formulations:</strong> Need custom mixing, roasting, or specific grading? Pacific Grain & Foods offers custom blending runs starting at a low <strong>500 lb. minimum</strong>.
            </span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-gray-50 p-5 sm:p-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="text-xs text-gray-500">
            Bulk pricing quotes confirmed within 24 hours.
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-gray-900"
            >
              Close
            </button>
            <button
              onClick={handleRequestQuote}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-pgf-burgundy hover:bg-pgf-burgundy-800 text-white rounded-lg font-bold text-sm shadow-md transition-colors"
            >
              <span>Request Quote for {product.name.split(',')[0]}</span>
              <ArrowRight className="w-4 h-4 text-pgf-gold" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

