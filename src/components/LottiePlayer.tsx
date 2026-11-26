"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "motion/react";

// lottie-react touches browser APIs and is heavy — load it only on the client.
const Lottie = dynamic(() => import("lottie-react").then((mod) => mod.Lottie), {
  ssr: false,
});

type LottiePlayerProps = {
  src: string | object;
  className?: string;
  loop?: boolean;
  label?: string;
};

export function LottiePlayer({
  src,
  className = "",
  loop = true,
  label,
}: LottiePlayerProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={className}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <Lottie
        src={src}
        className="h-full w-full"
        autoplay={!reduceMotion}
        loop={loop && !reduceMotion}
      />
    </div>
  );
}
