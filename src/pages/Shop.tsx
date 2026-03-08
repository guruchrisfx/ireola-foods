import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/lib/products";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";

  const filtered = activeCategory === "all"
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="container py-8 md:py-12">
      <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">Shop Products</h1>
      <p className="text-muted-foreground mb-8">Quality cereals, beverages & foodstuffs in measured quantities</p>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        <Button
          variant={activeCategory === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => setSearchParams({})}
        >
          All ({products.length})
        </Button>
        {categories.map(cat => (
          <Button
            key={cat.id}
            variant={activeCategory === cat.id ? "default" : "outline"}
            size="sm"
            onClick={() => setSearchParams({ category: cat.id })}
          >
            {cat.name} ({cat.count})
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-12">No products found in this category.</p>
      )}
    </div>
  );
};

export default Shop;
