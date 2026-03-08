import { Truck, Package, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { getWhatsAppLink } from "@/lib/products";

const Delivery = () => (
  <div>
    <section className="bg-primary text-primary-foreground py-12 md:py-24">
      <div className="container text-center px-4">
        <Truck className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-3 md:mb-4" />
        <h1 className="font-display text-2xl md:text-5xl font-bold mb-3 md:mb-4">Delivery Information</h1>
        <p className="text-primary-foreground/80 max-w-xl mx-auto text-sm md:text-lg">
          We deliver quality cereals and beverages to your doorstep — anywhere in Nigeria.
        </p>
      </div>
    </section>

    <section className="container py-8 md:py-20 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-8 max-w-4xl mx-auto">
        {[
          { icon: <MapPin className="h-6 w-6 md:h-8 md:w-8 text-primary flex-shrink-0" />, title: "Nationwide Coverage", desc: "We deliver within Lagos and across Nigeria. Wherever you are, we'll get your order to you." },
          { icon: <Clock className="h-6 w-6 md:h-8 md:w-8 text-primary flex-shrink-0" />, title: "Fast Lagos Delivery", desc: "Orders within Lagos are processed quickly. Most deliveries arrive same-day or next-day." },
          { icon: <Package className="h-6 w-6 md:h-8 md:w-8 text-primary flex-shrink-0" />, title: "Secure Packaging", desc: "Every order is carefully packaged to ensure your products arrive fresh and intact." },
          { icon: <WhatsAppIcon className="h-6 w-6 md:h-8 md:w-8 text-primary flex-shrink-0" />, title: "WhatsApp Confirmation", desc: "After placing your order, you'll receive a WhatsApp confirmation with delivery details." },
        ].map((item, i) => (
          <div key={i} className="flex gap-3 md:gap-4 p-4 md:p-6 bg-card border rounded-lg">
            {item.icon}
            <div>
              <h3 className="font-bold text-sm md:text-base mb-0.5 md:mb-1">{item.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8 md:mt-12">
        <p className="text-muted-foreground text-sm mb-3 md:mb-4">Have questions about delivery? Reach out on WhatsApp.</p>
        <Button size="default" className="w-full sm:w-auto bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground text-sm" asChild>
          <a href={getWhatsAppLink("enquiry")} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className="h-4 w-4 mr-2" /> Ask About Delivery
          </a>
        </Button>
      </div>
    </section>
  </div>
);

export default Delivery;
