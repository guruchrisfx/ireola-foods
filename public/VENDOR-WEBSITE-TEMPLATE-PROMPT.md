# 🏪 VENDOR E-COMMERCE WEBSITE — GRAND MASTER META PROMPT

> **Usage:** Copy this entire prompt into Lovable AI. Replace all `[PLACEHOLDERS]` with your brand details. The AI will generate a complete, production-ready vendor website identical in structure and functionality to the original template.

---

## 📋 TABLE OF CONTENTS

1. [Project Overview](#1-project-overview)
2. [Brand Configuration](#2-brand-configuration)
3. [Design System & Colors](#3-design-system--colors)
4. [SEO Structure](#4-seo-structure)
5. [Site Architecture & Routing](#5-site-architecture--routing)
6. [Component Structure](#6-component-structure)
7. [Product Catalog Structure](#7-product-catalog-structure)
8. [WhatsApp Integration & Sales Funnel](#8-whatsapp-integration--sales-funnel)
9. [Instagram-to-Store Conversion](#9-instagram-to-store-conversion)
10. [First Visit Popup & Lead Capture](#10-first-visit-popup--lead-capture)
11. [Store Optimization](#11-store-optimization)
12. [Analytics Setup](#12-analytics-setup)
13. [Broken Link Prevention](#13-broken-link-prevention)
14. [Product Naming Standardization](#14-product-naming-standardization)
15. [Full Page-by-Page Build Instructions](#15-full-page-by-page-build-instructions)

---

## 1. PROJECT OVERVIEW

Build a mobile-first, high-converting e-commerce catalog website for a Nigerian vendor. The site uses WhatsApp as the primary order channel (no cart/checkout). Products are displayed with measurement-based pricing. The entire funnel drives visitors to WhatsApp for purchase.

**Tech Stack:** React + Vite + TypeScript + Tailwind CSS + shadcn/ui
**No backend required for MVP** — products are defined in a static TypeScript file.

---

## 2. BRAND CONFIGURATION

Replace every placeholder below with your actual brand details:

```
BRAND_NAME          = [Your Brand Name]                    // e.g. "Mama's Kitchen"
BRAND_TAGLINE       = [Your Tagline]                       // e.g. "No.1 Lagos Ofada Sauce Vendor"
BRAND_DESCRIPTION   = [One-line brand description]         // e.g. "Premium ofada sauce & Nigerian foodstuffs"
BRAND_HERO_HEADLINE = [Hero H1 line 1]                     // e.g. "Authentic Ofada Sauce"
BRAND_HERO_ACCENT   = [Hero H1 line 2 — accent color]     // e.g. "Made Fresh Daily"
BRAND_HERO_SUBTEXT  = [Hero paragraph]                     // e.g. "Buy ofada sauce, locust beans, and spices..."

PHONE_PRIMARY       = [Primary phone]                      // e.g. "08012345678"
PHONE_SECONDARY     = [Secondary phone]                    // e.g. "09087654321"
WHATSAPP_NUMBER     = [WhatsApp number with country code]  // e.g. "2348012345678"
LOCATION_ADDRESS    = [Street address]                     // e.g. "Shop 5, Mushin Market"
LOCATION_CITY       = [City]                               // e.g. "Lagos, Nigeria"
LOCATION_LAT        = [Latitude]                           // e.g. "6.5244"
LOCATION_LNG        = [Longitude]                          // e.g. "3.3792"

INSTAGRAM_HANDLE    = [Instagram handle]                   // e.g. "@mamasofodasauce"
INSTAGRAM_URL       = [Full Instagram URL]                 // e.g. "https://instagram.com/mamasofodasauce"
INSTAGRAM_POSTS     = [Post count]                         // e.g. "2,000+"
INSTAGRAM_FOLLOWERS = [Follower count]                     // e.g. "5K+"

BUSINESS_HOURS_WEEKDAY = [Weekday hours]                   // e.g. "Mon–Sat: 8AM – 7PM"
BUSINESS_HOURS_WEEKEND = [Weekend hours]                   // e.g. "Sunday: 10AM – 4PM"

WEBSITE_URL         = [Published URL]                      // e.g. "https://your-site.lovable.app"
OG_IMAGE_URL        = [OG image URL]                       // e.g. "https://your-site.lovable.app/og-image.jpg"
```

### Brand Assets Required
- `src/assets/[brand]-logo.png` — Square logo (min 200×200px)
- `src/assets/hero-bg.jpg` — Hero background image (min 1920×1080px)
- `src/assets/category-[name].jpg` — One image per category (min 800×600px)
- `src/assets/products/[product-slug].jpg` — One image per product (square, min 600×600px)
- `public/og-image.jpg` — Open Graph image (1200×630px)
- `public/favicon.ico` — Favicon

---

## 3. DESIGN SYSTEM & COLORS

The website uses a warm, trustworthy color palette. **Retain these exact HSL values** — they are battle-tested for conversion and readability:

### index.css — CSS Variables (KEEP EXACTLY)

```css
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Playfair+Display:wght@600;700;800&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 40 30% 98%;
    --foreground: 15 25% 12%;

    --card: 0 0% 100%;
    --card-foreground: 15 25% 12%;

    --popover: 0 0% 100%;
    --popover-foreground: 15 25% 12%;

    --primary: 0 72% 42%;
    --primary-foreground: 0 0% 100%;

    --secondary: 38 80% 52%;
    --secondary-foreground: 0 0% 100%;

    --muted: 35 25% 93%;
    --muted-foreground: 20 10% 44%;

    --accent: 38 80% 52%;
    --accent-foreground: 0 0% 100%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;

    --border: 30 18% 88%;
    --input: 30 18% 88%;
    --ring: 0 72% 42%;

    --radius: 0.75rem;

    --whatsapp: 142 70% 40%;
    --whatsapp-foreground: 0 0% 100%;

    --gold: 38 85% 52%;
    --gold-foreground: 15 25% 12%;

    --cream: 38 40% 94%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground font-sans;
  }
  h1, h2, h3, h4 {
    font-family: 'Playfair Display', serif;
  }
}

@layer utilities {
  .font-display {
    font-family: 'Playfair Display', serif;
  }
}
```

### tailwind.config.ts — Extended Colors (KEEP EXACTLY)

```ts
fontFamily: {
  sans: ["DM Sans", "sans-serif"],
  display: ["Playfair Display", "serif"],
},
colors: {
  // ... all standard shadcn tokens using hsl(var(--token)) ...
  whatsapp: {
    DEFAULT: "hsl(var(--whatsapp))",
    foreground: "hsl(var(--whatsapp-foreground))",
  },
  gold: {
    DEFAULT: "hsl(var(--gold))",
    foreground: "hsl(var(--gold-foreground))",
  },
  cream: "hsl(var(--cream))",
},
```

### Typography Rules
- **Display/Headings:** Playfair Display (serif) — class `font-display`
- **Body:** DM Sans (sans-serif) — default `font-sans`
- **NEVER** use custom color classes directly. Always use semantic tokens: `text-primary`, `bg-card`, `text-muted-foreground`, etc.

---

## 4. SEO STRUCTURE

### index.html — Full SEO Meta Tags

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Primary SEO -->
    <title>[BRAND_NAME] — [BRAND_DESCRIPTION] in [LOCATION_CITY]</title>
    <meta name="description" content="[60-160 char description with primary keywords. Include location, product types, and unique selling point.]" />
    <meta name="keywords" content="[keyword1], [keyword2], [keyword3], [LOCATION_CITY], [BRAND_NAME], [product type] vendor" />
    <meta name="author" content="[BRAND_NAME]" />
    <link rel="canonical" href="[WEBSITE_URL]/" />

    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="[BRAND_NAME]" />
    <meta property="og:title" content="[BRAND_NAME] — [BRAND_DESCRIPTION] in [LOCATION_CITY]" />
    <meta property="og:description" content="[Same or shortened version of meta description]" />
    <meta property="og:url" content="[WEBSITE_URL]/" />
    <meta property="og:image" content="[OG_IMAGE_URL]" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:locale" content="en_NG" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="[BRAND_NAME] — [SHORT_DESCRIPTION]" />
    <meta name="twitter:description" content="[Twitter-optimized description under 200 chars]" />
    <meta name="twitter:image" content="[OG_IMAGE_URL]" />

    <!-- JSON-LD LocalBusiness Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "[BRAND_NAME]",
      "description": "[BRAND_DESCRIPTION]",
      "url": "[WEBSITE_URL]",
      "telephone": ["+[PHONE_PRIMARY_INTL]", "+[PHONE_SECONDARY_INTL]"],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "[LOCATION_ADDRESS]",
        "addressLocality": "[CITY]",
        "addressRegion": "[STATE]",
        "addressCountry": "NG"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": [LOCATION_LAT],
        "longitude": [LOCATION_LNG]
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
          "opens": "[OPEN_TIME]",
          "closes": "[CLOSE_TIME]"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "[SUN_OPEN]",
          "closes": "[SUN_CLOSE]"
        }
      ],
      "sameAs": ["[INSTAGRAM_URL]"],
      "priceRange": "[PRICE_RANGE]",
      "image": "[OG_IMAGE_URL]"
    }
    </script>

    <link rel="icon" href="/favicon.ico" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### robots.txt

```
User-agent: *
Allow: /
Sitemap: [WEBSITE_URL]/sitemap.xml
```

### SEO Checklist
- ✅ Single `<h1>` per page
- ✅ Title tag under 60 characters with primary keyword
- ✅ Meta description under 160 characters
- ✅ Semantic HTML (`<section>`, `<nav>`, `<main>`, `<footer>`)
- ✅ Alt text on all `<img>` tags
- ✅ JSON-LD LocalBusiness schema
- ✅ Canonical URL set
- ✅ Open Graph + Twitter Card meta
- ✅ Responsive viewport meta
- ✅ Lazy loading on non-critical images

---

## 5. SITE ARCHITECTURE & ROUTING

```
/                    → Homepage (hero, categories, featured products, funnel, testimonials)
/shop                → Full product catalog with category filters
/shop?category=X     → Filtered catalog view
/product/:id         → Individual product detail page
/about               → Brand story & trust signals
/delivery            → Delivery information
/contact             → Contact form (submits to WhatsApp) + map + info
/*                   → 404 Not Found page
```

### App.tsx Structure

```tsx
<BrowserRouter>
  <Header />
  <main className="min-h-screen">
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/about" element={<About />} />
      <Route path="/delivery" element={<Delivery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </main>
  <Footer />
  <WhatsAppFloat />
  <FirstVisitPopup />
</BrowserRouter>
```

---

## 6. COMPONENT STRUCTURE

```
src/
├── components/
│   ├── Header.tsx           — Sticky nav, logo, nav links, WhatsApp CTA, mobile hamburger
│   ├── Footer.tsx           — 3-column: brand info, quick links, contact details
│   ├── ProductCard.tsx      — Product card with image, name, measurements, View + Order buttons
│   ├── WhatsAppFloat.tsx    — Fixed bottom-right WhatsApp floating button
│   ├── WhatsAppIcon.tsx     — Reusable WhatsApp SVG icon component
│   ├── FirstVisitPopup.tsx  — Welcome offer popup (shows once, stored in localStorage)
│   └── ui/                  — shadcn/ui components (button, badge, input, etc.)
├── pages/
│   ├── Index.tsx            — Homepage with all sections
│   ├── Shop.tsx             — Product catalog with category filters
│   ├── ProductDetail.tsx    — Single product page with measurement selector
│   ├── About.tsx            — Brand story page
│   ├── Delivery.tsx         — Delivery information page
│   ├── Contact.tsx          — Contact form + info + map
│   └── NotFound.tsx         — 404 page
├── lib/
│   └── products.ts          — Product data, categories, WhatsApp link generator
└── assets/
    ├── [brand]-logo.png
    ├── hero-bg.jpg
    ├── category-[name].jpg
    └── products/
        └── [product-slug].jpg
```

---

## 7. PRODUCT CATALOG STRUCTURE

### Product Type Definition

```ts
export interface Product {
  id: string;                                          // URL-safe slug: "golden-morn"
  name: string;                                        // Display name: "Golden Morn"
  category: "[CATEGORY_1_SLUG]" | "[CATEGORY_2_SLUG]" | "[CATEGORY_3_SLUG]";
  description: string;                                 // 1-2 sentence product description
  image: string;                                       // Imported image asset
  measurements: { label: string; price: string }[];    // 2-4 measurement options
}
```

### Category Configuration

Define 2-4 categories. Each category needs:
- `id` — URL slug (lowercase, hyphenated): `"cereals"`, `"milk-beverages"`, `"foodstuff"`
- `name` — Display name: `"Cereals"`, `"Milk & Beverages"`, `"Foodstuffs & Snacks"`
- `count` — Auto-calculated from products array
- `image` — Category cover image for homepage grid

```ts
// Categories array (auto-counts from products)
export const categories = [
  { id: "[CATEGORY_1_SLUG]", name: "[Category 1 Name]", count: products.filter(p => p.category === "[CATEGORY_1_SLUG]").length },
  { id: "[CATEGORY_2_SLUG]", name: "[Category 2 Name]", count: products.filter(p => p.category === "[CATEGORY_2_SLUG]").length },
  { id: "[CATEGORY_3_SLUG]", name: "[Category 3 Name]", count: products.filter(p => p.category === "[CATEGORY_3_SLUG]").length },
];
```

### Measurement System

Each product has 2-4 measurement options. Common patterns:

| Vendor Type | Measurement 1 | Measurement 2 | Measurement 3 |
|-------------|---------------|---------------|---------------|
| Cereal vendor | Paint Bucket | Half Bag | Full Bag |
| Rice vendor | 5kg | 25kg | 50kg |
| Sauce vendor | Small Bowl | Medium Bowl | Big Bowl |
| Foodstuff vendor | Small Pack | Medium Pack | Wholesale |

### Product Data Template

```ts
export const products: Product[] = [
  {
    id: "[product-slug]",
    name: "[Product Name]",
    category: "[category-slug]",
    description: "[1-2 sentence description emphasizing quality and source]",
    image: importedProductImage,
    measurements: [
      { label: "[Small Unit]", price: "₦[PRICE]" },
      { label: "[Medium Unit]", price: "₦[PRICE]" },
      { label: "[Large Unit]", price: "₦[PRICE]" },
    ],
  },
  // ... repeat for each product (8-15 products recommended)
];
```

---

## 8. WHATSAPP INTEGRATION & SALES FUNNEL

### WhatsApp Link Generator (src/lib/products.ts)

The `getWhatsAppLink` function generates pre-filled WhatsApp message URLs for different contexts:

```ts
const PHONE = "[WHATSAPP_NUMBER]"; // e.g. "2348012345678"

export function getWhatsAppLink(
  context?: "general" | "enquiry" | "combo" | { product: Product; measurement?: number }
) {
  if (!context || context === "general") {
    const msg = encodeURIComponent(
      "Hi [BRAND_NAME]! I'd like to place an order. Please share your available products and account details. Thank you!"
    );
    return `https://wa.me/${PHONE}?text=${msg}`;
  }

  if (context === "enquiry") {
    const msg = encodeURIComponent(
      "Hello [BRAND_NAME]! I have an enquiry and would like some assistance. Could you help me out?"
    );
    return `https://wa.me/${PHONE}?text=${msg}`;
  }

  if (context === "combo") {
    const msg = encodeURIComponent(
      "Hi [BRAND_NAME]! 🎉 I'd like to claim the [COMBO_DEAL_NAME] — [COMBO_PRODUCTS] starting at ₦[COMBO_PRICE]. Please send me your account details so I can make payment. Thank you!"
    );
    return `https://wa.me/${PHONE}?text=${msg}`;
  }

  // Product-specific order
  const { product, measurement } = context;
  const m = product.measurements[measurement ?? 0];
  const msg = encodeURIComponent(
    `Hi [BRAND_NAME]! I'm interested in purchasing:\n\n` +
    `📦 Product: ${product.name}\n` +
    `📏 Quantity: ${m.label}\n` +
    `💰 Price: ${m.price}\n\n` +
    `Please share your account details so I can make payment. Thank you!`
  );
  return `https://wa.me/${PHONE}?text=${msg}`;
}
```

### Sales Funnel — WhatsApp Touchpoints (10 total)

Every touchpoint drives to WhatsApp. Here's where they appear:

| # | Location | Context | Button Text |
|---|----------|---------|-------------|
| 1 | Header (desktop) | `general` | "Order Now" |
| 2 | Hero section | `general` | "Order on WhatsApp" |
| 3 | Product card | `{product}` | "Order" |
| 4 | Product detail page | `{product, measurement}` | "Order on WhatsApp" |
| 5 | Combo deal section | `combo` | "Order Combo on WhatsApp" |
| 6 | Floating button | `enquiry` | "WhatsApp" |
| 7 | First visit popup | `combo` | "Claim Offer on WhatsApp" |
| 8 | Contact form | Form → WhatsApp redirect | "Send & Continue on WhatsApp" |
| 9 | Delivery page | `enquiry` | "Ask About Delivery" |
| 10 | Mobile menu | `general` | "Order on WhatsApp" |

### WhatsApp Icon Component

```tsx
// src/components/WhatsAppIcon.tsx
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);
export default WhatsAppIcon;
```

### WhatsApp Floating Button

```tsx
// src/components/WhatsAppFloat.tsx — Fixed bottom-right, always visible
<a
  href={getWhatsAppLink("enquiry")}
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex items-center gap-2 bg-whatsapp text-whatsapp-foreground px-3 py-2.5 md:px-4 md:py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
  aria-label="Order on WhatsApp"
>
  <WhatsAppIcon className="h-5 w-5" />
  <span className="hidden sm:inline text-sm font-semibold">WhatsApp</span>
</a>
```

---

## 9. INSTAGRAM-TO-STORE CONVERSION

### Instagram CTA Section (on Homepage)

```tsx
<section className="bg-cream py-10 md:py-12 text-center">
  <div className="container px-4">
    <h2 className="font-display text-xl md:text-3xl font-bold mb-2 md:mb-3">Follow Us on Instagram</h2>
    <p className="text-muted-foreground text-xs md:text-base mb-1.5 md:mb-2">[INSTAGRAM_POSTS] posts • [INSTAGRAM_FOLLOWERS] followers</p>
    <p className="text-muted-foreground text-xs md:text-base mb-4 md:mb-6">
      See our latest products, prices and customer reviews
    </p>
    <Button size="default" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground text-sm" asChild>
      <a href="[INSTAGRAM_URL]" target="_blank" rel="noopener noreferrer">
        Follow @[INSTAGRAM_HANDLE]
      </a>
    </Button>
  </div>
</section>
```

### Instagram Conversion Strategy

1. **Instagram Bio:** Link to website homepage with UTM: `[WEBSITE_URL]?utm_source=instagram&utm_medium=bio`
2. **Story Links:** Link to specific products: `[WEBSITE_URL]/product/[product-id]?utm_source=instagram&utm_medium=story`
3. **Post Captions:** Include "Link in bio 🔗" or "Order via link in bio"
4. **Highlight Reels:** Create highlights for: "How to Order", "Prices", "Delivery", "Reviews"
5. **Website CTA:** Instagram section on homepage drives followers; footer includes Instagram link

---

## 10. FIRST VISIT POPUP & LEAD CAPTURE

### Popup Behavior
- Shows **once** per visitor (tracked via `localStorage` key: `[brand_slug]_visited`)
- Appears after **3-second delay** on first visit
- Collects phone number (optional) then redirects to WhatsApp with combo deal message
- Dismissible via X button or backdrop click

### FirstVisitPopup Template

```tsx
const STORAGE_KEY = "[brand_slug]_visited";

// Shows after 3 seconds on first visit
// Contains:
// - Gift icon + "🎉 Welcome Offer!" heading
// - Combo deal description with price highlighted in text-primary
// - Phone number input (optional)
// - "Claim Offer on WhatsApp" button (bg-whatsapp)
// - Free delivery note at bottom
// On submit → opens WhatsApp with combo deal message including phone if provided
// On close → sets localStorage flag, never shows again

const FirstVisitPopup = () => {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const visited = localStorage.getItem(STORAGE_KEY);
    if (!visited) {
      const timer = setTimeout(() => setOpen(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem(STORAGE_KEY, "1");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem(STORAGE_KEY, "1");
    if (phone.trim()) {
      const msg = encodeURIComponent(
        `Hi [BRAND_NAME]! 🎉 I'd like to claim the [COMBO_DEAL_NAME] — [COMBO_PRODUCTS] starting at ₦[COMBO_PRICE]. My number: ${phone.trim()}. Please send your account details so I can make payment!`
      );
      window.open(`https://wa.me/[WHATSAPP_NUMBER]?text=${msg}`, "_blank");
    } else {
      window.open(getWhatsAppLink("combo"), "_blank");
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-3 sm:p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative bg-card border-2 border-primary/20 rounded-xl sm:rounded-2xl shadow-2xl max-w-sm w-full p-5 sm:p-8 animate-in zoom-in-95 fade-in duration-300">
        {/* X close button */}
        {/* Gift icon + Welcome Offer heading */}
        {/* Deal description */}
        {/* Phone input + WhatsApp submit button */}
        {/* Free delivery note */}
      </div>
    </div>
  );
};
```

---

## 11. STORE OPTIMIZATION

### Mobile-First Design Rules
- All text sizes use responsive classes: `text-xs md:text-base`
- Buttons: `w-full sm:w-auto` for mobile full-width
- Product grid: `grid-cols-2 md:grid-cols-3 lg:grid-cols-4`
- Container padding: `px-4` on all containers
- Touch targets: minimum `h-8` (32px) on all interactive elements
- Header height: `h-14 md:h-20`
- Badge text: `text-[9px] md:text-xs` for measurement badges

### Performance
- All product images imported as ES modules (Vite-optimized)
- Lazy loading on category images and non-hero images
- No external API calls for product data (static TypeScript)
- Minimal dependencies (no cart library, no payment SDK)

### Trust Signals Bar (below hero)
```tsx
<section className="bg-primary text-primary-foreground py-3 md:py-4">
  <div className="container flex flex-wrap justify-center gap-3 md:gap-12 text-xs md:text-sm font-medium px-4">
    <span className="flex items-center gap-1.5"><ShieldCheck /> [Trust Point 1]</span>
    <span className="flex items-center gap-1.5"><Package /> [Trust Point 2]</span>
    <span className="flex items-center gap-1.5"><Truck /> [Trust Point 3]</span>
    <span className="flex items-center gap-1.5"><Star /> [Trust Point 4]</span>
  </div>
</section>
```

### Testimonials Section
Include 3 testimonials with:
- Customer first name + last initial
- 5-star rating (gold stars using `fill-gold text-gold`)
- 1-2 sentence review in quotes and italic
- Displayed in `grid-cols-1 md:grid-cols-3` card grid

---

## 12. ANALYTICS SETUP

### Recommended GA4 Events to Track

| Event Name | Trigger | Parameters |
|------------|---------|------------|
| `whatsapp_click` | Any WhatsApp button click | context, product_name, page |
| `view_item` | Product detail page load | product_id, product_name |
| `view_item_list` | Shop page load | category_filter |
| `select_item` | Product card click | product_id, product_name |
| `select_measurement` | Measurement button click | product_id, measurement_label |
| `popup_shown` | First visit popup appears | — |
| `popup_claimed` | Popup CTA clicked | has_phone |
| `popup_dismissed` | Popup X or backdrop clicked | — |
| `category_filter` | Category button clicked | category_id |
| `instagram_click` | Instagram CTA clicked | location (footer/section) |
| `contact_submit` | Contact form submitted | has_email, has_message |

### Implementation
Add Google Analytics via `index.html` `<head>`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=[GA_MEASUREMENT_ID]"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '[GA_MEASUREMENT_ID]');
</script>
```

---

## 13. BROKEN LINK PREVENTION

### Rules
1. **Product IDs must match route params:** `id` in product data = `:id` in URL `/product/:id`
2. **Category slugs must match filter params:** category `id` = `?category=` query param
3. **All internal links use `<Link to="...">` from react-router-dom** — never `<a href>` for internal routes
4. **External links always have `target="_blank" rel="noopener noreferrer"`**
5. **NotFound page catches all unmatched routes** via `<Route path="*">`
6. **Product detail page shows fallback** when product ID not found:
   ```tsx
   if (!product) {
     return (
       <div className="container py-20 text-center px-4">
         <h1>Product Not Found</h1>
         <Button asChild><Link to="/shop">Back to Shop</Link></Button>
       </div>
     );
   }
   ```
7. **Category links from homepage use query params:** `<Link to="/shop?category=[slug]">`
8. **Back links on product detail:** `<Link to="/shop">← Back to Shop</Link>`

### Link Audit Checklist
- [ ] Header nav links all resolve correctly
- [ ] Footer nav links match header
- [ ] Category cards on homepage link to `/shop?category=X` with valid slugs
- [ ] Product cards link to `/product/[valid-id]`
- [ ] All WhatsApp links use `https://wa.me/[NUMBER]`
- [ ] Instagram link is a valid URL
- [ ] Google Maps embed URL is valid
- [ ] 404 page has link back to homepage or shop

---

## 14. PRODUCT NAMING STANDARDIZATION

### Rules
1. **Title Case** for display names: "Golden Morn", "Full Cream Milk"
2. **Preserve brand names exactly:** "Kellogg's Coco Pops" (not "coco pops" or "COCO POPS")
3. **Slug format** for IDs: lowercase, hyphenated: `"kuli-kuli"`, `"full-cream-milk"`
4. **Image file names match product slugs:** `products/full-cream-milk.jpg`
5. **Category display names** use Title Case with `&` for conjunctions: "Milk & Beverages"
6. **Category slugs** use lowercase with hyphens: `"milk-beverages"`
7. **Measurement labels** use Title Case: "Paint Bucket", "Half Bag", "Full Bag"
8. **Prices** always formatted as: `"₦X,XXX"` (Naira sign, comma-separated thousands)

### Naming Convention Table

| Field | Format | Example |
|-------|--------|---------|
| Product ID | lowercase-hyphenated | `"golden-morn"` |
| Product Name | Title Case | `"Golden Morn"` |
| Category Slug | lowercase-hyphenated | `"milk-beverages"` |
| Category Name | Title Case + & | `"Milk & Beverages"` |
| Image File | slug.jpg | `"golden-morn.jpg"` |
| Measurement | Title Case | `"Paint Bucket"` |
| Price | ₦ + comma-formatted | `"₦3,500"` |

---

## 15. FULL PAGE-BY-PAGE BUILD INSTRUCTIONS

### A. HEADER (src/components/Header.tsx)

**Structure:**
- Sticky top (`sticky top-0 z-50`), blurred background (`bg-card/95 backdrop-blur-md`)
- Left: Logo image (circle, `h-8 w-8 md:h-12 md:w-12`) + Brand name (`font-display text-base md:text-xl font-bold text-primary`) + tagline (`text-[9px] md:text-[10px] text-muted-foreground hidden sm:block`)
- Center (desktop only): Navigation links — Home, Shop, About, Delivery, Contact
- Right: WhatsApp "Order Now" button (`bg-whatsapp`, desktop only) + hamburger menu icon (mobile only)
- Mobile menu: Slide-down nav (`animate-fade-in`) with all links + full-width WhatsApp button
- Active link highlighted with `text-primary`, inactive with `text-muted-foreground`

### B. HOMEPAGE (src/pages/Index.tsx)

**Sections in order:**

1. **Hero** — Full-width background image with dark gradient overlay (`bg-gradient-to-b from-foreground/80 via-foreground/70 to-foreground/80`). Logo circle, H1 with accent `<span className="text-secondary">`, subtitle, two CTA buttons (Shop Products `bg-primary` + Order on WhatsApp `bg-whatsapp`)

2. **Trust Bar** — Full-width `bg-primary text-primary-foreground` strip with 4 trust icons+text

3. **Shop by Category** — H2 + subtitle, 3-column grid of category cards. Each card: image with hover scale, gradient overlay (`bg-gradient-to-t from-foreground/70 to-foreground/20`), category name + product count. Links to `/shop?category=X`

4. **Best Sellers** — H2 + "View All →" link, `grid-cols-2 md:grid-cols-3` of first 6 products using `<ProductCard>`

5. **Combo Deal** — `bg-gradient-to-br from-primary to-primary/90` section. 3 overlapping circular product images (`-space-x-4`, `border-4 border-primary`) + Badge "🔥 Best Seller" (`bg-secondary`) + deal name + price + description + WhatsApp CTA

6. **How It Works** — 4-step `grid-cols-2 md:grid-cols-4`. Each: circle icon bg, step number, title, description

7. **Why Choose Us** — `bg-primary text-primary-foreground` with 6 checkmark items in `grid-cols-1 sm:grid-cols-2`

8. **Testimonials** — 3 cards in `grid-cols-1 md:grid-cols-3`. Each: 5 gold stars + quoted text + customer name

9. **Instagram CTA** — `bg-cream` section with stats + follow button

### C. SHOP PAGE (src/pages/Shop.tsx)

- H1 + subtitle
- Filter buttons row: "All (N)" + one per category with count
- Active filter: `variant="default"`, inactive: `variant="outline"`
- Product grid: `grid-cols-2 md:grid-cols-3 lg:grid-cols-4`
- Empty state message
- URL synced via `useSearchParams`

### D. PRODUCT DETAIL (src/pages/ProductDetail.tsx)

- Back link (`<ArrowLeft />`) to `/shop`
- 2-column: image (aspect-square) | details
- Category badge (`bg-cream text-foreground`)
- H1 product name + description
- Measurement selector: grid of 3 buttons, selected = `border-primary bg-primary/5 text-primary`
- Price display (`text-xl md:text-2xl font-bold text-primary`)
- Full-width WhatsApp order button (`bg-whatsapp`)
- Trust badges with ShieldCheck + Truck icons
- 404 fallback if product not found

### E. ABOUT PAGE (src/pages/About.tsx)

- Hero: `bg-primary` with logo circle, H1, subtitle
- Story: 2-3 paragraphs in `max-w-3xl`
- Values: 4 cards in `grid-cols-2 md:grid-cols-4` on `bg-cream`

### F. DELIVERY PAGE (src/pages/Delivery.tsx)

- Hero: `bg-primary` with Truck icon, H1, subtitle
- 4 info cards in `grid-cols-1 sm:grid-cols-2` with icons
- WhatsApp CTA: "Ask About Delivery"

### G. CONTACT PAGE (src/pages/Contact.tsx)

- Hero: `bg-primary` with H1, subtitle
- 2-column (`grid-cols-1 lg:grid-cols-2`):
  - Left: 4 contact info cards + WhatsApp button + Google Maps iframe
  - Right: Form (Name*, Phone*, Email, Message) → on submit, builds WhatsApp message and opens `wa.me` link
- Form uses `useToast` for validation feedback

### H. FOOTER (src/components/Footer.tsx)

- `bg-foreground text-primary-foreground`
- 3 columns: Brand info | Quick Links (nav) | Contact (phones, address, Instagram)
- Bottom bar: `border-t border-primary-foreground/10` with © year

### I. PRODUCT CARD (src/components/ProductCard.tsx)

- Card with hover shadow (`hover:shadow-lg`)
- Image with hover scale (`group-hover:scale-105`)
- Product name (font-display, line-clamp-1) + description (line-clamp-2)
- Measurement badges (`bg-cream text-foreground`)
- Two buttons: View (`bg-primary`) + Order (`bg-whatsapp`)
- Both link correctly (View → `/product/[id]`, Order → WhatsApp)

---

## 🚀 QUICK START CHECKLIST

To use this template for a new vendor:

1. [ ] Replace all `[PLACEHOLDERS]` in this prompt with real brand details
2. [ ] Prepare brand assets (logo, hero bg, category images, product images, OG image, favicon)
3. [ ] Define 2-4 product categories with slugs and display names
4. [ ] List 8-15 products with names, descriptions, categories, and measurement prices
5. [ ] Set WhatsApp number and define message templates
6. [ ] Set Instagram handle and URL
7. [ ] Write 3 customer testimonials
8. [ ] Define combo deal (products + price)
9. [ ] Set business address and hours
10. [ ] Paste this entire prompt into Lovable AI and let it build

---

## 📌 BRAND CONSISTENCY RULES

1. **Brand name appears in:** Header, Hero, Footer, About page, WhatsApp messages, JSON-LD, OG tags, page titles
2. **Tagline appears in:** Header (desktop), Hero subtitle, About page, meta description
3. **Brand colors:** Primary (red/warm), Secondary/Accent (gold), WhatsApp (green) — consistent across all pages
4. **Typography:** Playfair Display for headings, DM Sans for body — no exceptions
5. **Voice:** Professional but warm, uses emojis in WhatsApp messages only, Nigerian English
6. **Trust messaging:** Repeat key phrases across hero, trust bar, product descriptions, about page — e.g. "Original quality", "Carefully measured", "From manufacturer bags"

---

*Template Version: 2.0 | Compatible with: Lovable AI + React + Vite + Tailwind + shadcn/ui*
