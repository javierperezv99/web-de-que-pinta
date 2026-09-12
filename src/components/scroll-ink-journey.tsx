import { useEffect, useState } from "react";

type ScrollInkJourneyProps = {
  logoUrl: string;
};

const drops = [
  { left: "8%", size: 18, speed: 0.9, delay: 0, color: "bg-brand-pink" },
  { left: "22%", size: 10, speed: 1.15, delay: 0.08, color: "bg-brand-orange" },
  { left: "39%", size: 15, speed: 0.8, delay: 0.14, color: "bg-brand-yellow" },
  { left: "58%", size: 12, speed: 1.05, delay: 0.03, color: "bg-brand-teal" },
  { left: "76%", size: 20, speed: 0.72, delay: 0.18, color: "bg-brand-purple" },
  { left: "91%", size: 9, speed: 1.25, delay: 0.1, color: "bg-brand-pink" },
];

export function ScrollInkJourney({ logoUrl }: ScrollInkJourneyProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const reveal = Math.max(0, Math.min(1, (progress - 0.78) / 0.18));

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-x-0 top-0 h-1 bg-border/40">
        <div className="h-full bg-gradient-brand" style={{ width: `${progress * 100}%` }} />
      </div>

      {drops.map((drop, index) => {
        const localProgress = Math.max(0, progress - drop.delay) * drop.speed;
        return (
          <div
            key={`${drop.left}-${index}`}
            className={`ink-drop absolute top-0 ${drop.color}`}
            style={{
              left: drop.left,
              width: drop.size,
              height: drop.size * 1.28,
              opacity: progress > 0.02 && progress < 0.96 ? 0.82 : 0,
              transform: `translate3d(0, ${localProgress * 115 - 8}vh, 0) rotate(${index % 2 ? 12 : -9}deg)`,
            }}
          />
        );
      })}

      <div
        className="absolute inset-0 flex items-center justify-center bg-background transition-opacity duration-500"
        style={{ opacity: reveal, visibility: reveal > 0.03 ? "visible" : "hidden" }}
      >
        <div className="relative w-[min(78vw,34rem)]">
          <div className="ink-bloom absolute inset-[8%] bg-gradient-brand opacity-35 blur-2xl" />
          <img
            src={logoUrl}
            alt=""
            className="relative w-full mix-blend-multiply"
            style={{
              clipPath: `circle(${reveal * 72}% at 50% 50%)`,
              transform: `scale(${0.9 + reveal * 0.1})`,
              opacity: reveal,
            }}
          />
          <p
            className="mt-5 text-center font-display text-xs font-bold uppercase text-muted-foreground"
            style={{ opacity: Math.max(0, (reveal - 0.7) / 0.3) }}
          >
            Tu idea. Nuestra tinta. Una impresión única.
          </p>
        </div>
      </div>
    </div>
  );
}