import React from 'react';
import { Tag, Sparkles, ChevronRight, ShieldCheck, Info } from 'lucide-react';

export default function ProductCard({ product, onSelect }) {
  return (
    <div 
      onClick={() => onSelect(product)}
      className="group bg-white rounded-xl border border-gray-200 hover:border-pgf-burgundy/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer transform hover:-translate-y-1"
    >
      {/* Category banner accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-pgf-burgundy via-pgf-gold to-pgf-green opacity-90 group-hover:opacity-100 transition-opacity"></div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Badges */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-pgf-burgundy bg-pgf-burgundy/10 px-2 py-0.5 rounded">
              {product.categoryName.split('&')[0]}
            </span>

            <div className="flex items-center gap-1.5">
              {product.hasOrganic && (
                <span 
                  title="USDA Certified Organic Available"
                  className="inline-flex items-center gap-0.5 text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200"
                >
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  ORGANIC
                </span>
              )}
              {product.itemId && (
                <span className="text-[11px] font-mono text-gray-700 bg-gray-100 px-1.5 py-0.5 rounded">
                  SKU: {product.itemId}
                </span>
              )}
            </div>
          </div>

          {/* Product Name */}
          <h3 className="text-lg font-serif font-bold text-gray-900 group-hover:text-pgf-burgundy transition-colors leading-snug">
            {product.name}
          </h3>

          {/* AKA */}
          {product.aka && (
            <div className="text-xs text-gray-700 mt-1 italic">
              <span className="font-semibold text-gray-800 not-italic">AKA:</span> {product.aka}
            </div>
          )}

          {/* Short description or tidbit */}
          {product.tidbits ? (
            <p className="text-xs text-gray-800 line-clamp-2 mt-2.5 leading-relaxed bg-[#FBF9F5] p-2 rounded border border-gray-100">
              "{product.tidbits}"
            </p>
          ) : product.description ? (
            <p className="text-xs text-gray-800 line-clamp-2 mt-2.5 leading-relaxed">
              {product.description}
            </p>
          ) : (
            <p className="text-xs text-gray-600 mt-2.5">
              Available in retail private label & commercial bulk bags (25/50 lbs. & 1-ton totes).
            </p>
          )}
        </div>

        {/* Card Footer */}
        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-pgf-burgundy group-hover:text-pgf-burgundy-800">
          <span className="flex items-center gap-1 text-gray-700 group-hover:text-pgf-burgundy">
            <Info className="w-3.5 h-3.5" />
            View Specifications
          </span>
          <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform font-bold text-pgf-burgundy">
            Inquire
            <ChevronRight className="w-4 h-4 text-pgf-gold" />
          </span>
        </div>
      </div>
    </div>
  );
}

