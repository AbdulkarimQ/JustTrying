import Link from "next/link";

const links = [
  ["/", "الرئيسية"], ["/student", "لوحة الطالب"], ["/tasks", "مهامي"], ["/leaderboard", "الصدارة"],
  ["/rewards", "المكافآت"], ["/volunteering", "التطوع"], ["/teacher", "المعلم"], ["/admin", "الإدارة"], ["/partners", "الشركاء"], ["/about", "عن مسار"]
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="section flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-bold text-cyan">مسار</Link>
        <div className="hidden gap-4 text-sm md:flex">
          {links.map(([href, label]) => <Link key={href} href={href} className="text-slate-200 hover:text-cyan">{label}</Link>)}
        </div>
        <Link href="/auth" className="rounded-xl bg-electric px-4 py-2 text-sm font-semibold">ابدأ الآن</Link>
      </nav>
    </header>
  );
}
