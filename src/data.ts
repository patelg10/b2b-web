import { Product } from "./components/ProductCard";

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "OLED Assembly For iPhone 16e (Genuine OEM)",
    unit: "Genuine OEM Replacement",
    price: "£183.12",
    withoutCorePrice: "£193.45",
    tag: "Genuine",
    image: "https://images.unsplash.com/photo-1592434134753-a70baf7979d5?q=80&w=600",
    colorLabel: "ALL COLORS",
    badgeType: "genuine",
    isFeatured: true,
    inStock: true
  },
  {
    id: "2",
    name: "Replacement Battery For iPhone 16e (Genuine OEM)",
    unit: "Genuine OEM Replacement",
    price: "£38.81",
    withoutCorePrice: "£38.81",
    tag: "Battery",
    image: "https://images.unsplash.com/photo-1610411300760-4966779d7249?q=80&w=600",
    badgeType: "genuine",
    inStock: true
  },
  {
    id: "3",
    name: "Charging Port Flex Cable With Board For iPhone 16e (Genuine OEM) (White)",
    unit: "Genuine OEM Replacement",
    price: "£55.03",
    withoutCorePrice: "£55.03",
    tag: "Flex Cable",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=600",
    colorLabel: "WHITE",
    badgeType: "genuine",
    inStock: true
  },
  {
    id: "4",
    name: "Earpiece Speaker For iPhone 16e (Genuine OEM)",
    unit: "Genuine OEM Replacement",
    price: "£112.42",
    withoutCorePrice: "£112.42",
    tag: "Speaker",
    image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=600",
    badgeType: "genuine",
    inStock: false
  },
  {
    id: "5",
    name: "OLED Assembly Without Frame Compatible For Samsung Galaxy S26 Ultra 5G (Refurbished)",
    unit: "Refurbished Compatible",
    price: "£149.72",
    withoutCorePrice: "£160.00",
    tag: "Refurbished",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=600",
    colorLabel: "ALL COLORS",
    badgeType: "refurb",
    isFeatured: true,
    inStock: true
  },
  {
    id: "6",
    name: "Taptic Engine For iPhone 16e (Genuine OEM)",
    unit: "Genuine OEM Replacement",
    price: "£112.42",
    withoutCorePrice: "£112.42",
    tag: "Vibrator",
    image: "https://images.unsplash.com/photo-1621330396173-e41b1cafd17f?q=80&w=600",
    badgeType: "genuine",
    inStock: false
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
