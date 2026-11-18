"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { ImageFrame } from "@/components/ui/image-frame";
import { galleryPage, type GalleryCategory } from "@/content/gallery-page";

type Filter = "All" | GalleryCategory;

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

export function GalleryGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items =
    filter === "All"
      ? galleryPage.items
      : galleryPage.items.filter((i) => i.category === filter);
  const current = openIndex !== null ? items[openIndex] : null;
  const filters: Filter[] = ["All", ...galleryPage.categories];

  function next() {
    setOpenIndex((i) => (i === null ? i : (i + 1) % items.length));
  }
  function prev() {
    setOpenIndex((i) =>
      i === null ? i : (i - 1 + items.length) % items.length,
    );
  }

  return (
    <>
      <div
        role="group"
        aria-label="Filter photos"
        className="flex flex-wrap gap-2"
      >
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => {
              setFilter(f);
              setOpenIndex(null);
            }}
            className={`min-h-11 rounded-full border px-5 text-sm font-semibold ${focusRing} ${
              filter === f
                ? "border-accent bg-accent text-ink"
                : "border-line bg-surface-2 text-ink hover:bg-surface"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <p className="sr-only" role="status">
        Showing {items.length} photos
      </p>

      <ul className="mt-8 columns-1 gap-4 min-[560px]:columns-2 min-[900px]:columns-3">
        {items.map((item, index) => (
          <li key={item.id} className="mb-4 break-inside-avoid">
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={`Open photo: ${item.caption}`}
              className={`rounded-card block w-full overflow-hidden text-left ${focusRing}`}
            >
              <ImageFrame alt={item.alt} src={item.src} ratio={item.ratio} />
              <span className="bg-surface-2 text-muted-foreground block px-4 py-3 text-sm">
                {item.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Dialog
        open={openIndex !== null}
        onOpenChange={(open) => {
          if (!open) setOpenIndex(null);
        }}
      >
        <DialogContent
          className="max-w-[min(92vw,820px)]"
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
          }}
        >
          {current && (
            <>
              <DialogTitle className="sr-only">{current.caption}</DialogTitle>
              <DialogDescription className="sr-only">
                Photo {openIndex! + 1} of {items.length}. Use the arrow keys to
                move between photos.
              </DialogDescription>
              <ImageFrame
                alt={current.alt}
                src={current.src}
                ratio={current.ratio}
                fit="contain"
              />
              <p className="text-muted-foreground text-center text-sm">
                {current.caption}
              </p>
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous photo"
                  className={`border-line flex h-11 w-11 items-center justify-center rounded-full border ${focusRing}`}
                >
                  <ChevronLeft aria-hidden="true" />
                </button>
                <span className="text-muted-foreground text-sm">
                  {openIndex! + 1} / {items.length}
                </span>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next photo"
                  className={`border-line flex h-11 w-11 items-center justify-center rounded-full border ${focusRing}`}
                >
                  <ChevronRight aria-hidden="true" />
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
