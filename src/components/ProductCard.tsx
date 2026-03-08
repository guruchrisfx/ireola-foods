import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import type { Product } from "@/lib/products";
import { getWhatsAppLink } from "@/lib/products";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group bg-card rounded-lg border overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-square bg-muted overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      <div className="p-2.5 md:p-4 flex flex-col flex-1">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-display text-sm md:text-lg font-bold mb-0.5 md:mb-1 group-hover:text-primary transition-colors line-clamp-1">{product.name}</h3>
        </Link>
        <p className="text-[10px] md:text-xs text-muted-foreground mb-1.5 md:mb-2 line-clamp-2">{product.description}</p>
        <div className="flex flex-wrap gap-1 mb-2 md:mb-3">
          {product.measurements.map(m => (
            <Badge key={m.label} variant="secondary" className="text-[9px] md:text-xs bg-cream text-foreground border-0 px-1.5 py-0.5 md:px-2 md:py-0.5">
              {m.label}: {m.price}
            </Badge>
          ))}
        </div>
        <div className="flex gap-1.5 md:gap-2 mt-auto">
          <Button size="sm" className="flex-1 text-[10px] md:text-xs h-8 md:h-9 px-2 md:px-3" asChild>
            <Link to={`/product/${product.id}`}>
              <ShoppingCart className="h-3 w-3 md:h-3.5 md:w-3.5 mr-1" /> View
            </Link>
          </Button>
          <Button size="sm" className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground text-[10px] md:text-xs h-8 md:h-9 px-2 md:px-3" asChild>
            <a href={getWhatsAppLink({ product })} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="h-3 w-3 md:h-3.5 md:w-3.5 mr-1" /> Order
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
