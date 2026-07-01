export type FaqItem = {
  question: string;
  answer: string;
};

export type ArticleCategory =
  | "Industry Knowledge"
  | "Selection Guide"
  | "Comparison"
  | "Applications"
  | "Factory Sourcing";

export type ArticleSubsection = {
  heading: string;
  body: string;
};

export type ArticleSection = {
  heading: string;
  body: string;
  subsections: ArticleSubsection[];
};

export type ArticleComparisonRow = {
  item: string;
  bestFor: string;
  buyerNote: string;
};

export type Article = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  answerSummary: string;
  tableOfContents: string[];
  comparisonTable: ArticleComparisonRow[];
  relatedProducts: string[];
  relatedArticles: string[];
  publishedAt: string;
  updatedAt: string;
  author: string;
  readingTime: string;
  buyerChecklist: string[];
  sections: ArticleSection[];
  category: ArticleCategory;
  seoTitle: string;
  seoDescription: string;
  targetKeywords: string[];
  faqs: FaqItem[];
};

type ArticleSeed = {
  title: string;
  slug: string;
  category: ArticleCategory;
  primaryKeyword: string;
  answer: string;
  relatedProducts: string[];
};

const articleSeeds: ArticleSeed[] = [
  {
    title: "What Is a Type-C Female Connector?",
    slug: "what-is-a-type-c-female-connector",
    category: "Industry Knowledge",
    primaryKeyword: "Type-C female connector",
    answer:
      "A Type-C female connector is a receptacle mounted on a PCB or device housing to receive a USB-C plug for charging, data, or both. Buyers compare pin count, mounting type, rated current, shell structure, and application environment before selecting the correct connector model.",
    relatedProducts: ["usb-type-c-16-pin-female-socket", "usb-type-c-24-pin-mid-mount-connector"],
  },
  {
    title: "Type-C 6Pin vs 16Pin vs 24Pin: What Is the Difference?",
    slug: "type-c-6pin-vs-16pin-vs-24pin",
    category: "Comparison",
    primaryKeyword: "Type-C 6Pin vs 16Pin vs 24Pin",
    answer:
      "The difference between Type-C 6Pin, 16Pin, and 24Pin connectors is mainly function and PCB complexity. 6Pin models are usually for simple charging, 16Pin models fit mainstream charging products, and 24Pin connectors support more complete USB-C interface requirements.",
    relatedProducts: [
      "usb-type-c-6-pin-female-charging-socket",
      "usb-type-c-16-pin-female-socket",
      "usb-type-c-24-pin-mid-mount-connector",
    ],
  },
  {
    title: "How to Choose a Type-C Connector for PCB Design",
    slug: "how-to-choose-type-c-connector-for-pcb-design",
    category: "Selection Guide",
    primaryKeyword: "Type-C connector for PCB design",
    answer:
      "To choose a Type-C connector for PCB design, confirm the required pin count, current rating, mounting type, board thickness, connector height, shell position, and recommended footprint. Engineering teams should request drawings before PCB release to avoid layout rework.",
    relatedProducts: ["usb-type-c-16-pin-female-socket", "usb-type-c-24-pin-mid-mount-connector"],
  },
  {
    title: "What Products Use Type-C 6Pin Female Connectors?",
    slug: "products-use-type-c-6pin-female-connectors",
    category: "Applications",
    primaryKeyword: "Type-C 6Pin female connectors",
    answer:
      "Type-C 6Pin female connectors are commonly used in simple charging accessories, low-cost power input devices, small consumer electronics, and private-label products where full USB-C data function is not required.",
    relatedProducts: ["usb-type-c-6-pin-female-charging-socket"],
  },
  {
    title: "What Products Use Type-C 16Pin Female Connectors?",
    slug: "products-use-type-c-16pin-female-connectors",
    category: "Applications",
    primaryKeyword: "Type-C 16Pin female connectors",
    answer:
      "Type-C 16Pin female connectors are used in charging accessories, portable electronics, smart devices, adapters, and compact consumer products that need a reliable Type-C receptacle with balanced cost and function.",
    relatedProducts: ["usb-type-c-16-pin-female-socket"],
  },
  {
    title: "When Should You Choose a 24Pin USB-C Connector?",
    slug: "when-choose-24pin-usb-c-connector",
    category: "Selection Guide",
    primaryKeyword: "24Pin USB-C connector",
    answer:
      "Choose a 24Pin USB-C connector when the product needs a more complete USB-C interface, broader signal support, higher specification design, or a thin device structure that benefits from mid-mount connector options.",
    relatedProducts: ["usb-type-c-24-pin-mid-mount-connector"],
  },
  {
    title: "SMT vs DIP Type-C Connector: Which Is Better?",
    slug: "smt-vs-dip-type-c-connector",
    category: "Comparison",
    primaryKeyword: "SMT vs DIP Type-C connector",
    answer:
      "SMT Type-C connectors are usually better for automated PCB assembly and compact electronics, while DIP or through-hole styles can offer stronger mechanical anchoring in some structures. The better choice depends on PCB design, housing, soldering process, and durability target.",
    relatedProducts: ["usb-type-c-16-pin-female-socket", "usb-type-c-24-pin-mid-mount-connector"],
  },
  {
    title: "What Is a Mid-Mount Type-C Connector?",
    slug: "what-is-mid-mount-type-c-connector",
    category: "Industry Knowledge",
    primaryKeyword: "mid-mount Type-C connector",
    answer:
      "A mid-mount Type-C connector sits partly inside the PCB cutout to reduce connector height and support thinner product designs. It is commonly considered for tablets, handheld devices, and compact electronics with strict mechanical space limits.",
    relatedProducts: ["usb-type-c-24-pin-mid-mount-connector"],
  },
  {
    title: "What Is a Waterproof Type-C Female Connector?",
    slug: "what-is-waterproof-type-c-female-connector",
    category: "Industry Knowledge",
    primaryKeyword: "waterproof Type-C female connector",
    answer:
      "A waterproof Type-C female connector adds shell, sealing, and housing design considerations to protect the interface from moisture, dust, or harsher use. Buyers should review the connector drawing together with enclosure and gasket design.",
    relatedProducts: ["waterproof-type-c-female-connector"],
  },
  {
    title: "Type-C Connector Current Rating Guide",
    slug: "type-c-connector-current-rating-guide",
    category: "Selection Guide",
    primaryKeyword: "Type-C connector current rating",
    answer:
      "Type-C connector current rating should be matched with the device charging requirement, cable design, PCB layout, thermal risk, and certification plan. Many simplified sockets support 3A options, while higher-spec models may support 5A designs.",
    relatedProducts: ["usb-type-c-16-pin-female-socket", "usb-type-c-24-pin-mid-mount-connector"],
  },
  {
    title: "Type-C Connector for Bluetooth Speakers",
    slug: "type-c-connector-for-bluetooth-speakers",
    category: "Applications",
    primaryKeyword: "Type-C connector for Bluetooth speakers",
    answer:
      "Bluetooth speakers usually need a Type-C connector with stable charging performance, suitable shell retention, and a footprint that fits the product housing. Buyers often compare 6Pin or 16Pin sockets depending on function and cost target.",
    relatedProducts: ["usb-type-c-6-pin-female-charging-socket", "usb-type-c-16-pin-female-socket"],
  },
  {
    title: "Type-C Connector for Power Banks",
    slug: "type-c-connector-for-power-banks",
    category: "Applications",
    primaryKeyword: "Type-C connector for power banks",
    answer:
      "Power banks need Type-C connectors selected by current rating, insertion durability, PCB footprint, charging function, and production volume. Buyers should confirm whether the design needs simple charging or a more complete USB-C interface.",
    relatedProducts: ["usb-type-c-16-pin-female-socket", "usb-type-c-24-pin-mid-mount-connector"],
  },
  {
    title: "Type-C Connector for Small Home Appliances",
    slug: "type-c-connector-for-small-home-appliances",
    category: "Applications",
    primaryKeyword: "Type-C connector for small home appliances",
    answer:
      "Small home appliances often use Type-C connectors for charging or power input. Selection should focus on rated current, housing fit, connector height, soldering reliability, and whether waterproof or reinforced structure is needed.",
    relatedProducts: ["usb-type-c-16-pin-female-socket", "waterproof-type-c-female-connector"],
  },
  {
    title: "Type-C Connector for Automotive Electronics",
    slug: "type-c-connector-for-automotive-electronics",
    category: "Applications",
    primaryKeyword: "Type-C connector for automotive electronics",
    answer:
      "Automotive electronics projects should evaluate Type-C connectors by mechanical retention, stable contact, PCB layout, current rating, quality inspection, and application environment. Buyers should share drawings and expected usage conditions before RFQ.",
    relatedProducts: ["usb-type-c-24-pin-mid-mount-connector", "waterproof-type-c-female-connector"],
  },
  {
    title: "Type-C Connector for Industrial Control Boards",
    slug: "type-c-connector-for-industrial-control-boards",
    category: "Applications",
    primaryKeyword: "Type-C connector for industrial control boards",
    answer:
      "Industrial control boards need Type-C connectors with stable contact, reliable shell structure, clear footprint, and supply continuity. Waterproof or reinforced options may be needed when the interface faces dust, moisture, or rough handling.",
    relatedProducts: ["usb-type-c-24-pin-mid-mount-connector", "waterproof-type-c-female-connector"],
  },
  {
    title: "USB-C Receptacle Selection Guide for Engineers",
    slug: "usb-c-receptacle-selection-guide-for-engineers",
    category: "Selection Guide",
    primaryKeyword: "USB-C receptacle selection guide",
    answer:
      "Engineers should select a USB-C receptacle by reviewing pin count, current rating, mounting type, PCB footprint, mating height, shell retention, application environment, and supplier drawing support before prototype release.",
    relatedProducts: ["usb-type-c-16-pin-female-socket", "usb-type-c-24-pin-mid-mount-connector"],
  },
  {
    title: "How to Read a Type-C Connector Datasheet",
    slug: "how-to-read-type-c-connector-datasheet",
    category: "Industry Knowledge",
    primaryKeyword: "Type-C connector datasheet",
    answer:
      "A Type-C connector datasheet should be read for pin count, dimensions, footprint, rated current, material, plating, operating temperature, lifecycle, packaging, and recommended soldering conditions. These details affect PCB design and sourcing approval.",
    relatedProducts: ["usb-type-c-16-pin-female-socket", "usb-type-c-24-pin-mid-mount-connector"],
  },
  {
    title: "Common Quality Tests for Type-C Connectors",
    slug: "common-quality-tests-for-type-c-connectors",
    category: "Factory Sourcing",
    primaryKeyword: "Type-C connector quality tests",
    answer:
      "Common Type-C connector quality tests include visual inspection, dimensional checks, insertion and withdrawal force, electrical continuity, solderability, plating review, and packaging inspection. Buyers should confirm which checks apply before bulk shipment.",
    relatedProducts: ["usb-type-c-16-pin-female-socket", "waterproof-type-c-female-connector"],
  },
  {
    title: "Type-C Connector Manufacturer Selection Guide",
    slug: "type-c-connector-manufacturer-selection-guide",
    category: "Factory Sourcing",
    primaryKeyword: "Type-C connector manufacturer",
    answer:
      "When selecting a Type-C connector manufacturer, buyers should check product range, drawing support, sample speed, quality process, capacity, export communication, packaging method, and whether the supplier can support repeat OEM orders.",
    relatedProducts: [
      "usb-type-c-6-pin-female-charging-socket",
      "usb-type-c-16-pin-female-socket",
      "usb-type-c-24-pin-mid-mount-connector",
    ],
  },
  {
    title: "China Type-C Connector Supplier: What Buyers Should Check",
    slug: "china-type-c-connector-supplier-buyer-checklist",
    category: "Factory Sourcing",
    primaryKeyword: "China Type-C connector supplier",
    answer:
      "Buyers checking a China Type-C connector supplier should review product drawings, sample availability, certifications support, inspection workflow, shipment packing, communication speed, and whether the supplier understands overseas RFQ requirements.",
    relatedProducts: ["usb-type-c-16-pin-female-socket", "usb-type-c-24-pin-mid-mount-connector"],
  },
];

function getRelatedArticleSlugs(slug: string, category: ArticleCategory) {
  return articleSeeds
    .filter((seed) => seed.slug !== slug && seed.category === category)
    .slice(0, 3)
    .map((seed) => seed.slug);
}

function buildArticle(seed: ArticleSeed, index: number): Article {
  const comparisonTable: ArticleComparisonRow[] = [
    {
      item: "Simple charging products",
      bestFor: "6Pin or 16Pin Type-C female socket",
      buyerNote: "Prioritize cost, current rating, footprint, and assembly reliability.",
    },
    {
      item: "Higher specification electronics",
      bestFor: "24Pin USB-C connector",
      buyerNote: "Confirm signal requirements, PCB complexity, and connector height.",
    },
    {
      item: "Moisture or harsh-use products",
      bestFor: "Waterproof Type-C connector",
      buyerNote: "Review housing, sealing, shell structure, and connector drawing together.",
    },
  ];

  return {
    title: seed.title,
    slug: seed.slug,
    excerpt: `${seed.answer.slice(0, 150)}...`,
    content: seed.answer,
    answerSummary: seed.answer,
    tableOfContents: [
      "Quick answer for buyers",
      "Key selection factors",
      "Engineering notes",
      "Supplier and RFQ checklist",
    ],
    comparisonTable,
    relatedProducts: seed.relatedProducts,
    relatedArticles: getRelatedArticleSlugs(seed.slug, seed.category),
    publishedAt: "2026-07-01",
    updatedAt: "2026-07-01",
    author: "Guangdong Yonghua Technology Engineering Team",
    readingTime: index % 3 === 0 ? "4 min read" : "5 min read",
    buyerChecklist: [
      "Confirm pin count, mounting type, rated current, and application environment.",
      "Request connector drawing, recommended PCB footprint, and sample availability.",
      "Share estimated quantity, packaging requirement, target market, and sample schedule.",
    ],
    sections: [
      {
        heading: "Quick answer for buyers",
        body: seed.answer,
        subsections: [
          {
            heading: "What this means for sourcing",
            body: `For ${seed.primaryKeyword}, buyers should connect the product requirement to real PCB, housing, and production constraints instead of selecting only by price.`,
          },
        ],
      },
      {
        heading: "Key selection factors",
        body: "The most important factors are pin count, mounting type, rated current, shell structure, footprint, material, plating, packaging, and application risk.",
        subsections: [
          {
            heading: "Pin count and function",
            body: "6Pin, 16Pin, and 24Pin options serve different function levels. Confirm whether the device needs simple charging, mainstream Type-C connection, or broader USB-C interface support.",
          },
          {
            heading: "Mounting and PCB layout",
            body: "SMT, mid-mount, and waterproof structures affect board layout, soldering process, device height, and housing fit.",
          },
        ],
      },
      {
        heading: "Engineering notes",
        body: "Engineering teams should request drawings before PCB release and verify connector height, shell position, rated current, operating environment, and assembly process.",
        subsections: [
          {
            heading: "Sample approval",
            body: "Sample approval should include fit check, soldering review, mating test, and application confirmation before mass production.",
          },
        ],
      },
      {
        heading: "Supplier and RFQ checklist",
        body: "A complete RFQ should include product drawing, reference model, pin count, mounting type, rated current, application, quantity, packaging method, and target delivery schedule.",
        subsections: [
          {
            heading: "What buyers should send",
            body: "Send drawings, PCB footprint, current requirement, application scenario, expected order volume, and any certification or documentation needs.",
          },
        ],
      },
    ],
    category: seed.category,
    seoTitle: `${seed.title} | Yonghua Type-C Connector Guide`,
    seoDescription: seed.answer.slice(0, 155),
    targetKeywords: [
      seed.primaryKeyword,
      "Type-C connector supplier",
      "USB-C connector manufacturer",
    ],
    faqs: [
      {
        question: `What is the key point when evaluating ${seed.primaryKeyword}?`,
        answer: seed.answer,
      },
      {
        question: "What information should buyers send for a Type-C connector RFQ?",
        answer:
          "Buyers should send drawings, PCB footprint, pin count, mounting type, rated current, application, estimated quantity, packaging needs, and target sample schedule.",
      },
      {
        question: "Can Yonghua help match a suitable Type-C connector model?",
        answer:
          "Yes. Yonghua can review the application, drawing, current requirement, PCB constraints, and quantity target to help shortlist suitable Type-C connector models.",
      },
    ],
  };
}

export const articles: Article[] = articleSeeds.map((seed, index) => buildArticle(seed, index));

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getArticleCategories() {
  return [
    "Industry Knowledge",
    "Selection Guide",
    "Comparison",
    "Applications",
    "Factory Sourcing",
  ] satisfies ArticleCategory[];
}
