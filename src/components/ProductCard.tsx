import { Link } from "react-router-dom";
import { ShoppingCart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/lib/products";
import { getWhatsAppLink } from "@/lib/products";
import categoryCereals from "@/assets/category-cereals.jpg";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group bg-card rounded-lg border overflow-hidden hover:shadow-lg transition-shadow">
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-square bg-muted overflow-hidden">
          <img
            src={categoryCereals}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      <div className="p-3 md:p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-display text-base md:text-lg font-bold mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
        </Link>
        <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{product.description}</p>
        <div className="flex flex-wrap gap-1 mb-3">
          {product.measurements.map(m => (
            <Badge key={m.label} variant="secondary" className="text-xs bg-cream text-foreground border-0">
              {m.label}: {m.price}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2">
          <Button size="sm" className="flex-1 text-xs" asChild>
            <Link to={`/product/${product.id}`}>
              <ShoppingCart className="h-3.5 w-3.5 mr-1" /> View
            </Link>
          </Button>
          <Button size="sm" className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground text-xs" asChild>
            <a href={getWhatsAppLink(product.name)} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-3.5 w-3.5 mr-1" /> Order
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
