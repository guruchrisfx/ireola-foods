# 🏪 Lagos Vendor E-Commerce Website — Grand Master Meta Prompt Template

> **Purpose:** A plug-and-play prompt template to build a high-converting, SEO-optimized, WhatsApp-driven vendor catalog website for any Lagos-based product vendor. Just fill in the `[PLACEHOLDERS]` and paste into Lovable.

---

## 📋 TABLE OF CONTENTS

1. [Pre-Build Checklist](#1-pre-build-checklist)
2. [Brand Identity Setup](#2-brand-identity-setup)
3. [Product Catalog Structure](#3-product-catalog-structure)
4. [SEO Structure](#4-seo-structure)
5. [Page-by-Page Blueprint](#5-page-by-page-blueprint)
6. [Sales Funnel Strategy](#6-sales-funnel-strategy)
7. [Instagram-to-Store Conversion](#7-instagram-to-store-conversion)
8. [WhatsApp Integration](#8-whatsapp-integration)
9. [Store Optimization](#9-store-optimization)
10. [Analytics Setup](#10-analytics-setup)
11. [Launch Checklist](#11-launch-checklist)
12. [The Master Prompt](#12-the-master-prompt)

---

## 1. PRE-BUILD CHECKLIST

Before prompting, gather these assets:

### Required Assets
- [ ] **Brand logo** (PNG, transparent background, min 512x512px)
- [ ] **Hero background image** (1920x1080, lifestyle/product shot)
- [ ] **Product photos** (square, min 800x800px, consistent lighting)
- [ ] **Category images** (3-5 category banners, 1200x800px)
- [ ] **OG/social share image** (1200x630px with brand + tagline)

### Required Information
| Field | Your Value |
|-------|-----------|
| Brand Name | `[BRAND_NAME]` |
| Tagline | `[TAGLINE]` — e.g., "Lagos' No.1 Measured Cereals Vendor" |
| Niche | `[NICHE]` — e.g., cereals, rice, foodstuff, ofada sauce |
| Location | `[FULL_ADDRESS]` |
| Phone 1 | `[PHONE_1]` |
| Phone 2 (optional) | `[PHONE_2]` |
| WhatsApp Number | `[WHATSAPP_NUMBER]` — international format, no +, e.g., 2349162797173 |
| Instagram Handle | `[INSTAGRAM_HANDLE]` |
| Operating Hours | `[HOURS_WEEKDAY]` / `[HOURS_WEEKEND]` |
| Price Range | `[PRICE_RANGE]` — e.g., "₦2,000 - ₦28,000" |
| Delivery Areas | `[DELIVERY_AREAS]` — e.g., "Lagos, Nationwide" |
| Years in Business | `[YEARS]` |
| Customers Served | `[CUSTOMER_COUNT]` |
| Instagram Followers | `[FOLLOWER_COUNT]` |
| Website URL | `[WEBSITE_URL]` |

---

## 2. BRAND IDENTITY SETUP

### Color Palette Formula

Pick ONE of these proven vendor palettes or create your own:

| Palette Name | Primary (CTA/Headers) | Secondary (Accents) | Background | Use Case |
|-------------|----------------------|---------------------|------------|----------|
| **Trust Red** | `hsl(0, 72%, 42%)` | `hsl(38, 80%, 52%)` | `hsl(40, 30%, 98%)` | Food, cereals, trusted brands |
| **Fresh Green** | `hsl(142, 70%, 35%)` | `hsl(38, 85%, 52%)` | `hsl(120, 20%, 98%)` | Organic, vegetables, health foods |
| **Royal Purple** | `hsl(270, 60%, 45%)` | `hsl(45, 90%, 55%)` | `hsl(270, 15%, 98%)` | Premium, luxury products |
| **Earth Brown** | `hsl(25, 65%, 38%)` | `hsl(45, 80%, 50%)` | `hsl(35, 25%, 97%)` | Rice, grains, traditional foods |
| **Ocean Blue** | `hsl(210, 70%, 40%)` | `hsl(38, 80%, 52%)` | `hsl(210, 20%, 98%)` | Seafood, frozen foods |

### Typography Pairing

| Style | Display Font (Headings) | Body Font | Vibe |
|-------|------------------------|-----------|------|
| **Elegant Traditional** | Playfair Display | DM Sans | Trust, heritage |
| **Modern Clean** | Outfit | Inter | Tech-forward, clean |
| **Bold Afro** | Sora | Nunito Sans | Energetic, youthful |
| **Premium Minimal** | Cormorant Garamond | Lato | Luxury, premium |

### Brand Voice Guide

Fill in:
- **Tone:** `[TONE]` — e.g., Warm & trustworthy / Bold & energetic / Premium & exclusive
- **Key phrases to repeat:** `[PHRASE_1]`, `[PHRASE_2]`, `[PHRASE_3]`
  - Example: "Measured from original bags", "Quality guaranteed", "Trusted by 10K+ families"
- **Social proof markers:** `[PROOF_1]`, `[PROOF_2]`, `[PROOF_3]`
  - Example: "10K+ Instagram followers", "5+ years serving Lagos", "1,000+ happy customers"

---

## 3. PRODUCT CATALOG STRUCTURE

### Category Template

Define 2-5 categories:

```
Category 1: [CATEGORY_NAME]
  - ID: [category-slug] (lowercase, hyphenated)
  - Display Name: [Category Display Name]
  - Image: [category-image-filename.jpg]

Category 2: ...
Category 3: ...
```

### Product Template

For EACH product, fill in:

```
Product:
  - ID: [product-slug] (lowercase, hyphenated — e.g., "golden-morn")
  - Name: [Product Name] (Title Case, consistent naming)
  - Category: [category-slug]
  - Description: [1-2 sentences, include keywords naturally]
  - Image: [product-image-filename.jpg]
  - Measurements/Variants:
    - [Size 1 Label]: ₦[PRICE]
    - [Size 2 Label]: ₦[PRICE]
    - [Size 3 Label]: ₦[PRICE]
```

### Product Naming Standardization Rules

⚠ **CRITICAL — Follow these rules for ALL product names:**

1. **Consistent capitalization:** Use Title Case for all product names
2. **Brand names preserved:** Keep manufacturer brand names exactly as trademarked (e.g., "Kellogg's Coco Pops" not "Coco pops")
3. **No abbreviations:** Write full names (e.g., "Full Cream Milk" not "FCM")
4. **Size/variant in measurements, NOT in name:** Don't put "500g" in the product name; put it in measurements
5. **Category prefix convention:** Decide if you prefix or not and be CONSISTENT
   - Option A: "Golden Morn Cereal" (with category)
   - Option B: "Golden Morn" (without — category shown via filters)
6. **Slug format:** Always lowercase, hyphenated, no special characters
   - ✅ `golden-morn`, `coco-pops`, `ofada-sauce`
   - ❌ `Golden_Morn`, `cocopops`, `ofada sauce`

### Measurement/Pricing Standardization

Choose ONE measurement system and apply consistently:

| Vendor Type | Measurement Labels | Example |
|------------|-------------------|---------|
| Cereals/Grains | Paint Bucket / Half Bag / Full Bag | ₦3,500 / ₦8,500 / ₦16,000 |
| Rice | 10kg / 25kg / 50kg | ₦12,000 / ₦28,000 / ₦54,000 |
| Sauces/Liquids | Small (500ml) / Medium (1L) / Large (2L) | ₦2,000 / ₦3,500 / ₦6,000 |
| General Foodstuff | Small / Medium / Large / Wholesale | ₦1,500 / ₦3,000 / ₦5,000 / ₦15,000 |

### Price Formatting Rules
- Always use Naira symbol: ₦
- Always use comma separators: ₦16,000 not ₦16000
- No decimals unless needed: ₦3,500 not ₦3,500.00

---

## 4. SEO STRUCTURE

### ⚠ Critical SEO Checklist

#### Title Tags (< 60 characters)
```
Homepage:    [BRAND_NAME] — [Primary Keyword] in Lagos
Shop:        Shop [Product Type] | [BRAND_NAME]
Product:     [Product Name] - [Measurement] | [BRAND_NAME]
About:       About [BRAND_NAME] — [Unique Selling Point]
Contact:     Contact [BRAND_NAME] — [Location]
Delivery:    Delivery & Pricing — [BRAND_NAME] Lagos
```

#### Meta Descriptions (< 160 characters)
```
Homepage:    Buy quality [PRODUCT_TYPE] in [MEASUREMENT_TYPE] — [measurement examples]. Lagos' No.1 [NICHE] vendor with [DELIVERY_AREAS] delivery.
Shop:        Browse our full range of [PRODUCT_TYPE]. [MEASUREMENT_TYPE] available. Order via WhatsApp for fast Lagos delivery.
About:       [BRAND_NAME] has been Lagos' trusted [NICHE] vendor for [YEARS]+ years. [SOCIAL_PROOF]. Quality guaranteed.
```

#### Keyword Strategy

**Primary Keywords** (use in H1, title, first paragraph):
```
[NICHE] vendor Lagos
buy [PRODUCT_TYPE] Lagos
[PRODUCT_TYPE] in bulk Lagos
```

**Secondary Keywords** (use in H2s, body text):
```
measured [PRODUCT_TYPE]
wholesale [PRODUCT_TYPE] Nigeria
[PRODUCT_TYPE] delivery Lagos
cheap [PRODUCT_TYPE] Lagos
```

**Long-tail Keywords** (use in product descriptions, FAQ):
```
where to buy [PRODUCT] in Lagos
best [PRODUCT] vendor in [AREA]
[PRODUCT] price in Nigeria [YEAR]
bulk [PRODUCT] supplier Lagos
```

#### URL Structure
```
/                    → Homepage
/shop                → Full product catalog
/shop?category=X     → Filtered catalog
/product/[slug]      → Individual product page
/about               → About / Trust page
/delivery            → Delivery info + pricing
/contact             → Contact + location
```

⚠ **Broken Link Prevention Rules:**
1. Every internal `<Link to="...">` must match a defined `<Route path="...">` in App.tsx
2. Product slugs in URLs must EXACTLY match product IDs in the data file
3. Category filter values must EXACTLY match category IDs
4. Test ALL navigation links after build
5. Add a proper 404/NotFound page as catch-all route
6. External links (WhatsApp, Instagram) must use `target="_blank" rel="noopener noreferrer"`

#### JSON-LD Structured Data

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "[BRAND_NAME]",
  "description": "[META_DESCRIPTION]",
  "url": "[WEBSITE_URL]",
  "telephone": ["[PHONE_1]", "[PHONE_2]"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[STREET_ADDRESS]",
    "addressLocality": "[CITY]",
    "addressRegion": "[STATE]",
    "addressCountry": "NG"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": [LAT],
    "longitude": [LNG]
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
  "sameAs": ["https://instagram.com/[INSTAGRAM_HANDLE]"],
  "priceRange": "[PRICE_RANGE]",
  "image": "[WEBSITE_URL]/og-image.jpg"
}
```

#### robots.txt
```
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: *
Allow: /

Sitemap: [WEBSITE_URL]/sitemap.xml
```

#### Open Graph Tags
```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="[BRAND_NAME]" />
<meta property="og:title" content="[TITLE]" />
<meta property="og:description" content="[META_DESCRIPTION]" />
<meta property="og:url" content="[WEBSITE_URL]" />
<meta property="og:image" content="[WEBSITE_URL]/og-image.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:locale" content="en_NG" />
```

---

## 5. PAGE-BY-PAGE BLUEPRINT

### Page 1: HOMEPAGE (Index)

**Sections in order:**

1. **Hero Section**
   - Full-width background image with dark overlay
   - H1: `[BRAND_NAME] — [TAGLINE]`
   - Subtitle: 1-2 lines with primary keyword
   - 2 CTAs: "Shop Now" (primary) + "Order on WhatsApp" (green)
   - Trust badges row: `[YEARS]+ Years` | `[FOLLOWER_COUNT] Followers` | `[CUSTOMER_COUNT]+ Customers`

2. **Social Proof Bar**
   - "Trusted by [FOLLOWER_COUNT] followers on Instagram"
   - Star ratings or review count if available

3. **Category Grid** (2-4 cards)
   - Each card: Category image + name + product count + "Shop Now" link
   - Links to `/shop?category=[category-slug]`

4. **Featured Products** (4-8 products)
   - Product cards with image, name, price badges, "View" + "Order" buttons
   - "View All Products" link to `/shop`

5. **Why Choose Us / Trust Section**
   - 3-4 trust points with icons:
     - ✅ Quality: "Measured from original [manufacturer] bags"
     - 📏 Variety: "[Measurement types] available"
     - 🚚 Delivery: "Fast delivery across [DELIVERY_AREAS]"
     - 💰 Value: "Best prices guaranteed"

6. **Best-Seller Combo Deal** (if applicable)
   - Highlight bundle: "[Product A] + [Product B] + [Product C]"
   - Starting price: "From ₦[BUNDLE_PRICE]"
   - WhatsApp CTA: "Claim This Deal"

7. **Testimonials** (2-3)
   - Customer name, quote, location
   - Star rating

8. **Instagram CTA Section**
   - "Follow us on Instagram for daily updates"
   - Instagram handle link
   - Follower count social proof

### Page 2: SHOP (/shop)

- H1: "Shop [Product Type]"
- Subtitle with keywords
- Category filter buttons with product counts: "All (X)" | "Category 1 (X)" | "Category 2 (X)"
- Product grid: 2 cols mobile, 3 cols tablet, 4 cols desktop
- Each product card:
  - Square image with hover zoom
  - Product name (linked to detail page)
  - Short description (2 lines max)
  - Price badges for each measurement
  - "View" button (to detail page) + "Order" button (WhatsApp)
- Empty state: "No products found in this category"

### Page 3: PRODUCT DETAIL (/product/:id)

- Breadcrumb: Home > Shop > [Product Name]
- Product image (large)
- Product name (H1)
- Category badge
- Full description
- Measurement selector (radio buttons or cards)
- Selected price display (large)
- WhatsApp order button (pre-filled with product + measurement)
- "Related Products" section (same category)

### Page 4: ABOUT (/about)

- H1: "About [BRAND_NAME]"
- Brand story (2-3 paragraphs with keywords)
- Mission statement
- Stats grid: Years | Products | Customers | Deliveries
- Team photo or store photo
- Values/promises section

### Page 5: DELIVERY (/delivery)

- H1: "Delivery Information"
- Delivery areas table with pricing
- Delivery timeline expectations
- Payment methods accepted
- FAQ accordion:
  - "How do I place an order?"
  - "What areas do you deliver to?"
  - "How long does delivery take?"
  - "What payment methods do you accept?"
  - "Can I return a product?"

### Page 6: CONTACT (/contact)

- H1: "Contact [BRAND_NAME]"
- Contact cards: Phone, WhatsApp, Instagram, Email
- Store address with map embed (optional)
- Operating hours
- Contact form (optional — sends to WhatsApp or email)

### Page 7: 404 NOT FOUND

- Friendly message
- "Go Home" and "Browse Shop" buttons
- Consistent with site design

---

## 6. SALES FUNNEL STRATEGY

### Funnel Architecture

```
AWARENESS (Instagram/Google)
    ↓
LANDING (Homepage Hero)
    ↓
BROWSE (Shop / Categories)
    ↓
INTEREST (Product Detail)
    ↓
ACTION (WhatsApp Order)
    ↓
CONVERSION (Payment + Delivery)
```

### Conversion Touchpoints (Every page must have at least ONE)

| Page | Primary CTA | Secondary CTA |
|------|------------|---------------|
| Homepage | "Shop Now" button | WhatsApp float |
| Shop | "Order" on each card | WhatsApp float |
| Product Detail | WhatsApp order (pre-filled) | "View More Products" |
| About | "Shop Now" | WhatsApp float |
| Delivery | "Place Order" | WhatsApp float |
| Contact | WhatsApp link | Call button |

### WhatsApp Float (Global)
- Fixed bottom-right on ALL pages
- Green WhatsApp icon + "WhatsApp" label (desktop) / icon only (mobile)
- Links to general enquiry message

### First-Visit Popup Strategy
- Trigger: First visit (localStorage check)
- Content: Welcome message + key value proposition
- CTA: "Browse Products" + "Order on WhatsApp"
- Dismiss: Click outside or X button
- Don't show again for 7 days

### Urgency/Scarcity Triggers (Optional)
- "🔥 Best Seller" badges on top products
- "Limited Stock" indicators
- Combo deal with savings calculation
- "X customers ordered this week"

---

## 7. INSTAGRAM-TO-STORE CONVERSION

### Strategy Overview

Instagram is the PRIMARY traffic source for Lagos vendors. Optimize for this flow:

```
Instagram Post/Story/Reel
    ↓
Bio Link → Website Homepage
    ↓
Browse Products → Product Detail
    ↓
WhatsApp Order
```

### Instagram Bio Optimization
```
[BRAND_NAME] 🏪
[TAGLINE]
📍 [LOCATION]
📦 [MEASUREMENT_TYPES] available
🚚 Delivery: [DELIVERY_AREAS]
👇 Shop & Order Below
[WEBSITE_URL]
```

### Website ↔ Instagram Integration Points

1. **Homepage Instagram Section**
   - "Follow us @[HANDLE] for daily updates & offers"
   - Follower count as social proof
   - Link to Instagram profile

2. **Footer Instagram Link**
   - Instagram icon + handle in footer

3. **Product Sharing**
   - Each product detail page should be shareable (OG tags per product)
   - When shared on Instagram stories, the preview should show product image + price

4. **Instagram Content → Website Flow**
   - Post caption template: "Get [Product] from ₦[PRICE]! 🛒 Link in bio or DM to order"
   - Story template: Product photo + price sticker + "Swipe up" / "Link in bio"
   - Reel template: Product showcase + "Shop now at [WEBSITE_URL]"

5. **Social Proof Loop**
   - Website shows "10K+ Instagram followers" → builds trust
   - Instagram shows website link → drives traffic
   - Customer testimonials shared on both platforms

### UTM Tracking for Instagram
```
Homepage from bio:     [WEBSITE_URL]/?utm_source=instagram&utm_medium=bio&utm_campaign=main
Specific product:      [WEBSITE_URL]/product/[slug]?utm_source=instagram&utm_medium=story&utm_campaign=[product]
Shop page:             [WEBSITE_URL]/shop?utm_source=instagram&utm_medium=post&utm_campaign=catalog
```

---

## 8. WHATSAPP INTEGRATION

### Message Templates

**General Order:**
```
Hi [BRAND_NAME]! I'd like to place an order. Please share your available products and account details. Thank you!
```

**Product-Specific Order:**
```
Hi [BRAND_NAME]! I'm interested in purchasing:

📦 Product: [Product Name]
📏 Quantity: [Measurement Label]
💰 Price: [Price]

Please share your account details so I can make payment. Thank you!
```

**General Enquiry:**
```
Hello [BRAND_NAME]! I have an enquiry and would like some assistance. Could you help me out?
```

**Combo/Bundle Deal:**
```
Hi [BRAND_NAME]! 🎉 I'd like to claim the [Bundle Name] — [Product List] starting at ₦[PRICE]. Please send me your account details so I can make payment. Thank you!
```

### WhatsApp Link Format
```
https://wa.me/[WHATSAPP_NUMBER]?text=[ENCODED_MESSAGE]
```

### Integration Points
- Header: "Order Now" button (general message)
- Product cards: "Order" button (product-specific message)
- Product detail: "Order on WhatsApp" (product + measurement specific)
- Floating button: Enquiry message
- Combo deal: Bundle-specific message
- Contact page: General enquiry

---

## 9. STORE OPTIMIZATION

### Performance Checklist
- [ ] All images optimized (WebP preferred, <200KB each)
- [ ] Lazy loading on below-fold images
- [ ] Font preloading for display + body fonts
- [ ] Minimal JavaScript bundle (tree-shake unused components)
- [ ] Responsive images with srcset (optional but recommended)

### Mobile Optimization (70%+ traffic is mobile in Lagos)
- [ ] Touch targets minimum 44x44px
- [ ] Font size minimum 14px body, 10px smallest text
- [ ] Product grid: 2 columns on mobile
- [ ] Sticky header with compact height (56px mobile)
- [ ] WhatsApp float doesn't overlap content
- [ ] Fast tap-to-call and tap-to-WhatsApp
- [ ] No horizontal scroll

### Accessibility
- [ ] Alt text on ALL images (product name + context)
- [ ] Semantic HTML: single H1 per page, logical heading hierarchy
- [ ] ARIA labels on icon-only buttons
- [ ] Sufficient color contrast (4.5:1 minimum)
- [ ] Keyboard navigable

### Design System Tokens
```css
:root {
  /* Core */
  --background: [H] [S]% [L]%;
  --foreground: [H] [S]% [L]%;
  --primary: [H] [S]% [L]%;
  --primary-foreground: 0 0% 100%;
  --secondary: [H] [S]% [L]%;
  --secondary-foreground: 0 0% 100%;
  
  /* Surfaces */
  --card: 0 0% 100%;
  --card-foreground: [same as foreground];
  --muted: [H] [S]% 93%;
  --muted-foreground: [H] 10% 44%;
  
  /* Borders */
  --border: [H] 18% 88%;
  --input: [H] 18% 88%;
  --ring: [same as primary];
  
  /* WhatsApp (always the same) */
  --whatsapp: 142 70% 40%;
  --whatsapp-foreground: 0 0% 100%;
  
  /* Brand accent */
  --gold: [H] [S]% [L]%;
  --cream: [H] 40% 94%;
  
  --radius: 0.75rem;
}
```

---

## 10. ANALYTICS SETUP

### Google Analytics 4 (GA4) Setup

1. Create GA4 property at analytics.google.com
2. Get Measurement ID: `G-XXXXXXXXXX`
3. Add to `index.html` `<head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Key Events to Track

| Event | Trigger | Purpose |
|-------|---------|---------|
| `page_view` | Every page load | Traffic analysis |
| `view_item` | Product detail page | Product interest |
| `select_item` | Product card click | Catalog engagement |
| `begin_checkout` | WhatsApp order click | Conversion tracking |
| `whatsapp_click` | Any WhatsApp link | Primary CTA tracking |
| `category_filter` | Category button click | Browse behavior |
| `instagram_click` | Instagram link click | Social traffic |

### Custom Event Implementation (Optional)
```typescript
// Track WhatsApp clicks
const trackWhatsAppClick = (context: string, productName?: string) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'whatsapp_click', {
      event_category: 'conversion',
      event_label: context,
      product_name: productName || 'general',
    });
  }
};
```

### Key Metrics to Monitor

| Metric | Target | Why |
|--------|--------|-----|
| WhatsApp Click Rate | >5% of visitors | Primary conversion |
| Bounce Rate | <60% | Content relevance |
| Pages/Session | >2 | Engagement depth |
| Mobile vs Desktop | Track split | Optimize for majority |
| Top Products Viewed | Track weekly | Stock & promotion |
| Instagram → Site Traffic | Track weekly | Bio link effectiveness |
| Category Filter Usage | Track | Catalog organization |

### UTM Parameters for Marketing
```
Instagram Bio:     ?utm_source=instagram&utm_medium=bio
Instagram Story:   ?utm_source=instagram&utm_medium=story&utm_campaign=[name]
WhatsApp Status:   ?utm_source=whatsapp&utm_medium=status
Facebook:          ?utm_source=facebook&utm_medium=post
Google Ads:        ?utm_source=google&utm_medium=cpc&utm_campaign=[name]
Flyer/QR Code:     ?utm_source=offline&utm_medium=qr&utm_campaign=[name]
```

---

## 11. LAUNCH CHECKLIST

### Pre-Launch
- [ ] All product images uploaded and optimized
- [ ] All product names follow naming convention
- [ ] All prices are accurate and formatted correctly
- [ ] All internal links tested (no 404s)
- [ ] All WhatsApp links tested with correct messages
- [ ] SEO: Title tags, meta descriptions, OG tags set
- [ ] JSON-LD structured data validated (search.google.com/test/rich-results)
- [ ] robots.txt in place
- [ ] Favicon uploaded
- [ ] OG image uploaded (1200x630)
- [ ] Mobile responsive tested (375px, 414px, 768px, 1024px, 1440px)
- [ ] WhatsApp float visible but not blocking content
- [ ] First-visit popup working correctly
- [ ] 404 page working
- [ ] All external links open in new tab

### Post-Launch
- [ ] Google Search Console: Submit sitemap
- [ ] Google Analytics: Verify tracking
- [ ] Test WhatsApp flow end-to-end (click → message → response)
- [ ] Share on Instagram with UTM link
- [ ] Check OG preview (opengraph.xyz or Facebook debugger)
- [ ] Monitor for 404 errors in Search Console
- [ ] Set up weekly analytics review

### ⚠ Common Broken Link Issues & Fixes

| Issue | Cause | Fix |
|-------|-------|-----|
| Product page 404 | Product ID mismatch | Ensure product `id` field matches URL slug exactly |
| Category filter empty | Category ID mismatch | Ensure category `id` matches product `category` field |
| WhatsApp opens empty | Encoding error | Use `encodeURIComponent()` for message text |
| Instagram link broken | Wrong handle format | Use full URL: `https://instagram.com/[handle]` |
| Logo not loading | Wrong import path | Use `import logo from "@/assets/[filename]"` |
| 404 on refresh (SPA) | Server routing | Ensure hosting supports SPA fallback to index.html |

---

## 12. THE MASTER PROMPT

Copy everything below, fill in the `[PLACEHOLDERS]`, and paste into Lovable:

---

```
Build a professional, mobile-first e-commerce catalog website for a Lagos-based vendor with the following specifications:

## BRAND IDENTITY
- Brand Name: [BRAND_NAME]
- Tagline: [TAGLINE]
- Niche: [NICHE]
- Color Palette: [PRIMARY_COLOR] primary, [SECONDARY_COLOR] accent, warm cream backgrounds
- Typography: [DISPLAY_FONT] for headings, [BODY_FONT] for body text
- Tone: [TONE] — warm, trustworthy, and professional

## TECH STACK
- React + TypeScript + Vite + Tailwind CSS
- shadcn/ui components
- React Router for navigation
- Framer Motion for animations (optional)
- No backend needed — WhatsApp is the checkout

## PAGES (6 + 404)

### Homepage (/)
- Hero: Full-width bg image, H1 with brand + tagline, "Shop Now" + "WhatsApp Order" CTAs
- Trust bar: [YEARS]+ Years | [FOLLOWER_COUNT] Followers | [CUSTOMER_COUNT]+ Customers
- Category grid: [NUMBER] categories with images, names, counts, links to /shop?category=X
- Featured products: [NUMBER] products in responsive grid
- Why Choose Us: 3-4 trust points with icons
- Best-seller combo deal with WhatsApp CTA
- Testimonials: [NUMBER] customer quotes
- Instagram CTA section

### Shop (/shop)
- H1: "Shop [PRODUCT_TYPE]"
- Category filter buttons with counts
- Product grid: 2 cols mobile, 3 tablet, 4 desktop
- Product cards: image, name, description, price badges, View + WhatsApp Order buttons

### Product Detail (/product/:id)
- Breadcrumb navigation
- Large product image
- Product info: name, category, description
- Measurement selector with price display
- WhatsApp order button (pre-filled message with product + measurement)
- Related products from same category

### About (/about)
- Brand story with [NICHE] keywords
- Stats grid: [YEARS] Years | [PRODUCT_COUNT] Products | [CUSTOMER_COUNT]+ Customers
- Values/mission section

### Delivery (/delivery)
- Delivery areas and pricing table
- Payment methods
- FAQ accordion (5+ questions)

### Contact (/contact)
- Contact cards: Phone, WhatsApp, Instagram
- Address: [FULL_ADDRESS]
- Operating hours: [HOURS]

### 404 Page
- Friendly message with "Go Home" and "Browse Shop" links

## PRODUCTS

[LIST ALL PRODUCTS HERE USING THE TEMPLATE FORMAT FROM SECTION 3]

## GLOBAL COMPONENTS
- Sticky header: Logo + nav + WhatsApp CTA (desktop) + hamburger menu (mobile)
- Footer: Brand info, quick links, contact info, Instagram link, copyright
- WhatsApp floating button: Bottom-right, all pages, green, links to enquiry message
- First-visit popup: Welcome message + value prop + "Browse Products" CTA (show once, 7-day cooldown)

## WHATSAPP INTEGRATION
- WhatsApp Number: [WHATSAPP_NUMBER]
- General order message: "Hi [BRAND_NAME]! I'd like to place an order..."
- Product order message: Pre-filled with product name, measurement, and price
- Enquiry message: "Hello [BRAND_NAME]! I have an enquiry..."

## SEO
- Title: "[BRAND_NAME] — [Primary Keyword] in Lagos"
- Meta description: Under 160 chars with primary keyword
- Single H1 per page
- JSON-LD LocalBusiness structured data
- Open Graph + Twitter Card tags
- robots.txt
- Semantic HTML throughout
- Alt text on all images
- Lazy loading on below-fold images

## DESIGN REQUIREMENTS
- Mobile-first (70%+ traffic is mobile)
- Consistent use of design tokens (no hardcoded colors)
- Hover effects on product cards (image zoom, shadow)
- Smooth transitions and animations
- Professional but approachable aesthetic
- WhatsApp green (#25D366) for all WhatsApp elements
```

---

## EXAMPLE FILLED PROMPTS

### Example 1: Rice Vendor
```
Brand Name: Mama Rice Hub
Tagline: Lagos' Premium Rice Destination
Niche: Rice & Grains
Primary Color: hsl(25, 65%, 38%) (Earth Brown)
Categories: Local Rice, Imported Rice, Rice Accessories
Measurements: 10kg / 25kg / 50kg
```

### Example 2: Ofada Sauce Vendor
```
Brand Name: Ofada Queen Lagos
Tagline: Authentic Ofada Sauce, Delivered Fresh
Niche: Ofada Sauce & Accompaniments
Primary Color: hsl(142, 70%, 35%) (Fresh Green)
Categories: Ofada Sauce, Rice Packs, Combo Deals
Measurements: Small (500ml) / Medium (1L) / Large (2L) / Party Size (5L)
```

### Example 3: General Foodstuff
```
Brand Name: Naija Pantry
Tagline: Your One-Stop Foodstuff Shop in Lagos
Niche: General Foodstuffs & Provisions
Primary Color: hsl(0, 72%, 42%) (Trust Red)
Categories: Grains & Cereals, Oils & Seasonings, Beverages, Snacks
Measurements: Small / Medium / Large / Wholesale
```

---

**End of Template. Save this document and reuse for every new vendor website project.**
