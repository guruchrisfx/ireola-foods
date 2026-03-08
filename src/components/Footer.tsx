import { Link } from "react-router-dom";
import { Phone, MapPin, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="font-display text-xl font-bold mb-3">Ireola Foods</h3>
        <p className="text-primary-foreground/70 text-sm leading-relaxed">
          Lagos' No. 1 measured cereals vendor. Quality products sourced directly from manufacturer bags.
        </p>
      </div>
      <div>
        <h4 className="font-display text-lg font-bold mb-3">Quick Links</h4>
        <nav className="flex flex-col gap-2 text-sm text-primary-foreground/70">
          <Link to="/shop" className="hover:text-primary-foreground transition-colors">Shop Products</Link>
          <Link to="/about" className="hover:text-primary-foreground transition-colors">About Us</Link>
          <Link to="/delivery" className="hover:text-primary-foreground transition-colors">Delivery Info</Link>
          <Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact</Link>
        </nav>
      </div>
      <div>
        <h4 className="font-display text-lg font-bold mb-3">Contact</h4>
        <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
          <span className="flex items-center gap-2"><Phone className="h-4 w-4" /> 07037495760</span>
          <span className="flex items-center gap-2"><Phone className="h-4 w-4" /> 09162797173</span>
          <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Ojodu Berger, Lagos</span>
          <a href="https://instagram.com/ireola_foods_cereals_vendor" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
            <Instagram className="h-4 w-4" /> @ireola_foods_cereals_vendor
          </a>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10 py-4 text-center text-xs text-primary-foreground/50">
      © {new Date().getFullYear()} Ireola Foods. All rights reserved.
    </div>
  </footer>
);

export default Footer;
