import { useEffect, useRef } from "react";

export const useCardAnimation = (index, isEven) => {
  const cardRef = useRef(null);

  useEffect(() => {
    let lastScroll = window.scrollY;
    // Breakpoint to change from one effect to the other one.
    const isMobile = window.innerWidth < 768;

    const getElements = () => ({
      img: cardRef.current?.querySelector("img"),
      content: cardRef.current?.querySelector(".content"),
    });

    const toggleClasses = (elements, shouldHide) => {
      const { img, content } = elements;
      if (!img || !content) return;

      if (shouldHide) {
        // Apply a different effect for mobile/tablet.
        if (isMobile) {
          cardRef.current?.classList.remove("slide-in-up");
          cardRef.current?.classList.add("card-hidden");
        } else {
          img.classList.remove("slide-in-left", "slide-in-right");
          img.classList.add("card-hidden");
          content.classList.remove("slide-in-left", "slide-in-right", "delay-200");
          content.classList.add("card-hidden");
        }
      } else {
        if (isMobile) {
          cardRef.current?.classList.remove("card-hidden");
        } else {
          img.classList.remove("card-hidden");
          content.classList.remove("card-hidden");
        }
      }
    };
    // Set initial visibility for first card, if it's not needed, remove it and all the index references
    if (index === 0) {
      toggleClasses(getElements(), false);
    }

    const handleScroll = () => {
      if (window.scrollY < 100 && index !== 0) {
        toggleClasses(getElements(), true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isScrollingUp = window.scrollY < lastScroll;
        lastScroll = window.scrollY;

        if (entry.isIntersecting && !isScrollingUp && index !== 0) {
          if (isMobile) {
            cardRef.current?.classList.add("slide-in-up");
            cardRef.current?.classList.remove("card-hidden");
          } else {
            const { img, content } = getElements();
            if (isEven) {
              img.classList.add("slide-in-left");
              img.classList.remove("card-hidden");
              content.classList.add("slide-in-right", "delay-200");
              content.classList.remove("card-hidden");
            } else {
              img.classList.add("slide-in-right");
              img.classList.remove("card-hidden");
              content.classList.add("slide-in-left", "delay-200");
              content.classList.remove("card-hidden");
            }
          }
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (cardRef.current && index !== 0) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isEven, index]);

  return cardRef;
};
