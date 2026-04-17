"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggleButton from "../ThemeToggleButton";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.01;
      setIsScrolled(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed right-0 left-0 z-50 transition-colors duration-300 ${
        isScrolled ?
          "bg-background/95 border-b shadow supports-backdrop-filter:backdrop-blur"
        : "border-b-0 bg-transparent shadow-none"
      }`}
      aria-label="app-header">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link
          href={"/"}
          className="flex items-center gap-2"
          aria-label="App Name">
          <Image
            src="/hero-image.png"
            alt="SaveGD Logo"
            width={64}
            height={64}
            priority
            className="h-11 w-11"
          />
          <h1 className="text-2xl font-semibold">Save GD</h1>
        </Link>
        <nav className="flex items-center gap-4">
          <Link href={"/"}>Home</Link>

          <ThemeToggleButton />
        </nav>
      </div>
    </header>
  );
};

export default Header;
