export default function AuthPage() {
  return (
    <main className="section flex min-h-[70vh] items-center justify-center py-10">
      <div className="glass w-full max-w-md rounded-3xl p-6">
        <h1 className="mb-2 text-2xl font-bold">تسجيل الدخول إلى مسار</h1>
        <p className="mb-5 text-slate-300">ابدأ رحلتك نحو إنجازات أكبر كل يوم.</p>
        <form className="space-y-3">
          <input className="w-full rounded-xl bg-white/10 p-3 outline-none ring-cyan/50 focus:ring" placeholder="البريد الإلكتروني" />
          <input className="w-full rounded-xl bg-white/10 p-3 outline-none ring-cyan/50 focus:ring" placeholder="كلمة المرور" type="password" />
          <button className="w-full rounded-xl bg-electric py-3 font-bold">دخول</button>
          <button className="w-full rounded-xl border border-white/30 py-3">إنشاء حساب جديد</button>
        </form>
      </div>
    </main>
  );
}
