export default function AdminPage() {
  return (
    <main className="section py-10">
      <h1 className="text-3xl font-bold">لوحة إدارة المدرسة</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[
          "إدارة الصفوف",
          "مؤشرات التفاعل",
          "أداء الطلاب حسب الصف",
          "إدارة شركاء المكافآت",
          "طلبات التطوع",
          "لوحة الصدارة العامة"
        ].map((item) => <div key={item} className="card">{item}</div>)}
      </div>
    </main>
  );
}
