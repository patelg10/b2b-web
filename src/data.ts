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
          { name: "iPhone 16e", isNew: true },
          { name: "iPhone 16 Pro Max", isNew: true },
          { name: "iPhone 16 Pro", isNew: true },
          { name: "iPhone 16 Plus", isNew: true },
          { name: "iPhone 16", isNew: true },
          { name: "iPhone 15 Pro Max" },
          { name: "iPhone 15 Pro" },
          { name: "iPhone 15" },
          { name: "iPhone 15 Plus" },
          { name: "iPhone 14 Pro Max" },
          { name: "iPhone 14 Pro" },
          { name: "iPhone 14" },
          { name: "iPhone 14 Plus" },
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
          { name: "iPad Pro 12.9\" 5th Gen (2021)", isNew: true },
          { name: "iPad Pro 12.9\" 4th Gen (2020)" },
          { name: "iPad Pro 12.9\" 3rd Gen (2018)" },
          { name: "iPad Pro 12.9\" 2nd Gen (2017)" },
          { name: "iPad Pro 12.9\" 1st Gen (2015)" },
          { name: "iPad Pro 11\" 3rd Gen (2021)" },
          { name: "iPad Air (5th Gen)" },
          { name: "iPad Air (4th Gen)" },
          { name: "iPad (10th Gen)" },
          { name: "iPad (9th Gen)" },
          { name: "iPad mini (6th Gen)" }
        ]
      },
      {
        name: "Watch",
        items: [
          { name: "Series Ultra (1st Gen) (49MM)", isNew: true },
          { name: "Series 8 (45MM)", isNew: true },
          { name: "Series 8 (41MM)", isNew: true },
          { name: "Series SE (2nd Gen) (44MM)" },
          { name: "Series SE (2nd Gen) (40MM)" },
          { name: "Series 7 (45MM)" },
          { name: "Series 7 (41MM)" },
          { name: "Series 6 (44MM)" }
        ]
      },
      {
        name: "Galaxy S Series",
        items: [
          { name: "Galaxy S24 Ultra 5G", isNew: true },
          { name: "Galaxy S24 Plus 5G", isNew: true },
          { name: "Galaxy S24 5G", isNew: true },
          { name: "Galaxy S23 Ultra 5G" },
          { name: "Galaxy S23 Plus 5G" },
          { name: "Galaxy S23 5G" }
        ]
      },
      {
        name: "Galaxy Note Series",
        items: [
          { name: "Galaxy Note 20 Ultra 5G" },
          { name: "Galaxy note 20 5G" },
          { name: "Galaxy Note 10 Plus 5G" },
          { name: "Galaxy Note 10 Lite" },
          { name: "Galaxy Note 10" }
        ]
      }
    ]
  },
  {
    brand: "Samsung",
    categories: [
      {
        name: "S Series",
        items: [
          { name: "Galaxy S26 Ultra", isNew: true },
          { name: "Galaxy S26 Plus", isNew: true },
          { name: "Galaxy S26", isNew: true },
          { name: "Galaxy S25 FE" },
          { name: "Galaxy S25 Edge" },
          { name: "Galaxy S24 Ultra" },
          { name: "Galaxy S23" }
        ]
      },
      {
        name: "Note Series",
        items: [
          { name: "Galaxy Note 20 Ultra" },
          { name: "Galaxy Note 20" },
          { name: "Galaxy Note 10 Plus" },
          { name: "Galaxy Note 10 Lite" },
          { name: "Galaxy Note 10" }
        ]
      },
      {
        name: "J Series",
        items: [
          { name: "J8 Plus (J805 / 2018)" },
          { name: "J8 (J810 / 2018)" },
          { name: "J7 Refine (J737 / 2018)" },
          { name: "J7 Pro (J730 / 2017)" },
          { name: "J7 Prime (G610 / 2016)" }
        ]
      },
      {
        name: "A Series",
        items: [
          { name: "A90 5G (A908 /2019)" },
          { name: "A9 Pro (A910 / 2016)" },
          { name: "A9 (A920 / 2018)" },
          { name: "A80 (A805 / 2019)" },
          { name: "A8 Plus (A730 / 2018)" }
        ]
      },
      {
        name: "XCover Series",
        items: [
          { name: "Galaxy XCover7 Pro" },
          { name: "Galaxy XCover 7" },
          { name: "Galaxy XCover 6 Pro" },
          { name: "Galaxy XCover 5" },
          { name: "Galaxy XCover 4s" }
        ]
      }
    ]
  },
  {
    brand: "Motorola",
    categories: [
      {
        name: "Moto G Series",
        items: [
          { name: "Moto G17 Power (XT2623 / 2026)", isNew: true },
          { name: "Moto G17 (XT2623 / 2026)", isNew: true },
          { name: "Moto G77 (XT2621 / 2026)", isNew: true },
          { name: "G Power (XT2617 / 2026)", isNew: true },
          { name: "G Play (XT2615 / 2026)", isNew: true },
          { name: "G 5G (XT2613 / 2026)", isNew: true }
        ]
      },
      {
        name: "Moto E Series",
        items: [
          { name: "E13 (XT2345 / 2023)" },
          { name: "E40 (XT2159 / 2021)" },
          { name: "E32S (XT2229 / 2022)" },
          { name: "E32 (XT2227 / 2022)" },
          { name: "E30 (XT2158 / 2021)" }
        ]
      },
      {
        name: "Moto Edge Series",
        items: [
          { name: "Edge (XT2519 / 2025)" },
          { name: "Edge 60 (XT2505 / 2025)" },
          { name: "Edge 60 Stylus (XT2517-4 / 2025)" },
          { name: "Edge 60 Pro (XT2507 / 2025)" },
          { name: "Edge 60 Fusion (XT2503 / 2025)" }
        ]
      }
    ]
  },
  {
    brand: "Google",
    categories: [
      {
        name: "Pixel",
        items: [
          { name: "Pixel 10a", isNew: true },
          { name: "Pixel 10 Pro Fold", isNew: true },
          { name: "Pixel 10 Pro XL", isNew: true },
          { name: "Pixel 10 Pro", isNew: true },
          { name: "Pixel 10", isNew: true },
          { name: "Pixel 9 Pro XL" },
          { name: "Pixel 9" }
        ]
      }
    ]
  },
  {
    brand: "Accessories",
    categories: [
      {
        name: "Charging",
        items: [
          { name: "Wall Chargers" },
          { name: "Cables" },
          { name: "Wireless Pads" }
        ]
      },
      {
        name: "Audio",
        items: [
          { name: "AirPods" },
          { name: "Earbuds" },
          { name: "Headphones" }
        ]
      }
    ]
  }
];
