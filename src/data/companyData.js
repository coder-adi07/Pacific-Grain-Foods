export const companyInfo = {
  name: "Pacific Grain & Foods, LLC",
  shortName: "Pacific Grain & Foods",
  tagline: "Premier Bulk Dry Food Ingredients, Custom Blending & Private Label Packaging",
  foundedYear: 1982,
  founder: "Lee Perkins",
  managingPartner: "Lee Perkins",
  anniversaryYears: new Date().getFullYear() - 1982,
  legalStructure: "Family-Owned LLC (incorporated Jan 1, 2010)",
  
  facilitiesSummary: "172,000+ sq. ft. across 8 specialized facilities in Fresno & Malaga, California's Central San Joaquin Valley",
  
  locations: [
    {
      id: "corporate-hq",
      name: "Main Corporate Office & Retail Outlet",
      address: "4067 W Shaw Ave #116",
      city: "Fresno",
      state: "CA",
      zip: "93722",
      fullAddress: "4067 W Shaw Ave #116, Fresno, CA 93722",
      phone: "(559) 276-2580",
      fax: "(559) 276-2936",
      email: "leep@pacificgrainfoods.com",
      hours: {
        office: "Mon - Fri: 8:00 AM - 4:00 PM (PST)",
        shipping: "Mon - Fri: 7:00 AM - 2:00 PM (PST)",
        weekend: "Closed Saturday & Sunday"
      },
      description: "Executive headquarters, commercial sales desks, sample showroom, and small public retail outlet.",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.5179539865458!2d-119.86657408390778!3d36.8061064799473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8094661bf00fdd29%3A0x11cc5a71cbe929d9!2sPacific%20Grain%20%26%20Foods!5e0!3m2!1sen!2sus!4v1570749826446!5m2!1sen!2sus"
    },
    {
      id: "nut-butter-plant",
      name: "Nut Butter & Processing Plant",
      address: "4539 E Annadale Ave",
      city: "Fresno",
      state: "CA",
      zip: "93725",
      fullAddress: "4539 E Annadale Ave, Fresno, CA 93725",
      phone: "(559) 276-2580",
      hours: {
        office: "Mon - Fri: 8:00 AM - 4:00 PM (PST)",
        shipping: "Mon - Fri: 7:00 AM - 2:00 PM (PST)",
        weekend: "Closed Saturday & Sunday"
      },
      description: "Dedicated grinding, roasting, and manufacturing facility for peanut butters, almond butters, sunflower seed butters, and custom paste formulations.",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3200.2741517595567!2d-119.7511055!3d36.7004937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80945f9b7e4445cf%3A0x918c782d6b0732c5!2s4539%20E%20Annadale%20Ave%2C%20Fresno%2C%20CA%2093725!5e0!3m2!1sen!2sus!4v1689275081043!5m2!1sen!2sus"
    },
    {
      id: "malaga-plant",
      name: "Malaga Agricultural Cleaning Plant",
      address: "Malaga Industrial District",
      city: "Fresno / Malaga",
      state: "CA",
      zip: "93725",
      fullAddress: "Malaga Industrial Corridor, Fresno County, CA",
      phone: "(559) 276-2580",
      description: "38,000 sq. ft. high-capacity facility equipped with electric-eye optical sorters and dry gravity-flow air separators for farm-fresh field crop cleaning."
    },
    {
      id: "south-fresno-rail",
      name: "South Fresno Rail Logistics & Cold Storage Hub",
      address: "South Fresno Industrial Park",
      city: "Fresno",
      state: "CA",
      zip: "93725",
      fullAddress: "South Fresno Rail Corridor, CA",
      phone: "(559) 276-2580",
      description: "Direct rail-spur facility featuring 9,000 sq. ft. of climate-controlled cold/freezer storage and intermodal shipping capabilities via PGF Logistics, LLC."
    }
  ],

  certifications: [
    {
      name: "OK Kosher Certified",
      issuer: "OK Kosher Certification",
      logo: "/assets/images/certifications/ok-kosher.png",
      description: "Strict rabbinical supervision ensuring kosher compliance across our bulk spices, grains, beans, and processing equipment."
    },
    {
      name: "KORC Pareve / Heart K",
      issuer: "Kosher Overseers Associates of America",
      logo: "/assets/images/certifications/korc-pareve.png",
      description: "Recognized pareve kosher certification for specialty grains, beans, and custom blending lines."
    },
    {
      name: "Organic Certifiers",
      issuer: "Organic Certifiers, Inc.",
      logo: "/assets/images/certifications/organic-certifiers.png",
      description: "Certified organic handler and processor ensuring complete chain-of-custody documentation from farm to packaged lot."
    },
    {
      name: "USDA Organic",
      issuer: "United States Department of Agriculture",
      logo: "/assets/images/certifications/usda-organic.png",
      description: "Full compliance with the National Organic Program (NOP) standards for certified organic dry food ingredients."
    }
  ],

  historyMilestones: [
    {
      year: "1982",
      title: "Founding in the San Joaquin Valley",
      description: "Established by Lee Perkins in Fresno, California, Pacific Grain originated as an animal feed company serving farmers and ranchers across the Central Valley and western United States with premium quality grain feeds."
    },
    {
      year: "1989",
      title: "Expansion to Human Food Supply",
      description: "Responding to growing demand for premium edible beans, grains, and spices, the company expanded into human food ingredients. The name was changed to Pacific Grain & Foods to reflect its evolving mission."
    },
    {
      year: "1990",
      title: "100% Food Focus",
      description: "Pacific Grain & Foods phased out animal feed entirely to focus 100% of its resources on supplying the American food service, manufacturing, and distribution industries."
    },
    {
      year: "1991 - 1995",
      title: "Organics & Industrial Bulk Divisions",
      description: "Major expansion adding Industrial/Institutional Bulk Sales and dedicated Certified Organic divisions. Facilities received Kosher certification and a retail specialty line was introduced in Fresno."
    },
    {
      year: "2004 - 2008",
      title: "Shaw & Brawley Expansion",
      description: "Relocated to a 20,500 sq. ft. headquarters on West Shaw at Brawley Ave, quickly adding a 13,500 sq. ft. production warehouse in 2005, followed by an 11,000 sq. ft. shipping complex and remodeled corporate offices in 2008."
    },
    {
      year: "2010",
      title: "Pacific Grain & Foods, LLC & Malaga Plant",
      description: "On January 1, 2010, the company reorganized as Pacific Grain & Foods, LLC with Lee Perkins as Managing Partner. Added a 38,000 sq. ft. cleaning facility in Malaga equipped with electric-eye sorting and gravity-flow equipment, along with 9,000 sq. ft. of cold storage."
    },
    {
      year: "2015 - Present",
      title: "Rail Facility & 172K+ Sq. Ft. Operational Scale",
      description: "Acquired a major rail-served facility in South Fresno and established PGF Logistics, LLC. Today operating over 172,000 sq. ft. across 8 facilities, serving over 2,500 corporate clients with nearly 900 active products."
    }
  ],

  stats: [
    { value: "1982", label: "Year Established", detail: "Over 40 years of continuous family leadership" },
    { value: "172,000+", label: "Square Feet", detail: "Across 8 facilities in Fresno & Malaga, CA" },
    { value: "85+", label: "Dry Bean Varieties", detail: "One of the world's largest varietal bean handlers" },
    { value: "900+", label: "Active Dry Food SKUs", detail: "Beans, grains, rice, seeds, nuts, and spices" },
    { value: "2,500+", label: "Commercial Clients", detail: "Manufacturers, retailers, food service & institutions" }
  ],

  capabilities: [
    {
      id: "cleaning-sorting",
      title: "Dry Air-Flow Cleaning & Optical Sorting",
      subtitle: "State-of-the-Art Electric-Eye & Gravity Separation",
      description: "Because water washing triggers unwanted seed sprouting in dry agricultural goods, our dry cleaning process utilizes specialized high-velocity air-flow systems, cyclone collectors, gravity-flow tables, and electric-eye optical sorters to meticulously eliminate field dirt, pebbles, plant chafe, and foreign matter without compromising seed integrity.",
      icon: "Sparkles",
      authenticImage: "/assets/images/cleaning.jpeg",
      features: [
        "Dry air-wash and cyclone dust collection",
        "Electric-eye multi-frequency optical sorters",
        "Multi-deck gravity-flow seed separators",
        "Continuous foreign material elimination",
        "Preserves seed dormancy and prevents sprouting"
      ]
    },
    {
      id: "sourcing",
      title: "Direct Grower Contracting & Global Sourcing",
      subtitle: "From California's Central Valley to International Origins",
      description: "We contract directly with premier growers in California's San Joaquin Valley and domestic agricultural centers, while importing exotic spices (such as Spanish paprika, cinnamon, and peppercorns) and ancient grains (South American quinoas and chia) through trusted global brokers with complete traceability.",
      icon: "Tractor",
      authenticImage: "/assets/images/sourcing.jpeg",
      features: [
        "Direct California farm contracts for beans and nuts",
        "Certified organic chain of custody verification",
        "International direct import for exotic spices and seeds",
        "Volume pricing leverage passed directly to partners",
        "Rigorous inbound lot testing and crop inspection"
      ]
    },
    {
      id: "custom-blending",
      title: "Custom Formulating, Mixing & Grinding",
      subtitle: "Tailored Formulations with 500 lb. Low Minimums",
      description: "Our blending department creates custom multi-bean soup formulations, tri-color quinoa blends (white, red, and black), proprietary savory no-salt bean rubs, sprouted seed mixes, and artisan trail mixes in both conventional and certified organic recipes.",
      icon: "Layers",
      authenticImage: "/assets/images/facility-front.jpeg",
      features: [
        "Low 500 lb. minimum order for custom formulations",
        "Tri-color quinoa & multigrain blend recipes",
        "Custom dry soup & dehydrated vegetable mixes",
        "Savory seasoning rubs and spice blending",
        "Specialty grain milling: rice flour & chia flour"
      ]
    },
    {
      id: "private-label",
      title: "Private Label & Contract Packaging (Co-Packing)",
      subtitle: "From 1/2 oz. Retail Pouches to 2,000 lb. Bulk Totes",
      description: "We provide turnkey co-packing and private label services for national grocery supermarket chains, independent food retailers, and food service brands. Our high-speed packaging lines handle poly bags, mylar, stand-up resealable ziplock pouches, P.E.T. canisters, pillow packs, and biodegradable films.",
      icon: "PackageCheck",
      authenticImage: "/assets/images/privatelabel.jpeg",
      features: [
        "Retail stand-up pouches (1, 2, 3, 5, and 10-15 lbs.) with resealable zippers & gussets",
        "P.E.T. plastic jars, canisters, poly bagging, and mylar barrier bags",
        "VFFS (Vertical Form Fill Seal) automated high-speed bagging",
        "Biodegradable and eco-friendly packaging options",
        "Complete nutritional labeling and custom branding support"
      ]
    },
    {
      id: "bulk-packaging",
      title: "Industrial Bulk Packaging & Palletization",
      subtitle: "Heavy-Duty 25/50 lb. Bags & 1-Ton Super Totes",
      description: "Engineered for food processors, industrial bakeries, canners, and institutional clients. We pack in heavy-duty 3-ply kraft paper bags with moisture-resistant poly liners, multi-wall clay sacks, corrugated bulk boxes, and 2,000 lb. (1-ton) woven polypropylene FIBC super totes.",
      icon: "Boxes",
      authenticImage: "/assets/images/facility-front.jpeg",
      features: [
        "25 lb. and 50 lb. 3-ply kraft bags with poly inner liners",
        "1-ton (2,000 lb.) FIBC bulk totes with discharge spouts",
        "Shrink-wrapped, palletized full truckload (FTL) orders",
        "State institutional and emergency food reserve packaging",
        "E.T.O. sterilization & irradiation options for spices"
      ]
    },
    {
      id: "nut-butter-manufacturing",
      title: "Dedicated Nut & Seed Butter Processing",
      subtitle: "Annadale Ave Processing Facility",
      description: "Operating out of our dedicated plant at 4539 E Annadale Ave in Fresno, we grind and process conventional and organic roasted nut and seed butters, including peanut butter, almond butter, sunflower seed butter, and custom paste blends for wholesale distribution and private label.",
      icon: "Nut",
      authenticImage: "/assets/images/banners/nuts-banner.jpeg",
      features: [
        "Dedicated Annadale Ave production facility",
        "Creamy and crunchy grinds",
        "Peanut butter, almond butter, and sunflower seed butter",
        "Bulk pails, drums, and retail packaging formats",
        "Strict allergen segregation and sanitation protocols"
      ]
    },
    {
      id: "logistics-warehousing",
      title: "Warehousing, Cold Storage & PGF Logistics, LLC",
      subtitle: "Rail-Served Distribution & Intermodal Freight",
      description: "With over 172,000 sq. ft. across 8 facilities, including 9,000 sq. ft. of temperature-controlled freezer/cooler space and a direct rail-spur terminal in South Fresno, our logistics subsidiary PGF Logistics, LLC manages nationwide freight via rail car, long-haul truckload (FTL), and less-than-truckload (LTL) carriers.",
      icon: "Truck",
      authenticImage: "/assets/images/facility-front.jpeg",
      features: [
        "172,000+ sq. ft. across 8 Central Valley warehouses",
        "9,000 sq. ft. temperature-controlled cold/freezer storage",
        "Direct rail-spur access for bulk commodity receiving & shipping",
        "Dedicated logistics division: PGF Logistics, LLC",
        "Regional, national, and export shipping coordination"
      ]
    }
  ]
};

