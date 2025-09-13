import { useEffect, useRef, useState } from "react";

export const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);
  const [scrollDirection, setScrollDirection] = useState("down");


    // Track scroll direction
    useEffect(() => {
        let lastScrollY = window.scrollY;

        const updateScrollDirection = () => {
            const currentScrollY = window.scrollY;
            setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", updateScrollDirection);

        return () => {
            window.removeEventListener("scroll", updateScrollDirection);
        };
    }, []);



    useEffect(() => {
        const element = ref.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    element.classList.add("visible");
                    element.classList.remove("scroll-up", "scroll-down");
                    element.classList.add(scrollDirection === "down" ? "scroll-down" : "scroll-up");

                }
                else{
                    element.classList.remove("visible", "scroll-up", "scroll-down");
                }
            },
            { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
        );

        if (element) observer.observe(element);
        return () => observer.disconnect();
    },[scrollDirection]);
    return (
        <div ref={ref} className="reveal">
            {children}
        </div>
    );
};