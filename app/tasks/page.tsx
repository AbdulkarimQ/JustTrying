import { tasks } from "@/data/mockData";

export default function TasksPage() {
  return (
    <main className="section py-10">
      <h1 className="mb-2 text-3xl font-bold">مهامي</h1>
      <p className="mb-6 text-slate-300">اختر المهمة المناسبة، سلّمها، وارفع نقاطك بسرعة.</p>
      <div className="mb-6 flex flex-wrap gap-2 text-sm">
        {["الكل", "علوم", "لغة عربية", "يومي", "إضافية", "متقدم"].map((f) => <button key={f} className="rounded-full bg-white/10 px-4 py-2 hover:bg-electric">{f}</button>)}
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {tasks.map((task) => (
          <article key={task.title} className="card">
            <p className="mb-2 text-sm text-cyan">{task.type}</p>
            <h3 className="text-lg font-bold">{task.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{task.subject} • {task.difficulty}</p>
            <p className="mt-2 text-sm">الحالة: <span className="text-emerald-300">{task.status}</span></p>
            <button className="mt-4 w-full rounded-xl bg-electric py-2 font-semibold">سلّم المهمة</button>
          </article>
        ))}
      </div>
    </main>
  );
}
