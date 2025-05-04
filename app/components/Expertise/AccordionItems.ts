export type AccordionItem = {
  title: string;
  rotation: number;
  left: number;
  top: number;
  content: string;
};

export const accordionItems: AccordionItem[] = [
  {
    title: "Next.js",
    rotation: 10,
    left: 10,
    top: 30,
    content:
      "Led a high-performance B2B platform using Next.js with server-side rendering and real-time dashboards, boosting SEO by 45% and cutting page load times significantly.",
  },
  {
    title: "React",
    rotation: -6,
    left: 20,
    top: 60,
    content:
      "Built dynamic, scalable UIs with React, React Query, and custom hooks — reduced bundle size by 25% and improved engagement with tier-based subscriptions and Stripe integration.",
  },
  {
    title: "TypeScript",
    rotation: 8,
    left: 35,
    top: 35,
    content:
      "Used advanced TypeScript patterns like HOCs and Compound Components to create reliable, type-safe frontends, streamlining development across large-scale features.",
  },
  {
    title: "Designing",
    rotation: -8,
    left: 50,
    top: 55,
    content:
      "Crafted clean, responsive interfaces with Tailwind CSS, MUI, and Figma prototypes — UX-first thinking led to a 30% spike in engagement and smoother data filtering.",
  },
  {
    title: "Node.js",
    rotation: -8,
    left: 67,
    top: 67,
    content:
      "Built scalable backends with robust validation and error handling, using modular service patterns to ensure microservice reliability and clean API integration for an RV rental platform.",
  },
  {
    title: "MongoDB",
    rotation: -8,
    left: 76,
    top: 20,
    content:
      "Modeled scalable, high-performance schemas using Mongoose — achieved 50% faster queries and smooth multi-database integration for booking and transaction systems.",
  },
];
