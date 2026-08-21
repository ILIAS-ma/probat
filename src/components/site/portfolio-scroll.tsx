"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";

export type ScrollSlide = {
  name: string;
  desc: string;
  image: string;
  location?: string;
  year?: string;
  duration?: string;
};

function ParallaxImage({
  slide,
  index,
  total,
  active,
  progress,
}: {
  slide: ScrollSlide;
  index: number;
  total: number;
  active: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const scale = useTransform(progress, [start, end], [1.12, 1], { clamp: true });
  const y = useTransform(progress, [start, end], ["6%", "0%"], { clamp: true });

  return (
    <motion.div
      className="absolute inset-0"
      style={{ zIndex: index }}
      initial={false}
      animate={{
        clipPath: active >= index ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)",
      }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div className="absolute inset-0" style={{ scale, y }}>
        <Image
          src={slide.image}
          alt={slide.name}
          fill
          sizes="100vw"
          loading="eager"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />
    </motion.div>
  );
}

export function PortfolioScrollGallery({ slides }: { slides: ScrollSlide[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(slides.length - 1, Math.max(0, Math.floor(v * slides.length)));
    setActive(idx);
  });

  return (
    <div
      ref={containerRef}
      className="relative hidden md:block"
      style={{ height: `${slides.length * 85}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Full-bleed background images */}
        {slides.map((s, i) => (
          <ParallaxImage
            key={i}
            slide={s}
            index={i}
            total={slides.length}
            active={active}
            progress={scrollYProgress}
          />
        ))}

        {/* Text overlay */}
        <div className="pointer-events-none absolute inset-0 z-20 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-24 lg:px-8">
            <div className="grid max-w-2xl">
              {slides.map((s, i) => (
                <motion.div
                  key={i}
                  className="col-start-1 row-start-1"
                  initial={false}
                  animate={{
                    opacity: active === i ? 1 : 0,
                    y: active === i ? 0 : active > i ? -20 : 20,
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-widest text-white/70">
                    {s.location && <span>{s.location}</span>}
                    {s.location && (s.year || s.duration) && <span className="opacity-40">·</span>}
                    {s.year && <span>{s.year}</span>}
                    {s.year && s.duration && <span className="opacity-40">·</span>}
                    {s.duration && <span>{s.duration}</span>}
                  </div>
                  <h3 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
                    {s.name}
                  </h3>
                  <p className="mt-4 max-w-md text-white/80">{s.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex max-w-2xl gap-1.5">
              {slides.map((_, i) => (
                <span
                  key={i}
                  className="h-1 flex-1 overflow-hidden rounded-full bg-white/20"
                >
                  <span
                    className="block h-full bg-white transition-transform duration-500 ease-out"
                    style={{
                      transform: `scaleX(${active >= i ? 1 : 0})`,
                      transformOrigin: "left",
                    }}
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
