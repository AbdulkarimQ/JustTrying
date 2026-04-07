export const student = {
  name: "ليان العتيبي",
  level: "المستوى الذهبي",
  points: 1820,
  progress: 74,
  classRank: 3,
  volunteerHours: 28,
  notifications: ["أحسنت! أنجزت 3 مهام هذا الأسبوع", "فرصة تطوع عاجلة يوم الجمعة"]
};

export const tasks = [
  { title: "مشروع العلوم: الطاقة المتجددة", subject: "علوم", difficulty: "متوسط", reward: 120, status: "قيد التنفيذ", type: "مدرسية" },
  { title: "تحدي القراءة اليومية", subject: "لغة عربية", difficulty: "سهل", reward: 40, status: "جاهزة للتسليم", type: "يومي" },
  { title: "مهمة إضافية: تصميم إنفوجرافيك", subject: "حاسوب", difficulty: "متقدم", reward: 180, status: "جديد", type: "إضافية" }
];

export const leaderboard = [
  { name: "سارة خالد", points: 2140, badge: "🥇" },
  { name: "محمد سالم", points: 2015, badge: "🥈" },
  { name: "ليان العتيبي", points: 1820, badge: "🥉" },
  { name: "فهد ناصر", points: 1710, badge: "⭐" }
];

export const rewards = [
  { title: "خصم 30٪ على وجبة", provider: "مطعم فريش", cost: 350 },
  { title: "مشروب مجاني", provider: "كوفي زون", cost: 180 },
  { title: "حزمة أدوات مدرسية", provider: "مكتبة الإبداع", cost: 520 }
];

export const volunteering = [
  { title: "تنظيم فعالية بيئية", place: "حديقة الحي", time: "الجمعة 4:00 م", category: "بيئة", needed: 12, urgent: true },
  { title: "مبادرة دعم كبار السن", place: "مركز الرعاية", time: "السبت 10:00 ص", category: "مجتمعي", needed: 8, urgent: false }
];
