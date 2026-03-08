import { useState } from "react";
import { Phone, MapPin, Instagram, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { getWhatsAppLink } from "@/lib/products";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast({ title: "Please fill in your name and phone number", variant: "destructive" });
      return;
    }
    setSending(true);
    setTimeout(() => {
      const msg = encodeURIComponent(
        `Hi Ireola Foods! My name is ${formData.name.trim()}.${formData.email ? ` Email: ${formData.email.trim()}.` : ""} Phone: ${formData.phone.trim()}.${formData.message ? ` Message: ${formData.message.trim()}` : ""}`
      );
      window.open(`https://wa.me/2349162797173?text=${msg}`, "_blank");
      toast({ title: "Redirecting to WhatsApp!", description: "Complete your enquiry in the chat." });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSending(false);
    }, 600);
  };

  return (
    <div>
      <section className="bg-primary text-primary-foreground py-12 md:py-24">
        <div className="container text-center px-4">
          <h1 className="font-display text-2xl md:text-5xl font-bold mb-3 md:mb-4">Contact Us</h1>
          <p className="text-primary-foreground/80 max-w-xl mx-auto text-sm md:text-lg">
            Ready to order? Have questions? We're here to help!
          </p>
        </div>
      </section>

      <section className="container py-8 md:py-20 max-w-5xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="space-y-4 md:space-y-6">
            <h2 className="font-display text-xl md:text-2xl font-bold">Get in Touch</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4">
              {[
                { icon: Phone, title: "Phone / WhatsApp", lines: ["07037495760", "09162797173"] },
                { icon: MapPin, title: "Location", lines: ["Ojodu No.6 Berger", "Lagos, Nigeria"] },
                { icon: Clock, title: "Business Hours", lines: ["Mon–Sat: 8AM – 7PM", "Sunday: 10AM – 4PM"] },
                { icon: Instagram, title: "Instagram", lines: ["@ireolafoodscerealsvendor"] },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 p-3.5 md:p-5 bg-card border rounded-lg">
                  <item.icon className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-xs md:text-sm mb-0.5">{item.title}</h3>
                    {item.lines.map((line, j) => (
                      <p key={j} className="text-xs md:text-sm text-muted-foreground">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <Button size="default" className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground w-full sm:w-auto text-sm" asChild>
              <a href={getWhatsAppLink("enquiry")} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-4 w-4 mr-2" /> Chat on WhatsApp
              </a>
            </Button>
          </div>

          {/* Contact Form */}
          <div className="bg-card border rounded-xl p-5 md:p-8">
            <h2 className="font-display text-xl md:text-2xl font-bold mb-1.5">Send Us a Message</h2>
            <p className="text-xs md:text-sm text-muted-foreground mb-4 md:mb-6">
              Fill in your details and we'll continue the conversation on WhatsApp.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-xs md:text-sm">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  maxLength={100}
                  required
                  className="h-9 md:h-10 text-sm"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="phone" className="text-xs md:text-sm">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="08012345678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    maxLength={15}
                    required
                    className="h-9 md:h-10 text-sm"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-xs md:text-sm">Email (optional)</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    maxLength={255}
                    className="h-9 md:h-10 text-sm"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="message" className="text-xs md:text-sm">Message (optional)</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us what you'd like to order or ask..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  maxLength={1000}
                  rows={3}
                  className="text-sm"
                />
              </div>
              <Button type="submit" size="default" className="w-full text-sm h-10" disabled={sending}>
                {sending ? "Sending..." : (
                  <>
                    <Send className="h-3.5 w-3.5 mr-2" /> Send & Continue on WhatsApp
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
