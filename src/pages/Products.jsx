import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, ShieldCheck, Tag, X, Sparkles, ArrowRight, Check, Package } from 'lucide-react';
import { productsList, productCategories } from '../data/productsData';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import QuoteCTA from '../components/QuoteCTA';
import RecipeShowcase from '../components/RecipeShowcase';
import CommodityGuidesSection from '../components/CommodityGuidesSection';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [organicOnly, setOrganicOnly] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [visibleCount, setVisibleCount] = useState(24);

  // Sync category from URL query param
  useEffect(() => {
    const cat = searchParams.get('category') || 'all';
    setSelectedCategory(cat);
    setVisibleCount(24);
  }, [searchParams]);

  const handleCategoryChange = (key) => {
    setSelectedCategory(key);
    setVisibleCount(24);
    if (key === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', key);
    }
    setSearchParams(searchParams);
  };

  // Filter products
  const filteredProducts = useMemo(() => {
    return productsList.filter((p) => {
      // Category match
      if (selectedCategory !== 'all' && p.categoryKey !== selectedCategory) {
        return false;
      }
      // Organic filter
      if (organicOnly && !p.hasOrganic) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesAka = p.aka && p.aka.toLowerCase().includes(q);
        const matchesSku = p.itemId && p.itemId.toLowerCase().includes(q);
        const matchesOrganicSku = p.organicId && p.organicId.toLowerCase().includes(q);
        const matchesDesc = p.description && p.description.toLowerCase().includes(q);
        const matchesTidbits = p.tidbits && p.tidbits.toLowerCase().includes(q);
        if (!matchesName && !matchesAka && !matchesSku && !matchesOrganicSku && !matchesDesc && !matchesTidbits) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, searchQuery, organicOnly]);

  const activeCategoryObj = productCategories.find(c => c.key === selectedCategory);

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* Category Hero / Header */}
      <section className="relative bg-[#1A050B] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={activeCategoryObj ? activeCategoryObj.banner : '/assets/images/banners/beans-banner.jpeg'}
            alt="Pacific Grain & Foods Product Catalog"
            className="w-full h-full object-cover filter brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#17050A]/95 via-[#1E0810]/85 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-pgf-gold text-xs font-bold uppercase tracking-wider">
            <Package className="w-3.5 h-3.5 text-pgf-gold" />
            Verified Bulk & Private Label Inventory
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-white tracking-tight">
            {activeCategoryObj ? activeCategoryObj.name : 'Master Product Catalog'}
          </h1>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
            {activeCategoryObj 
              ? `Explore our verified inventory of ${activeCategoryObj.name.toLowerCase()} sourced direct from growers and available in retail stand-up pouches, 25/50 lb. kraft bags, and 1-ton super totes.`
              : 'Browse our extensive catalog of nearly 900 active agricultural commodities and specialty food ingredients. Available for wholesale bulk delivery, custom recipe mixing, and private label packaging.'}
          </p>
        </div>
      </section>

      {/* Main Catalog Interface */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* Controls: Search, Category Tabs, Organic Filter */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 sm:p-6 space-y-5">
          {/* Top Row: Search and Organic Toggle */}
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-gray-600 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search products by name, variety, SKU, AKA (e.g., 'Adzuki', 'Basmati', 'Chia', 'Peruano')..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-3 rounded-xl border border-gray-300 focus:border-pgf-burgundy focus:ring-2 focus:ring-pgf-burgundy/20 text-sm text-gray-900 transition-all outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-900"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Certified Organic Toggle */}
            <label className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-300 hover:border-emerald-500 bg-gray-50/50 cursor-pointer transition-colors select-none">
              <input
                type="checkbox"
                checked={organicOnly}
                onChange={(e) => setOrganicOnly(e.target.checked)}
                className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500 border-gray-300"
              />
              <span className="text-xs sm:text-sm font-bold text-gray-800 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Certified Organic Only
              </span>
            </label>
          </div>

          {/* Category Tabs */}
          <div className="pt-2 border-t border-gray-100 flex flex-wrap gap-2">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-pgf-burgundy text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Categories ({productsList.length})
            </button>

            {productCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => handleCategoryChange(cat.key)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                  selectedCategory === cat.key
                    ? 'bg-pgf-burgundy text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{cat.name.split('&')[0]}</span>
                <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                  selectedCategory === cat.key ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter & Active Filter Pills */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs sm:text-sm text-gray-700">
          <div>
            Showing <strong className="text-gray-900 font-bold">{Math.min(visibleCount, filteredProducts.length)}</strong> of <strong className="text-gray-900 font-bold">{filteredProducts.length}</strong> items matching your criteria
          </div>

          {(searchQuery || selectedCategory !== 'all' || organicOnly) && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setOrganicOnly(false);
                searchParams.delete('category');
                setSearchParams(searchParams);
              }}
              className="text-pgf-burgundy font-bold hover:underline flex items-center gap-1"
            >
              <X className="w-3.5 h-3.5" />
              Reset all filters
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.slice(0, visibleCount).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={(p) => setSelectedProduct(p)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-200 space-y-4 max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mx-auto">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">No matching products found</h3>
            <p className="text-xs sm:text-sm text-gray-500">
              We couldn't find any products matching your specific query. Pacific Grain & Foods maintains over 900 active items—contact our sales desk to check unlisted inventory.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setOrganicOnly(false);
              }}
              className="px-5 py-2.5 bg-pgf-burgundy text-white font-bold rounded-lg text-xs"
            >
              Clear Search & Show All
            </button>
          </div>
        )}

        {/* Show More Button */}
        {visibleCount < filteredProducts.length && (
          <div className="text-center pt-8">
            <button
              onClick={() => setVisibleCount(prev => prev + 24)}
              className="px-8 py-3.5 bg-white hover:bg-gray-50 text-pgf-burgundy font-bold rounded-xl border border-gray-300 shadow-sm hover:shadow transition-all text-sm"
            >
              Load More Products ({filteredProducts.length - visibleCount} remaining)
            </button>
          </div>
        )}

        {/* Technical Commodity Guides & Downloads */}
        <div className="pt-12 border-t border-gray-200">
          <CommodityGuidesSection />
        </div>

        {/* Culinary Applications & Tested Recipes */}
        <div className="pt-12 border-t border-gray-200">
          <RecipeShowcase />
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {/* Bottom CTA */}
      <QuoteCTA
        title="Need a Specific Commodity or Custom Formulation?"
        subtitle="Our Fresno sales desk provides certified quotes within 24 hours for bulk truckloads, private label packaging, and custom 500 lb. recipe mixing."
      />
    </div>
  );
}

