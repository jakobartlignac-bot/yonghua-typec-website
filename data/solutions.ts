import type { FaqItem } from "./articles";

export type Solution = {
  industry: string;
  slug: string;
  description: string;
  buyerNote: string;
  connectorNeeds: string[];
  recommendedProducts: string[];
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  painPoints: string[];
  selectionTips: string[];
  recommendedProductSlugs: string[];
  relatedArticleSlugs: string[];
  faqs: FaqItem[];
};

export const solutions: Solution[] = [
  {
    industry: "Industrial Electronics",
    slug: "industrial-electronics",
    description:
      "Connector solutions for industrial handheld devices, control modules, inspection tools, and field equipment.",
    buyerNote:
      "Industrial buyers should review shell strength, mating reliability, sealing demand, and long-term model availability before confirming a connector.",
    connectorNeeds: ["Stable contact", "Mechanical strength", "Long-term supply", "Drawing support"],
    recommendedProducts: ["Waterproof Type-C 24 Pin Female Connector", "USB Type-C 24 Pin Mid-Mount Connector"],
    seoTitle: "Type-C Connector Solutions for Industrial Electronics",
    seoDescription:
      "Type-C connector selection for industrial handhelds, control boards, field equipment, and sealed electronic devices.",
    keywords: ["industrial Type-C connector", "Type-C connector for industrial equipment", "USB-C connector factory"],
    painPoints: [
      "Connectors may face vibration, dust, moisture, and rough handling.",
      "Industrial boards often need long-term model availability and drawing control.",
      "A poor connector match can cause field maintenance and replacement cost.",
    ],
    selectionTips: [
      "Review shell strength, mating cycles, and operating environment before sample approval.",
      "Use waterproof or reinforced structures when the port is exposed.",
      "Confirm the PCB footprint and connector height with the product enclosure.",
    ],
    recommendedProductSlugs: ["waterproof-type-c-female-connector", "usb-type-c-24-pin-mid-mount-connector"],
    relatedArticleSlugs: [
      "type-c-connector-for-industrial-control-boards",
      "common-quality-tests-for-type-c-connectors",
      "type-c-connector-manufacturer-selection-guide",
    ],
    faqs: [
      {
        question: "Which Type-C connector is suitable for industrial electronics?",
        answer:
          "Industrial electronics usually need stable contact, strong shell retention, clear drawings, and sometimes waterproof Type-C connector options.",
      },
      {
        question: "Should industrial buyers request samples before mass production?",
        answer:
          "Yes. Samples help verify fit, soldering, mating reliability, and environmental suitability before bulk orders.",
      },
    ],
  },
  {
    industry: "Automotive Electronics",
    slug: "automotive-electronics",
    description:
      "Precision connector support for in-vehicle accessories, modules, charging interfaces, and compact electronic assemblies.",
    buyerNote:
      "For automotive accessory projects, confirm PCB layout, application temperature, mechanical retention, packaging, and quality inspection expectations.",
    connectorNeeds: ["Consistent quality", "Compact PCB layout", "Application review", "Reliable assembly"],
    recommendedProducts: ["USB Type-C 24 Pin Mid-Mount Connector", "Waterproof Type-C 24 Pin Female Connector"],
    seoTitle: "USB-C Connector Solutions for Automotive Electronics",
    seoDescription:
      "USB-C connector options for automotive electronics, charging modules, in-vehicle accessories, and compact PCB assemblies.",
    keywords: ["Type-C connector for automotive electronics", "automotive USB-C connector", "USB-C connector supplier"],
    painPoints: [
      "Automotive accessories need stable contact under repeated plugging and movement.",
      "Connector height and shell position must fit compact module housings.",
      "Quality and packaging consistency matter for repeat export orders.",
    ],
    selectionTips: [
      "Check mechanical retention and PCB layout before selecting a model.",
      "Consider 24Pin or reinforced Type-C connectors for higher specification modules.",
      "Share application temperature and usage conditions during RFQ.",
    ],
    recommendedProductSlugs: ["usb-type-c-24-pin-mid-mount-connector", "waterproof-type-c-female-connector"],
    relatedArticleSlugs: [
      "type-c-connector-for-automotive-electronics",
      "usb-c-receptacle-selection-guide-for-engineers",
      "common-quality-tests-for-type-c-connectors",
    ],
    faqs: [
      {
        question: "What should automotive electronics buyers check first?",
        answer:
          "Check PCB footprint, shell retention, rated current, operating environment, packaging, and quality inspection requirements.",
      },
      {
        question: "Are waterproof Type-C connectors useful for automotive accessories?",
        answer:
          "They can be useful when the port faces moisture, dust, or harsher handling, but the housing and sealing design must be reviewed together.",
      },
    ],
  },
  {
    industry: "Consumer Electronics",
    slug: "consumer-electronics",
    description:
      "Type-C connector options for charging accessories, wearables, tablets, portable power products, and smart devices.",
    buyerNote:
      "Consumer electronics buyers usually compare pin count, unit cost, SMT yield, sample speed, and whether the connector is suitable for repeat high-volume production.",
    connectorNeeds: ["Cost control", "Sample speed", "Stable soldering", "3A / 5A options"],
    recommendedProducts: ["USB Type-C 16 Pin Female Socket", "USB Type-C 24 Pin Mid-Mount Connector"],
    seoTitle: "Type-C Female Socket Solutions for Consumer Electronics",
    seoDescription:
      "Type-C female socket and USB-C connector selection for consumer electronics, wearables, tablets, and charging accessories.",
    keywords: ["Type-C connector for consumer electronics", "Type-C female socket supplier", "USB-C receptacle factory"],
    painPoints: [
      "Consumer products often need cost control without sacrificing connector reliability.",
      "Wrong connector height or footprint can delay PCB and enclosure development.",
      "High-volume orders need stable soldering and consistent packaging.",
    ],
    selectionTips: [
      "Use 16Pin sockets for many charging-focused consumer devices.",
      "Use 24Pin connectors when broader USB-C interface support is required.",
      "Confirm sample lead time and packaging format before launch schedules.",
    ],
    recommendedProductSlugs: ["usb-type-c-16-pin-female-socket", "usb-type-c-24-pin-mid-mount-connector"],
    relatedArticleSlugs: [
      "products-use-type-c-16pin-female-connectors",
      "type-c-connector-current-rating-guide",
      "how-to-choose-type-c-connector-for-pcb-design",
    ],
    faqs: [
      {
        question: "Is 16Pin enough for consumer electronics?",
        answer:
          "For many charging-focused products, 16Pin can be enough. Products needing broader USB-C functions should compare 24Pin options.",
      },
      {
        question: "What should buyers send for consumer electronics RFQ?",
        answer:
          "Send product type, drawing or PCB footprint, pin count, rated current, target volume, and sample schedule.",
      },
    ],
  },
  {
    industry: "PCB Assembly",
    slug: "pcb-assembly",
    description:
      "Type-C connector selection for SMT assembly, PCB footprint confirmation, soldering yield, and compact board layouts.",
    buyerNote:
      "PCB assembly buyers should confirm footprint, mounting type, soldering process, packaging, and connector height before board release.",
    connectorNeeds: ["Footprint accuracy", "SMT packaging", "Stable soldering", "Drawing support"],
    recommendedProducts: ["USB Type-C 16 Pin Female Socket", "USB Type-C 24 Pin Mid-Mount Connector"],
    seoTitle: "Type-C Connector Solutions for PCB Assembly",
    seoDescription:
      "USB-C receptacle and Type-C connector selection for PCB assembly, SMT process, footprint review, and engineering approval.",
    keywords: ["Type-C connector for PCB assembly", "USB-C receptacle PCB footprint", "SMT Type-C connector"],
    painPoints: [
      "Wrong footprint data can cause PCB rework and assembly delay.",
      "Connector packaging must match the assembly process and production volume.",
      "Mid-mount structures require early mechanical and PCB review.",
    ],
    selectionTips: [
      "Request connector drawings and recommended footprints before PCB release.",
      "Confirm SMT packaging and soldering requirements.",
      "Check connector height and shell position with the enclosure design.",
    ],
    recommendedProductSlugs: ["usb-type-c-16-pin-female-socket", "usb-type-c-24-pin-mid-mount-connector"],
    relatedArticleSlugs: [
      "how-to-choose-type-c-connector-for-pcb-design",
      "usb-c-receptacle-selection-guide-for-engineers",
      "how-to-read-type-c-connector-datasheet",
    ],
    faqs: [
      {
        question: "Why is drawing confirmation important for PCB assembly?",
        answer:
          "Drawing confirmation helps avoid footprint mismatch, soldering issues, connector height conflicts, and late PCB revisions.",
      },
      {
        question: "Which Type-C connector is common for PCB assembly?",
        answer:
          "SMT Type-C female sockets and mid-mount USB-C connectors are common, depending on product thickness and function needs.",
      },
    ],
  },
  {
    industry: "Bluetooth Speakers",
    slug: "bluetooth-speakers",
    description:
      "Type-C connector options for Bluetooth speakers, portable audio products, charging ports, and compact power input boards.",
    buyerNote:
      "Bluetooth speaker buyers usually need stable charging, suitable port height, shell retention, and cost-controlled connector options.",
    connectorNeeds: ["Stable charging", "Compact footprint", "Cost control", "Reliable mating"],
    recommendedProducts: ["USB Type-C 6 Pin Female Charging Socket", "USB Type-C 16 Pin Female Socket"],
    seoTitle: "Type-C Connector Solutions for Bluetooth Speakers",
    seoDescription:
      "Type-C female socket selection for Bluetooth speakers and portable audio devices, including 6Pin and 16Pin charging options.",
    keywords: ["Type-C connector for Bluetooth speakers", "6Pin Type-C female socket", "Type-C charging socket"],
    painPoints: [
      "Portable speakers need stable charging ports under repeated user plugging.",
      "Cost targets are often strict for consumer audio accessories.",
      "Connector height and shell position must match the speaker enclosure.",
    ],
    selectionTips: [
      "Use 6Pin for simple charging-only designs.",
      "Use 16Pin when the product needs a more mainstream Type-C socket option.",
      "Confirm enclosure fit and charging current before sample approval.",
    ],
    recommendedProductSlugs: ["usb-type-c-6-pin-female-charging-socket", "usb-type-c-16-pin-female-socket"],
    relatedArticleSlugs: [
      "type-c-connector-for-bluetooth-speakers",
      "products-use-type-c-6pin-female-connectors",
      "products-use-type-c-16pin-female-connectors",
    ],
    faqs: [
      {
        question: "Can Bluetooth speakers use 6Pin Type-C sockets?",
        answer:
          "Yes. Many simple charging-focused Bluetooth speakers can use 6Pin Type-C sockets if full USB-C data function is not required.",
      },
      {
        question: "What should speaker buyers confirm before ordering?",
        answer:
          "Confirm charging current, PCB footprint, enclosure opening, connector height, and target production volume.",
      },
    ],
  },
  {
    industry: "Power Banks",
    slug: "power-banks",
    description:
      "USB-C connector selection for power banks, portable power products, charging interfaces, and high-volume consumer electronics.",
    buyerNote:
      "Power bank buyers should compare current rating, insertion durability, pin count, PCB footprint, and charging function before sample confirmation.",
    connectorNeeds: ["Current rating", "Durable mating", "Stable soldering", "High-volume supply"],
    recommendedProducts: ["USB Type-C 16 Pin Female Socket", "USB Type-C 24 Pin Mid-Mount Connector"],
    seoTitle: "USB-C Connector Solutions for Power Banks",
    seoDescription:
      "Type-C connector and USB-C receptacle selection for power banks, portable chargers, and charging interface products.",
    keywords: ["Type-C connector for power banks", "USB-C receptacle for power bank", "Type-C charging connector"],
    painPoints: [
      "Power banks require reliable charging performance and suitable current rating.",
      "Repeated plugging can expose weak shell retention or poor soldering.",
      "High-volume production needs stable packaging and repeat supply.",
    ],
    selectionTips: [
      "Confirm whether the design needs 3A or 5A current support.",
      "Review shell strength, soldering process, and footprint before mass production.",
      "Compare 16Pin and 24Pin options based on actual USB-C function requirement.",
    ],
    recommendedProductSlugs: ["usb-type-c-16-pin-female-socket", "usb-type-c-24-pin-mid-mount-connector"],
    relatedArticleSlugs: [
      "type-c-connector-for-power-banks",
      "type-c-connector-current-rating-guide",
      "type-c-6pin-vs-16pin-vs-24pin",
    ],
    faqs: [
      {
        question: "Which Type-C connector is suitable for power banks?",
        answer:
          "Many power banks use 16Pin or 24Pin Type-C connectors depending on current rating, function, PCB design, and charging requirements.",
      },
      {
        question: "Should power bank buyers check current rating first?",
        answer:
          "Yes. Current rating, thermal risk, PCB layout, and charging system requirements should be confirmed before connector approval.",
      },
    ],
  },
];

export function getSolutionBySlug(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}
