import React from "react";


// صفحه رزرو جلسه آشنایی
export default function ReservationPage() {
  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-fuchsia-600 via-pink-500 to-rose-500 text-white">
      {/* هدر */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/10 border-b border-white/20">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-white/20 p-2 rounded-2xl"><div className="w-5 h-5" /></div>
            <span className="font-extrabold tracking-tight text-lg">ژیمناستیک ماهانا</span>
          </div>
          <a href="/" className="text-sm bg-white text-fuchsia-700 font-bold px-4 py-2 rounded-2xl shadow">
            بازگشت به صفحه اصلی
          </a>
        </div>
      </header>

      {/* هیرو */}
      <section className="max-w-5xl mx-auto px-4 py-16 md:py-24 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">رزرو جلسه‌ی آشنایی</h1>
        <p className="mt-4 text-white/90 max-w-2xl mx-auto">
          برای آشنایی با محیط باشگاه، مربیان و برنامه‌ها می‌توانید یک جلسه‌ی رایگان رزرو کنید.
          فرم زیر را پر کنید تا همکاران ما با شما تماس بگیرند.
        </p>
      </section>

      {/* فرم */}
      <section className="max-w-3xl mx-auto px-4 pb-20">
        <form onSubmit={(e)=> e.preventDefault()} className="bg-white/10 border border-white/20 rounded-3xl p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm opacity-90">نام و نام خانوادگی</label>
              <input className="mt-1 w-full rounded-2xl bg-white/10 border border-white/30 px-4 py-3 outline-none placeholder-white/60" placeholder="مثلاً: نازنین احمدی" />
            </div>
            <div>
              <label className="text-sm opacity-90">شماره تماس</label>
              <input className="mt-1 w-full rounded-2xl bg-white/10 border border-white/30 px-4 py-3 outline-none placeholder-white/60" placeholder="مثلاً: ۰۹۱۲…" />
            </div>
            <div>
              <label className="text-sm opacity-90">سن هنرجو</label>
              <input className="mt-1 w-full rounded-2xl bg-white/10 border border-white/30 px-4 py-3 outline-none placeholder-white/60" placeholder="مثلاً: ۱۰ سال" />
            </div>
            <div>
              <label className="text-sm opacity-90">تاریخ مدنظر</label>
              <input type="date" className="mt-1 w-full rounded-2xl bg-white/10 border border-white/30 px-4 py-3 text-black" />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm opacity-90">پیام</label>
              <textarea rows={4} className="mt-1 w-full rounded-2xl bg-white/10 border border-white/30 px-4 py-3 outline-none placeholder-white/60" placeholder="مثلاً: تمایل دارم در روز پنجشنبه بازدید کنم…" />
            </div>
          </div>
          <button className="mt-6 w-full bg-white text-fuchsia-700 font-bold px-6 py-3 rounded-2xl">ثبت درخواست</button>
          <p className="text-xs opacity-90 mt-2">* فرم نمایشی است. می‌توانید به Formspree یا API متصل کنید.</p>
        </form>
      </section>

      {/* اطلاعات تماس */}
      <section className="bg-white/10 border-t border-white/20 py-12">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-3 gap-6 text-sm">
          <div className="flex items-center gap-2"><div className="w-4 h-4" /> ۰۹۱۲۳۴۵۶۷۸۹</div>
          <div className="flex items-center gap-2"><div className="w-4 h-4" /> info@mahana-gym.ir</div>
          <div className="flex items-center gap-2"><div className="w-4 h-4" /> تهران، خیابان نمونه، سالن ماهانا</div>
        </div>
      </section>

      {/* فوتر */}
      <footer className="bg-white/10 border-t border-white/20 py-6 text-center text-xs text-white/70">
        © {new Date().getFullYear()} ژیمناستیک ماهانا — جلسه آشنایی
      </footer>
    </div>
  );
}

