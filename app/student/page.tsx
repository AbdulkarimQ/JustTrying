import StudentOverview from "@/components/StudentOverview";
import { tasks, rewards, volunteering } from "@/data/mockData";

export default function StudentDashboard() {
  return (
    <main className="pb-16">
      <StudentOverview />
      <section className="section grid gap-6 lg:grid-cols-3">
        <div className="card lg:col-span-2">
          <h3 className="mb-4 text-xl font-bold">المهام النشطة</h3>
          <div className="space-y-3">
            {tasks.map((task) => (
              <div key={task.title} className="rounded-xl bg-white/5 p-3">
                <p className="font-semibold">{task.title}</p>
                <p className="text-sm text-slate-300">{task.subject} • {task.status} • +{task.reward} نقطة</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div className="card">
            <h3 className="mb-3 font-bold">إنجازات حديثة</h3>
            <p className="rounded-xl bg-emerald-400/20 p-3 text-emerald-200">🎉 أكملت تحدي القراءة 5 أيام متتالية</p>
          </div>
          <div className="card">
            <h3 className="mb-3 font-bold">فرص تطوع قادمة</h3>
            <p>{volunteering[0].title}</p>
            <p className="text-sm text-slate-300">{volunteering[0].time}</p>
          </div>
          <div className="card">
            <h3 className="mb-3 font-bold">مكافآت مقترحة</h3>
            <p>{rewards[0].title}</p>
            <p className="text-sm text-slate-300">{rewards[0].cost} نقطة</p>
          </div>
        </div>
      </section>
    </main>
  );
}
