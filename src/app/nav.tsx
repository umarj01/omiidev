"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import ModeToggle from "@/components/ui/darkMode";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#blogs", label: "Blogs" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50">
      {/* TOP FIXED NAVBAR */}
      <div className="bg-slate-950/90 w-full h-14 flex items-center fixed top-0 left-0 px-6 md:px-20 z-50">

        {/* Left Section */}
        <div className="flex items-center gap-2 text-xl font-bold font-mono text-white">
          <Avatar>
            <AvatarImage src="https://github.com/evilrabbit.png" />
          </Avatar>
          <Link href="/">Omar Javaid</Link>
        </div>

        {/* Center Navigation (Desktop Only) */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex gap-8 font-semibold text-white">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
               
              </li>
            ))}
          </ul>
         
        </nav>

        {/* Right section placeholder */}
        <div className="hidden md:block w-20"></div>

        {/* MOBILE MENU ICON */}
        <Menu
          className="md:hidden text-white ml-auto"
          onClick={() => setMenuOpen((prev) => !prev)}
        />
      </div>

      {/* MOBILE MENU (Shown Below Header) */}
      {menuOpen && (
        <nav className="md:hidden absolute top-14 left-0 w-full bg-slate-900 border-t border-slate-700 p-4">
          <ul className="flex flex-col gap-4 text-white font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)} // closes menu on click
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
