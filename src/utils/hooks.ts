import { useState, useEffect } from 'react';
import { IntersectionObserverOptions } from '@/types/common';

/**
 * Hook to track the current scroll position
 * @returns Current Y scroll position
 */
export const useScrollPosition = (): number => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', updatePosition, { passive: true });
    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
};

/**
 * Hook to detect when an element is visible in the viewport
 * @param elementRef - Reference to the element to observe
 * @param options - IntersectionObserver options
 * @returns Boolean indicating if element is visible
 */
export const useIntersectionObserver = (
  elementRef: React.RefObject<Element>,
  options?: IntersectionObserverOptions
): boolean => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      options
    );

    observer.observe(currentElement);

    return () => {
      observer.unobserve(currentElement);
    };
  }, [elementRef, options]);

  return isVisible;
};
