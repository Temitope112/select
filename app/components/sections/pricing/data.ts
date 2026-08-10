export type PricingCategory =
  | "all"
  | "hair"
  | "beard"
  | "spa";

export interface PricingItem {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  category: Exclude<PricingCategory, "all">;
  popular?: boolean;
}

export const PRICING_ITEMS: PricingItem[] = [
  {
    id: "premium-haircut",
    name: "Premium Haircut",
    description:
      "Precision haircut finished to your preferred style.",
    price: 5000,
    duration: "45 min",
    category: "hair",
    popular: true,
  },
  {
    id: "haircut-beard",
    name: "Haircut + Beard",
    description:
      "Complete haircut and beard shaping for a clean finish.",
    price: 7000,
    duration: "60 min",
    category: "hair",
  },
  {
    id: "beard-grooming",
    name: "Beard Grooming",
    description:
      "Detailed beard trim, shaping and finishing.",
    price: 3000,
    duration: "30 min",
    category: "beard",
  },
  {
    id: "premium-pedicure",
    name: "Premium Pedicure",
    description:
      "Complete foot care and grooming treatment.",
    price: 5000,
    duration: "45 min",
    category: "spa",
  },
  {
    id: "teeth-whitening",
    name: "Teeth Whitening",
    description:
      "Cosmetic treatment designed to brighten your smile.",
    price: 15000,
    duration: "60 min",
    category: "spa",
    popular: true,
  },
  {
    id: "spa-grooming",
    name: "Spa Grooming",
    description:
      "Relaxing grooming treatment for a complete reset.",
    price: 10000,
    duration: "60 min",
    category: "spa",
  },
];

export const PRICING_CATEGORIES: {
  id: PricingCategory;
  label: string;
}[] = [
  {
    id: "all",
    label: "All Services",
  },
  {
    id: "hair",
    label: "Hair",
  },
  {
    id: "beard",
    label: "Beard",
  },
  {
    id: "spa",
    label: "Spa & Care",
  },
];