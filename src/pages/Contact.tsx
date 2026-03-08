import { Phone, MapPin, Instagram, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { getWhatsAppLink } from "@/lib/products";

const Contact = () => (
  <div>
    <section className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="container text-center">
        <h1 className="font-display text-3xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-primary-foreground/80 max-w-xl mx-auto text-lg">
          Ready to order? Have questions? We're here to help!
        </p>
      </div>
    </section>

    <section className="container py-12 md:py-20 max-w-3xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          { icon: Phone, title: "Phone / WhatsApp", lines: ["07037495760", "09162797173"] },
          { icon: MapPin, title: "Location", lines: ["Ojodu No.6 Berger", "Lagos, Nigeria"] },
          { icon: Clock, title: "Business Hours", lines: ["Mon–Sat: 8AM – 7PM", "Sunday: 10AM – 4PM"] },
          { icon: Instagram, title: "Instagram", lines: ["@ireolafoodscerealsvendor"] },
        ].map((item, i) => (
          <div key={i} className="flex gap-4 p-6 bg-card border rounded-lg">
            <item.icon className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold mb-1">{item.title}</h3>
              {item.lines.map((line, j) => (
                <p key={j} className="text-sm text-muted-foreground">{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <h2 className="font-display text-2xl font-bold mb-4">Quick Order via WhatsApp</h2>
        <p className="text-muted-foreground mb-6">
          The fastest way to order is through WhatsApp. Tap below to start a conversation.
        </p>
        <Button size="lg" className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground" asChild>
          <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className="h-5 w-5 mr-2" /> Chat on WhatsApp
          </a>
        </Button>
      </div>
    </section>
  </div>
);

export default Contact;
