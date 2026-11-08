import React from 'react';
import { FileText, Download, ShieldCheck, ArrowRight, BookOpen } from 'lucide-react';
import { commodityGuides } from '../data/commodityGuides';

export default function CommodityGuidesSection() {
  return (
    <section className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-xl space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-100 pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-pgf-burgundy bg-pgf-burgundy/10 px-3 py-1 rounded-full">
            <BookOpen className="w-3.5 h-3.5" />
            Official Educational Resources
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 tracking-tight">
            Downloadable Technical Commodity Guides & Spec Sheets
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 max-w-2xl">
            Authored by Pacific Grain & Foods agronomists and culinary technicians. In-depth technical guides covering grain hydration, milling fineness, nut butter processing, and cold storage parameters.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 shrink-0">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Official PGF Technical Publications</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {commodityGuides.map((guide, idx) => (
          <div
            key={idx}
            className="group bg-[#FAF8F5] hover:bg-white p-6 rounded-2xl border border-gray-200 hover:border-pgf-burgundy/40 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-pgf-burgundy bg-pgf-burgundy/10 px-2.5 py-0.5 rounded">
                  {guide.category}
                </span>
                <span className="text-xs font-mono text-gray-700 bg-white px-2 py-0.5 rounded border border-gray-200">
                  PDF Spec Sheet
                </span>
              </div>

              <h4 className="text-lg font-serif font-bold text-gray-900 group-hover:text-pgf-burgundy transition-colors">
                {guide.title}
              </h4>

              <p className="text-xs text-gray-800 leading-relaxed">
                {guide.description}
              </p>
            </div>

            <div className="pt-5 mt-4 border-t border-gray-200 flex items-center justify-between">
              <span className="text-xs text-gray-700 font-mono">
                {guide.filename}
              </span>

              <a
                href={guide.url}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-pgf-burgundy hover:bg-pgf-burgundy-800 text-white font-bold rounded-lg text-xs shadow-xs transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-pgf-gold" />
                <span>Download Spec PDF</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

