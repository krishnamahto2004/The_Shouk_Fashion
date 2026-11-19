# 👑 SHOUK - The Desire
> **TRADITION IN EVERY DRAPE • शौक़**  
> Luxury Handloom Sarees, Royal Men's Ethnic Wear & Handcrafted Accessories.

---

## 📌 Project Overview
**SHOUK - The Desire** is a modern, ultra-luxurious, and high-performance e-commerce web platform for authentic Indian handlooms, Banarasi, Kanjivaram, and royal accessories. 

The project offers **dual-stack architecture**:
1. **Standalone Production Version**: [`the_shouk_fashion.html`](./the_shouk_fashion%20.html) (Single-file zero-dependency web app with Tailwind CSS CDN, FontAwesome, and Vanilla JS ES6+).
2. **Modern React.js Version**: Built with **React 18 + Vite + Tailwind CSS + Lucide React + Context API**.

---

## ⚡ Summary of Working Tasks & Features

### 1. 🥻 Catalog & Pricing Overhaul
- **Starting Price from ₹699**: Affordable luxury entry point for authentic ethnic fashion.
- **44 Handcrafted Products across 10 Categories**:
  - **Cotton & Mulmul**: Starting from ₹699
  - **Royal Accessories**: Starting from ₹699 (Kundan Potlis, Velvet Batwas)
  - **Men's Royal Ethnic**: Starting from ₹799 (Pure Silk Kurtas, Dupion Jackets)
  - **Georgette Sarees**: Starting from ₹999
  - **Organza Sarees**: Starting from ₹1,199
  - **Handloom Sarees**: Starting from ₹1,299
  - **Silk Sarees**: Starting from ₹1,499
  - **Party Wear Sarees**: Starting from ₹1,599
  - **Banarasi Sarees**: Starting from ₹2,199
  - **Kanjivaram Silk**: Starting from ₹2,499
- **100% Matching Visuals**: Saree titles, fabrics, colors, and models matched with high-resolution imagery.

---

### 2. 🎨 Card Design & Quick View UX
- **No Direct "Add to Bag" on Cards**: Product cards feature a clean, premium, editorial look.
- **Full-Width "Quick View" Action**:
  - Displays high-resolution image preview and Silk Mark / Handloom Mark certification.
  - Interactive fabric, drape length, and attached blouse piece details.
  - Quantity picker, Wishlist toggle, "Add to Bag", and direct **"Order via WhatsApp"** button.

---

### 3. 🏛️ The Atelier (Living Handloom Heritage Section)
- **Dedicated On-Page Experience (`#atelier`)**:
  - Integrated into main navigation with smooth scroll from Navbar, Mobile Drawer, and Footer.
  - Master pit-loom visual showcase featuring Varanasi and Kanchipuram weaver clusters.
  - **4 Living Heritage Badges**:
    - *180 to 300 Hours* crafting time per heirloom drape.
    - *100% GI Tagged* Silk Mark & Handloom Mark certification.
    - *320+ Master Weavers* supported via direct fair trade.
    - *Tested Real Zari* electrum & pure silver wire.
  - **4 Regional Craftsmanship Pillars**:
    - Kadwa Brocade (Varanasi, UP)
    - Korvai Dual-Shuttle (Tamil Nadu)
    - Organza & Sheer Zari (Chanderi, MP)
    - Tussar & Jamdani (Bengal & Jharkhand)

---

### 4. 💬 WhatsApp Concierge & Live Order Tracker
- **Floating WhatsApp Pop Button**:
  - Fixed at bottom-right with online status pulse and notification badge.
  - Hover tooltip pill: *"Order & Track on WhatsApp"*.
- **Interactive 3-Tab Concierge Modal**:
  - **Tab 1 (📦 Track Order)**: Enter Order ID/AWB, live 4-step shipment timeline preview, and 1-click WhatsApp app launch with pre-filled tracking query.
  - **Tab 2 (🥻 Select & Order)**: Order entire cart or select any product from catalog with live thumbnail preview, price, quantity counter, and custom notes.
  - **Tab 3 (💬 Stylist & Direct Chat)**: Fast preset buttons (Bridal Trousseau, Saree Videos/Photos, Discounts, Blouse Stitching) + custom message input.
- **Seamless WhatsApp Buttons**: Added to Quick View Modal, Cart Drawer, and Checkout Confirmation.

---

### 5. 📱 100% All-Device Responsiveness
- **Mobile Phones (320px – 480px)**:
  - **2-Column Product Grid (`grid-cols-2`)**: Clean e-commerce shopping experience.
  - **Touch-Swipeable Categories**: Horizontal swipe for all 10 collections without vertical page clutter.
  - **Zero Horizontal Overflow**: `-webkit-text-size-adjust: 100%`, `overflow-x: hidden`, and iOS safe-area support.
  - **Safe WhatsApp Modal**: Auto-constrained to `w-[calc(100vw-1.5rem)] max-w-[400px]`.
- **Tablets (600px – 1024px)**: Responsive 3-column product grid and 2-column heritage layout.
- **Desktops (1024px+)**: Full 4-column catalog, 10-column category circles, and 12-column Atelier showcase.

---

### 6. 🛍️ Complete E-Commerce Features
- **Shopping Cart Drawer**: Real-time quantity adjustment, subtotal calculation, free shipping badge, and coupon code system (`WELCOME10` for 10% discount).
- **Wishlist Drawer**: Save favorites with instant heart toggle.
- **Live Search Modal**: Real-time filtering by saree name, fabric, and color keywords.
- **Multi-Step Checkout Modal**: Customer shipping address, order confirmation with unique ID generation (`#SHOUK-XXXXXX`), and automatic sync to `localStorage` for tracking.
- **VIP Draping & Styling Modal**: Book personal masterclass and bridal consultation.

---

## 📂 Project Structure
```text
The_Shouk_Fashion/
├── README.md                    # Project documentation & task summary
├── the_shouk_fashion (2).html   # Complete standalone production website
├── shouk-logo.png               # Official royal brand circular badge logo
├── index.html                   # React Vite HTML entry point
├── package.json                 # Node dependencies & scripts
├── vite.config.js               # Vite bundler configuration
├── tailwind.config.js           # Custom royal palette & typography
│
├── public/                      # Static assets (logo, icons)
│   └── shouk-logo.png
│
└── src/                         # React Application Source
    ├── App.jsx                  # Main application layout & toasts
    ├── main.jsx                 # React root mount
    ├── context/
    │   └── CartContext.jsx      # Global cart, wishlist, and modal state
    ├── data/
    │   └── products.js          # 44 Products, categories, and lookbook data
    └── components/
        ├── Header.jsx           # Responsive sticky header & mobile drawer
        ├── Hero.jsx             # Auto-sliding royal banner
        ├── Categories.jsx       # Swipeable & grid collection circles
        ├── AtelierSection.jsx   # Dedicated heritage & weaving showcase
        ├── PromoBanner.jsx      # Split artisanal collection banners
        ├── ProductSection.jsx   # Catalog with category tabs & 2-4 col grid
        ├── ProductCard.jsx      # Mobile-optimized product card
        ├── WhatsAppWidget.jsx   # Floating WhatsApp button & 3-tab concierge
        ├── QuickViewModal.jsx   # Detail modal with WhatsApp order button
        ├── CartDrawer.jsx       # Sliding bag drawer
        ├── WishlistDrawer.jsx   # Saved favorites drawer
        ├── CheckoutModal.jsx    # Complete checkout workflow
        ├── LiveSearchModal.jsx  # Search drawer with instant suggestions
        ├── VIPStylingModal.jsx  # VIP bridal consultation booking
        ├── AtelierModal.jsx     # Deep-dive weaving manifesto modal
        ├── SpecialOfferBanner.jsx # Coupon WELCOME10 promotional banner
        ├── InstagramUGC.jsx     # Royal Patrons Lookbook gallery
        ├── ValueProposition.jsx # Silk Mark, Free Delivery, 7-Day Returns
        └── Footer.jsx           # Comprehensive boutique footer
```

---

## 🚀 How to Run

### Method 1: Open Standalone HTML Directly
Double-click or open [`the_shouk_fashion (2).html`](./the_shouk_fashion%20(2).html) in any browser (Chrome, Edge, Safari, Firefox). No installation required!

### Method 2: Run React + Vite Project
```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build optimized production bundle
npm run build
```

---

## 🏷️ Brand Identity
- **Brand Name**: SHOUK - The Desire
- **Devanagari Tagline**: TRADITION IN EVERY DRAPE • शौक़
- **Flagship Location**: Heritage Avenue, Morabadi Ground, Ranchi, Jharkhand
- **Official WhatsApp Support**: `+91 98765 43210`
- **Active Festive Promo Code**: `WELCOME10` (10% Off)
