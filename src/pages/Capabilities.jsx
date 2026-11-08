import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, Package, Boxes, Layers, Tractor, Award, Truck, 
  CheckCircle2, ArrowRight, ShieldCheck, Cpu, Scale, Eye, 
  Thermometer, Check, Factory, FileText
} from 'lucide-react';
import { companyInfo } from '../data/companyData';
import QuoteCTA from '../components/QuoteCTA';
import FreightCalculator from '../components/FreightCalculator';
import CommodityGuidesSection from '../components/CommodityGuidesSection';

export default function Capabilities() {
  return (
    <div className="bg-[#FAF8F5]">
      {/* Hero Header */}
      <section className="relative bg-[#17050A] text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80"
            alt="Advanced food processing equipment"
            className="w-full h-full object-cover filter brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#17050A] via-[#1A0810]/90 to-[#2E5715]/40 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-pgf-gold text-xs font-bold uppercase tracking-wider">
            <Factory className="w-3.5 h-3.5 text-pgf-gold" />
            172,000+ Sq. Ft. Across 8 Specialized Facilities &bull; Fresno & Malaga, CA
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-white tracking-tight leading-tight max-w-4xl">
            Industrial Processing, Custom Blending & Contract Packaging
          </h1>

          <p className="text-lg text-gray-200/90 max-w-3xl leading-relaxed">
            From raw field crop receiving and high-velocity dry air cleaning to custom recipe formulation and automated retail bagging, Pacific Grain & Foods delivers commercial scale with artisanal precision.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to="/contact?type=quote&service=processing"
              className="px-7 py-3.5 bg-pgf-gold hover:bg-pgf-gold-600 text-gray-950 font-bold rounded-xl text-sm shadow-lg transition-colors flex items-center gap-2"
            >
              <span>Request Processing Specs & Quote</span>
              <ArrowRight className="w-4 h-4 text-gray-950" />
            </Link>

            <a
              href="#cleaning"
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-sm border border-white/20 transition-colors"
            >
              Explore Capabilities Below
            </a>
          </div>
        </div>
      </section>

      {/* Facilities Overview Ribbon */}
      <section className="bg-white border-b border-gray-200 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6 text-xs sm:text-sm text-gray-700">
          <div className="flex items-center gap-2 font-bold text-gray-900">
            <Building2Icon className="w-4 h-4 text-pgf-burgundy" />
            <span>Operational Highlights:</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>38,000 sq. ft. Malaga Cleaning Facility</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Dedicated Annadale Ave Nut Butter Plant</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>9,000 sq. ft. Freezer/Cooler Cold Storage</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Direct Rail Spur & PGF Logistics, LLC</span>
          </div>
        </div>
      </section>

      {/* DETAILED CAPABILITIES SECTIONS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">

        {/* 1. Dry Air-Flow Cleaning & Optical Sorting */}
        <section id="cleaning" className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-pgf-burgundy bg-pgf-burgundy/10 px-3 py-1 rounded-full">
              <Eye className="w-3.5 h-3.5" />
              State-of-the-Art Optical Sorting
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 tracking-tight leading-tight">
              Dry Air-Flow Cleaning & Electric-Eye Optical Sorting
            </h2>

            <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs sm:text-sm text-amber-950 leading-relaxed font-medium">
              <strong>Why Dry Air Cleaning Matters:</strong> Most edible dry beans, grains, and sprouting seeds cannot be water-washed in a typical sense, as moisture triggers premature germination and spoilage. Our proprietary dry air cleaning uses high-velocity collectors and gravity separators to eliminate field debris without liquid exposure.
            </div>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Located at our dedicated 38,000 sq. ft. plant in the Malaga industrial corridor and our Fresno processing lines, trucks, shipping containers, and rail cars arrive daily from California growers and global brokers. Crops are processed through multiple cleaning stages:
            </p>

            <div className="space-y-3">
              {[
                { title: "Electric-Eye Optical Sorters", desc: "Multi-camera color and shape recognition sorters eject discolored beans, cracked seeds, and non-target items at milliseconds per lot." },
                { title: "Dry Cyclone Air-Wash Separators", desc: "High-volume air-flow draft collectors pull away light chaff, field dust, pod hulls, and foreign organic material." },
                { title: "Multi-Deck Gravity Flow Tables", desc: "Density-based oscillation separates pebbles, dense soil fragments, and broken kernels from prime food-grade product." },
                { title: "Continuous Metal Detection & Sizing", desc: "Triple-stage rare earth magnetic separators and food-grade screens sort uniform seed sizes for packaging." }
              ].map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-gray-200">
                  <div className="w-6 h-6 rounded-full bg-pgf-burgundy text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-gray-900">{step.title}</h4>
                    <p className="text-xs text-gray-700 mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/assets/images/cleaning.jpeg"
                alt="Electric-Eye and Air Cleaning Machinery at Pacific Grain & Foods"
                className="w-full h-96 object-cover object-center"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 text-white">
                <div className="text-xs font-bold text-pgf-gold uppercase">Authentic Facility Photography</div>
                <div className="text-sm font-semibold">Dry Air-Flow & Optical Gravity Separation Plant &bull; Fresno, CA</div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Private Label & Contract Packaging (Co-Packing) */}
        <section id="packaging" className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/assets/images/privatelabel.jpeg"
                alt="Automated Private Label Packaging Lines at Pacific Grain & Foods"
                className="w-full h-96 object-cover object-center"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 text-white">
                <div className="text-xs font-bold text-pgf-gold uppercase">High-Speed Packaging Lines</div>
                <div className="text-sm font-semibold">Retail Stand-Up Pouches & Automated Bagging &bull; Fresno Production Facility</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-pgf-burgundy bg-pgf-burgundy/10 px-3 py-1 rounded-full">
              <Package className="w-3.5 h-3.5" />
              Turnkey Brand Packaging
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 tracking-tight leading-tight">
              Private Label Retail & Contract Packaging (Co-Packing)
            </h2>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Pacific Grain & Foods packages retail lines for prominent national grocery chains, independent regional grocers, and commercial food brands. We offer end-to-end co-packing with full nutritional labeling, barcoding, and nitrogen flush sealing.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-xl border border-gray-200 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-pgf-burgundy">
                  Retail Packaging Formats
                </h4>
                <ul className="text-xs text-gray-800 space-y-1.5">
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> 1/2, 1, 2, 3, 5, 10 & 15 lb. Stand-Up Pouches</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> Resealable Ziplock & Bottom Gussets</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> P.E.T. Jars, Poly Bags & Mylar Barrier</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> VFFS Soft, Hard & Biodegradable Films</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-xl border border-gray-200 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-pgf-burgundy">
                  Commercial Bulk Formats
                </h4>
                <ul className="text-xs text-gray-800 space-y-1.5">
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> 25 lb. & 50 lb. 3-Ply Kraft Paper Sacks</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> Heavy Moisture-Barrier Poly Liners</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> 1-Ton (2,000 lb.) FIBC Super Totes</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> Palletized shrink-wrapped truckloads</li>
                </ul>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/contact?type=quote&service=private-label"
                className="inline-flex items-center gap-2 text-sm font-bold text-pgf-burgundy hover:text-pgf-burgundy-900"
              >
                <span>Discuss Your Private Label Specifications</span>
                <ArrowRight className="w-4 h-4 text-pgf-gold" />
              </Link>
            </div>
          </div>
        </section>

        {/* 3. Custom Formulations & Recipe Blending */}
        <section id="blending" className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-pgf-burgundy bg-pgf-burgundy/10 px-3 py-1 rounded-full">
              <Layers className="w-3.5 h-3.5" />
              Low 500 lb. Minimums
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 tracking-tight leading-tight">
              Custom Mixing, Blending & Proprietary Formulations
            </h2>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Pacific Grain & Foods formulates proprietary ingredient recipes for commercial food companies, culinary brands, and institutions. Under a modest <strong>500 lb. minimum order</strong>, our blending department crafts:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <div className="font-bold text-gray-900 text-sm mb-1">Tri-Color Quinoa Blends</div>
                <p className="text-xs text-gray-600">
                  Precision ratios of White, Red, and Black Royal Quinoa for colorful culinary applications.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <div className="font-bold text-gray-900 text-sm mb-1">Multi-Bean Soup Mixes</div>
                <p className="text-xs text-gray-600">
                  Artisan 10, 12, or 16-bean soup blends mixed with lentils, split peas, and pearl barley.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <div className="font-bold text-gray-900 text-sm mb-1">Savory Bean Rubs & Spices</div>
                <p className="text-xs text-gray-600">
                  No-salt seasoning rubs, chili blends, and custom herb-spice coatings formulated for bean dishes.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <div className="font-bold text-gray-900 text-sm mb-1">Specialty Seed Blends</div>
                <p className="text-xs text-gray-600">
                  Organic sprouting seed combinations (alfalfa, broccoli, radish) and artisan trail mixes.
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-500 italic">
              All blends can be certified Kosher and USDA Organic upon request with full batch documentation.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg space-y-6">
              <h3 className="text-xl font-serif font-bold text-gray-900 border-b border-gray-100 pb-4">
                Specialty Milling & Nut Butter Processing
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-pgf-gold/20 text-pgf-gold-700 flex items-center justify-center shrink-0 font-bold text-sm">
                    NB
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Dedicated Nut Butter Plant (Annadale Ave)</h4>
                    <p className="text-xs text-gray-600 mt-0.5">
                      Our facility at 4539 E Annadale Ave in Fresno grinds roasted peanut butter, California almond butter, sunflower seed butter, and custom paste formulations in bulk pails, drums, or retail packaging.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-pgf-burgundy/10 text-pgf-burgundy flex items-center justify-center shrink-0 font-bold text-sm">
                    ML
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Flour Milling: Rice & Chia Flours</h4>
                    <p className="text-xs text-gray-600 mt-0.5">
                      High-fineness milling of conventional and organic white/brown rice flours and nutrient-dense chia flours for gluten-free baking and industrial extrusion.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 font-bold text-sm">
                    SP
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Spice Sterilization (E.T.O. & Irradiation)</h4>
                    <p className="text-xs text-gray-600 mt-0.5">
                      To meet stringent institutional and food processor microbial specifications, commercial sterilization options (E.T.O. or irradiation) are available.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Warehousing, Rail Logistics & PGF Logistics, LLC */}
        <section id="logistics" className="scroll-mt-24 bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-pgf-green bg-pgf-green/10 px-3 py-1 rounded-full">
                <Truck className="w-3.5 h-3.5" />
                Intermodal Supply Chain
              </div>

              <h2 className="text-3xl font-serif font-bold text-gray-900 tracking-tight">
                Rail-Served Logistics, 9,000 Sq. Ft. Cold Storage & PGF Logistics
              </h2>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Pacific Grain & Foods controls over 172,000 square feet of industrial space in Fresno and Malaga. Our South Fresno rail terminal features a dedicated rail spur accommodating full boxcars of Midwest beans and Pacific Northwest grains directly from farm country.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200">
                  <div className="text-xs font-bold text-gray-900">Rail Spur Access</div>
                  <div className="text-xs text-gray-600 mt-1">Direct boxcar unloading reduces freight transit costs dramatically.</div>
                </div>

                <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200">
                  <div className="text-xs font-bold text-gray-900">9,000 Sq. Ft. Cooler</div>
                  <div className="text-xs text-gray-600 mt-1">Temperature-controlled storage protects delicate seeds, nuts, and dried fruit.</div>
                </div>

                <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200">
                  <div className="text-xs font-bold text-gray-900">PGF Logistics, LLC</div>
                  <div className="text-xs text-gray-600 mt-1">Subsidiary freight brokerage dispatching FTL and LTL shipments nationwide.</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-pgf-burgundy to-pgf-burgundy-950 p-6 sm:p-8 rounded-2xl text-white space-y-4">
              <h3 className="text-xl font-serif font-bold text-pgf-gold">
                Shipping & Receiving Schedule
              </h3>
              
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-300">Shipping Days:</span>
                  <span className="font-bold text-white">Monday &ndash; Friday</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-300">Dock Hours:</span>
                  <span className="font-bold text-white">7:00 AM &ndash; 2:00 PM PST</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-300">Weekend:</span>
                  <span className="font-bold text-white">Closed Saturday & Sunday</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-gray-300">Commercial Sales Desk:</span>
                  <span className="font-bold text-pgf-gold">(559) 276-2580</span>
                </div>
              </div>

              <Link
                to="/contact?type=quote"
                className="w-full inline-flex items-center justify-center gap-2 py-3 bg-pgf-gold hover:bg-pgf-gold-600 text-gray-950 font-bold rounded-xl text-xs sm:text-sm transition-colors shadow-md mt-2"
              >
                <span>Request Freight & Logistics Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 5. Interactive Procurement & Freight Calculator */}
        <section id="calculator" className="scroll-mt-24">
          <FreightCalculator />
        </section>

        {/* 6. Downloadable Technical Commodity Guides */}
        <section id="guides" className="scroll-mt-24">
          <CommodityGuidesSection />
        </section>

      </div>

      {/* Bottom CTA */}
      <QuoteCTA
        title="Put Our Fresno Processing Facilities to Work for Your Brand"
        subtitle="Contact our technical sales team to review packaging line tolerances, custom formulation specs, or bulk supply agreements."
      />
    </div>
  );
}

function Building2Icon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/>
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>
      <path d="M10 6h4"/>
      <path d="M10 10h4"/>
      <path d="M10 14h4"/>
      <path d="M10 18h4"/>
    </svg>
  );
}

