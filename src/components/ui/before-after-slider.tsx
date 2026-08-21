"use client";

import { useState, type CSSProperties } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  ReactCompareSliderHandle,
} from "react-compare-slider";

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = "Avant",
  afterLabel = "Après",
  className,
}: {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}) {
  const [interacted, setInteracted] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 dark:ring-white/10 ${className ?? ""}`}
      onPointerDown={() => setInteracted(true)}
    >
      <ReactCompareSlider
        itemOne={
          <div className="relative h-full w-full">
            <ReactCompareSliderImage
              src={beforeSrc}
              alt={beforeLabel}
              style={{ objectPosition: "center" }}
            />
            <span className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              {beforeLabel}
            </span>
          </div>
        }
        itemTwo={
          <div className="relative h-full w-full">
            <ReactCompareSliderImage
              src={afterSrc}
              alt={afterLabel}
              style={{ objectPosition: "center" }}
            />
            <span className="absolute bottom-3 right-3 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              {afterLabel}
            </span>
          </div>
        }
        handle={
          <ReactCompareSliderHandle
            style={{ "--rcs-handle-color": "#2563eb" } as CSSProperties}
            buttonStyle={{
              backdropFilter: undefined,
              background: "white",
              border: 0,
              boxShadow: "0 2px 16px rgba(0,0,0,0.3)",
              width: 44,
              height: 44,
            }}
            linesStyle={{ opacity: 0.9, width: 2 }}
          />
        }
        style={{ height: "100%", width: "100%" }}
      />

      {/* Drag hint — fades out after first interaction */}
      <div
        className={`pointer-events-none absolute inset-x-0 top-4 z-20 flex justify-center transition-opacity duration-500 ${
          interacted ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="animate-pulse rounded-full bg-black/60 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-sm">
          Glissez pour comparer
        </span>
      </div>
    </div>
  );
}
