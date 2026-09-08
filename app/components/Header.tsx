"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [coursesOpen, setCoursesOpen] = useState(false);

  return (
    <header className="header" id="header">
      <div className="header-container">
        {/* LOGO */}
        <Link href="/" className="logo">
          <Image
            src="/images/logo.webp"
            alt="Mestre da Arquitetura"
            width={100}
            height={30}
            priority
          />
        </Link>

        {/* MENU */}
        <nav className="menu">
          {/* CURSOS */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setCoursesOpen(!coursesOpen)}
              className="flex items-center gap-1 text-white transition hover:text-[#C9A227]"
            >
              Cursos
              <span
                className={`text-xs transition-transform ${
                  coursesOpen ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>

            {/* SUBMENU */}
            {coursesOpen && (
              <div
                className="
                  absolute
                  left-1/2
                  top-full
                  z-50
                  mt-4
                  w-56
                  -translate-x-1/2
                  overflow-hidden
                  rounded-xl
                  border border-white/10
                  bg-[#101010]
                  shadow-2xl
                  shadow-black/50
                "
              >
                <Link
                  href="/cursos-online/autocad"
                  className="block px-5 py-3 text-sm text-gray-300 transition hover:bg-[#650F1D] hover:text-white"
                  onClick={() => setCoursesOpen(false)}
                >
                  AutoCAD
                </Link>

                <Link
                  href="/cursos-online/revit"
                  className="block px-5 py-3 text-sm text-gray-300 transition hover:bg-[#650F1D] hover:text-white"
                  onClick={() => setCoursesOpen(false)}
                >
                  Revit
                </Link>

                <Link
                  href="/cursos-online/solidworks"
                  className="block px-5 py-3 text-sm text-gray-300 transition hover:bg-[#650F1D] hover:text-white"
                  onClick={() => setCoursesOpen(false)}
                >
                  SolidWorks
                </Link>

                <Link
                  href="/cursos-online/promob"
                  className="block px-5 py-3 text-sm text-gray-300 transition hover:bg-[#650F1D] hover:text-white"
                  onClick={() => setCoursesOpen(false)}
                >
                  Promob
                </Link>

                <Link
                  href="/cursos-online/word"
                  className="block px-5 py-3 text-sm text-gray-300 transition hover:bg-[#650F1D] hover:text-white"
                  onClick={() => setCoursesOpen(false)}
                >
                  Word
                </Link>

                <Link
                  href="/cursos-online/excel"
                  className="block px-5 py-3 text-sm text-gray-300 transition hover:bg-[#650F1D] hover:text-white"
                  onClick={() => setCoursesOpen(false)}
                >
                  Excel
                </Link>

                <div className="border-t border-white/10" />

                <Link
                  href="/cursos-online"
                  className="block px-5 py-3 text-sm font-semibold text-[#C9A227] transition hover:bg-white/5"
                  onClick={() => setCoursesOpen(false)}
                >
                  Ver todos os cursos →
                </Link>
              </div>
            )}
          </div>

          {/* BLOG */}
          <Link href="/blog">Blog</Link>

          {/* MATERIAIS */}
          <Link href="/materiais">Materiais</Link>
        </nav>

        {/* CTA */}
        <Link
          href="/cursos-online"
          className="
            rounded-lg
            border border-[#8A1C2B]
            bg-[#650F1D]
            px-5 py-3
            font-semibold
            text-white
            shadow-lg
            shadow-[#650F1D]/20
            transition-all
            duration-300
            hover:bg-[#8A1C2B]
            hover:shadow-[#650F1D]/40
          "
        >
          Ver cursos
        </Link>
      </div>
    </header>
  );
};

export default Header;
