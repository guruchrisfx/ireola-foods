export interface Product {
  id: string;
  name: string;
  category: "cereals" | "milk-beverages" | "foodstuff";
  description: string;
  image: string;
  measurements: { label: string; price: string }[];
}

export const products: Product[] = [
  {
    id: "golden-morn",
    name: "Golden Morn",
    category: "cereals",
    description: "Premium Golden Morn cereal measured from original manufacturer bags to ensure authentic quality and freshness.",
    image: "",
    measurements: [
      { label: "Paint Bucket", price: "₦3,500" },
      { label: "Half Bag", price: "₦8,500" },
      { label: "Full Bag", price: "₦16,000" },
    ],
  },
  {
    id: "cornflakes",
    name: "Cornflakes",
    category: "cereals",
    description: "Crispy cornflakes sourced directly from original company bags. Perfect for a quick and nutritious breakfast.",
    image: "",
    measurements: [
      { label: "Paint Bucket", price: "₦2,800" },
      { label: "Half Bag", price: "₦7,000" },
      { label: "Full Bag", price: "₦13,500" },
    ],
  },
  {
    id: "coco-pops",
    name: "Kellogg's Coco Pops",
    category: "cereals",
    description: "Delicious chocolate-flavoured rice cereal that turns your milk into a chocolatey treat.",
    image: "",
    measurements: [
      { label: "Paint Bucket", price: "₦4,000" },
      { label: "Half Bag", price: "₦10,000" },
      { label: "Full Bag", price: "₦19,000" },
    ],
  },
  {
    id: "frosties",
    name: "Frosties",
    category: "cereals",
    description: "Sugar-frosted corn flakes for a sweet and crunchy breakfast experience.",
    image: "",
    measurements: [
      { label: "Paint Bucket", price: "₦3,800" },
      { label: "Half Bag", price: "₦9,500" },
      { label: "Full Bag", price: "₦18,000" },
    ],
  },
  {
    id: "oats",
    name: "Oats",
    category: "cereals",
    description: "Wholesome oats perfect for a healthy, filling breakfast. Measured fresh from original bags.",
    image: "",
    measurements: [
      { label: "Paint Bucket", price: "₦2,500" },
      { label: "Half Bag", price: "₦6,500" },
      { label: "Full Bag", price: "₦12,000" },
    ],
  },
  {
    id: "fruits-fibres",
    name: "Fruits & Fibres",
    category: "cereals",
    description: "A nutritious blend of wheat flakes with real dried fruits for a balanced breakfast.",
    image: "",
    measurements: [
      { label: "Paint Bucket", price: "₦4,200" },
      { label: "Half Bag", price: "₦10,500" },
      { label: "Full Bag", price: "₦20,000" },
    ],
  },
  {
    id: "milo-crunchy",
    name: "Milo Crunchy",
    category: "cereals",
    description: "Crunchy chocolate cereal bites with the iconic Milo taste. A family favourite.",
    image: "",
    measurements: [
      { label: "Paint Bucket", price: "₦4,500" },
      { label: "Half Bag", price: "₦11,000" },
      { label: "Full Bag", price: "₦21,000" },
    ],
  },
  {
    id: "full-cream-milk",
    name: "Full Cream Milk",
    category: "milk-beverages",
    description: "Rich and creamy full cream milk powder. Perfect with cereals or as a standalone drink.",
    image: "",
    measurements: [
      { label: "Paint Bucket", price: "₦5,000" },
      { label: "Half Bag", price: "₦12,000" },
      { label: "Full Bag", price: "₦23,000" },
    ],
  },
  {
    id: "imported-milk",
    name: "Imported Milk",
    category: "milk-beverages",
    description: "Premium imported milk powder with superior taste and quality.",
    image: "",
    measurements: [
      { label: "Paint Bucket", price: "₦6,500" },
      { label: "Half Bag", price: "₦15,000" },
      { label: "Full Bag", price: "₦28,000" },
    ],
  },
  {
    id: "milo",
    name: "Milo",
    category: "milk-beverages",
    description: "Nigeria's favourite chocolate malt drink. Energy-packed and delicious.",
    image: "",
    measurements: [
      { label: "Paint Bucket", price: "₦4,800" },
      { label: "Half Bag", price: "₦11,500" },
      { label: "Full Bag", price: "₦22,000" },
    ],
  },
  {
    id: "custard",
    name: "Custard",
    category: "milk-beverages",
    description: "Smooth and creamy custard powder for a warm, comforting meal.",
    image: "",
    measurements: [
      { label: "Paint Bucket", price: "₦3,200" },
      { label: "Half Bag", price: "₦8,000" },
      { label: "Full Bag", price: "₦15,000" },
    ],
  },
  {
    id: "kuli-kuli",
    name: "Kuli-Kuli",
    category: "foodstuff",
    description: "Traditional Nigerian groundnut snack. Crunchy, tasty, and packed with protein.",
    image: "",
    measurements: [
      { label: "Paint Bucket", price: "₦2,000" },
      { label: "Half Bag", price: "₦5,000" },
      { label: "Full Bag", price: "₦9,500" },
    ],
  },
];

export const categories = [
  { id: "cereals", name: "Cereals", count: products.filter(p => p.category === "cereals").length },
  { id: "milk-beverages", name: "Milk & Beverages", count: products.filter(p => p.category === "milk-beverages").length },
  { id: "foodstuff", name: "Foodstuffs & Snacks", count: products.filter(p => p.category === "foodstuff").length },
];

export function getWhatsAppLink(productName?: string, measurement?: string) {
  const phone = "2347037495760";
  let message = "Hello Ireola Foods! ";
  if (productName && measurement) {
    message += `I'd like to order ${productName} (${measurement}). Please send me the details.`;
  } else if (productName) {
    message += `I'm interested in ${productName}. Please send me the details.`;
  } else {
    message += "I'd like to place an order. Please assist me.";
  }
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
