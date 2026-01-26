"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "FILMS", href: "/films" },
  { name: "GALLERY", href: "/gallery" },
  { name: "AWARDS & RECOGNITION", href: "/awards" },
  { name: "CONTACT", href: "/contact" },
  { name: "NEWS", href: "/news" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#2F2F2F]/90 backdrop-blur border-b border-white/10">
      {/* 🔒 NAVBAR HEIGHT LOCKED */}
      <nav className="max-w-7xl mx-auto h-[72px] px-6 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 h-full">
          <div className="relative top-1">
  <Image
    src="/images/mirrro-logo.png"
    alt="Mirrro Films"
    width={68}
    height={68}
    // className="max-h-[48px] w-auto object-contain"
  />
</div>

          <span className="text-yellow-400 tracking-[0.25em] text-xs font-semibold">
            MIRRRO FILMS
          </span>
        </Link>

        {/* LINKS */}
        <div className="flex md:flex items-center gap-6 h-full">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs tracking-widest transition ${
                  active
                    ? "text-yellow-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

      </nav>
    </header>
  );
}
