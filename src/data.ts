import { Product } from "./components/ProductCard";

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "iPhone 15 Pro",
    unit: "256GB Platinum Gold",
    price: "£899.00",
    tag: "Certified",
    image: "https://images.unsplash.com/photo-1696426543122-1d573c50978d?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "2",
    name: "Samsung Galaxy S24 Ultra",
    unit: "Phantom Cream 512GB",
    price: "£949.00",
    tag: "Open Box",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "3",
    name: "Google Pixel 8 Pro",
    unit: "Obsidian (Renewed)",
    price: "£699.00",
    tag: "Best Value",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "4",
    name: "iPhone 14 Plus",
    unit: "128GB Midnight",
    price: "£599.00",
    tag: "Popular",
    image: "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "5",
    name: "OnePlus 12 Flowy Emerald",
    unit: "512GB Unlocked",
    price: "£749.00",
    tag: "New Arrival",
    image: "https://images.unsplash.com/photo-1711413813876-b633ec27b14d?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "6",
    name: "Sony Xperia 1 V",
    unit: "Black Platinum 256GB",
    price: "£849.00",
    tag: "Limited",
    image: "https://images.unsplash.com/photo-1592890288564-76628a30a657?q=80&w=600&auto=format&fit=crop"
  }
];

export interface MegaMenuCategory {
  name: string;
  items: { name: string; isNew?: boolean }[];
}

export interface MegaMenuBrand {
  brand: string;
  categories: MegaMenuCategory[];
}

export const MEGA_MENU_DATA: MegaMenuBrand[] = [
  {
    brand: "Apple",
    categories: [
      {
        name: "iPhone",
        items: [
          { name: "iPhone 15 Pro", isNew: true },
          { name: "iPhone 15", isNew: true },
          { name: "iPhone 14 Pro Max" },
          { name: "iPhone 14" },
          { name: "iPhone 13 Pro Max" },
          { name: "iPhone 13 Pro" },
          { name: "iPhone 13" },
          { name: "iPhone 13 Mini" },
          { name: "iPhone 12 Pro Max" },
          { name: "iPhone 12 Pro" },
          { name: "iPhone 12" },
          { name: "iPhone 12 Mini" },
          { name: "iPhone 11 Pro Max" },
          { name: "iPhone 11 Pro" },
          { name: "iPhone 11" },
          { name: "iPhone SE (2022)" },
          { name: "iPhone SE (2020)" },
          { name: "iPhone XR" },
          { name: "iPhone X" }
        ]
      },
      {
        name: "iPad",
        items: [
          { name: "iPad Pro 12.9", isNew: true },
          { name: "iPad Pro 11", isNew: true },
          { name: "iPad Air (5th Gen)" },
          { name: "iPad (10th Gen)" },
          { name: "iPad mini (6th Gen)" }
        ]
      },
      {
        name: "Watch",
        items: [
          { name: "Apple Watch Ultra 2", isNew: true },
          { name: "Apple Watch Series 9", isNew: true },
          { name: "Apple Watch SE" }
        ]
      },
      {
        name: "Mac",
        items: [
          { name: "MacBook Pro 14\"", isNew: true },
          { name: "MacBook Pro 16\"", isNew: true },
          { name: "MacBook Air 13\"", isNew: true },
          { name: "MacBook Air 15\"", isNew: true },
          { name: "iMac 24\"", isNew: true }
        ]
      }
    ]
  },
  {
    brand: "Samsung",
    categories: [
      {
        name: "Galaxy S Series",
        items: [
          { name: "Galaxy S24 Ultra", isNew: true },
          { name: "Galaxy S24+", isNew: true },
          { name: "Galaxy S24", isNew: true },
          { name: "Galaxy S23 Ultra" },
          { name: "Galaxy S23+" },
          { name: "Galaxy S23" },
          { name: "Galaxy S22 Ultra" }
        ]
      },
      {
        name: "Galaxy Z Series",
        items: [
          { name: "Galaxy Z Fold5", isNew: true },
          { name: "Galaxy Z Flip5", isNew: true },
          { name: "Galaxy Z Fold4" },
          { name: "Galaxy Z Flip4" }
        ]
      },
      {
        name: "Galaxy A Series",
        items: [
          { name: "Galaxy A54 5G" },
          { name: "Galaxy A34 5G" },
          { name: "Galaxy A14 5G" }
        ]
      }
    ]
  },
  {
    brand: "Google",
    categories: [
      {
        name: "Pixel Phones",
        items: [
          { name: "Pixel 8 Pro", isNew: true },
          { name: "Pixel 8", isNew: true },
          { name: "Pixel 7 Pro" },
          { name: "Pixel 7" },
          { name: "Pixel 7a" },
          { name: "Pixel 6a" }
        ]
      },
      {
        name: "Pixel Fold",
        items: [
          { name: "Pixel Fold", isNew: true }
        ]
      }
    ]
  },
  {
    brand: "Motorola",
    categories: [
      {
        name: "Razr Series",
        items: [
          { name: "Razr 40 Ultra", isNew: true },
          { name: "Razr 40", isNew: true }
        ]
      },
      {
        name: "Edge Series",
        items: [
          { name: "Edge 40 Pro" },
          { name: "Edge 40" },
          { name: "Edge 30 Ultra" }
        ]
      }
    ]
  }
];
