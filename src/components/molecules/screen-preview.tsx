"use client";

import { useEffect, useState } from "react";

type ScreenPreviewProps = {
  images: { src: string; alt: string }[];
};

export const ScreenPreview = ({ images }: ScreenPreviewProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") {
        setActiveIndex((prev) =>
          prev === null ? null : (prev + 1) % images.length,
        );
      }
      if (e.key === "ArrowLeft") {
        setActiveIndex((prev) =>
          prev === null ? null : (prev - 1 + images.length) % images.length,
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, images.length]);

  return (
    <div>
      <div className="flex items-baseline justify-between gap-2">
        <div>Screen Preview</div>
        <div className="text-xs text-[#ccc]">클릭 시 확대</div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-3">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            className="overflow-hidden rounded-lg border border-white/10 bg-[#111C35] transition-opacity hover:opacity-90"
            onClick={() => setActiveIndex(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-28 w-full object-cover object-top sm:h-36"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setActiveIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-md px-3 py-1 text-sm text-white hover:bg-white/10"
            onClick={() => setActiveIndex(null)}
          >
            닫기
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-md px-3 py-2 text-2xl text-white hover:bg-white/10"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex(
                    (activeIndex - 1 + images.length) % images.length,
                  );
                }}
              >
                ‹
              </button>
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md px-3 py-2 text-2xl text-white hover:bg-white/10"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex((activeIndex + 1) % images.length);
                }}
              >
                ›
              </button>
            </>
          )}

          <img
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            className="max-h-[90vh] max-w-[95vw] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};
