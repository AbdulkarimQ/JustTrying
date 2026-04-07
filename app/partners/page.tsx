export default function PartnersPage() {
  return (
    <main className="section py-10">
      <h1 className="text-3xl font-bold">انضم كشريك مكافآت</h1>
      <p className="mt-3 max-w-3xl text-slate-300">مسار يربط نشاط طلاب المدارس بمتاجر ومطاعم ومراكز خدمات محلية. قدّم عروضًا ذكية، واكسب ولاء جيل جديد بطريقة مسؤولة ومؤثرة.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="card">ظهور علامتك أمام آلاف الطلاب</div>
        <div className="card">حملات موسمية قابلة للقياس</div>
        <div className="card">شراكة ذات أثر اجتماعي واضح</div>
      </div>
      <button className="mt-8 rounded-xl bg-electric px-6 py-3 font-bold">قدّم كشريك الآن</button>
    </main>
  );
}
