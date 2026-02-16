"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const galleryImages = [
    "/images/photo_5769543325676845275_y.jpg",
    "/images/photo_5778358084626923897_y.jpg",
    "/images/photo_5785337522450796094_y.jpg",
    "/images/photo_5785337522450796095_y.jpg",
    "/images/photo_5785337522450796096_y.jpg",
    "/images/photo_5785337522450796097_y.jpg",
    "/images/photo_5785337522450796100_y.jpg",
    "/images/photo_5785337522450796101_y.jpg",
    "/images/photo_5785337522450796102_y.jpg",
    "/images/photo_5785337522450796103_y.jpg",
    "/images/photo_5785337522450796106_y.jpg",
    "/images/photo_5785337522450796110_y.jpg",
    "/images/photo_5820993297261377137_y.jpg",
    "/images/photo_5884199556407738489_y.jpg",
    "/images/photo_5884199556407738492_y.jpg",
    "/images/photo_6041721729711190912_y.jpg",
    "/images/photo_6041721729711190918_y.jpg",
];

/* ── Individual gallery photo with scroll reveal ── */
function GalleryPhoto({
    src,
    index,
    onOpen,
}: {
    src: string;
    index: number;
    onOpen: (index: number) => void;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={
                isInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 40, scale: 0.95 }
            }
            transition={{
                duration: 0.7,
                delay: (index % 3) * 0.12,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="gallery-item group mb-4 break-inside-avoid"
        >
            <button
                onClick={() => onOpen(index)}
                className="relative block w-full cursor-pointer overflow-hidden rounded-xl border border-wedding-gold/10 transition-all duration-500 hover:border-wedding-gold/30 focus:outline-none focus:ring-2 focus:ring-wedding-gold/40 focus:ring-offset-2 focus:ring-offset-wedding-navy"
                aria-label={`View photo ${index + 1} of ${galleryImages.length}`}
            >
                {/* Gold glow on hover */}
                <div className="pointer-events-none absolute inset-0 z-10 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                        boxShadow:
                            "inset 0 0 30px rgba(200, 169, 81, 0.08), 0 0 20px rgba(200, 169, 81, 0.06)",
                    }}
                />

                {/* Subtle overlay on hover */}
                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-wedding-charcoal/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Expand icon hint on hover */}
                <div className="pointer-events-none absolute right-3 bottom-3 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-wedding-gold/30 bg-wedding-charcoal/60 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100">
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        className="text-wedding-gold"
                    >
                        <path
                            d="M1 5V1h4M9 1h4v4M13 9v4H9M5 13H1V9"
                            stroke="currentColor"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                <Image
                    src={src}
                    alt={`Wedding gallery photo ${index + 1}`}
                    width={600}
                    height={800}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                />
            </button>
        </motion.div>
    );
}

/* ── Lightbox modal ── */
function Lightbox({
    images,
    currentIndex,
    onClose,
    onPrev,
    onNext,
}: {
    images: string[];
    currentIndex: number;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
}) {
    const [direction, setDirection] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);

    const handlePrev = useCallback(() => {
        setDirection(-1);
        onPrev();
    }, [onPrev]);

    const handleNext = useCallback(() => {
        setDirection(1);
        onNext();
    }, [onNext]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") handlePrev();
            if (e.key === "ArrowRight") handleNext();
        };
        window.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [onClose, handlePrev, handleNext]);

    // Touch swipe
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStart === null) return;
        const diff = touchStart - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 60) {
            if (diff > 0) handleNext();
            else handlePrev();
        }
        setTouchStart(null);
    };

    const slideVariants = {
        enter: (d: number) => ({
            x: d > 0 ? 300 : -300,
            opacity: 0,
            scale: 0.9,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (d: number) => ({
            x: d > 0 ? -300 : 300,
            opacity: 0,
            scale: 0.9,
        }),
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-wedding-charcoal/95 backdrop-blur-2xl"
            onClick={onClose}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            role="dialog"
            aria-modal="true"
            aria-label="Photo lightbox"
        >
            {/* Close button */}
            <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                onClick={onClose}
                className="absolute top-4 right-4 z-[110] flex h-10 w-10 items-center justify-center rounded-full border border-wedding-gold/30 bg-wedding-charcoal/60 text-wedding-gold backdrop-blur-sm transition-all duration-300 hover:border-wedding-gold/60 hover:bg-wedding-charcoal/80 sm:top-6 sm:right-6"
                aria-label="Close lightbox"
            >
                <X size={18} />
            </motion.button>

            {/* Previous button */}
            <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                }}
                className="absolute left-2 z-[110] flex h-10 w-10 items-center justify-center rounded-full border border-wedding-gold/20 bg-wedding-charcoal/50 text-wedding-gold/70 backdrop-blur-sm transition-all duration-300 hover:border-wedding-gold/50 hover:text-wedding-gold sm:left-6 sm:h-12 sm:w-12"
                aria-label="Previous photo"
            >
                <ChevronLeft size={20} />
            </motion.button>

            {/* Next button */}
            <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                }}
                className="absolute right-2 z-[110] flex h-10 w-10 items-center justify-center rounded-full border border-wedding-gold/20 bg-wedding-charcoal/50 text-wedding-gold/70 backdrop-blur-sm transition-all duration-300 hover:border-wedding-gold/50 hover:text-wedding-gold sm:right-6 sm:h-12 sm:w-12"
                aria-label="Next photo"
            >
                <ChevronRight size={20} />
            </motion.button>

            {/* Image */}
            <div
                className="relative flex h-[80vh] w-[90vw] max-w-4xl items-center justify-center sm:h-[85vh]"
                onClick={(e) => e.stopPropagation()}
            >
                <AnimatePresence custom={direction} mode="wait">
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            duration: 0.4,
                            ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        className="relative h-full w-full"
                    >
                        <Image
                            src={images[currentIndex]}
                            alt={`Wedding photo ${currentIndex + 1} of ${images.length}`}
                            fill
                            sizes="90vw"
                            className="rounded-lg object-contain"
                            priority
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Counter */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-xs tracking-[0.2em] text-wedding-cream/40 sm:bottom-6"
            >
                {currentIndex + 1} / {images.length}
            </motion.div>
        </motion.div>
    );
}

/* ── Main Gallery Export ── */
export function Gallery() {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);

    const goPrev = () =>
        setLightboxIndex((prev) =>
            prev !== null
                ? (prev - 1 + galleryImages.length) % galleryImages.length
                : null
        );

    const goNext = () =>
        setLightboxIndex((prev) =>
            prev !== null ? (prev + 1) % galleryImages.length : null
        );

    return (
        <>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="gallery-masonry">
                    {galleryImages.map((src, index) => (
                        <GalleryPhoto
                            key={src}
                            src={src}
                            index={index}
                            onOpen={openLightbox}
                        />
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <Lightbox
                        images={galleryImages}
                        currentIndex={lightboxIndex}
                        onClose={closeLightbox}
                        onPrev={goPrev}
                        onNext={goNext}
                    />
                )}
            </AnimatePresence>
        </>
    );
}
