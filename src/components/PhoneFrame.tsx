import Image from "next/image";

// Sleek modern Android frame inspired by the uploaded mockup:
// Slim uniform bezel, rounded corners, centered punch-hole camera lens, and subtle screen reflection.
export function PhoneFrame({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`relative mx-auto aspect-[9/19.5] w-[230px] rounded-[3rem] bg-gradient-to-b from-neutral-800 via-neutral-900 to-neutral-950 p-[3.5px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7),0_0_20px_rgba(255,255,255,0.05)] ring-1 ring-white/15 ${className}`}
    >
      {/* Outer subtle bezel border */}
      <div className="relative h-full w-full overflow-hidden rounded-[2.8rem] bg-black p-[5px]">
        {/* Screen container */}
        <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] bg-zinc-950">
          <Image
            src={src}
            alt={alt}
            fill
            unoptimized
            className="object-cover"
            sizes="230px"
          />

          {/* Centered punch-hole selfie camera */}
          <div className="absolute left-1/2 top-3 z-30 flex h-3.5 w-3.5 -translate-x-1/2 items-center justify-center rounded-full bg-black ring-1 ring-neutral-800/80">
            {/* Camera lens reflection */}
            <div className="h-1.5 w-1.5 rounded-full bg-neutral-900 ring-1 ring-blue-950/40" />
          </div>

          {/* Soft diagonal screen light sheen / glass reflection */}
          <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-tr from-transparent via-transparent to-white/[0.07]" />
          <div className="sheen pointer-events-none absolute inset-0 z-20" />
        </div>
      </div>
    </div>
  );
}

export function LaptopFrame({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative mx-auto w-[260px] sm:w-[280px] ${className}`}>
      <div className="overflow-hidden rounded-[18px] border border-zinc-700 bg-zinc-950 p-2 shadow-2xl shadow-zinc-950/30">
        <div className="relative aspect-[16/10] overflow-hidden rounded-[12px] bg-black">
          <Image src={src} alt={alt} fill unoptimized className="object-cover" sizes="280px" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_35%)]" />
        </div>
      </div>
      <div className="relative mx-auto mt-[-4px] h-3 w-[84%] rounded-b-[16px] bg-gradient-to-b from-zinc-700 via-zinc-600 to-zinc-800" />
      <div className="mx-auto h-2.5 w-[110%] rounded-b-2xl bg-zinc-800 opacity-80 blur-[1px]" />
    </div>
  );
}