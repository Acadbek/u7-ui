import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';

interface CarouselProps {
  children: React.ReactNode,
  showDots?: boolean,
  showArrows?: boolean,
  autoplay?: boolean,
  autoplayDelay?: number
}

const Carousel = ({
  children,
  autoplay = false,
  showDots = true,
  showArrows = true,
  autoplayDelay = 3000,
}: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
  });
  const [canScrollNext, setCanScrollNext] = React.useState(false);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const onSelect = React.useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onDotClick = React.useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi || !autoplay) return;

    const autoplayInterval = setInterval(() => {
      emblaApi.scrollNext();
    }, autoplayDelay);

    emblaApi.on('pointerDown', () => {
      clearInterval(autoplayInterval);
    });

    emblaApi.on('destroy', () => {
      clearInterval(autoplayInterval);
    });

    return () => clearInterval(autoplayInterval);
  }, [emblaApi, autoplay, autoplayDelay]);

  React.useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', onSelect);
      onSelect(emblaApi);
    }
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4px">
          {React.Children.map(children, (child, index) => (
            <motion.div
              key={index}
              className="relative flex-[0_0_100%] min-w-0 pl-4px"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {child}
            </motion.div>
          ))}
        </div>
      </div>

      {showArrows && (
        <>
          <motion.button
            className="absolute top-1/2 left-20px transform -translate-y-1/2 w-40px h-40px rounded-full bg-white/50 backdrop-blur-sm z-10 flex items-center justify-center"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            initial={{ opacity: 0 }}
            animate={{ opacity: canScrollPrev ? 1 : 0.5 }}
            transition={{ duration: 0.2 }}
          >
            <svg
              className="w-20px h-20px text-black"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </motion.button>
          <motion.button
            className="absolute top-1/2 right-20px transform -translate-y-1/2 w-40px h-40px rounded-full bg-white/50 backdrop-blur-sm z-10 flex items-center justify-center"
            onClick={scrollNext}
            disabled={!canScrollNext}
            initial={{ opacity: 0 }}
            animate={{ opacity: canScrollNext ? 1 : 0.5 }}
            transition={{ duration: 0.2 }}
          >
            <svg
              className="w-20px h-20px text-black"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </motion.button>
        </>
      )}

      {showDots && (
        <div className="absolute bottom-20px left-1/2 transform -translate-x-1/2 flex gap-10px">
          {React.Children.map(children, (_, index) => (
            <motion.div
              key={index}
              className={`w-10px h-10px rounded-full cursor-pointer transition-colors duration-200 
                ${index === selectedIndex ? 'bg-black' : 'bg-gray-400'}`
              }
              onClick={() => onDotClick(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
