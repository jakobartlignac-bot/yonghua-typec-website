export type SpecTableRow = {
  label: string;
  value: string;
};

type SpecTableProps = {
  rows: SpecTableRow[];
};

export function SpecTable({ rows }: SpecTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm">
      <table className="min-w-[640px] w-full text-left text-sm">
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-slate-200 last:border-b-0">
              <th className="w-1/3 bg-slate-50 px-4 py-3 align-top font-semibold text-slate-950">
                {row.label}
              </th>
              <td className="px-4 py-3 leading-6 text-slate-700">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
