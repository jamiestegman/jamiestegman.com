import { RefObject, useEffect, useState } from "react";

export default function useOnScreen(
    ref: RefObject<HTMLElement>,
    rootMargin = "0px",
) {
    const [isVisible, setIsVisible] = useState(false);
    const [hasBeenVisible, setHasBeenVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (el == null) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
                if (entry.isIntersecting) setHasBeenVisible(true);
            },
            { rootMargin },
        );
        observer.observe(el);
        return () => {
            if (el == null) return;
            observer.unobserve(el);
        };
    }, [ref, rootMargin]);

    return {
        isVisible,
        hasBeenVisible,
    };
}
