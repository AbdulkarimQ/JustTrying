import { rewards } from "@/data/mockData";

export default function RewardsPage() {
  return (
    <main className="section py-10">
      <h1 className="text-3xl font-bold">المكافآت</h1>
      <p className="mb-6 text-slate-300">حوّل الإنجاز إلى مكافآت حقيقية من شركاء مسار.</p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {rewards.map((reward) => (
          <article key={reward.title} className="card overflow-hidden">
            <div className="mb-4 h-28 rounded-xl bg-gradient-to-l from-electric/80 to-cyan/70" />
            <h3 className="text-lg font-bold">{reward.title}</h3>
            <p className="text-sm text-slate-300">{reward.provider}</p>
            <p className="my-3 text-cyan">{reward.cost} نقطة</p>
            <button className="w-full rounded-xl bg-electric py-2">استبدل النقاط</button>
          </article>
        ))}
      </div>
    </main>
  );
}
