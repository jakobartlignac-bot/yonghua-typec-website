import type { ProductComparisonRow } from "@/data/products";

type ProductComparisonTableProps = {
  title: string;
  productName: string;
  alternativeName: string;
  rows: ProductComparisonRow[];
};

export function ProductComparisonTable({
  title,
  productName,
  alternativeName,
  rows,
}: ProductComparisonTableProps) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-slate-950">{title}</h2>
      <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200 bg-white">
        <table className="min-w-[760px] w-full text-left text-sm">
          <thead className="bg-slate-950 text-white">
            <tr>
              <th className="px-4 py-3 font-semibold">Feature</th>
              <th className="px-4 py-3 font-semibold">{productName}</th>
              <th className="px-4 py-3 font-semibold">{alternativeName}</th>
              <th className="px-4 py-3 font-semibold">Buyer Note</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.feature} className="border-b border-slate-200 last:border-b-0">
                <td className="px-4 py-3 font-semibold text-slate-950">{row.feature}</td>
                <td className="px-4 py-3 text-slate-700">{row.currentProduct}</td>
                <td className="px-4 py-3 text-slate-700">{row.alternative}</td>
                <td className="px-4 py-3 text-slate-700">{row.buyerNote}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
