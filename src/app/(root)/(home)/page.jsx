"use client";
import { SpeedInsights } from "@vercel/speed-insights/next"
import React, { useState } from "react";

export default function MahanaGymnasticsSite() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      dir="rtl"
      className="min-h-screen text-gray-900 bg-cover bg-center fixed"
      style={{ backgroundImage: "url('/rasa.jpg')" }}
    >
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">
          {/* لوگو */}
          <a href="#home" className="flex items-center gap-3">
            <img
              src="mahana-logo.png"
              alt="logo"
              className="h-9 w-9 rounded-2xl"
            />
            <span className="font-extrabold tracking-tight text-lg ">
              ژیمناستیک ماهانا
            </span>
          </a>

          {/* منوی دسکتاپ */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="hover:text-indigo-800">
              درباره ما
            </a>
            <a href="#classes" className="hover:text-indigo-800">
              کلاس‌ها
            </a>
            <a href="#contact" className="hover:text-indigo-800">
              تماس با ما
            </a>
          </nav>

          {/* دکمه همبرگر موبایل */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              // آیکون ضربدر
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // آیکون همبرگر
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* منوی موبایل */}
        {isOpen && (
          <nav className="md:hidden bg-white/90 backdrop-blur shadow-lg flex flex-col gap-6 px-6 py-6">
            <a
              href="#about"
              className="hover:text-indigo-800"
              onClick={() => setIsOpen(false)}
            >
              درباره ما
            </a>
            <a
              href="#classes"
              className="hover:text-indigo-800"
              onClick={() => setIsOpen(false)}
            >
              کلاس‌ها
            </a>
            <a
              href="#contact"
              className="hover:text-indigo-800"
              onClick={() => setIsOpen(false)}
            >
              تماس با ما
            </a>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center text-white"
      >
        <div className="max-w-3xl mx-auto px-4 bg-black/50 p-6 rounded-2xl">
          <h1 className="text-4xl font-black leading-tight">
            حرکت، تعادل، اعتمادبه‌نفس — همه در ژیمناستیک ماهانا
          </h1>
          <p className="mt-5 leading-7">
            باشگاه تخصصی ژیمناستیک برای کودکان و بانوان با مربیان مجرب، محیط امن
            و برنامه‌های استاندارد و دارای کامل‌ترین تجهیزات ژیمناستیک در کل
            ایران
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <a
              href="#classes"
              className="bg-[#40E0D0] text-white px-5 py-2 rounded-2xl"
            >
              مشاهده کلاس‌ها
            </a>
            <a
              href="meeting.jsx"
              className="border border-[#0ea394] text-[#15c0b2] px-5 py-2 rounded-2xl"
            >
              رزرو جلسه آشنایی
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16">
        <div className="max-w-5xl mx-auto px-6 bg-white/80 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-extrabold text-center mb-8">
            درباره ژیمناستیک ماهانا
          </h2>
          <p className="mb-4 leading-8">
            باشگاه <span className="font-bold">ژیمناستیک ماهانا</span> با بیش از{" "}
            <span className="font-bold text-pink-600">
              25 سال سابقه فعالیت حرفه‌ای
            </span>{" "}
            در زمینه آموزش و پرورش ورزشکاران، یکی از پیشگامان ژیمناستیک در کشور
            به شمار می‌رود.
          </p>
          <p className="mb-4 leading-8">
            ما باور داریم ژیمناستیک تنها یک ورزش نیست، بلکه ابزاری ارزشمند برای
            تقویت اعتماد به نفس، افزایش تمرکز، بهبود هماهنگی ذهن و بدن و ساختن
            نسلی پرانرژی و موفق است.
          </p>
          <p className="mb-4 leading-8">
            در ماهانا، با تکیه بر تجربه‌ی سال‌ها فعالیت و حضور مربیان مجرب و
            متخصص، محیطی ایمن، شاد و حرفه‌ای فراهم کرده‌ایم تا ورزشکاران از
            سنین پایه تا سطوح پیشرفته بتوانند مهارت‌های ژیمناستیک را در بالاترین
            استانداردهای آموزشی فراگیرند.
          </p>
          <p className="leading-8">
            رسالت ما در ماهانا،{" "}
            <span className="font-semibold">کشف و شکوفا کردن استعدادها</span> و
            همراهی همیشگی در مسیر رشد، سلامتی و موفقیت ورزشکاران است.
          </p>
        </div>
      </section>

      {/* Classes */}
      <section
        id="classes"
        className="py-16 bg-white/80 rounded-2xl mx-6 shadow-lg"
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-8">
            کلاس‌ها روزهای زوج (دخترها)
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-2xl hover:scale-105 hover:bg-white/70">
              <h3 className="font-bold">ژیمناستیک کودکان سه تا پنج سال</h3>
              <p className="text-slate-600 mt-2">
                ساعت (3:30 - 2) روزهای زوج
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <h3 className="font-bold">پیشرفته (دخترها)</h3>
              <p className="text-slate-600 mt-2">ساعت (5 - 3:30) روزهای زوج</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <h3 className="font-bold">مبتدی‌ها</h3>
              <p className="text-slate-600 mt-2">
                ساعت (6:30 - 5) — ۵ سال به بالا
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <h3 className="font-bold">نوجوانان و بزرگسالان</h3>
              <p className="text-slate-600 mt-2">ساعت (8 - 6:30)</p>
            </div>
          </div>

          
          {/* روزهای فرد */}
          <h2 className="text-3xl font-extrabold mb-8 mt-16">
            کلاس‌ها روزهای فرد (پسرها)
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <h3 className="font-bold">پیشرفته</h3>
              <p className="text-slate-600 mt-2">ساعت (5 - 3:30) — پسرها</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <h3 className="font-bold">مبتدی‌ها</h3>
              <p className="text-slate-600 mt-2">ساعت (6:30 - 5)</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <h3 className="font-bold">خصوصی</h3>
              <p className="text-slate-600 mt-2">ساعت (8 - 6:30)</p>
            </div>
          </div>
        </div>
      </section>
      {/* why chose us */}
      <section id="why-us" className="py-16">
  <div className="max-w-5xl mx-auto px-6 bg-white/80 rounded-2xl shadow-lg">
    <h2 className="text-3xl font-extrabold text-center mb-8">چرا <span className="text-red-600">ما</span>هانا؟</h2>
    <p className="mb-4 leading-8 text-center">
      در <span className="font-bold">ژیمناستیک ماهانا</span>، ما فقط به آموزش حرکات ورزشی بسنده نمی‌کنیم، بلکه به پرورش 
      <span className="font-semibold text-pink-600"> اعتماد به نفس، نظم و روحیه‌ی تیمی</span> هم اهمیت می‌دهیم.
    </p>
    <p className="mb-4 leading-8 text-center">
      با بیش از <span className="font-bold text-pink-600">۲۵ سال تجربه</span> و بهره‌گیری از مربیان حرفه‌ای، کلاس‌های ما برای همه‌ی سنین طراحی شده تا هر فرد در مسیر رشد بدنی و ذهنی بهترین نتیجه را بگیرد.
    </p>
    <p className="leading-8 text-center">
      انتخاب ماهانا یعنی انتخاب <span className="font-semibold text-teal-600">تجربه، امنیت، انگیزه و پیشرفت واقعی</span>.
    </p>
    <p className="leading-8 text-center"
    >به کار گرفتن اصطلاحات بین المللی حرکات ژیمناستیک و تکنیک ها بروز و استفاده از ایزار های بروز.
    </p>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-black/70 border-t border-white/20 mt-10 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8 text-sm">
          {/* ستون ۱ */}
          <div>
            <div className="flex items-center gap-2">
              <img
                src="mahana-logo.png"
                alt=""
                className="h-8 w-8 rounded-xl"
              />
              <span className="font-extrabold text-lg">ژیمناستیک ماهانا</span>
            </div>
            <p className="mt-3 text-white/80 leading-6">
              باشگاه تخصصی ژیمناستیک برای کودکان، نوجوانان و بانوان — همراه با
              مربیان مجرب و محیطی ایمن.
            </p>
          </div>

          {/* ستون ۲ */}
          <div>
            <h3 className="font-bold mb-3">لینک‌های سریع</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#about" className="hover:text-white">
                  درباره ما
                </a>
              </li>
              <li>
                <a href="#classes" className="hover:text-white">
                  کلاس‌ها
                </a>
              </li>
              <li>
                <a href="#coaches" className="hover:text-white">
                  مربیان
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white">
                  شهریه
                </a>
              </li>
            </ul>
          </div>

          {/* ستون ۳ */}
          <div>
            <h3 className="font-bold mb-3">تماس با ما</h3>
            <ul className="space-y-2 text-white/80">
              <a href="tel:+989333833398">
                <li>📞 09333833398</li>
              </a>
              <li>✉️ info@mahana-gym.ir</li>
              <li>📍 تهران، خیابان نمونه، سالن ماهانا</li>
            </ul>
          </div>

          {/* ستون ۴ */}
          <div>
            <h3 className="font-bold mb-3">شبکه‌های اجتماعی</h3>
            <div className="flex gap-4 text-white/80">
              <a
                href="https://www.instagram.com/mahanagymnastic/"
                target="blank"
              >
                <img src="instagram.png" className="w-8" />
              </a>
              <a
                href="https://www.instagram.com/ballet.gymnastic"
                target="blank"
              >
                <img src="instagram.png" className="w-8" />
              </a>
              <a href="#">
                <img src="telegram.png" className="w-8" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 py-8 text-center text-xs text-white/70">
          © {new Date().getFullYear()} ژیمناستیک ماهانا — همه حقوق محفوظ است
        </div>
      </footer>
      {/*footer with button */}
      <div id="footer" className="sticky gap-0 bottom-0 z-50   backdrop-blur bg-white/70 border-b border-slate-200 ">
        <div className="max-w-7xl mx-auto flex items-center justify-center h-16 px-6">
          <a id="button" href="tel:+989333833398"><button className="flex text-xl bg-purple-500 w-[150px] h-[40px] sticky bottom-0 z-50 items-center justify-center text-center rounded-lg hover:bg-purple-600 hover:scale-x-105 transition">تماس</button></a>
        </div>
      </div>
    </div>
  );
}

