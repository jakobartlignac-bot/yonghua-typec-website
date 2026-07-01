import type { ProductParameter } from "@/data/products";
import { SpecTable } from "./SpecTable";

type ProductSpecTableProps = {
  parameters: ProductParameter[];
};

export function ProductSpecTable({ parameters }: ProductSpecTableProps) {
  return <SpecTable rows={parameters} />;
}
