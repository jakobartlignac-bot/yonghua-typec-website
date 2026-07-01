export type FaqItem = {
  question: string;
  answer: string;
};

export type ArticleSection = {
  heading: string;
  body: string;
};

export type Article = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  sections: ArticleSection[];
  category: "Industry Knowledge" | "Selection Guide" | "Comparison" | "Applications";
  seoTitle: string;
  seoDescription: string;
  targetKeywords: string[];
  faqs: FaqItem[];
};

export const articles: Article[] = [
  {
    title: "How to Choose a USB Type-C Female Socket for Consumer Electronics",
    slug: "choose-usb-type-c-female-socket-consumer-electronics",
    excerpt:
      "A practical selection guide for buyers comparing pin count, mounting type, rated current, and assembly requirements.",
    content:
      "Choosing the right USB Type-C female socket starts with the product structure, charging requirement, PCB layout, and expected production volume.",
    sections: [
      {
        heading: "Start with pin count and function",
        body: "For charging-only accessories, 16 pin Type-C female sockets are often enough. For devices that need full data capability or more complex signal routing, a 24 pin Type-C connector is usually the better starting point.",
      },
      {
        heading: "Confirm mounting type early",
        body: "SMT, mid-mount, and shell design affect PCB layout, device thickness, soldering yield, and connector strength. Buyers should confirm the recommended footprint before tooling or PCB release.",
      },
      {
        heading: "Check rated current and application risk",
        body: "A charging product may need 3A or 5A current support. Wearables, handhelds, and industrial controls also need attention to mating cycles, shell retention, and waterproof requirements.",
      },
    ],
    category: "Selection Guide",
    seoTitle: "How to Choose a USB Type-C Female Socket for Consumer Electronics",
    seoDescription:
      "Learn how overseas buyers compare Type-C female sockets by pin count, mounting type, rated current, PCB layout, and application risk.",
    targetKeywords: ["USB Type-C female socket", "Type-C socket selection", "Type-C connector supplier"],
    faqs: [
      {
        question: "Is a 16 pin Type-C female socket enough for charging products?",
        answer:
          "For many charging-only products, a 16 pin Type-C female socket can be enough, but the final choice depends on current rating, PCB layout, and product certification requirements.",
      },
      {
        question: "What information should I send before requesting a quote?",
        answer:
          "Send drawings, PCB footprint, pin count, mounting type, rated current, application, expected quantity, and target sample schedule.",
      },
    ],
  },
  {
    title: "16 Pin vs 24 Pin USB Type-C Connectors: What Buyers Should Compare",
    slug: "16-pin-vs-24-pin-usb-type-c-connectors",
    excerpt:
      "A comparison article for procurement and engineering teams choosing between 16 pin and 24 pin Type-C connectors.",
    content:
      "The main difference between 16 pin and 24 pin USB Type-C connectors is not only the number of contacts, but also the product function and PCB design requirement.",
    sections: [
      {
        heading: "16 pin Type-C connector use cases",
        body: "16 pin Type-C connectors are commonly used in charging accessories, simple power products, and cost-sensitive consumer electronics that do not require every USB-C function.",
      },
      {
        heading: "24 pin Type-C connector use cases",
        body: "24 pin Type-C connectors are used when the product needs broader signal support, a more complete Type-C interface, or higher design flexibility.",
      },
      {
        heading: "How buyers should decide",
        body: "Buyers should compare electrical function, PCB complexity, rated current, assembly yield, and the device's expected user environment before choosing a connector model.",
      },
    ],
    category: "Comparison",
    seoTitle: "16 Pin vs 24 Pin USB Type-C Connectors: Buyer Comparison Guide",
    seoDescription:
      "Compare 16 pin and 24 pin USB Type-C connectors by function, cost, PCB layout, current rating, and application fit.",
    targetKeywords: ["16 pin Type-C connector", "24 pin USB-C connector", "Type-C connector comparison"],
    faqs: [
      {
        question: "Is a 24 pin Type-C connector always better than a 16 pin connector?",
        answer:
          "No. A 24 pin connector offers broader function, but a 16 pin connector may be more practical for charging-only and cost-sensitive designs.",
      },
      {
        question: "Can the same PCB use both 16 pin and 24 pin Type-C connectors?",
        answer:
          "Usually not without layout changes. The footprint, pin arrangement, and shell structure must be confirmed with the supplier's drawing.",
      },
    ],
  },
  {
    title: "Type-C Connector Applications in Cross-Border Electronics Manufacturing",
    slug: "type-c-connector-applications-cross-border-electronics",
    excerpt:
      "Application scenarios for Type-C connectors in charging accessories, smart devices, industrial controls, and portable electronics.",
    content:
      "Type-C connectors are widely used across cross-border electronics because buyers expect modern charging, compact mechanical design, and stable user experience.",
    sections: [
      {
        heading: "Consumer electronics",
        body: "Tablets, handheld devices, smart accessories, and portable products use Type-C connectors to support modern charging and data expectations.",
      },
      {
        heading: "Industrial devices",
        body: "Industrial handheld terminals and control modules require connectors with stable contact, reliable shell strength, and repeatable assembly quality.",
      },
      {
        heading: "Cross-border seller products",
        body: "For cross-border sellers, connector quality affects product reviews, return rates, and compliance testing before marketplace launch.",
      },
    ],
    category: "Applications",
    seoTitle: "Type-C Connector Applications for Electronics Manufacturing",
    seoDescription:
      "Explore Type-C connector application scenarios for overseas buyers sourcing components for electronics manufacturing.",
    targetKeywords: ["Type-C connector applications", "USB-C connector factory", "cross-border electronics components"],
    faqs: [
      {
        question: "Which industries commonly use Type-C connectors?",
        answer:
          "Common industries include charging accessories, consumer electronics, smart wearables, industrial handheld devices, IoT modules, and portable power products.",
      },
      {
        question: "Why does connector selection matter for cross-border sellers?",
        answer:
          "Connector quality can affect charging reliability, customer returns, compliance testing, and product reviews in overseas markets.",
      },
    ],
  },
  {
    title: "What Overseas Buyers Should Ask a Type-C Connector Factory",
    slug: "questions-to-ask-type-c-connector-factory",
    excerpt:
      "A factory sourcing checklist covering drawings, material, plating, capacity, samples, packaging, and quality inspection.",
    content:
      "Before choosing a Type-C connector factory, buyers should verify engineering support, production capability, quality control, and communication speed.",
    sections: [
      {
        heading: "Technical documents",
        body: "Ask for product drawings, PCB footprint recommendations, rated current, plating information, material specifications, and application references.",
      },
      {
        heading: "Factory capability",
        body: "Confirm production line setup, inspection equipment, monthly capacity, sample lead time, packaging format, and whether similar products have shipped before.",
      },
      {
        heading: "Quotation details",
        body: "A useful RFQ should include quantity breaks, sample terms, packaging method, payment terms, lead time, and connector model confirmation.",
      },
    ],
    category: "Industry Knowledge",
    seoTitle: "Questions to Ask a Type-C Connector Factory Before Buying",
    seoDescription:
      "Use this checklist when sourcing Type-C connectors from a factory: drawings, specs, capacity, samples, quality control, and quotation details.",
    targetKeywords: ["Type-C connector factory", "USB-C connector manufacturer", "connector sourcing checklist"],
    faqs: [
      {
        question: "What should I ask a Type-C connector factory first?",
        answer:
          "Start with product drawings, current rating, pin count, mounting type, PCB footprint, sample availability, and lead time.",
      },
      {
        question: "Should overseas buyers request samples before mass production?",
        answer:
          "Yes. Samples help engineering teams confirm fit, soldering, mechanical strength, and application suitability before bulk orders.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getArticleCategories() {
  return Array.from(new Set(articles.map((article) => article.category)));
}
