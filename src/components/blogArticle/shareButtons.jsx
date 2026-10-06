"use client";

import { useState } from "react";
import { LinkIcon, CheckIcon, LinkedinLogoIcon, TwitterLogoIcon } from "@phosphor-icons/react";
import clsx from "clsx";

export default function ShareButtons({ title }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  const shareLinks = () => {
    if (typeof window === "undefined") return { linkedin: "#", twitter: "#" };
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(title);
    return {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
    };
  };

  const links = shareLinks();

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-semibold text-white/50 tracking-widest uppercase">Share</span>
      <div className="flex items-center gap-2">
        <button
          onClick={handleCopy}
          aria-label="Copy link"
          className="w-10 h-10 rounded-full border border-white/10 bg-tint-black-2 flex items-center justify-center text-white/70 hover:text-primary hover:border-primary/30 duration-200"
        >
          {copied ? <CheckIcon size={18} weight="bold" className="text-emerald-400" /> : <LinkIcon size={18} />}
        </button>
        <a
          href={links.twitter}
          target="_blank"
          rel="noreferrer"
          aria-label="Share on X (Twitter)"
          className="w-10 h-10 rounded-full border border-white/10 bg-tint-black-2 flex items-center justify-center text-white/70 hover:text-primary hover:border-primary/30 duration-200"
        >
          <TwitterLogoIcon size={18} weight="fill" />
        </a>
        <a
          href={links.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="Share on LinkedIn"
          className="w-10 h-10 rounded-full border border-white/10 bg-tint-black-2 flex items-center justify-center text-white/70 hover:text-primary hover:border-primary/30 duration-200"
        >
          <LinkedinLogoIcon size={18} weight="fill" />
        </a>
      </div>
    </div>
  );
}
