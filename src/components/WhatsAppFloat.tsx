import WhatsAppIcon from "@/components/WhatsAppIcon";
import { getWhatsAppLink } from "@/lib/products";

const WhatsAppFloat = () => (
  <a
    href={getWhatsAppLink()}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-whatsapp text-whatsapp-foreground px-4 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
    aria-label="Order on WhatsApp"
  >
    <WhatsAppIcon className="h-5 w-5" />
    <span className="hidden sm:inline text-sm font-semibold">WhatsApp</span>
  </a>
);

export default WhatsAppFloat;
