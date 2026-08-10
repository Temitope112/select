export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  initials: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "David A.",
    role: "Regular Client",
    quote:
      "The attention to detail is what keeps me coming back. Every visit feels like more than just getting a haircut.",
    initials: "DA",
  },
  {
    id: 2,
    name: "Michael O.",
    role: "Client",
    quote:
      "Clean environment, great service and the finish is always on point. Select Place has definitely raised the standard.",
    initials: "MO",
  },
  {
    id: 3,
    name: "Daniel K.",
    role: "Regular Client",
    quote:
      "I came in for a haircut and ended up discovering a complete grooming experience. Everything feels well thought out.",
    initials: "DK",
  },
  {
    id: 4,
    name: "Samuel T.",
    role: "Client",
    quote:
      "The service is professional and the atmosphere is comfortable. You can tell there is real attention to the customer experience.",
    initials: "ST",
  },
];