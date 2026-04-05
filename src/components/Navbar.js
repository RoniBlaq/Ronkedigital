"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
// import ThemeToggle from "./ThemeToggle";
export default function Navbar() {
    const [dark, setDark] = useState(false);

          useEffect(() => {
            const saved = localStorage.getItem("theme");
            if (saved === "dark") setDark(true);
          }, []);

          useEffect(() => {
            localStorage.setItem("theme", dark ? "dark" : "light");
          }, [dark]);



    return (
        <nav className={`backdrop-blur fixed w-full z-50 shadow-sm transition 
        ${
          dark
      ? "bg-gray-900/70 text-white"
      : "bg-white/70 text-gray-800 "
    }`}
      >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-3 justify-between items-center px-4 py-3">
                <h1 className="font-bold text-xl text-blue-600">MyPortfolio</h1>
                <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                <Link href="#about" className="hover:text-blue-500">About
                </Link>
                <Link href="#skills" className="hover:text-blue-500">
                Skills
                </Link>
                <Link href="#Projects" className="hover:text-blue-500">Projects
                </Link>
                <Link href="#Contact" className="hover:text-blue-500">Contact
                </Link>
                 <button onClick={() => setDark(!dark)}
        className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700">{dark ? "☀️" : "🌙"}</button>
                {/* <ThemeToggle/> */}
            </div>
            </div>
        </nav>
    )
}