import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowRight, Truck } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#140508] text-gray-300 relative">
      {/* Brand Heritage Top Bar */}
      <div className="w-full h-3 bg-gradient-to-r from-pgf-burgundy via-pgf-gold to-pgf-green"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Company Brand & Heritage */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="inline-block bg-white p-2.5 rounded-lg shadow-md">
              <img 
                src="/assets/images/logo.png" 
                alt="Pacific Grain & Foods, LLC Logo" 
                className="h-12 w-auto object-contain"
              />
            </Link>
            
            <p className="text-sm text-gray-300/90 leading-relaxed max-w-sm">
              Established in 1982 by Lee Perkins in Fresno, California. Pacific Grain & Foods, LLC is an industry-leading family-owned bulk dry ingredient supplier, custom mixer, and private label co-packager operating over 172,000 sq. ft. across 8 facilities in the San Joaquin Valley.
            </p>

            {/* Certifications Row */}
            <div className="pt-2">
              <div className="text-xs uppercase tracking-wider text-pgf-gold font-semibold mb-3">
                Official Certifications & Food Safety
              </div>
              <div className="flex flex-wrap items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10 w-fit">
                {companyInfo.certifications.map((c) => (
                  <div 
                    key={c.name}
                    className="flex items-center gap-2 bg-white px-2.5 py-1.5 rounded shadow-sm text-gray-900 text-xs font-semibold"
                    title={c.name}
                  >
                    <img src={c.logo} alt={c.name} className="h-6 w-auto object-contain" />
                    <span className="hidden sm:inline text-[11px] font-bold text-gray-800">{c.name.split(' ')[0]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-pgf-gold">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-pgf-gold/70" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-pgf-gold/70" />
                  <span>Product Catalog</span>
                </Link>
              </li>
              <li>
                <Link to="/capabilities" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-pgf-gold/70" />
                  <span>Capabilities & Processing</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-pgf-gold/70" />
                  <span>About Our Company</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-pgf-gold/70" />
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <Link to="/contact?type=quote" className="text-pgf-gold hover:text-white transition-colors font-semibold flex items-center gap-1.5 pt-1">
                  <ArrowRight className="w-3.5 h-3.5" />
                  <span>Request a Custom Quote</span>
                </Link>
              </li>
            </ul>

            {/* Logistics Subsidiary Highlight */}
            <div className="pt-3 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs font-semibold text-white/90 mb-1">
                <Truck className="w-4 h-4 text-pgf-gold" />
                <span>PGF Logistics, LLC</span>
              </div>
              <p className="text-[12px] text-gray-400">
                Direct rail-spur access, full truckload (FTL), and LTL commercial shipping nationwide.
              </p>
            </div>
          </div>

          {/* Col 3: Product Categories */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-pgf-gold">
              Product Lines
            </h3>
            <ul className="space-y-2 text-sm text-gray-300/80">
              <li>
                <Link to="/products?category=beans" className="hover:text-white transition-colors">
                  Dry Beans & Legumes (85+ Types)
                </Link>
              </li>
              <li>
                <Link to="/products?category=rice" className="hover:text-white transition-colors">
                  Rice & Specialty Rices
                </Link>
              </li>
              <li>
                <Link to="/products?category=grains" className="hover:text-white transition-colors">
                  Ancient & Whole Grains
                </Link>
              </li>
              <li>
                <Link to="/products?category=seeds" className="hover:text-white transition-colors">
                  Organic Sprouting Seeds & Chia
                </Link>
              </li>
              <li>
                <Link to="/products?category=nuts" className="hover:text-white transition-colors">
                  California Nuts & Nut Butters
                </Link>
              </li>
              <li>
                <Link to="/products?category=spices" className="hover:text-white transition-colors">
                  Spices, Chilies & Custom Blends
                </Link>
              </li>
              <li>
                <Link to="/capabilities#blending" className="hover:text-white transition-colors text-pgf-gold text-xs font-medium">
                  Custom Blends (500 lb. Minimum)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Locations & Direct Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-pgf-gold">
              Corporate & Plants
            </h3>
            
            <div className="space-y-3 text-xs text-gray-300">
              {/* Main HQ */}
              <div>
                <div className="font-bold text-white flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-pgf-gold shrink-0 mt-0.5" />
                  <span>Main Corporate Office & Retail:</span>
                </div>
                <div className="pl-5 text-gray-400">
                  4067 W. Shaw Ave. #116<br />
                  Fresno, CA 93722
                </div>
              </div>

              {/* Nut Butter Plant */}
              <div>
                <div className="font-bold text-white flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-pgf-gold shrink-0 mt-0.5" />
                  <span>Nut Butter Processing Plant:</span>
                </div>
                <div className="pl-5 text-gray-400">
                  4539 E Annadale Ave<br />
                  Fresno, CA 93725
                </div>
              </div>

              {/* Phone & Email */}
              <div className="pt-2 border-t border-white/10 space-y-1.5">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-pgf-gold" />
                  <a href="tel:5592762580" className="hover:text-white font-semibold text-white/90">
                    Phone: (559) 276-2580
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-pgf-gold" />
                  <span>Fax: (559) 276-2936</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-pgf-gold" />
                  <a href="mailto:leep@pacificgrainfoods.com" className="hover:text-white text-gray-300 break-all">
                    leep@pacificgrainfoods.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <div>
            &copy; {currentYear} <span className="text-white font-medium">Pacific Grain & Foods, LLC</span>. All rights reserved. Fresno, California, USA.
          </div>
          <div className="flex items-center space-x-6 text-[11px] text-gray-400">
            <span>Managing Partner: Lee Perkins</span>
            <span>&bull;</span>
            <span>Certified Kosher & Organic</span>
            <span>&bull;</span>
            <span>Central San Joaquin Valley</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

