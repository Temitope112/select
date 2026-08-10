export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
}

export const SERVICES: Service[] = [
  {
    id: "haircut",
    title: "Premium Haircut",
    description:
      "Precision cuts and modern styles tailored to your look.",
    image:
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1200&auto=format&fit=crop",
    price: "From ₦5,000",
  },
  {
    id: "beard",
    title: "Beard Grooming",
    description:
      "Expert shaping, trimming and finishing for a clean, refined beard.",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1200&auto=format&fit=crop",
    price: "From ₦3,000",
  },
  {
    id: "pedicure",
    title: "Pedicure",
    description:
      "A premium grooming treatment designed to keep your feet fresh and polished.",
    image:
      "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1200&auto=format&fit=crop",
    price: "From ₦5,000",
  },
  {
    id: "whitening",
    title: "Teeth Whitening",
    description:
      "Professional cosmetic treatment for a brighter, more confident smile.",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1200&auto=format&fit=crop",
    price: "From ₦15,000",
  },
  {
    id: "hair-care",
    title: "Hair Care",
    description:
      "Premium hair treatments and grooming products selected for your needs.",
    image:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1200&auto=format&fit=crop",
    price: "From ₦5,000",
  },
  {
    id: "spa",
    title: "Spa & Grooming",
    description:
      "Relax, refresh and enjoy a complete premium grooming experience.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop",
    price: "From ₦10,000",
  },
];