import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calculator, Truck, Package, Scale, ArrowRight, CheckCircle2, Train, Info } from 'lucide-react';

export default function FreightCalculator() {
  const navigate = useNavigate();
  const [weightLbs, setWeightLbs] = useState(10000);
  const [packagingType, setPackagingType] = useState('50lb-bag');

  const packagingSpecs = {
    '50lb-bag': {
      name: '50 lb. 3-Ply Kraft Paper Bags',
      unitWeight: 50,
      unitsPerPallet: 40,
      palletWeight: 2000,
      desc: 'Industry standard for bulk beans, rice, and grains'
    },
    '25lb-bag': {
      name: '25 lb. 3-Ply Kraft Paper Bags',
      unitWeight: 25,
      unitsPerPallet: 80,
      palletWeight: 2000,
      desc: 'Preferred for food service, spices, and smaller handles'
    },
    'tote-2000': {
      name: '1-Ton (2,000 lb.) FIBC Super Tote',
      unitWeight: 2000,
      unitsPerPallet: 1,
      palletWeight: 2000,
      desc: 'Industrial discharge-spout bulk sacks for automated feed lines'
    },
    'pouch-2lb': {
      name: '2 lb. Retail Stand-Up Pouches (Case of 12)',
      unitWeight: 24, // 12 * 2
      unitsPerPallet: 80, // cases
      palletWeight: 1920,
      desc: 'Supermarket private label retail packaging'
    },
    'pouch-5lb': {
      name: '5 lb. Retail Stand-Up Pouches (Case of 6)',
      unitWeight: 30, // 6 * 5
      unitsPerPallet: 65, // cases
      palletWeight: 1950,
      desc: 'Club store & bulk retail packaging'
    }
  };

  const currentSpec = packagingSpecs[packagingType];
  const totalUnits = Math.ceil(weightLbs / currentSpec.unitWeight);
  const totalPallets = Math.ceil(weightLbs / currentSpec.palletWeight);
  const metricTons = (weightLbs * 0.00045359237).toFixed(2);

  // Transit classification
  let transitMode = 'LTL (Less Than Truckload)';
  let transitColor = 'text-blue-700 bg-blue-50 border-blue-200';
  let transitIcon = Truck;
  let transitDesc = 'Palletized common carrier dispatch with liftgate and scheduled delivery appointment options.';

  if (weightLbs >= 40000 && weightLbs < 90000) {
    transitMode = 'Full Truckload (FTL)';
    transitColor = 'text-emerald-800 bg-emerald-50 border-emerald-200';
    transitIcon = Truck;
    transitDesc = 'Dedicated 53-ft. dry van (40,000 - 44,000 lbs.) with optimized direct point-to-point freight routing.';
  } else if (weightLbs >= 90000) {
    transitMode = 'Intermodal / Rail Car Lot';
    transitColor = 'text-amber-900 bg-amber-50 border-amber-200';
    transitIcon = Train;
    transitDesc = 'Direct boxcar shipment via our South Fresno rail-spur facility and PGF Logistics, LLC.';
  }

  const handleApplyToQuote = () => {
    navigate(`/contact?type=quote&packaging=${encodeURIComponent(currentSpec.name)}&volume=${encodeURIComponent(`${weightLbs.toLocaleString()} lbs. (~${totalPallets} Pallets)`)}`);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-xl space-y-8">
      {/* Header */}
      <div className="border-b border-gray-100 pb-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-pgf-burgundy bg-pgf-burgundy/10 px-3 py-1 rounded-full mb-1">
            <Calculator className="w-3.5 h-3.5" />
            Interactive Procurement Estimator
          </div>
          <h3 className="text-2xl font-serif font-bold text-gray-900">
            Bulk Volume & Freight Estimator
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
            Calculate bag counts, GMA pallet footprints, and optimal transit logistics for your next commodity order.
          </p>
        </div>

        <div className="text-right hidden sm:block">
          <span className="text-xs font-semibold text-gray-500">PGF Logistics, LLC Desk</span>
          <div className="text-sm font-bold text-pgf-burgundy">(559) 276-2580</div>
        </div>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Weight Slider & Presets */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
              Total Order Weight (lbs.)
            </label>
            <span className="text-lg font-mono font-bold text-pgf-burgundy">
              {Number(weightLbs).toLocaleString()} lbs.
            </span>
          </div>

          <input
            type="range"
            min="500"
            max="120000"
            step="500"
            value={weightLbs}
            onChange={(e) => setWeightLbs(Number(e.target.value))}
            className="w-full h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-pgf-burgundy"
          />

          {/* Quick preset buttons */}
          <div className="flex flex-wrap gap-2 pt-1">
            {[
              { label: '500 lbs. (Min Blend)', val: 500 },
              { label: '2,000 lbs. (1 Pallet)', val: 2000 },
              { label: '10,000 lbs. (5 Pallets)', val: 10000 },
              { label: '42,000 lbs. (1 Truckload)', val: 42000 },
              { label: '100,000 lbs. (Rail Car)', val: 100000 }
            ].map((p) => (
              <button
                key={p.val}
                type="button"
                onClick={() => setWeightLbs(p.val)}
                className={`text-[11px] font-semibold px-2.5 py-1 rounded-md border transition-colors ${
                  weightLbs === p.val
                    ? 'bg-pgf-burgundy text-white border-pgf-burgundy'
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Packaging Format Select */}
        <div className="space-y-3">
          <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block">
            Select Packaging Format
          </label>
          <select
            value={packagingType}
            onChange={(e) => setPackagingType(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm font-semibold text-gray-900 bg-white focus:border-pgf-burgundy focus:ring-2 focus:ring-pgf-burgundy/20 outline-none"
          >
            {Object.keys(packagingSpecs).map((key) => (
              <option key={key} value={key}>
                {packagingSpecs[key].name}
              </option>
            ))}
          </select>
          <p className="text-xs text-gray-500 italic">
            {currentSpec.desc}
          </p>
        </div>
      </div>

      {/* Calculated Results Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#FAF8F5] p-6 rounded-2xl border border-gray-200">
        <div className="space-y-1">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1">
            <Package className="w-3.5 h-3.5 text-pgf-burgundy" />
            Total Packages
          </div>
          <div className="text-2xl font-serif font-extrabold text-gray-900">
            {totalUnits.toLocaleString()}
          </div>
          <div className="text-[11px] text-gray-500">
            {packagingType.startsWith('pouch') ? 'Retail Cases' : 'Bags / Totes'}
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1">
            <Scale className="w-3.5 h-3.5 text-pgf-burgundy" />
            Pallet Footprint
          </div>
          <div className="text-2xl font-serif font-extrabold text-pgf-burgundy">
            {totalPallets.toLocaleString()}
          </div>
          <div className="text-[11px] text-gray-500">
            Standard 40" &times; 48" GMA Pallets
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1">
            <Scale className="w-3.5 h-3.5 text-pgf-burgundy" />
            Metric Tons
          </div>
          <div className="text-2xl font-serif font-extrabold text-gray-900">
            {metricTons}
          </div>
          <div className="text-[11px] text-gray-500">
            Export equivalent weight
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1">
            <Truck className="w-3.5 h-3.5 text-pgf-burgundy" />
            Transit Mode
          </div>
          <div className="text-base font-bold text-gray-900 leading-tight">
            {transitMode.split('(')[0]}
          </div>
          <div className="text-[11px] text-gray-500">
            PGF Logistics, LLC
          </div>
        </div>
      </div>

      {/* Transit Advisory Note */}
      <div className={`p-4 rounded-xl border flex items-start gap-3 ${transitColor}`}>
        <Info className="w-5 h-5 shrink-0 mt-0.5" />
        <div className="text-xs leading-relaxed">
          <strong>Recommended Dispatch Strategy: {transitMode}</strong> &ndash; {transitDesc}
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <div className="text-xs text-gray-500">
          *Estimates based on standard industry bulk pallet density. Pacific Grain & Foods confirms exact dock appointments and tare weights upon quote confirmation.
        </div>

        <button
          onClick={handleApplyToQuote}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-pgf-burgundy hover:bg-pgf-burgundy-800 text-white font-bold rounded-xl text-sm shadow-md transition-colors shrink-0"
        >
          <span>Transfer to Quote Request</span>
          <ArrowRight className="w-4 h-4 text-pgf-gold" />
        </button>
      </div>
    </div>
  );
}

