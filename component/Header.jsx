"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // آیکون‌ها

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">
        {/* لوگو */}
        <a href="#home" className="flex items-center gap-3">
          <img src="mahana-logo.png" alt="logo" className="h-9 w-9 rounded-2xl" />
          <span className="font-extrabold tracking-tight text-lg">
            ژیمناستیک ماهانا
          </span>
        </a>

        {/* منوی دسکتاپ */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="hover:text-black">درباره ما</a>
          <a href="#classes" className="hover:text-black">کلاس‌ها</a>
          <a href="#coaches" className="hover:text-black">مربیان</a>
          <a href="#pricing" className="hover:text-black">شهریه</a>
          <a href="#contact" className="hover:text-black">تماس</a>
        </nav>

        {/* دکمه همبرگر موبایل */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* منوی موبایل */}
      {isOpen && (
        <nav className="md:hidden bg-white/90 backdrop-blur shadow-lg flex flex-col gap-6 px-6 py-6">
          <a href="#about" className="hover:text-black" onClick={() => setIsOpen(false)}>درباره ما</a>
          <a href="#classes" className="hover:text-black" onClick={() => setIsOpen(false)}>کلاس‌ها</a>
          <a href="#coaches" className="hover:text-black" onClick={() => setIsOpen(false)}>مربیان</a>
          <a href="#pricing" className="hover:text-black" onClick={() => setIsOpen(false)}>شهریه</a>
          <a href="#contact" className="hover:text-black" onClick={() => setIsOpen(false)}>تماس</a>
        </nav>
      )}
    </header>
  );
}

export default Header;
