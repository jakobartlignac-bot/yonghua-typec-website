export type Solution = {
  industry: string;
  slug: string;
  description: string;
  connectorNeeds: string[];
  recommendedProducts: string[];
};

export const solutions: Solution[] = [
  {
    industry: "Industrial Electronics",
    slug: "industrial-electronics",
    description:
      "Connector solutions for industrial handheld devices, control modules, inspection tools, and field equipment.",
    connectorNeeds: ["Stable contact", "Mechanical strength", "Long-term supply", "Drawing support"],
    recommendedProducts: ["Waterproof Type-C Female Connector", "USB Type-C 24 Pin Mid-Mount Connector"],
  },
  {
    industry: "Automotive Electronics",
    slug: "automotive-electronics",
    description:
      "Precision connector support for in-vehicle accessories, modules, charging interfaces, and compact electronic assemblies.",
    connectorNeeds: ["Consistent quality", "Compact PCB layout", "Application review", "Reliable assembly"],
    recommendedProducts: ["Precision Board-to-Board Connector", "Waterproof Type-C Female Connector"],
  },
  {
    industry: "Consumer Electronics",
    slug: "consumer-electronics",
    description:
      "Type-C connector options for charging accessories, wearables, tablets, portable power products, and smart devices.",
    connectorNeeds: ["Cost control", "Sample speed", "Stable soldering", "3A / 5A options"],
    recommendedProducts: ["USB Type-C 16 Pin Female Socket", "USB Type-C 24 Pin Mid-Mount Connector"],
  },
];
