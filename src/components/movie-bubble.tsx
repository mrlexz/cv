"use client";

import { MovieIcon } from "@/components/icons/MovieIcon";

interface MovieBubbleProps {
  href: string;
  label?: string;
  badge?: string;
}

export function MovieBubble({
  href,
  label = "Xem phim",
  badge = "NEW",
}: MovieBubbleProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group fixed bottom-6 right-6 z-50 print:hidden"
    >
      {/* Outer glow halo */}
      <span className="absolute -inset-3 -z-20 rounded-full bg-gradient-to-tr from-fuchsia-500 via-rose-500 to-amber-400 opacity-60 blur-xl animate-pulse" />

      {/* Ping rings */}
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-rose-500/60" />
      <span
        className="absolute inset-0 -z-10 animate-ping rounded-full bg-amber-400/50"
        style={{ animationDelay: "0.6s" }}
      />

      {/* Gradient ring border wrapper */}
      <span className="relative block rounded-full bg-gradient-to-tr from-fuchsia-500 via-rose-500 to-amber-400 p-[2px] shadow-[0_10px_30px_-5px_rgba(244,63,94,0.6)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_15px_45px_-5px_rgba(244,63,94,0.8)]">
        {/* Inner button */}
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-rose-600 via-pink-600 to-orange-500 text-white ring-1 ring-white/30">
          <MovieIcon className="h-8 w-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] transition-transform duration-300 group-hover:scale-110" />
        </span>

        {/* NEW badge */}
        {badge ? (
          <span className="absolute -right-1 -top-1 flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 px-1.5 text-[10px] font-extrabold text-rose-900 shadow-md ring-2 ring-white animate-bounce">
            {badge}
          </span>
        ) : null}
      </span>

      {/* Permanent label (hidden on small screens) */}
      <span className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-rose-600 to-orange-500 px-3 py-1.5 text-xs font-semibold text-white shadow-lg ring-1 ring-white/20 transition-all duration-200 group-hover:-translate-x-1 sm:block">
        🎬 {label}
        <span className="absolute right-[-4px] top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-orange-500" />
      </span>
    </a>
  );
}
