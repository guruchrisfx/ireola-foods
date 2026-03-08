import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => (
  <a
    href="https://wa.me/2347037495760?text=Hello%20Ireola%20Foods!%20I%27d%20like%20to%20place%20an%20order."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-whatsapp text-whatsapp-foreground px-4 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
    aria-label="Order on WhatsApp"
  >
    <MessageCircle className="h-5 w-5" />
    <span className="hidden sm:inline text-sm font-semibold">WhatsApp</span>
  </a>
);

export default WhatsAppFloat;
