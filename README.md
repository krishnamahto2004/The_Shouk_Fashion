# 👑 SHOUK - The Desire
> **TRADITION IN EVERY DRAPE • शौक़**  
> Luxury Handloom Sarees, Royal Men's Ethnic Wear & Handcrafted Accessories.  
> *Built with React 18 + Vite + Tailwind CSS | Standalone HTML5 + Vanilla JS | Vercel Ready*

---

## 🔄 Working Flow (Short & Step-by-Step)

```text
[ 1. Discover ] ──> [ 2. Filter & Browse ] ──> [ 3. Quick View ] ──> [ 4. Bag / WhatsApp Order ] ──> [ 5. Checkout & Track ]
   Hero Slider          10 Royal Categories         Fabric & Zari            Sliding Cart / 1-Click       Order ID: #SHOUK-XXXXXX
   The Atelier          Starting from ₹699          Silk Mark Specs          WhatsApp Concierge           Live BlueDart Air Tracker
```

### 1. 🌟 Discover & Explore
- **Royal Hero Showcase**: Automated high-resolution slider featuring heirloom Banarasi & Kanjivaram drapes.
- **Swipeable Categories**: 10 circular collection stories (Cotton, Silk, Banarasi, Kanjivaram, Organza, Men's, Accessories).
- **The Atelier (`#atelier`)**: Living handloom heritage section highlighting 320+ pit-loom master weavers, GI certifications, and regional weaving techniques (Kadwa, Korvai, Jamdani).

### 2. 🔍 Filter & Catalog Browse
- **10 Filter Tabs**: Instant zero-lag category switching across 44 products starting at **₹699**.
- **Responsive 2-Column Mobile Grid**: High-density mobile browsing with lazy-loaded imagery and Silk Mark badges.
- **Live Search**: Real-time keyword filter across product titles, fabrics, and drape categories.

### 3. 🥻 Inspect & Quick View
- **No Clutter on Cards**: Editorial cards with high-res photography and direct "Quick View" action.
- **Quick View Modal**: Inspect pure silk certification, 0.8m unstitched blouse fabric, drape length, and customer ratings.

### 4. 🛒 Bag & Promo Application
- **Sliding Cart Drawer**: Update item quantities (+ / -), view real-time subtotal, and get insured free shipping.
- **Coupon Code Engine**: Apply promo code **`WELCOME10`** for an instant 10% discount.
- **Wishlist Drawer**: Save favorite sarees with one-tap heart toggle.

### 5. 📦 Order & Live WhatsApp Concierge
- **Path A — Web Checkout**: Fill shipping details in the Checkout Modal to generate an authentic Order ID (e.g., `#SHOUK-89241`), auto-saved to local storage.
- **Path B — Direct WhatsApp Order**: One-click order button on any saree or entire cart opening WhatsApp with pre-filled item specifications and prices.
- **Path C — Live Order Tracker**: Floating WhatsApp Widget with live 4-step progress timeline (Order Placed → Silk Inspected → Dispatched via Express Air → Out for Delivery) + direct WhatsApp tracking support.

---

## ⚡ Core Feature Highlights

| Feature | Description | Status |
| :--- | :--- | :---: |
| **Catalog & Pricing** | 44 curated products across 10 categories, starting at **₹699** | ✅ Working |
| **The Atelier Section** | Dedicated on-page heritage section with master loom stories & GI badges | ✅ Working |
| **Quick View Modal** | Detailed popup with Silk Mark badges, specs, and WhatsApp order CTA | ✅ Working |
| **WhatsApp Pop Widget** | 3-tab popup: **1. Order Tracker**, **2. Product Selector**, **3. Stylist Chat** | ✅ Working |
| **Cart & Checkout** | Sliding drawer with coupon (`WELCOME10`), free delivery & unique Order IDs | ✅ Working |
| **All-Device Responsive**| 2-column mobile grid, touch-swipe categories, tablet & 4K layout | ✅ Working |
| **Dual Architecture** | Standalone zero-dependency HTML file + React 18 Vite codebase | ✅ Working |
| **Vercel Deployment** | Pre-configured `vercel.json` with Vite framework & SPA rewrites | ✅ Ready |

---

## 📂 Project Structure

```text
The_Shouk_Fashion/
├── the_shouk_fashion (2).html   # Complete standalone zero-dependency website
├── vercel.json                  # Vercel deployment & SPA rewrite configuration
├── .gitignore                   # Excludes node_modules, dist, and cache
├── package.json                 # React 18, Vite & Tailwind dependencies
├── vite.config.js               # Vite build configuration
├── tailwind.config.js           # Royal color palette & typography
├── public/                      # Static assets (shouk-logo.png)
│
└── src/                         # Modern React Component Architecture
    ├── App.jsx                  # Main application layout & toasts
    ├── context/CartContext.jsx  # Global state for cart, wishlist & modals
    ├── data/products.js         # 44 verified products & category datasets
    └── components/
        ├── Header.jsx           # Responsive sticky nav & mobile drawer
        ├── Hero.jsx             # Hero slider with festive typography
        ├── Categories.jsx       # Swipeable & grid collection circles
        ├── AtelierSection.jsx   # Dedicated handloom heritage showcase
        ├── ProductSection.jsx   # Catalog with category tabs & 2-4 col grid
        ├── ProductCard.jsx      # Mobile-optimized product card
        ├── WhatsAppWidget.jsx   # Floating WhatsApp button & 3-tab concierge
        ├── QuickViewModal.jsx   # Product preview modal with WhatsApp button
        ├── CartDrawer.jsx       # Sliding bag drawer with coupon engine
        ├── WishlistDrawer.jsx   # Saved favorites drawer
        ├── CheckoutModal.jsx    # Multi-step checkout & order ID generator
        └── Footer.jsx           # Royal boutique footer & quick links
```

---

## 🚀 How to Run & Deploy

### 1. Run Standalone Version (Instant)
Double-click or open [`the_shouk_fashion (2).html`](./the_shouk_fashion%20(2).html) in any browser. Works completely offline without installation.

### 2. Run React + Vite Locally
```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build production bundle
npm run build
```

### 3. Deploy to Vercel
The project includes a ready-to-deploy [`vercel.json`](./vercel.json).

```bash
# Push latest commit to GitHub
git push origin master

# OR deploy directly via Vercel CLI
npx vercel --prod
```

> **Vercel Settings**:
> - **Framework Preset**: `Vite`
> - **Build Command**: `npm run build`
> - **Output Directory**: `dist`
> - **Install Command**: `npm install`

---

## 🏷️ Brand Identity & Contact
- **Brand Name**: SHOUK - The Desire
- **Devanagari Tagline**: TRADITION IN EVERY DRAPE • शौक़
- **Flagship Boutique**: Heritage Avenue, Morabadi Ground, Ranchi, Jharkhand - 834008
- **Official WhatsApp Concierge**: `+91 98765 43210`
- **Active Festive Coupon**: `WELCOME10` (10% Off)
