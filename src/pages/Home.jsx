import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ShieldCheck, Sparkles, Tractor, Package, 
  Layers, CheckCircle2, ChevronRight, Phone, Award, 
  Boxes, Truck, Scale, MapPin, Building2, Clock, Check
} from 'lucide-react';
import { companyInfo } from '../data/companyData';
import { productCategories } from '../data/productsData';
import QuoteCTA from '../components/QuoteCTA';

export default function Home() {
  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#16060B] text-white">
        {/* Background Image with Depth Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=2000&q=80"
            alt="Wholesome dry grains and legumes harvest"
            className="w-full h-full object-cover object-center transform scale-105 filter brightness-[0.45] contrast-105"
          />
          {/* Subtle brand color overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#17050A]/95 via-[#1D080F]/85 to-[#2E5715]/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-radial-vignette"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-left">
          <div className="max-w-3xl space-y-6">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-pgf-gold text-xs font-bold uppercase tracking-widest shadow-lg">
              <span className="w-2 h-2 rounded-full bg-pgf-gold animate-ping"></span>
              <span>San Joaquin Valley &bull; Fresno, California</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-white tracking-tight leading-[1.15]">
              California's Premier Bulk Dry Food Ingredient Supplier & Co-Packer
            </h1>

            {/* Meaningful Supporting Paragraph based on Verified Business */}
            <p className="text-lg sm:text-xl text-gray-200/90 font-normal leading-relaxed">
              Established in 1982 by Lee Perkins. Pacific Grain & Foods operates over 
              <strong className="text-white font-semibold"> 172,000 square feet</strong> across 8 Central Valley facilities, supplying more than 
              <strong className="text-white font-semibold"> 85 varieties of edible dry beans</strong>, heirloom grains, rice, seeds, nuts, and spices to food manufacturers, retail grocery chains, and distributors worldwide.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-pgf-gold hover:bg-pgf-gold-600 text-gray-950 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 text-base"
              >
                <span>Explore Our Products</span>
                <ChevronRight className="w-5 h-5 text-gray-950" />
              </Link>

              <Link
                to="/contact?type=quote"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-pgf-burgundy hover:bg-pgf-burgundy-800 text-white font-bold rounded-xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 text-base"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-5 h-5 text-pgf-gold" />
              </Link>
            </div>

            {/* Certifications Micro-Bar */}
            <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-4 text-xs text-gray-300">
              <span className="font-semibold text-white/90">Certified:</span>
              <span className="flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-md">
                <Check className="w-3.5 h-3.5 text-pgf-gold" /> OK Kosher
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-md">
                <Check className="w-3.5 h-3.5 text-pgf-gold" /> USDA Organic
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-md">
                <Check className="w-3.5 h-3.5 text-pgf-gold" /> KORC Pareve
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-md">
                <Check className="w-3.5 h-3.5 text-pgf-gold" /> Organic Certifiers
              </span>
            </div>
          </div>
        </div>

        {/* Bottom subtle edge */}
        <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-[#FAF8F5] to-transparent"></div>
      </section>

      {/* 2. STATS BAR */}
      <section className="bg-white border-b border-gray-200 relative z-20 -mt-5 max-w-7xl mx-auto rounded-2xl shadow-xl p-6 sm:p-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-100 text-center">
          {companyInfo.stats.map((s, idx) => (
            <div key={idx} className={`pt-4 md:pt-0 ${idx > 0 ? 'md:pl-4' : ''}`}>
              <div className="text-3xl sm:text-4xl font-serif font-extrabold text-pgf-burgundy tracking-tight">
                {s.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-gray-900 mt-1 uppercase tracking-wider">
                {s.label}
              </div>
              <div className="text-xs text-gray-700 mt-0.5 hidden sm:block">
                {s.detail}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. COMPANY INTRODUCTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-pgf-burgundy bg-pgf-burgundy/10 px-3 py-1 rounded-full">
              <Building2 className="w-3.5 h-3.5" />
              Over Four Decades of Agricultural Excellence
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 tracking-tight leading-tight">
              Rooted in California's Fertile Central San Joaquin Valley
            </h2>

            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              Established in 1982 by <strong>Lee Perkins</strong>, Pacific Grain originated as a trusted feed company serving the agricultural heartland of California. By 1989, expanding customer demand for human-grade dry goods led to our evolution into <strong>Pacific Grain & Foods</strong>. In 1990, we pivoted 100% of our capacity to supplying the American food service, manufacturing, and commercial grocery sectors.
            </p>

            <p className="text-gray-700 leading-relaxed text-base">
              On January 1, 2010, the company reorganized as <strong>Pacific Grain & Foods, LLC</strong> with Lee Perkins continuing as Managing Partner. Today, we oversee more than <strong>172,000 square feet</strong> across 8 specialized facilities in Fresno and Malaga—including electric-eye cleaning plants, cold storage, custom blending suites, a dedicated nut butter processing facility, and rail-connected logistics via PGF Logistics, LLC.
            </p>

            {/* Value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Direct farm contracts with California & national growers",
                "World's largest heirloom & varietal dry bean inventory",
                "Electric-eye optical sorting & dry air-flow cleaning",
                "Custom formulations with low 500 lb. minimums",
                "Retail stand-up pouches to 2,000 lb. industrial super totes",
                "Rail-served intermodal freight via PGF Logistics, LLC"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="p-1 rounded-full bg-emerald-100 text-emerald-800 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-gray-800">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-pgf-burgundy hover:text-pgf-burgundy-900 group"
              >
                <span>Read Full Company History & Facilities Tour</span>
                <ArrowRight className="w-4 h-4 text-pgf-gold group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Imagery: Authentic Fresno Facility & Operations */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/assets/images/facility-front.jpeg"
                alt="Pacific Grain & Foods Main Facility, Fresno California"
                className="w-full h-80 object-cover object-center"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 text-white">
                <div className="text-xs font-bold text-pgf-gold uppercase tracking-wider">
                  Corporate Headquarters & Operations
                </div>
                <div className="text-sm font-medium">
                  4067 W. Shaw Ave., Fresno, CA 93722
                </div>
              </div>
            </div>

            {/* Two Smaller Authentic Process Photos */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-md border-2 border-white relative group">
                <img
                  src="/assets/images/cleaning.jpeg"
                  alt="Dry Air Flow Cleaning Machinery at Pacific Grain & Foods"
                  className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 p-2 flex items-end">
                  <span className="text-[11px] font-bold text-white leading-tight">
                    Electric-Eye & Air Cleaning
                  </span>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-md border-2 border-white relative group">
                <img
                  src="/assets/images/privatelabel.jpeg"
                  alt="Private Label Packaging Line at Pacific Grain & Foods"
                  className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 p-2 flex items-end">
                  <span className="text-[11px] font-bold text-white leading-tight">
                    Private Label Packaging
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT CATEGORIES CATALOG SHOWCASE */}
      <section className="py-20 bg-[#F5EFE6] border-t border-b border-[#E8DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-pgf-burgundy bg-pgf-burgundy/10 px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-pgf-gold" />
              Comprehensive Dry Ingredient Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 tracking-tight">
              Explore Our Core Product Categories
            </h2>
            <p className="text-gray-700 text-base">
              From our world-renowned varietal dry bean inventory to ancient grains, premium rices, certified organic seeds, California nuts, and imported spices.
            </p>
          </div>

          {/* Grid of Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((cat) => (
              <Link
                key={cat.key}
                to={`/products?category=${cat.key}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200/80 flex flex-col justify-between transform hover:-translate-y-1.5"
              >
                <div>
                  {/* Category Banner Image */}
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img
                      src={cat.banner}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                      <span className="text-xs font-bold uppercase tracking-wider bg-pgf-burgundy/90 backdrop-blur-xs px-2.5 py-1 rounded">
                        {cat.count} Items Listed
                      </span>
                      <span className="text-xs text-pgf-gold font-medium">
                        Bulk & Retail
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-serif font-bold text-gray-900 group-hover:text-pgf-burgundy transition-colors">
                      {cat.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      {cat.key === 'beans' && "Up to 85 types of the world's 150 known edible beans, including adzuki, black turtle, cranberry, garbanzo, peruano/mayo coba, and lentils."}
                      {cat.key === 'rice' && "Premium American blends, imported aromatic basmati and jasmine, arborio, calrose, sweet mochi, and custom multigrain rices."}
                      {cat.key === 'grains' && "Ancient grains including white, red, and black quinoa, buckwheat berries, amaranth, millet, barley, couscous, and bulgur."}
                      {cat.key === 'seeds' && "Certified organic sprouting seeds (alfalfa, broccoli, radish), South American chia seeds, golden and brown flax, and sunflower seeds."}
                      {cat.key === 'nuts' && "California Central Valley almonds, walnuts, pecans, cashews, plus dedicated peanut and almond butter processing."}
                      {cat.key === 'spices' && "Over 160 varieties of whole and ground spices, 20 chilies, Spanish paprika, and proprietary savory bean seasonings."}
                    </p>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="p-6 pt-0 border-t border-gray-100 mt-2 flex items-center justify-between text-xs font-bold text-pgf-burgundy group-hover:text-pgf-burgundy-900">
                  <span>Browse {cat.name.split('&')[0]} Catalog</span>
                  <ChevronRight className="w-4 h-4 text-pgf-gold group-hover:translate-x-1.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-pgf-burgundy hover:bg-pgf-burgundy-800 text-white font-bold rounded-xl shadow-md transition-colors"
            >
              <span>View Full Master Product Catalog</span>
              <ArrowRight className="w-4 h-4 text-pgf-gold" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. MANUFACTURING & PROCESSING CAPABILITIES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-pgf-burgundy bg-pgf-burgundy/10 px-3 py-1 rounded-full">
            <Layers className="w-3.5 h-3.5 text-pgf-burgundy" />
            Verified Industrial Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 tracking-tight">
            Comprehensive Processing & Packaging Capabilities
          </h2>
          <p className="text-gray-700 text-base">
            Every step—from raw field crop cleaning to custom recipe formulation and automated retail bagging—is handled in-house across our Fresno operations.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companyInfo.capabilities.map((cap) => (
            <div
              key={cap.id}
              className="bg-white rounded-2xl border border-gray-200 hover:border-pgf-burgundy/40 shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-pgf-burgundy/10 text-pgf-burgundy flex items-center justify-center font-bold">
                  {cap.id === 'cleaning-sorting' && <Sparkles className="w-6 h-6 text-pgf-burgundy" />}
                  {cap.id === 'sourcing' && <Tractor className="w-6 h-6 text-pgf-burgundy" />}
                  {cap.id === 'custom-blending' && <Layers className="w-6 h-6 text-pgf-burgundy" />}
                  {cap.id === 'private-label' && <Package className="w-6 h-6 text-pgf-burgundy" />}
                  {cap.id === 'bulk-packaging' && <Boxes className="w-6 h-6 text-pgf-burgundy" />}
                  {cap.id === 'nut-butter-manufacturing' && <Award className="w-6 h-6 text-pgf-burgundy" />}
                  {cap.id === 'logistics-warehousing' && <Truck className="w-6 h-6 text-pgf-burgundy" />}
                </div>

                <h3 className="text-xl font-serif font-bold text-gray-900">
                  {cap.title}
                </h3>

                <p className="text-xs font-semibold text-pgf-burgundy uppercase tracking-wider">
                  {cap.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {cap.description}
                </p>

                <ul className="space-y-2 pt-2 border-t border-gray-100">
                  {cap.features.slice(0, 3).map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-800">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-4 border-t border-gray-100">
                <Link
                  to={`/capabilities#${cap.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-pgf-burgundy hover:text-pgf-burgundy-900 group"
                >
                  <span>Learn Technical Specifications</span>
                  <ChevronRight className="w-4 h-4 text-pgf-gold group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. SPOTLIGHT: PRIVATE LABEL & PACKAGING */}
      <section className="py-20 bg-gradient-to-br from-[#1C060D] via-[#2A0914] to-[#1F070F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-pgf-gold bg-white/10 px-3 py-1 rounded-full border border-white/15">
                <Package className="w-3.5 h-3.5 text-pgf-gold" />
                Contract Packaging & Private Label Solutions
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
                Turnkey Co-Packing from 1/2 oz. Pouches to 2,000 lb. Bulk Sacks
              </h2>

              <p className="text-gray-300 text-base leading-relaxed">
                We partner with national grocery supermarket chains, independent specialty retailers, food service providers, and emerging brands to package top-tier grains, beans, and seeds under your private label.
              </p>

              <div className="space-y-3 pt-2">
                <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                  <div className="font-bold text-pgf-gold text-sm">Retail Packaging Formats</div>
                  <p className="text-xs text-gray-300 mt-1">
                    Stand-up resealable pouches (1, 2, 3, 5, & 10 lbs.) with premium ziplock, bottom gussets, P.E.T. plastic jars, and automated VFFS pillow bagging.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                  <div className="font-bold text-pgf-gold text-sm">Industrial Bulk Packing</div>
                  <p className="text-xs text-gray-300 mt-1">
                    25 lb. and 50 lb. 3-ply heavy-duty kraft paper sacks with poly inner moisture barriers, multi-wall clay sacks, and 1-ton (2,000 lb.) FIBC super totes.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact?type=quote&service=packaging"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-pgf-gold hover:bg-pgf-gold-600 text-gray-950 font-bold rounded-xl shadow-lg transition-colors text-sm"
                >
                  <span>Request Private Label Quote</span>
                  <ArrowRight className="w-4 h-4 text-gray-950" />
                </Link>

                <Link
                  to="/capabilities"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-colors text-sm"
                >
                  <span>View Packaging Details</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img
                  src="/assets/images/privatelabel.jpeg"
                  alt="Pacific Grain & Foods Private Label Packaging Facilities"
                  className="w-full h-96 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                  <div className="text-xs uppercase font-bold text-pgf-gold">
                    In-House Automation
                  </div>
                  <div className="text-sm font-semibold text-white">
                    Automated bagging, nitrogen flush capabilities, and custom nutritional labeling.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE PACIFIC GRAIN & FOODS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-pgf-burgundy bg-pgf-burgundy/10 px-3 py-1 rounded-full">
            <Award className="w-3.5 h-3.5 text-pgf-gold" />
            The PGF Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 tracking-tight">
            Why Food Manufacturers & Grocers Choose Pacific Grain & Foods
          </h2>
          <p className="text-gray-700 text-base">
            Backed by four decades of family leadership, an unmatched product portfolio, and personal customer service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-pgf-gold/20 text-pgf-gold-700 flex items-center justify-center font-bold">
              <Scale className="w-6 h-6 text-pgf-gold-700" />
            </div>
            <h3 className="text-xl font-serif font-bold text-gray-900">
              Low 500 lb. Blending Minimums
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Unlike industrial conglomerates demanding multi-ton commitments, our custom blending desk formulates tri-color quinoas, savory seasonings, and specialty soup blends starting at a modest 500 lb. minimum.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-pgf-burgundy/10 text-pgf-burgundy flex items-center justify-center font-bold">
              <Sparkles className="w-6 h-6 text-pgf-burgundy" />
            </div>
            <h3 className="text-xl font-serif font-bold text-gray-900">
              Dry Air-Flow Seed Protection
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              We never water-wash dry commodities. Our dry air-flow and electric-eye optical cleaners extract pebbles, field chafe, and dirt without moisture, preserving dormancy and shelf life.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <Truck className="w-6 h-6 text-emerald-700" />
            </div>
            <h3 className="text-xl font-serif font-bold text-gray-900">
              Intermodal Freight & Rail Access
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              With our South Fresno rail terminal and subsidiary PGF Logistics, LLC, we orchestrate boxcar receiving and nationwide full truckload (FTL) and LTL common carrier dispatch with volume freight rates.
            </p>
          </div>
        </div>
      </section>

      {/* 8. FINAL QUOTE CTA BANNER */}
      <QuoteCTA />
    </div>
  );
}

