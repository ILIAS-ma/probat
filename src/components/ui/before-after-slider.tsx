"use client";

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
  return (
    <div
      className={`relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 dark:ring-white/10 ${className ?? ""}`}
    >
      <ReactCompareSlider
        itemOne={
          <div className="relative h-full w-full">
            <ReactCompareSliderImage src={beforeSrc} alt={beforeLabel} />
            <span className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              {beforeLabel}
            </span>
          </div>
        }
        itemTwo={
          <div className="relative h-full w-full">
            <ReactCompareSliderImage src={afterSrc} alt={afterLabel} />
            <span className="absolute bottom-3 right-3 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              {afterLabel}
            </span>
          </div>
        }
        handle={
          <ReactCompareSliderHandle
            buttonStyle={{
              backdropFilter: undefined,
              background: "white",
              border: 0,
              color: "#2563eb",
              boxShadow: "0 2px 12px rgba(0,0,0,0.25)",
            }}
            linesStyle={{ opacity: 0.9, width: 2 }}
          />
        }
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
}
