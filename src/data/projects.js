// src/data/projects.js
export const projects = [
  {
    slug: "ecommerce",
    title: "E-Commerce Platform",
    shortDesc: "Built filters, pagination, and secure APIs",
    tech: ["React", "Node.js", "MongoDB"],
    overview:
      "Full-stack e-commerce platform with auth, product catalog, filters, and pagination.",
    challenges: [
      "Implemented secure auth & authorization",
      "Optimized queries for fast filtering",
      "Built reusable React components for cart & products",
    ],
    screenshots: ["/images/ecommerce1.png", "/images/ecommerce2.png"],
    live: "https://example.com",
    code: "https://github.com/kushagra/ecommerce",
  },
  {
    slug: "blog-platform",
    title: "Blog Platform",
    shortDesc: "Full-stack blog with auth and comments",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    overview:
      "Users can create posts, comment, and like posts. Auth and role-based access included.",
    challenges: [
      "Implemented role-based access control",
      "Optimized API responses for large datasets",
      "Reusable UI components for posts & comments",
    ],
    screenshots: ["/images/blog1.png", "/images/blog2.png"],
    live: "https://example.com/blog",
    code: "https://github.com/kushagra/blog-platform",
  },
  // more projects...
];
