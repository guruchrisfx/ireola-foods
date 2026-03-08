import { Link } from "react-router-dom";
import { Phone, MapPin, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container py-8 md:py-12 px-4 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
      <div className="col-span-2 md:col-span-1">
        <h3 className="font-display text-lg md:text-xl font-bold mb-2 md:mb-3">Ireola Foods</h3>
        <p className="text-primary-foreground/70 text-xs md:text-sm leading-relaxed">
          Lagos' No. 1 measured cereals vendor. Quality products sourced directly from manufacturer bags at affordable prices.
        </p>
      </div>
      <div>
        <h4 className="font-display text-sm md:text-lg font-bold mb-2 md:mb-3">Quick Links</h4>
        <nav className="flex flex-col gap-1.5 md:gap-2 text-xs md:text-sm text-primary-foreground/70">
          <Link to="/shop" className="hover:text-primary-foreground transition-colors">Shop Products</Link>
          <Link to="/about" className="hover:text-primary-foreground transition-colors">About Us</Link>
          <Link to="/delivery" className="hover:text-primary-foreground transition-colors">Delivery Info</Link>
          <Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact</Link>
        </nav>
      </div>
      <div>
        <h4 className="font-display text-sm md:text-lg font-bold mb-2 md:mb-3">Contact</h4>
        <div className="flex flex-col gap-1.5 md:gap-2 text-xs md:text-sm text-primary-foreground/70">
          <span className="flex items-center gap-1.5"><Phone className="h-3.5 w-3.5" /> 07037495760</span>
          <span className="flex items-center gap-1.5"><Phone className="h-3.5 w-3.5" /> 09162797173</span>
          <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> Ojodu Berger, Lagos</span>
          <a href="https://instagram.com/ireolafoodscerealsvendor" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary-foreground transition-colors">
            <Instagram className="h-3.5 w-3.5" /> @ireolafoodscerealsvendor
          </a>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10 py-3 md:py-4 text-center text-[10px] md:text-xs text-primary-foreground/50">
      © {new Date().getFullYear()} Ireola Foods. All rights reserved.
    </div>
  </footer>
);

export default Footer;
