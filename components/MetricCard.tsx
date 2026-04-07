import { ReactNode } from "react";

export default function MetricCard({ title, value, icon }: { title: string; value: string | number; icon: ReactNode }) {
  return (
    <div className="card">
      <div className="mb-3 text-cyan">{icon}</div>
      <p className="text-sm text-slate-300">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
