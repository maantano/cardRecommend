import { useState, useEffect, useRef } from "react";

function useSlideCarousel(contents) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const animateSlide = () => {
      if (!isAnimating) {
        setIsAnimating(true);
        const nextIndex = (currentIndex + 1) % contents.length;
        setCurrentIndex(nextIndex);
        const nextContent = contents[nextIndex];

        const container = containerRef.current;

        if (container) {
          container.style.transition = "transform 0.5s ease-in-out";
          container.style.transform = "translateY(100%)"; // Move current content up

          container.addEventListener(
            "transitionend",
            () => {
              container.innerHTML = `<div class="slide-item">${nextContent}</div>`;
              container.style.transition = "none"; // Remove transition temporarily
              container.style.transform = "translateY(-100%)"; // Move new content above
              setIsAnimating(false);

              setTimeout(() => {
                container.style.transition = "transform 0.5s ease-in-out";
                container.style.transform = "translateY(0)"; // Move new content down
              }, 10);
            },
            { once: true }
          );
        }
      }
    };

    const intervalId = setInterval(() => {
      animateSlide();
    }, 1500);

    return () => {
      clearInterval(intervalId);
      if (containerRef.current) {
        containerRef.current.removeEventListener("transitionend", () => {});
      }
    };
  }, [currentIndex, isAnimating, contents]);

  return { containerRef };
}

export default useSlideCarousel;
