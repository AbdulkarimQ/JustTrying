import { volunteering, student } from "@/data/mockData";

export default function VolunteeringPage() {
  return (
    <main className="section py-10">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">التطوع</h1>
          <p className="text-slate-300">تعلّم، نافس، واصنع أثرًا في مجتمعك.</p>
        </div>
        <div className="glass rounded-xl px-4 py-3">الساعات التطوعية: {student.volunteerHours}</div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {volunteering.map((item) => (
          <article key={item.title} className="card">
            {item.urgent ? <span className="mb-3 inline-block rounded-full bg-rose-500/25 px-3 py-1 text-xs text-rose-200">فرصة تطوع عاجلة</span> : null}
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="mt-2 text-slate-300">{item.place} • {item.time}</p>
            <p className="text-sm text-cyan">الفئة: {item.category} • المطلوب: {item.needed}</p>
            <button className="mt-4 rounded-xl bg-electric px-4 py-2">سجّل الآن</button>
          </article>
        ))}
      </div>
    </main>
  );
}
