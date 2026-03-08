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
      <div className="container py-20 text-center">
        <h1 className="font-display text-2xl font-bold mb-4">Product Not Found</h1>
        <Button asChild><Link to="/shop">Back to Shop</Link></Button>
      </div>
    );
  }

  const m = product.measurements[selectedMeasurement];

  return (
    <div className="container py-6 md:py-12">
      <Link to="/shop" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeft className="h-4 w-4" /> Back to Shop
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="aspect-square rounded-lg overflow-hidden bg-muted">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>

        <div>
          <Badge className="mb-2 bg-cream text-foreground border-0 capitalize">{product.category.replace("-", " & ")}</Badge>
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">{product.name}</h1>
          <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>

          <div className="mb-6">
            <h3 className="font-semibold mb-3">Select Measurement</h3>
            <div className="flex flex-wrap gap-2">
              {product.measurements.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedMeasurement(i)}
                  className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-colors ${
                    i === selectedMeasurement
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <span className="block font-bold">{item.label}</span>
                  <span className="text-muted-foreground">{item.price}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="text-2xl font-bold text-primary mb-6">{m.price}</div>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <Button size="lg" className="flex-1 bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground" asChild>
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-5 w-5 mr-2" /> Order on WhatsApp
              </a>
            </Button>
          </div>

          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Sourced from original manufacturer bags</span>
            <span className="flex items-center gap-2"><Truck className="h-4 w-4 text-primary" /> Nationwide delivery available</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
