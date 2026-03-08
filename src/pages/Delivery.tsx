import { Truck, Package, MapPin, MessageCircle, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Delivery = () => (
  <div>
    <section className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="container text-center">
        <Truck className="h-12 w-12 mx-auto mb-4" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mb-4">Delivery Information</h1>
        <p className="text-primary-foreground/80 max-w-xl mx-auto text-lg">
          We deliver quality cereals and beverages to your doorstep — anywhere in Nigeria.
        </p>
      </div>
    </section>

    <section className="container py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {[
          { icon: MapPin, title: "Nationwide Coverage", desc: "We deliver within Lagos and across Nigeria. Wherever you are, we'll get your order to you." },
          { icon: Clock, title: "Fast Lagos Delivery", desc: "Orders within Lagos are processed quickly. Most deliveries within Ojodu Berger and surrounding areas arrive same-day or next-day." },
          { icon: Package, title: "Secure Packaging", desc: "Every order is carefully packaged to ensure your cereals and products arrive fresh and intact." },
          { icon: MessageCircle, title: "WhatsApp Confirmation", desc: "After placing your order, you'll receive a WhatsApp confirmation with delivery tracking details." },
        ].map((item, i) => (
          <div key={i} className="flex gap-4 p-6 bg-card border rounded-lg">
            <item.icon className="h-8 w-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-bold mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-muted-foreground mb-4">Have questions about delivery? Reach out to us on WhatsApp.</p>
        <Button size="lg" className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground" asChild>
          <a href="https://wa.me/2347037495760?text=Hello!%20I%20have%20a%20question%20about%20delivery." target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-5 w-5 mr-2" /> Ask About Delivery
          </a>
        </Button>
      </div>
    </section>
  </div>
);

export default Delivery;
