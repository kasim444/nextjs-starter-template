import { useEffect, useRef, useState } from "react";

/**
 * It serves to understand whether the dom element after an element with a reference value is visible or not.
 */
export const useIsSticky = () => {
    const [isSticky, setIsSticky] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const cachedRef = ref.current;
        const observer = new IntersectionObserver(
            function (entries) {
                // no intersection with screen
                if (entries[0]?.intersectionRatio === 0) setIsSticky(false);
                // fully intersects with screen
                else if (entries[0]?.intersectionRatio === 1) setIsSticky(true);
            },
            { threshold: [0, 1] },
        );

        cachedRef && observer.observe(cachedRef);

        // unmount
        return function () {
            cachedRef && observer.unobserve(cachedRef);
        };
    }, []);

    return {
        ref,
        isSticky,
    };
};
