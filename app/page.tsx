import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const benefits = [
  "حوّل إنجازات الطلاب إلى نقاط ومكافآت واقعية",
  "ارفع التفاعل المدرسي بتجربة يومية ممتعة",
  "اربط الطلاب بمبادرات تطوعية تصنع أثرًا"
];

export default function Home() {
  return (
    <main>
      <section className="bg-hero pb-20 pt-14">
        <div className="section grid items-center gap-10 lg:grid-cols-2">
          <AnimatedSection>
            <p className="mb-3 inline-block rounded-full bg-cyan/20 px-4 py-2 text-sm text-cyan">المدرسة لم تعد فقط داخل الصف</p>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">منصة تعليمية تُحفّز الطالب على التقدّم</h1>
            <p className="mt-5 max-w-xl text-lg text-slate-200">مسار يمنح الطلاب تجربة رقمية ممتعة: تعلّم، نافس، اربح، وشارك مجتمعك. كل مهمة تُنجزها تتحول إلى نقاط وإنجازات حقيقية.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/auth" className="rounded-xl bg-electric px-5 py-3 font-bold">ابدأ الآن</Link>
              <Link href="/about" className="rounded-xl border border-white/40 px-5 py-3">شاهد كيف تعمل المنصة</Link>
              <Link href="/partners" className="rounded-xl bg-white/15 px-5 py-3">اطلب عرضًا تجريبيًا</Link>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="glass rounded-3xl p-6">
              <div className="rounded-2xl bg-slate-900/70 p-5">
                <h3 className="text-xl font-bold text-cyan">واجهة الطالب</h3>
                <p className="text-slate-300">نقاطك: 1820 • المستوى الذهبي • ترتيبك #3</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {benefits.map((b) => <div key={b} className="rounded-xl bg-white/10 p-3 text-sm">{b}</div>)}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
