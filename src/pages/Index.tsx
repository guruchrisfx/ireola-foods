import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Truck, Star, ChevronRight, Package, CheckCircle } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import ProductCard from "@/components/ProductCard";
import { products, getWhatsAppLink } from "@/lib/products";
import heroBg from "@/assets/hero-bg.jpg";
import categoryCereals from "@/assets/category-cereals.jpg";
import categoryBeverages from "@/assets/category-beverages.jpg";
import categoryFoodstuff from "@/assets/category-foodstuff.jpg";
import logo from "@/assets/ireola-logo.png";

const categoryImages = [
  { name: "Cereals", image: categoryCereals, slug: "cereals", count: 7 },
  { name: "Milk & Beverages", image: categoryBeverages, slug: "milk-beverages", count: 4 },
  { name: "Foodstuffs & Snacks", image: categoryFoodstuff, slug: "foodstuff", count: 1 },
];

const steps = [
  { icon: Package, title: "Browse Products", desc: "Explore our catalog of cereals, beverages & foodstuffs" },
  { icon: CheckCircle, title: "Choose Size", desc: "Pick paint bucket, half bag, or full bag measurement" },
  { icon: () => <WhatsAppIcon className="h-6 w-6 text-primary" />, title: "Place Order", desc: "Add to cart or order directly via WhatsApp" },
  { icon: Truck, title: "Get Delivery", desc: "Receive your order anywhere in Nigeria" },
];

const testimonials = [
  { name: "Chioma A.", text: "Great quality cereals and accurate measurements. My family buys from Ireola Foods every month." },
  { name: "Tunde O.", text: "Best prices for measured cereals in Lagos. Delivery is always prompt and packaging is neat." },
  { name: "Blessing E.", text: "I resell cereals and Ireola Foods is my go-to supplier. Consistent quality every time!" },
];

const Index = () => {
  const featured = products.slice(0, 6);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/70 to-foreground/80" />
        </div>
        <div className="container relative py-20 md:py-32 text-center">
          <img src={logo} alt="Ireola Foods" className="h-20 w-20 md:h-28 md:w-28 rounded-full mx-auto mb-6 object-cover border-4 border-primary-foreground/20 shadow-xl" />
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
            Quality Cereals & Beverages<br />
            <span className="text-secondary">in Measured Quantities</span>
          </h1>
          <p className="text-primary-foreground/80 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Buy cereals, milk, and foodstuffs in paint bucket measurements, half bags, or full bags. Trusted quality sourced directly from original company bags.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <Link to="/shop">Shop Products</Link>
            </Button>
            <Button size="lg" className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground" asChild>
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-5 w-5 mr-2" /> Order on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-primary text-primary-foreground py-4">
        <div className="container flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-medium">
          <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Original Quality</span>
          <span className="flex items-center gap-2"><Package className="h-4 w-4" /> Measured Quantities</span>
          <span className="flex items-center gap-2"><Truck className="h-4 w-4" /> Nationwide Delivery</span>
          <span className="flex items-center gap-2"><Star className="h-4 w-4" /> 10.4K+ Followers</span>
        </div>
      </section>

      {/* Categories */}
      <section className="container py-12 md:py-20">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-2">Shop by Category</h2>
        <p className="text-muted-foreground text-center mb-8">Carefully measured cereals, beverages & foodstuff</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {categoryImages.map(cat => (
            <Link key={cat.slug} to={`/shop?category=${cat.slug}`} className="group relative rounded-lg overflow-hidden aspect-[4/3]">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-foreground/20 group-hover:from-foreground/80 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 text-primary-foreground">
                <h3 className="font-display text-xl md:text-2xl font-bold">{cat.name}</h3>
                <p className="text-sm opacity-80">{cat.count} products</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="bg-cream py-12 md:py-20">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold">Best Selling Products</h2>
              <p className="text-muted-foreground text-sm mt-1">Our customers' favourites</p>
            </div>
            <Link to="/shop" className="text-primary font-medium text-sm flex items-center gap-1 hover:underline">
              View All <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            {featured.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container py-12 md:py-20">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-2">How Ordering Works</h2>
        <p className="text-muted-foreground text-center mb-10">Simple steps to get your products delivered</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-xs font-bold text-primary mb-1">Step {i + 1}</div>
              <h3 className="font-bold text-sm md:text-base mb-1">{step.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container text-center max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Why Choose Ireola Foods?</h2>
          <p className="text-primary-foreground/70 mb-8">We give you carefully measured quality 👌</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {[
              "Products sourced directly from manufacturers",
              "Same quality as packaged goods",
              "Carefully measured portions every time",
              "Hygienic packaging guaranteed",
              "Affordable prices for families & businesses",
              "Fast delivery within Lagos & nationwide",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-secondary" />
                <span className="text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-12 md:py-20">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card border rounded-lg p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <p className="text-sm text-muted-foreground mb-4 italic">"{t.text}"</p>
              <p className="font-semibold text-sm">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="bg-cream py-12 text-center">
        <div className="container">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">Follow Us on Instagram</h2>
          <p className="text-muted-foreground mb-2">6,000+ posts • 10.4K followers</p>
          <p className="text-muted-foreground mb-6">See our latest products, prices and customer reviews</p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
            <a href="https://instagram.com/ireolafoodscerealsvendor" target="_blank" rel="noopener noreferrer">
              Follow @ireolafoodscerealsvendor
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
