import { useState, useEffect, useRef, RefObject } from 'react';

// Extend IntersectionObserverInit to include our custom property
interface UseInViewOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

export const useInView = <T extends HTMLElement,>(options?: UseInViewOptions): [RefObject<T>, boolean] => {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const { triggerOnce = false, ...observerOptions } = options || {};

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (triggerOnce) {
          // Unobserve the element after it's been seen once.
          observer.unobserve(entry.target);
        }
      }
    }, observerOptions);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
    // Note on dependency: Passing an object literal to `options` may cause this effect to
    // re-run on every render. For performance-critical applications, consider memoizing the
    // options object before passing it to the hook.
  }, [options]);

  return [ref, isInView];
};
