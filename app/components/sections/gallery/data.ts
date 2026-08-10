export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  className?: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: "Signature Cut",
    category: "Haircut",
    image:
      "https://images.unsplash.com/photo-1622288432450-277d0fef5ed6?q=80&w=1400&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "Sharp Details",
    category: "Beard Grooming",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "The Finish",
    category: "Grooming",
    image:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Classic Style",
    category: "Haircut",
    image:
      "https://images.unsplash.com/photo-1512690459411-b9245aed614b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Relax & Reset",
    category: "Spa",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1400&auto=format&fit=crop",
    className: "md:col-span-2",
  },
];