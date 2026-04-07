export default function TeacherPage() {
  return (
    <main className="section py-10">
      <h1 className="text-3xl font-bold">لوحة المعلم</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[
          "إنشاء مهمة جديدة",
          "متابعة التسليمات",
          "اعتماد أعمال الطلاب",
          "تخصيص نقاط التحفيز",
          "تحليلات التفاعل",
          "نسبة الإنجاز الأسبوعي"
        ].map((item) => <div key={item} className="card">{item}</div>)}
      </div>
    </main>
  );
}
