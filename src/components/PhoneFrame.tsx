import Image from "next/image";
import { BusFront, Flame } from "lucide-react";

export function PhoneFrame({
  src,
  alt,
  className = "",
  variant = "default",
}: {
  src?: string;
  alt?: string;
  className?: string;
  variant?: "aura" | "seatnix" | "default";
}) {
  const isAura = variant === "aura";
  const isSeatnix = variant === "seatnix";

  return (
    <div
      className={`relative h-[480px] w-[240px] overflow-hidden rounded-[2.9rem] border border-white/15 bg-neutral-950 p-2.5 shadow-2xl ${className}`}
    >
      {/* side buttons */}
      <span className="absolute -right-[3px] top-28 h-8 w-[3px] rounded-r bg-zinc-700" />
      <span className="absolute -left-[3px] top-32 h-12 w-[3px] rounded-l bg-zinc-700" />

      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[2.2rem] bg-[#171310]">
        {isAura && (
          <div className="flex h-full w-full flex-col items-center justify-center bg-[radial-gradient(circle_at_center,rgba(234,122,61,0.16),transparent_28%),linear-gradient(180deg,#1a130f_0%,#0d0d12_42%,#080b10_100%)]">
            <div className="relative">
              {/* glow behind the logo ring */}
              <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e78a4e]/25 blur-3xl" />
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-[3px] border-[#e78a4e] shadow-[0_0_18px_rgba(231,138,78,0.45),0_0_45px_rgba(231,138,78,0.28)]">
                <Flame
                  className="h-11 w-11 fill-[#e78a4e] text-[#e78a4e]"
                  style={{ filter: "drop-shadow(0 0 10px rgba(231,138,78,0.55))" }}
                />
              </div>
            </div>
            <div className="w-full px-5 text-center">
              <div className="text-[2.5rem] font-bold leading-tight tracking-tight text-white">
                aura
              </div>
              <div className="mt-3 text-[11px] font-semibold uppercase leading-relaxed tracking-[0.3em] text-zinc-400">
                Move with intention
              </div>
            </div>
          </div>
        )}

        {isSeatnix && (
          <div className="flex h-full w-full flex-col items-center justify-center bg-[radial-gradient(circle_at_center,rgba(93,110,255,0.15),transparent_28%),linear-gradient(180deg,#171b27_0%,#0a0d12_45%,#090b10_100%)]">
            <div className="relative">
              <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5d6eff]/20 blur-3xl" />
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-[3px] border-[#5d6eff] bg-[#0a49c1] shadow-[0_0_18px_rgba(93,110,255,0.45),0_0_45px_rgba(93,110,255,0.28)]">
                <BusFront
                  className="h-11 w-11 text-white"
                  style={{ filter: "drop-shadow(0 0 10px rgba(255,255,255,0.4))" }}
                />
              </div>
            </div>
            <div className="w-full px-5 text-center">
              <div className="text-[2.5rem] font-bold leading-tight tracking-tight text-white">
                Seatnix
              </div>
              <div className="mt-3 text-[11px] font-semibold uppercase leading-relaxed tracking-[0.3em] text-zinc-400">
                Book your seat
              </div>
            </div>
          </div>
        )}

        {!isAura && !isSeatnix && (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-b from-zinc-900 to-black">
            {src ? (
              <div className="relative h-full w-full">
                <Image src={src} alt={alt ?? "Project preview"} fill className="object-cover" sizes="240px" />
              </div>
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-zinc-800 text-zinc-500">
                No preview
              </div>
            )}
          </div>
        )}

        {/* punch-hole camera */}
        <span className="absolute left-1/2 top-3 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-black ring-1 ring-zinc-700" />
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
          <Image src={src} alt={alt} fill className="object-cover" sizes="280px" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_35%)]" />
        </div>
      </div>
      <div className="relative mx-auto mt-[-4px] h-3 w-[84%] rounded-b-[16px] bg-gradient-to-b from-zinc-700 via-zinc-600 to-zinc-800" />
      <div className="mx-auto h-2.5 w-[110%] rounded-b-2xl bg-zinc-800 opacity-80 blur-[1px]" />
    </div>
  );
}
