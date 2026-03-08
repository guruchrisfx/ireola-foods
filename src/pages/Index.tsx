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
  { icon: CheckCircle, title: "Choose Size", desc: "Pick paint bucket, half bag, or full bag" },
  { icon: () => <WhatsAppIcon className="h-5 w-5 text-primary" />, title: "Place Order", desc: "Order directly via WhatsApp" },
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
        <div className="container relative py-14 md:py-32 text-center px-4">
          <img src={logo} alt="Ireola Foods" className="h-16 w-16 md:h-28 md:w-28 rounded-full mx-auto mb-4 md:mb-6 object-cover border-4 border-primary-foreground/20 shadow-xl" />
          <h1 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-3 md:mb-4 leading-tight">
            Quality Cereals & Beverages<br />
            <span className="text-secondary">in Measured Quantities</span>
          </h1>
          <p className="text-primary-foreground/80 text-sm md:text-lg max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed px-2">
            Buy cereals, milk, and foodstuffs in paint bucket measurements, half bags, or full bags.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center px-4">
            <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground text-sm" asChild>
              <Link to="/shop">Shop Products</Link>
            </Button>
            <Button size="lg" className="w-full sm:w-auto bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground text-sm" asChild>
              <a href={getWhatsAppLink("general")} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-4 w-4 mr-2" /> Order on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-primary text-primary-foreground py-3 md:py-4">
        <div className="container flex flex-wrap justify-center gap-3 md:gap-12 text-xs md:text-sm font-medium px-4">
          <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 md:h-4 md:w-4" /> Original Quality</span>
          <span className="flex items-center gap-1.5"><Package className="h-3.5 w-3.5 md:h-4 md:w-4" /> Measured Quantities</span>
          <span className="flex items-center gap-1.5"><Truck className="h-3.5 w-3.5 md:h-4 md:w-4" /> Nationwide Delivery</span>
          <span className="flex items-center gap-1.5"><Star className="h-3.5 w-3.5 md:h-4 md:w-4" /> 10.4K+ Followers</span>
        </div>
      </section>

      {/* Categories */}
      <section className="container py-10 md:py-20 px-4">
        <h2 className="font-display text-xl md:text-3xl font-bold text-center mb-1.5">Shop by Category</h2>
        <p className="text-muted-foreground text-center text-sm mb-6 md:mb-8">Carefully measured cereals, beverages & foodstuff</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6">
          {categoryImages.map(cat => (
            <Link key={cat.slug} to={`/shop?category=${cat.slug}`} className="group relative rounded-lg overflow-hidden aspect-[16/10] sm:aspect-[4/3]">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-foreground/20 group-hover:from-foreground/80 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-4 md:pb-6 text-primary-foreground">
                <h3 className="font-display text-lg md:text-2xl font-bold">{cat.name}</h3>
                <p className="text-xs opacity-80">{cat.count} products</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="bg-cream py-10 md:py-20">
        <div className="container px-4">
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <div>
              <h2 className="font-display text-xl md:text-3xl font-bold">Best Selling Products</h2>
              <p className="text-muted-foreground text-xs md:text-sm mt-1">Our customers' favourites</p>
            </div>
            <Link to="/shop" className="text-primary font-medium text-xs md:text-sm flex items-center gap-1 hover:underline">
              View All <ChevronRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 md:gap-6">
            {featured.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container py-10 md:py-20 px-4">
        <h2 className="font-display text-xl md:text-3xl font-bold text-center mb-1.5">How Ordering Works</h2>
        <p className="text-muted-foreground text-center text-sm mb-8 md:mb-10">Simple steps to get your products delivered</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="w-11 h-11 md:w-14 md:h-14 mx-auto mb-2 md:mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                <step.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              </div>
              <div className="text-[10px] md:text-xs font-bold text-primary mb-0.5">Step {i + 1}</div>
              <h3 className="font-bold text-xs md:text-base mb-0.5">{step.title}</h3>
              <p className="text-[10px] md:text-sm text-muted-foreground leading-snug">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-primary text-primary-foreground py-10 md:py-16">
        <div className="container text-center max-w-3xl px-4">
          <h2 className="font-display text-xl md:text-3xl font-bold mb-3 md:mb-4">Why Choose Ireola Foods?</h2>
          <p className="text-primary-foreground/70 mb-6 md:mb-8 text-sm">We give you carefully measured quality 👌</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 text-left">
            {[
              "Products sourced directly from manufacturers",
              "Same quality as packaged goods",
              "Carefully measured portions every time",
              "Hygienic packaging guaranteed",
              "Affordable prices for families & businesses",
              "Fast delivery within Lagos & nationwide",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mt-0.5 flex-shrink-0 text-secondary" />
                <span className="text-xs md:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-10 md:py-20 px-4">
        <h2 className="font-display text-xl md:text-3xl font-bold text-center mb-6 md:mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card border rounded-lg p-4 md:p-6">
              <div className="flex gap-0.5 mb-2 md:mb-3">
                {[...Array(5)].map((_, j) => <Star key={j} className="h-3.5 w-3.5 md:h-4 md:w-4 fill-gold text-gold" />)}
              </div>
              <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 italic">"{t.text}"</p>
              <p className="font-semibold text-xs md:text-sm">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="bg-cream py-10 md:py-12 text-center">
        <div className="container px-4">
          <h2 className="font-display text-xl md:text-3xl font-bold mb-2 md:mb-3">Follow Us on Instagram</h2>
          <p className="text-muted-foreground text-xs md:text-base mb-1.5 md:mb-2">6,000+ posts • 10.4K followers</p>
          <p className="text-muted-foreground text-xs md:text-base mb-4 md:mb-6">See our latest products, prices and customer reviews</p>
          <Button size="default" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground text-sm" asChild>
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
