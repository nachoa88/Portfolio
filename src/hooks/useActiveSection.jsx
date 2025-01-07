import { useEffect, useRef, useState } from "react";

export function useActiveSection(sections, options = {}) {
  const [activeSection, setActiveSection] = useState("home");
  const lastScrollY = useRef(0);
  const sectionRatios = useRef(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const currentScrollY = window.scrollY;
        const isScrollingUp = currentScrollY < lastScrollY.current;
        lastScrollY.current = currentScrollY;

        // Update intersection ratios for each section
        entries.forEach((entry) => {
          sectionRatios.current.set(entry.target.id, entry.intersectionRatio);
        });

        // Get section with highest visibility
        const visibleSections = Array.from(sectionRatios.current.entries())
          .filter(([_, ratio]) => ratio > 0)
          .sort((a, b) => {
            if (isScrollingUp) {
              return b[1] - a[1]; // Higher ratio first when scrolling up
            }
            return b[1] - a[1]; // Higher ratio first when scrolling down
          });

        if (visibleSections.length > 0) {
          const [newActiveSection] = visibleSections[0];
          setActiveSection(newActiveSection);
        }
      },
      {
        root: null,
        rootMargin: "-30% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
        ...options,
      }
    );

    sections.forEach(({ sectionId }) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
        sectionRatios.current.set(sectionId, 0);
      }
    });

    return () => observer.disconnect();
  }, [sections, options]);

  return activeSection;
}
