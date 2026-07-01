import type { FaqItem } from "./articles";

export type ProductParameter = {
  label: string;
  value: string;
};

export type ProductComparisonRow = {
  feature: string;
  currentProduct: string;
  alternative: string;
  buyerNote: string;
};

export type ProductCategoryKey = "6pin" | "16pin" | "24pin";

export type ProductCategory = {
  key: ProductCategoryKey;
  label: string;
  description: string;
};

export type ProductApplicationScenario = {
  title: string;
  description: string;
};

export type Product = {
  name: string;
  slug: string;
  category: ProductCategoryKey;
  productLine: string;
  pinCount: string;
  mountingType: string;
  ratedCurrent: string;
  applications: string[];
  applicationScenarios: ProductApplicationScenario[];
  description: string;
  image: string;
  imageAlt: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  sampleLeadTime: string;
  moq: string;
  datasheetUrl: string;
  drawingUrl: string;
  certifications: string[];
  materials: string;
  plating: string;
  lifecycle: string;
  operatingTemperature: string;
  features: string[];
  selectionNotes: string[];
  relatedArticles: string[];
  relatedProducts: string[];
  parameters: ProductParameter[];
  comparisonTitle: string;
  comparisonAlternative: string;
  comparisonRows: ProductComparisonRow[];
  faqs: FaqItem[];
};

export const productCategories: ProductCategory[] = [
  {
    key: "6pin",
    label: "6Pin",
    description: "Cost-sensitive charging interface options for simple power products.",
  },
  {
    key: "16pin",
    label: "16Pin",
    description: "Mainstream Type-C sockets for charging accessories and compact electronics.",
  },
  {
    key: "24pin",
    label: "24Pin",
    description: "Full-pin Type-C connectors for higher-specification devices and data interfaces.",
  },
];

export const products: Product[] = [
  {
    name: "USB Type-C 6 Pin Female Charging Socket",
    slug: "usb-type-c-6-pin-female-charging-socket",
    category: "6pin",
    productLine: "Type-C Charging Socket",
    pinCount: "6 Pin",
    mountingType: "SMT",
    ratedCurrent: "3A",
    applications: ["Charging cables", "Entry-level accessories", "Small power devices"],
    applicationScenarios: [
      {
        title: "Low-cost charging accessories",
        description:
          "Suitable for products where the Type-C port is mainly used for power input and the BOM target is tight.",
      },
      {
        title: "Compact consumer electronics",
        description:
          "Works for small boards that need a simple Type-C receptacle with predictable SMT assembly.",
      },
      {
        title: "Private-label electronics projects",
        description:
          "Useful for overseas buyers sourcing stable connector supply for repeat accessory production.",
      },
    ],
    description:
      "This USB Type-C 6 pin female charging socket is built for cost-sensitive products that need a stable power input interface without full USB-C signal functions. It suits charging cables, compact accessories, small power devices, and entry-level consumer electronics where SMT assembly, predictable footprint confirmation, and repeatable high-volume supply are more important than complex data transmission capability.",
    image: "/products/precision-connector.svg",
    imageAlt: "USB Type-C 6 pin female charging socket for SMT power input",
    seoTitle: "USB Type-C 6 Pin Female Charging Socket Supplier",
    seoDescription:
      "Source USB Type-C 6 pin female charging sockets for accessories, small power devices, and cost-sensitive OEM electronics.",
    keywords: [
      "USB Type-C 6 pin female socket",
      "6 pin Type-C charging socket",
      "Type-C female socket supplier",
    ],
    sampleLeadTime: "3-7 days",
    moq: "Volume-based",
    datasheetUrl: "/contact",
    drawingUrl: "/contact",
    certifications: ["RoHS support", "REACH support"],
    materials: "Copper alloy terminal, high-temperature plastic housing, stainless steel shell",
    plating: "Tin or gold flash options based on project requirement",
    lifecycle: "Project-based lifecycle with repeat order support",
    operatingTemperature: "-25°C to +85°C",
    features: [
      "6 pin simplified Type-C interface for charging-focused products",
      "SMT structure suitable for compact PCB layouts",
      "Cost-sensitive option for high-volume accessory production",
      "Drawing and footprint review available before sample confirmation",
    ],
    selectionNotes: [
      "Choose this model when the product only needs a simple charging interface.",
      "Confirm whether the PCB layout and shell height match the enclosure before sample approval.",
      "Do not use a 6 pin socket for products that require complete USB-C signal support.",
    ],
    relatedArticles: [
      "products-use-type-c-6pin-female-connectors",
      "type-c-6pin-vs-16pin-vs-24pin",
    ],
    relatedProducts: ["usb-type-c-16-pin-female-socket", "usb-type-c-24-pin-mid-mount-connector"],
    parameters: [
      { label: "Connector Type", value: "USB Type-C female charging socket" },
      { label: "Pin Count", value: "6 Pin" },
      { label: "Mounting Type", value: "SMT" },
      { label: "Rated Current", value: "3A" },
      { label: "Typical Use", value: "Charging-only products and simple power interfaces" },
      { label: "Support", value: "Sample matching, drawing review, PCB footprint confirmation" },
    ],
    comparisonTitle: "6 Pin Type-C Socket vs 16 Pin Type-C Socket",
    comparisonAlternative: "16 Pin Type-C Socket",
    comparisonRows: [
      {
        feature: "Best Fit",
        currentProduct: "Simple charging products and entry-level accessories",
        alternative: "Mainstream charging accessories and compact electronics",
        buyerNote: "Use 6 pin only when the product does not require broader Type-C function support.",
      },
      {
        feature: "PCB Complexity",
        currentProduct: "Lowest",
        alternative: "Moderate",
        buyerNote: "Confirm footprint and pin function before PCB release.",
      },
      {
        feature: "Sourcing Priority",
        currentProduct: "Cost and availability",
        alternative: "Balanced function and cost",
        buyerNote: "Final selection should be checked against current rating and end-market requirements.",
      },
    ],
    faqs: [
      {
        question: "When should buyers choose a 6 pin Type-C socket?",
        answer:
          "A 6 pin Type-C socket is mainly used for simple charging products where full USB-C signal support is not required.",
      },
      {
        question: "Can Yonghua help confirm whether 6 pin is enough?",
        answer:
          "Yes. Buyers can share the application, current requirement, PCB footprint, and target product function for model matching.",
      },
    ],
  },
  {
    name: "USB Type-C 16 Pin Female Socket",
    slug: "usb-type-c-16-pin-female-socket",
    category: "16pin",
    productLine: "Type-C Female Socket",
    pinCount: "16 Pin",
    mountingType: "SMT",
    ratedCurrent: "3A",
    applications: ["Consumer electronics", "Charging accessories", "Portable devices"],
    applicationScenarios: [
      {
        title: "Charging accessories",
        description:
          "A practical option for chargers, adapters, and simple power products that need stable Type-C mating.",
      },
      {
        title: "Portable devices",
        description:
          "Fits compact PCB layouts where the product needs a reliable Type-C socket without every USB-C function.",
      },
      {
        title: "High-volume OEM assembly",
        description:
          "Supports repeat purchasing when buyers need drawing confirmation, sample approval, and consistent packaging.",
      },
    ],
    description:
      "This USB Type-C 16 pin female socket is designed for consumer electronics, charging accessories, and portable devices that need a reliable Type-C receptacle with balanced cost and function. It supports SMT assembly, 3A current options, drawing review, and PCB footprint confirmation for OEM buyers preparing samples and repeat production orders.",
    image: "/products/type-c-16-pin.svg",
    imageAlt: "USB Type-C 16 pin female socket for consumer electronics",
    seoTitle: "USB Type-C 16 Pin Female Socket Manufacturer",
    seoDescription:
      "Source USB Type-C 16 pin female sockets from Guangdong Yonghua Technology for consumer electronics and charging accessories.",
    keywords: [
      "USB Type-C 16 pin female socket",
      "16 pin Type-C female socket manufacturer",
      "Type-C receptacle supplier",
    ],
    sampleLeadTime: "3-7 days",
    moq: "Volume-based",
    datasheetUrl: "/contact",
    drawingUrl: "/contact",
    certifications: ["RoHS support", "REACH support", "CE support"],
    materials: "Copper alloy contacts, LCP housing, stainless steel shell",
    plating: "Tin plating or selective gold plating options",
    lifecycle: "Stable model for repeat OEM sourcing",
    operatingTemperature: "-25°C to +85°C",
    features: [
      "16 pin Type-C female socket for charging and simplified interface designs",
      "SMT mounting for automated PCB assembly",
      "Suitable for high-volume consumer electronics production",
      "Drawing, sample, and PCB footprint support available",
    ],
    selectionNotes: [
      "Choose 16 pin when the device does not require every USB-C function.",
      "Confirm current rating, shell retention, and PCB footprint before tooling release.",
      "For more complete signal support, compare with a 24 pin USB-C connector.",
    ],
    relatedArticles: [
      "products-use-type-c-16pin-female-connectors",
      "type-c-6pin-vs-16pin-vs-24pin",
      "type-c-connector-manufacturer-selection-guide",
    ],
    relatedProducts: [
      "usb-type-c-6-pin-female-charging-socket",
      "usb-type-c-24-pin-mid-mount-connector",
    ],
    parameters: [
      { label: "Connector Type", value: "USB Type-C female receptacle" },
      { label: "Pin Count", value: "16 Pin" },
      { label: "Mounting Type", value: "SMT" },
      { label: "Rated Current", value: "3A" },
      { label: "Typical Use", value: "Charging-only or simplified Type-C products" },
      { label: "Support", value: "Drawing review, samples, PCB footprint confirmation" },
    ],
    comparisonTitle: "16 Pin Type-C Female Socket vs 24 Pin Type-C Connector",
    comparisonAlternative: "24 Pin Type-C Connector",
    comparisonRows: [
      {
        feature: "Best Fit",
        currentProduct: "Charging accessories and compact consumer products",
        alternative: "Fuller function devices requiring more signal support",
        buyerNote: "Use 16 pin when the product does not need all USB-C functions.",
      },
      {
        feature: "PCB Complexity",
        currentProduct: "Lower",
        alternative: "Higher",
        buyerNote: "A simpler PCB can reduce sourcing and assembly complexity.",
      },
      {
        feature: "Cost Direction",
        currentProduct: "More cost-sensitive",
        alternative: "Higher specification",
        buyerNote: "Final price depends on volume, plating, packaging, and structure.",
      },
    ],
    faqs: [
      {
        question: "What products use a 16 pin Type-C female socket?",
        answer:
          "It is commonly used in charging accessories, portable devices, and simplified consumer electronics where full USB-C function is not required.",
      },
      {
        question: "Can Yonghua provide drawings for this socket?",
        answer:
          "Yes. Buyers can request drawings and sample support before PCB layout confirmation.",
      },
    ],
  },
  {
    name: "USB Type-C 24 Pin Mid-Mount Connector",
    slug: "usb-type-c-24-pin-mid-mount-connector",
    category: "24pin",
    productLine: "Type-C Connector",
    pinCount: "24 Pin",
    mountingType: "Mid-Mount SMT",
    ratedCurrent: "5A",
    applications: ["Laptops", "Tablets", "Industrial handhelds"],
    applicationScenarios: [
      {
        title: "Thin device designs",
        description:
          "Mid-mount structure helps engineering teams control connector height in tablets and slim electronics.",
      },
      {
        title: "Higher-specification interfaces",
        description:
          "Used when the product design needs more complete Type-C pin support and stronger electrical review.",
      },
      {
        title: "Industrial handheld devices",
        description:
          "Supports rugged portable products that need reliable insertion life and stable soldering performance.",
      },
    ],
    description:
      "This USB Type-C 24 pin mid-mount connector is intended for thin devices, tablets, industrial handhelds, and higher-specification electronics that need more complete USB-C interface support. The mid-mount SMT structure helps control connector height while maintaining reliable mechanical strength, 5A current options, and engineering review before PCB release.",
    image: "/products/type-c-24-pin.svg",
    imageAlt: "USB Type-C 24 pin mid-mount connector for thin electronics",
    seoTitle: "USB Type-C 24 Pin Mid-Mount Connector Supplier",
    seoDescription:
      "Find 24 pin mid-mount USB Type-C connectors for laptops, tablets, and industrial devices from a China connector factory.",
    keywords: [
      "USB Type-C 24 pin connector",
      "24 pin USB-C connector supplier",
      "mid-mount Type-C connector",
    ],
    sampleLeadTime: "3-7 days",
    moq: "Volume-based",
    datasheetUrl: "/contact",
    drawingUrl: "/contact",
    certifications: ["RoHS support", "REACH support", "CE support"],
    materials: "Copper alloy terminal, LCP housing, stainless steel shell",
    plating: "Selective gold plating or tin plating according to project requirement",
    lifecycle: "Stable supply for qualified OEM programs",
    operatingTemperature: "-25°C to +85°C",
    features: [
      "24 pin USB-C interface for higher-specification product designs",
      "Mid-mount SMT structure for thinner device layouts",
      "5A current options for demanding charging applications",
      "Engineering review recommended before PCB release",
    ],
    selectionNotes: [
      "Choose 24 pin when broader USB-C signal support is required.",
      "Check connector height, shell position, and PCB cutout early in the mechanical design.",
      "Confirm rated current and thermal requirement with the complete product system.",
    ],
    relatedArticles: [
      "when-choose-24pin-usb-c-connector",
      "what-is-mid-mount-type-c-connector",
    ],
    relatedProducts: ["usb-type-c-16-pin-female-socket", "waterproof-type-c-female-connector"],
    parameters: [
      { label: "Connector Type", value: "USB Type-C connector" },
      { label: "Pin Count", value: "24 Pin" },
      { label: "Mounting Type", value: "Mid-Mount SMT" },
      { label: "Rated Current", value: "5A" },
      { label: "Typical Use", value: "Thin devices and higher specification electronics" },
      { label: "Support", value: "Model matching, sample confirmation, drawing support" },
    ],
    comparisonTitle: "24 Pin Mid-Mount Type-C Connector vs 16 Pin Type-C Socket",
    comparisonAlternative: "16 Pin Type-C Socket",
    comparisonRows: [
      {
        feature: "Best Fit",
        currentProduct: "Thin devices and more complete Type-C interface designs",
        alternative: "Charging-only or simplified products",
        buyerNote: "Choose 24 pin when function and layout requirements are higher.",
      },
      {
        feature: "Current Direction",
        currentProduct: "Up to 5A options",
        alternative: "Commonly 3A options",
        buyerNote: "Confirm actual current requirement with the product design.",
      },
      {
        feature: "Engineering Review",
        currentProduct: "More important due to layout complexity",
        alternative: "Still required, but usually simpler",
        buyerNote: "Request drawings before PCB release.",
      },
    ],
    faqs: [
      {
        question: "Why choose a mid-mount Type-C connector?",
        answer:
          "Mid-mount connectors help thin products manage connector height, mechanical fit, and board layout constraints.",
      },
      {
        question: "Is 24 pin required for every USB-C product?",
        answer:
          "No. It depends on the required function, PCB design, and current rating. Some charging-only products can use 16 pin models.",
      },
    ],
  },
  {
    name: "Waterproof Type-C 24 Pin Female Connector",
    slug: "waterproof-type-c-female-connector",
    category: "24pin",
    productLine: "Waterproof Type-C",
    pinCount: "24 Pin",
    mountingType: "SMT with Shell",
    ratedCurrent: "5A",
    applications: ["Outdoor electronics", "Smart wearables", "Industrial controls"],
    applicationScenarios: [
      {
        title: "Outdoor electronics",
        description:
          "Designed for products where moisture, dust, or exposed charging ports can affect reliability.",
      },
      {
        title: "Smart wearables",
        description:
          "Useful when product housing, shell structure, and connector sealing must be reviewed together.",
      },
      {
        title: "Industrial controls",
        description:
          "Supports sealed control modules and devices used in harsher operating environments.",
      },
    ],
    description:
      "This waterproof Type-C 24 pin female connector is designed for products that need stronger sealing, reinforced shell review, stable SMT soldering, and reliable mating in outdoor or harsh-use environments. It is suitable for smart wearables, industrial controls, sealed modules, and electronics where the connector, housing, and waterproof structure must be evaluated together.",
    image: "/products/waterproof-type-c.svg",
    imageAlt: "Waterproof Type-C 24 pin female connector with reinforced shell",
    seoTitle: "Waterproof Type-C Female Connector Factory",
    seoDescription:
      "Waterproof Type-C female connectors for outdoor electronics, wearable products, and industrial control applications.",
    keywords: [
      "waterproof Type-C connector",
      "waterproof USB-C female connector",
      "24 pin waterproof Type-C socket",
    ],
    sampleLeadTime: "5-10 days",
    moq: "Project-based",
    datasheetUrl: "/contact",
    drawingUrl: "/contact",
    certifications: ["RoHS support", "REACH support", "CE support"],
    materials: "Copper alloy contacts, LCP housing, reinforced stainless steel shell",
    plating: "Selective gold plating options for contact reliability",
    lifecycle: "Project-based lifecycle with application review",
    operatingTemperature: "-25°C to +85°C",
    features: [
      "Waterproof structure for products exposed to moisture or dust",
      "24 pin USB-C interface with reinforced shell support",
      "Suitable for wearables, outdoor electronics, and industrial control products",
      "Housing, sealing, and connector drawing review recommended",
    ],
    selectionNotes: [
      "Choose waterproof models only when the product environment justifies the extra structure.",
      "Review connector, shell, gasket, housing, and assembly method together.",
      "Confirm waterproof requirement, insertion life, and current rating before sample approval.",
    ],
    relatedArticles: [
      "what-is-waterproof-type-c-female-connector",
      "type-c-connector-for-industrial-control-boards",
    ],
    relatedProducts: ["usb-type-c-24-pin-mid-mount-connector", "usb-type-c-16-pin-female-socket"],
    parameters: [
      { label: "Connector Type", value: "Waterproof USB Type-C female connector" },
      { label: "Pin Count", value: "24 Pin" },
      { label: "Mounting Type", value: "SMT with reinforced shell" },
      { label: "Rated Current", value: "5A" },
      { label: "Typical Use", value: "Outdoor, wearable, industrial, and sealed devices" },
      { label: "Support", value: "Application review and sample matching" },
    ],
    comparisonTitle: "Waterproof Type-C Connector vs Standard Type-C Connector",
    comparisonAlternative: "Standard Type-C Connector",
    comparisonRows: [
      {
        feature: "Best Fit",
        currentProduct: "Products exposed to moisture, dust, or harsher use",
        alternative: "Indoor and standard consumer electronics",
        buyerNote: "Use waterproof options only when the application justifies it.",
      },
      {
        feature: "Mechanical Design",
        currentProduct: "Requires shell and sealing review",
        alternative: "Simpler mechanical integration",
        buyerNote: "Confirm housing structure together with connector drawing.",
      },
      {
        feature: "Cost Direction",
        currentProduct: "Higher due to structure",
        alternative: "Lower",
        buyerNote: "Balance sealing requirement with product price target.",
      },
    ],
    faqs: [
      {
        question: "When should buyers choose a waterproof Type-C connector?",
        answer:
          "Choose it for outdoor electronics, wearables, industrial controls, or products where liquid and dust exposure may affect reliability.",
      },
      {
        question: "Does waterproof design affect product housing?",
        answer:
          "Yes. The connector, shell, sealing method, and product housing should be reviewed together.",
      },
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductCategory(category: ProductCategoryKey) {
  return productCategories.find((item) => item.key === category);
}

export function getProductCategories() {
  return productCategories.map((category) => ({
    ...category,
    count: products.filter((product) => product.category === category.key).length,
  }));
}

export function getProductsByCategory(category: ProductCategoryKey) {
  return products.filter((product) => product.category === category);
}
