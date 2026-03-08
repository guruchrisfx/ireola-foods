import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/ireola-logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/delivery", label: "Delivery" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Ireola Foods" className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover" />
          <span className="font-display text-lg md:text-xl font-bold text-foreground">Ireola Foods</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === link.to ? "text-primary" : "text-muted-foreground"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="default" size="sm" className="hidden md:inline-flex" asChild>
            <a href="https://wa.me/2347037495760?text=Hello%20Ireola%20Foods!%20I%27d%20like%20to%20place%20an%20order." target="_blank" rel="noopener noreferrer">
              Order on WhatsApp
            </a>
          </Button>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden border-t bg-card px-4 pb-4 animate-fade-in">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block py-3 text-base font-medium border-b last:border-0 ${location.pathname === link.to ? "text-primary" : "text-muted-foreground"}`}
            >
              {link.label}
            </Link>
          ))}
          <Button className="w-full mt-3 bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground" asChild>
            <a href="https://wa.me/2347037495760?text=Hello%20Ireola%20Foods!" target="_blank" rel="noopener noreferrer">
              Order on WhatsApp
            </a>
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Header;
