import type { ProductParameter } from "@/data/products";

type ProductSpecTableProps = {
  parameters: ProductParameter[];
};

export function ProductSpecTable({ parameters }: ProductSpecTableProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
      <table className="w-full text-left text-sm">
        <tbody>
          {parameters.map((parameter) => (
            <tr key={parameter.label} className="border-b border-slate-200 last:border-b-0">
              <th className="w-1/3 bg-slate-50 px-4 py-3 font-semibold text-slate-950">
                {parameter.label}
              </th>
              <td className="px-4 py-3 text-slate-700">{parameter.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
