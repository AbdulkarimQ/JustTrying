import { Trophy, Coins, Gauge, HeartHandshake } from "lucide-react";
import MetricCard from "./MetricCard";
import { student } from "@/data/mockData";

export default function StudentOverview() {
  return (
    <section className="section py-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">أهلًا {student.name} 👋</h2>
          <p className="text-slate-300">أحسنت! واصل التقدّم لتحقق المستوى التالي.</p>
        </div>
        <div className="glass rounded-2xl px-4 py-3 text-sm">{student.level}</div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard title="نقاطي" value={student.points} icon={<Coins />} />
        <MetricCard title="ترتيبك في الصف" value={`#${student.classRank}`} icon={<Trophy />} />
        <MetricCard title="المستوى الحالي" value={`${student.progress}%`} icon={<Gauge />} />
        <MetricCard title="الساعات التطوعية" value={student.volunteerHours} icon={<HeartHandshake />} />
      </div>
    </section>
  );
}
