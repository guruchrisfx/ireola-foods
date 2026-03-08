import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ShieldCheck, Truck } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { products, getWhatsAppLink } from "@/lib/products";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [selectedMeasurement, setSelectedMeasurement] = useState(0);

  if (!product) {
    return (
      <div className="container py-20 text-center px-4">
        <h1 className="font-display text-2xl font-bold mb-4">Product Not Found</h1>
        <Button asChild><Link to="/shop">Back to Shop</Link></Button>
      </div>
    );
  }

  const m = product.measurements[selectedMeasurement];

  return (
    <div className="container py-4 md:py-12 px-4">
      <Link to="/shop" className="inline-flex items-center gap-1 text-xs md:text-sm text-muted-foreground hover:text-foreground mb-4 md:mb-6">
        <ArrowLeft className="h-3.5 w-3.5 md:h-4 md:w-4" /> Back to Shop
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <div className="aspect-square rounded-lg overflow-hidden bg-muted">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>

        <div>
          <Badge className="mb-2 bg-cream text-foreground border-0 capitalize text-xs">{product.category.replace("-", " & ")}</Badge>
          <h1 className="font-display text-2xl md:text-4xl font-bold mb-2 md:mb-3">{product.name}</h1>
          <p className="text-muted-foreground text-sm md:text-base mb-4 md:mb-6 leading-relaxed">{product.description}</p>

          <div className="mb-4 md:mb-6">
            <h3 className="font-semibold text-sm md:text-base mb-2 md:mb-3">Select Measurement</h3>
            <div className="grid grid-cols-3 gap-2">
              {product.measurements.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedMeasurement(i)}
                  className={`px-2 py-2.5 md:px-4 md:py-3 rounded-lg border-2 text-xs md:text-sm font-medium transition-colors ${
                    i === selectedMeasurement
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <span className="block font-bold text-xs md:text-sm">{item.label}</span>
                  <span className="text-muted-foreground text-[10px] md:text-sm">{item.price}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6">{m.price}</div>

          <Button size="lg" className="w-full bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground text-sm mb-6 md:mb-8" asChild>
            <a href={getWhatsAppLink({ product, measurement: selectedMeasurement })} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="h-4 w-4 md:h-5 md:w-5 mr-2" /> Order on WhatsApp
            </a>
          </Button>

          <div className="flex flex-col gap-2 md:gap-3 text-xs md:text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><ShieldCheck className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary" /> Sourced from original manufacturer bags</span>
            <span className="flex items-center gap-2"><Truck className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary" /> Nationwide delivery available</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
