import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, Award, ShieldCheck, Clock, MapPin, Users, 
  Calendar, CheckCircle2, ArrowRight, Truck, HeartHandshake, Sparkles, Scale
} from 'lucide-react';
import { companyInfo } from '../data/companyData';
import QuoteCTA from '../components/QuoteCTA';

export default function About() {
  return (
    <div className="bg-[#FAF8F5]">
      {/* Hero Header */}
      <section className="relative bg-[#1A050B] text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/facility-front.jpeg"
            alt="Pacific Grain & Foods Headquarters Fresno California"
            className="w-full h-full object-cover filter brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#17050A] via-[#1D080F]/90 to-[#2E5715]/40 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-pgf-gold text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-pgf-gold" />
            Family-Owned &bull; Established in 1982 by Lee Perkins
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-white tracking-tight leading-tight max-w-4xl">
            Four Decades of Integrity, Agricultural Heritage & Growth
          </h1>

          <p className="text-lg sm:text-xl text-gray-200/90 max-w-3xl leading-relaxed">
            From humble beginnings supplying quality grain feeds in California's San Joaquin Valley to operating 172,000+ sq. ft. of advanced food processing facilities serving over 2,500 commercial clients across the globe.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4 text-xs sm:text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <span>Managing Partner: <strong className="text-white">Lee Perkins</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-pgf-gold"></span>
              <span>Operational Footprint: <strong className="text-white">172K+ Sq. Ft. (8 Facilities)</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <span>Location: <strong className="text-white">Fresno & Malaga, CA</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Story & Authentic Photography */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Story Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-pgf-burgundy bg-pgf-burgundy/10 px-3 py-1 rounded-full">
              <Building2 className="w-3.5 h-3.5" />
              The Pacific Grain & Foods Story
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 tracking-tight leading-tight">
              From San Joaquin Feed Mills to the World's Varietal Bean Authority
            </h2>

            <div className="prose prose-lg text-gray-700 space-y-5 leading-relaxed text-base">
              <p>
                <strong>Established in 1982 by Lee Perkins</strong>, Pacific Grain originated as an animal feed company serving the San Joaquin Valley and western United States with quality grain feeds. Through uncompromising work ethic and honest grower relations, the business earned an outstanding reputation across California farm country.
              </p>

              <p>
                By 1989, responding to dramatic shifts in consumer nutrition and growing demand for whole food ingredients, the company expanded into human food supply and changed its name to <strong>Pacific Grain & Foods</strong>. In 1990, we made the strategic decision to close our animal feed division entirely to concentrate 100% of our capacity on supplying the American food service, manufacturing, and distribution industries.
              </p>

              <p>
                Between 1991 and 1995, we underwent our most significant product diversification, launching dedicated <strong>Industrial/Institutional Bulk Sales</strong> and <strong>Certified Organics Divisions</strong>, securing Kosher certification, and developing a retail specialty outlet in northwest Fresno.
              </p>

              <p>
                Continued explosive growth led to moving into our 20,500 sq. ft. headquarters in 2004 on West Shaw Avenue at Brawley, quickly adding an adjoining 13,500 sq. ft. production warehouse in 2005 and an 11,000 sq. ft. shipping warehouse and corporate office complex in 2008.
              </p>

              <p>
                On January 1, 2010, the company formally reorganized as <strong>Pacific Grain & Foods, LLC</strong> with Lee Perkins as Managing Partner. To support increasing agricultural volume, we acquired our fifth facility in June 2010—a 38,000 sq. ft. cleaning plant in Malaga equipped with electric-eye optical sorting and gravity separation—and leased 9,000 sq. ft. of temperature-controlled cold storage. In 2015, we added a direct rail-spur distribution facility in South Fresno, expanding our total operational footprint to more than <strong>172,000 square feet across 8 facilities</strong>.
              </p>
            </div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white border border-gray-200 space-y-1">
                <div className="font-bold text-gray-900 text-sm flex items-center gap-1.5 text-pgf-burgundy">
                  <HeartHandshake className="w-4 h-4" />
                  Family Values & Direct Relationships
                </div>
                <p className="text-xs text-gray-600">
                  We remain privately held and family-led. When clients call our sales desk, they speak directly with seasoned ingredient experts.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-gray-200 space-y-1">
                <div className="font-bold text-gray-900 text-sm flex items-center gap-1.5 text-pgf-burgundy">
                  <Scale className="w-4 h-4" />
                  Fair Market Pricing Transparency
                </div>
                <p className="text-xs text-gray-600">
                  Our commodity pricing is reviewed every six months, passing farm-direct volume savings directly to commercial buyers without hidden broker markups.
                </p>
              </div>
            </div>
          </div>

          {/* Authentic Real Photos Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg space-y-5">
              <h3 className="text-lg font-serif font-bold text-gray-900 border-b border-gray-100 pb-3">
                Authentic Facility & Operations
              </h3>

              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                  <img
                    src="/assets/images/facility-front.jpeg"
                    alt="Pacific Grain & Foods Corporate Headquarters in Fresno, CA"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-3 bg-gray-50 text-xs">
                    <div className="font-bold text-gray-900">Corporate HQ & Retail Store</div>
                    <div className="text-gray-500">4067 W Shaw Ave #116, Fresno, CA</div>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                  <img
                    src="/assets/images/sourcing.jpeg"
                    alt="Sourcing Direct From Growers at Pacific Grain & Foods"
                    className="w-full h-44 object-cover"
                  />
                  <div className="p-3 bg-gray-50 text-xs">
                    <div className="font-bold text-gray-900">Direct Grower Sourcing</div>
                    <div className="text-gray-500">Central Valley California & Global Farm Contracts</div>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                  <img
                    src="/assets/images/cleaning.jpeg"
                    alt="Optical Sorting & Dry Air Cleaning Machinery in Malaga, CA"
                    className="w-full h-44 object-cover"
                  />
                  <div className="p-3 bg-gray-50 text-xs">
                    <div className="font-bold text-gray-900">Malaga Agricultural Cleaning Plant</div>
                    <div className="text-gray-500">38,000 sq. ft. Electric-Eye & Air-Flow Facility</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHRONOLOGICAL TIMELINE */}
      <section className="py-20 bg-white border-t border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-pgf-burgundy bg-pgf-burgundy/10 px-3 py-1 rounded-full">
              <Calendar className="w-3.5 h-3.5" />
              Over Four Decades of Heritage
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 tracking-tight">
              Company Milestones & Growth Trajectory
            </h2>
          </div>

          <div className="relative border-l-2 border-pgf-gold/60 ml-4 sm:ml-32 space-y-10 pl-6 sm:pl-8">
            {companyInfo.historyMilestones.map((m, idx) => (
              <div key={idx} className="relative group">
                {/* Year Marker on Left for Desktop */}
                <div className="hidden sm:block absolute -left-40 top-0 text-right w-28">
                  <span className="font-serif font-extrabold text-lg text-pgf-burgundy tracking-tight">
                    {m.year}
                  </span>
                </div>

                {/* Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-pgf-gold border-4 border-white shadow-md"></div>

                {/* Content Card */}
                <div className="bg-[#FAF8F5] p-5 sm:p-6 rounded-xl border border-gray-200 shadow-xs group-hover:border-pgf-burgundy/40 transition-colors">
                  <div className="sm:hidden text-xs font-bold text-pgf-burgundy mb-1">
                    {m.year}
                  </div>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-gray-900 mb-2">
                    {m.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS & FOOD SAFETY COMMITMENT */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-pgf-burgundy bg-pgf-burgundy/10 px-3 py-1 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5 text-pgf-gold" />
            Quality Assurance & Certifications
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 tracking-tight">
            Certified Kosher, USDA Organic & Food-Grade Audited
          </h2>
          <p className="text-gray-700 text-base">
            We adhere to rigorous quality control standards, chain-of-custody tracking, and independent rabbinical and organic audits.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyInfo.certifications.map((c) => (
            <div
              key={c.name}
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm text-center flex flex-col items-center justify-between space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="h-16 flex items-center justify-center">
                <img
                  src={c.logo}
                  alt={c.name}
                  className="max-h-14 max-w-[120px] object-contain"
                />
              </div>

              <div>
                <h3 className="font-serif font-bold text-base text-gray-900">
                  {c.name}
                </h3>
                <div className="text-[11px] font-semibold text-pgf-burgundy uppercase mt-0.5">
                  {c.issuer}
                </div>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                  {c.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <QuoteCTA
        title="Experience the Difference of Working with an Established American Supplier"
        subtitle="Speak directly with our leadership and commercial sales team in Fresno, California to discuss bulk ingredient contracts, private label packaging, or sample requests."
      />
    </div>
  );
}

