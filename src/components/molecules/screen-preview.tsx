"use client";

import { useEffect, useRef, useState } from "react";

type ScreenPreviewProps = {
  images: { src: string; alt: string }[];
  hideHeader?: boolean;
};

export const ScreenPreview = ({
  images,
  hideHeader = false,
}: ScreenPreviewProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-preview-card]");
    const step = card ? card.offsetWidth + 16 : track.clientWidth * 0.7;
    track.scrollBy({ left: step * direction, behavior: "smooth" });
  };

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
      {!hideHeader && (
        <div className="mb-3 flex items-baseline justify-between gap-2">
          <div>Screen Preview</div>
          <div className="text-xs text-[#ccc]">클릭 시 확대</div>
        </div>
      )}

      <div className="relative">
        {images.length > 1 && (
          <>
            <button
              type="button"
              aria-label="이전"
              onClick={() => scrollByCard(-1)}
              className="absolute left-0 top-1/2 z-10 flex size-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#070B17]/80 text-xl text-white hover:bg-[#070B17]"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="다음"
              onClick={() => scrollByCard(1)}
              className="absolute right-0 top-1/2 z-10 flex size-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#070B17]/80 text-xl text-white hover:bg-[#070B17]"
            >
              ›
            </button>
          </>
        )}

        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              data-preview-card
              className="aspect-[4/3] w-[min(320px,75vw)] shrink-0 cursor-pointer snap-start overflow-hidden rounded-lg border border-white/10 bg-[#111C35] transition-opacity hover:opacity-90"
              onClick={() => setActiveIndex(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="size-full object-cover object-top"
                loading="lazy"
              />
            </button>
          ))}
        </div>
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
            className="absolute right-4 top-4 cursor-pointer rounded-md px-3 py-1 text-sm text-white hover:bg-white/10"
            onClick={() => setActiveIndex(null)}
          >
            닫기
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer rounded-md px-3 py-2 text-2xl text-white hover:bg-white/10"
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
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer rounded-md px-3 py-2 text-2xl text-white hover:bg-white/10"
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
