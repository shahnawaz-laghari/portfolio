"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export type DemoScreen = {
  src: string;
  label: string;
  alt: string;
};

type ScreenshotViewerProps = {
  title?: string;
  description: string;
  screens: DemoScreen[];
};

export function ScreenshotViewer({
  title = "Screenshots",
  description,
  screens,
}: ScreenshotViewerProps) {
  const [index, setIndex] = useState(0);
  const current = screens[index];

  const move = (direction: 1 | -1) => {
    setIndex((i) => (i + direction + screens.length) % screens.length);
  };

  return (
    <section className="mt-12">
      <h2 className="font-heading text-2xl font-semibold">{title}</h2>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>

      <div className="mt-8 flex flex-col items-center gap-5">
        <div className="relative w-[260px] rounded-[2.5rem] border border-white/10 bg-neutral-950 p-2">
          <div className="relative aspect-[703/1600] w-full overflow-hidden rounded-[2.1rem] bg-black">
            <AnimatePresence>
              <motion.div
                key={current.src}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="absolute inset-0"
              >
                <Image
                  src={current.src}
                  alt={current.alt}
                  fill
                  className="object-contain"
                  sizes="260px"
                  unoptimized
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {screens.map((screen, i) => (
            <button
              key={screen.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show ${screen.label} screenshot`}
              aria-current={i === index}
              className={`relative h-14 w-8 overflow-hidden rounded border transition-opacity ${
                i === index
                  ? "border-primary opacity-100"
                  : "border-transparent opacity-50 hover:opacity-90"
              }`}
            >
              <Image src={screen.src} alt="" fill className="object-cover" sizes="32px" unoptimized />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4 text-sm">
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Previous screenshot"
            className="rounded-full border border-border p-2 transition-colors hover:border-foreground/30"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <span className="min-w-32 text-center text-muted-foreground" aria-live="polite">
            {current.label} <span className="text-xs">{index + 1}/{screens.length}</span>
          </span>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Next screenshot"
            className="rounded-full border border-border p-2 transition-colors hover:border-foreground/30"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
