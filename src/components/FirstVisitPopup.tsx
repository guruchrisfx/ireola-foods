import { useState, useEffect } from "react";
import { X, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { getWhatsAppLink } from "@/lib/products";

const STORAGE_KEY = "ireola_visited";

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
        `Hi! I'd like to know more about the Ireola Foods combo deal. My number: ${phone.trim()}`
      );
      window.open(`https://wa.me/2349162797173?text=${msg}`, "_blank");
    } else {
      window.open(getWhatsAppLink(), "_blank");
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative bg-card border-2 border-primary/20 rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8 animate-in zoom-in-95 fade-in duration-300">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-muted transition-colors"
        >
          <X className="h-5 w-5 text-muted-foreground" />
        </button>

        <div className="text-center mb-5">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-primary/10 mb-3">
            <Gift className="h-7 w-7 text-primary" />
          </div>
          <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
            🎉 Welcome Offer!
          </h3>
          <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
            Get our <span className="font-bold text-primary">Best-Seller Combo Deal</span> — Golden Morn + Cornflakes + Milk starting at just <span className="font-bold text-primary">₦28,000!</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            maxLength={15}
            className="text-center"
          />
          <Button type="submit" size="lg" className="w-full bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground">
            <WhatsAppIcon className="h-5 w-5 mr-2" /> Claim Offer on WhatsApp
          </Button>
        </form>

        <p className="text-xs text-muted-foreground text-center mt-3">
          Free delivery within Lagos on orders above ₦30,000
        </p>
      </div>
    </div>
  );
};

export default FirstVisitPopup;
