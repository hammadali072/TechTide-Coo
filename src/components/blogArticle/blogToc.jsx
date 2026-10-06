"use client";

import { useEffect, useState, useRef } from "react";
import clsx from "clsx";
import { CaretRightIcon } from "@phosphor-icons/react"; // Assuming client-side uses normal import path

export default function BlogToc({ headings }) {
  const [activeId, setActiveId] = useState("");
  const [isOpen, setIsOpen] = useState(false); // For mobile accordion
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -60% 0%", threshold: 0.1 }
    );

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  const toggle = () => setIsOpen(!isOpen);

  if (!headings || headings.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="bg-tint-black-2 border border-white/8 rounded-2xl overflow-hidden">
      <button
        onClick={toggle}
        className="lg:hidden w-full flex items-center justify-between p-5 text-left bg-tint-black-2 hover:bg-white/5 duration-200"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-semibold text-white tracking-widest uppercase">On this page</span>
        <CaretRightIcon
          size={16}
          weight="bold"
          className={clsx("text-white/50 duration-300", isOpen ? "rotate-90" : "")}
        />
      </button>

      <div className="hidden lg:block p-6 border-b border-white/8">
        <h4 className="text-sm font-semibold text-white tracking-widest uppercase">On this page</h4>
      </div>

      <div
        ref={contentRef}
        className={clsx(
          "duration-300 ease-in-out lg:!max-h-none lg:opacity-100",
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 lg:max-h-none"
        )}
      >
        <ul className="p-4 lg:p-6 space-y-1">
          {headings.map((h) => (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                className={clsx(
                  "block px-3 py-2 text-sm duration-200 rounded-lg border-l-2",
                  activeId === h.id
                    ? "border-primary text-primary bg-primary/5 font-semibold"
                    : "border-transparent text-white/60 hover:text-white hover:bg-white/5"
                )}
                aria-current={activeId === h.id ? "location" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(h.id)?.scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false);
                }}
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
