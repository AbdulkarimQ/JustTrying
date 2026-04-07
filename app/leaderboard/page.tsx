import { leaderboard } from "@/data/mockData";

export default function LeaderboardPage() {
  return (
    <main className="section py-10">
      <h1 className="text-3xl font-bold">لوحة الصدارة</h1>
      <p className="mb-6 text-slate-300">تحدٍّ ممتع بين طلاب الصف والمدرسة.</p>
      <div className="space-y-3">
        {leaderboard.map((s, i) => (
          <div key={s.name} className={`card flex items-center justify-between ${i < 3 ? "border-cyan/50" : ""}`}>
            <div className="flex items-center gap-3">
              <span className="text-2xl">{s.badge}</span>
              <div>
                <p className="font-semibold">{s.name}</p>
                <p className="text-sm text-slate-300">المركز #{i + 1}</p>
              </div>
            </div>
            <p className="text-xl font-bold text-cyan">{s.points}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
