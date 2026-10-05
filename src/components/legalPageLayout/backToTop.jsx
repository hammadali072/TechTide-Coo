"use client";

import { useState, useEffect } from "react";
import { ArrowUpIcon } from "@phosphor-icons/react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-primary text-black shadow-lg hover:bg-primary-start transition-all hover:-translate-y-1 print:hidden"
    >
      <ArrowUpIcon size={20} weight="bold" />
    </button>
  );
}
