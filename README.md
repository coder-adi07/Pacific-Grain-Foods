# Pacific Grain & Foods, LLC &ndash; Corporate Website Redesign

A premium, modern, fully responsive web application and digital presence concept created for **Pacific Grain & Foods, LLC** (Fresno, California).

## Executive Overview

Pacific Grain & Foods, LLC is a leading family-owned bulk dry ingredient supplier, custom mixer, and private label co-packager founded in 1982 by **Lee Perkins**. Operating over **172,000 square feet** across 8 specialized facilities in Fresno and Malaga, California, the company supplies over 85 varieties of edible dry beans, ancient grains, specialty rices, organic sprouting seeds, California nuts, and spices to food manufacturers, supermarket grocery chains, and distributors worldwide.

This redesign modernizes the company's digital presence while preserving its authentic brand identity, original logos, exact color system, verified facility history, and master catalog of products.

---

## 1. Brand Identity & Color System

The redesign preserves the original brand identity and builds upon its signature color palette:

- **Pacific Crimson / Burgundy** (`#981A32`): The primary corporate brand color, honoring over 40 years of agricultural leadership.
- **Harvest Wheat Gold** (`#E9B11E`): Accent and highlight hue, symbolizing bountiful grain harvests.
- **Central Valley Green** (`#2E5715`): Deep agricultural green representing sustainability and farm-direct partnerships.
- **Natural Cream / Linen** (`#FAF8F5` / `#F8F1E0`): Warm neutral surface tone replacing sterile white, evoking wholesome grains and burlap sacking.
- **Charcoal Slate** (`#1E2229` / `#212121`): High-contrast editorial typography.
- **Original Logo**: Unaltered original high-resolution logo (`public/assets/images/logo.png`) featuring the signature wheat sheaf crest.

---

## 2. Website Structure & Implemented Pages

### Page 01: Home (`/`)
- **Hero Section**: High-resolution harvest imagery with editorial typography, authentic value propositions, dual CTAs (*Explore Our Products* & *Request a Quote*), and live certification badges.
- **Key Stats Bar**: Highlighting 1982 establishment, 172,000+ sq. ft., 85+ bean varieties, 900+ active SKUs, and 2,500+ commercial clients.
- **Company Story**: Verified history of Lee Perkins, expansion from San Joaquin Valley feed mills into human food supply, and the 2010 LLC restructure.
- **Product Categories Showcase**: Attractive cards featuring real category banners linking directly to catalog filters.
- **Processing Capabilities**: Highlighting dry air-flow optical cleaning, custom recipe blending, private label co-packing, and nut butter processing.
- **The PGF Advantage**: Why manufacturers and grocers choose Pacific Grain & Foods (low 500 lb. blending minimums, seed-safe air cleaning, intermodal rail logistics).
- **Private Label Feature**: Explaining retail stand-up pouches (1/2 oz to 15 lbs) and industrial bulk sacks (25/50 lb. kraft and 1-ton super totes).
- **Commercial Quote CTA & Comprehensive Footer**.

### Page 02: Products (`/products`)
- **Master Product Catalog**: 195 verified authentic products extracted directly from the company's live inventory across 6 core categories:
  - *Dry Beans & Legumes* (105 items)
  - *Rice & Specialty Rices* (34 items)
  - *Ancient & Whole Grains* (26 items)
  - *Sprouting Seeds & Superfoods* (15 items)
  - *Nuts & Nut Butters* (6 items)
  - *Spices, Chilies & Blends* (9 items)
- **Instant Search**: Real-time filtering by commodity name, AKA name, conventional SKU, organic SKU, or flavor profile.
- **Interactive Product Modal**: In-depth view featuring culinary profiles, agricultural lore, conventional & organic item codes, available packaging formats, and a direct *"Request Quote for this Product"* action that pre-fills the inquiry form.

### Page 03: Capabilities (`/capabilities`)
- **Dry Air-Flow Cleaning & Optical Sorting**: Explaining why air cleaning is used instead of water washing to preserve seed dormancy and prevent premature sprouting, with authentic photos from the 38,000 sq. ft. Malaga plant.
- **Private Label Retail Packaging**: Turnkey co-packing in stand-up pouches with resealable ziplocks, bottom gussets, P.E.T. jars, mylar, and automated VFFS bagging.
- **Industrial Bulk Packaging**: 25 lb. and 50 lb. 3-ply poly-lined kraft sacks and 1-ton (2,000 lb.) FIBC super totes.
- **Custom Blending**: Flexible formulations starting at an industry-low 500 lb. minimum.
- **Nut & Seed Butter Processing**: Dedicated facility at 4539 E Annadale Ave in Fresno grinding peanut butter, almond butter, and sunflower seed butter.
- **Rail Logistics & Cold Storage**: 9,000 sq. ft. temperature-controlled storage and direct rail-spur terminal operated by subsidiary PGF Logistics, LLC.

### Page 04: About Us (`/about`)
- **Four Decades of Heritage**: Complete milestone timeline from 1982 founding to 172K+ sq. ft. scale across 8 facilities.
- **Authentic Photography**: Real company photos of the Fresno corporate headquarters (`facility-front.jpeg`), direct grower sourcing (`sourcing.jpeg`), optical cleaning (`cleaning.jpeg`), and private label packaging (`privatelabel.jpeg`).
- **Official Certifications**: OK Kosher, KORC Pareve / Heart K, Organic Certifiers, and USDA Organic.
- **Business Philosophy**: Pricing transparency with semi-annual commodity reviews and customer loyalty.

### Page 05: Contact / Request a Quote (`/contact`)
- **Verified Business Details**: Main office (4067 W Shaw Ave #116, Fresno CA 93722), Nut Butter plant (4539 E Annadale Ave, Fresno CA 93725), direct phone `(559) 276-2580`, fax `(559) 276-2936`, and email `leep@pacificgrainfoods.com`.
- **Interactive Facility Maps**: Tabbed Google Maps embed for both Fresno operational facilities.
- **Commercial Quote Form**: Complete validation, volume selection, packaging options, timeline urgency, product prefill, and demonstration confirmation state.

---

## 3. Technology Stack

- **React 18** (Modern functional components & hooks)
- **Vite 5** (Ultra-fast build and development toolchain)
- **Tailwind CSS 3** (Custom color tokens, typography, and responsive grid system)
- **React Router 6** (Multi-page client-side routing with automatic scroll-to-top)
- **Lucide React** (Crisp industrial and navigational iconography)

---

## 4. Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in `dist/`.

### Preview Production Build
```bash
npm run preview
```
Open [http://localhost:4173](http://localhost:4173) in your browser.

