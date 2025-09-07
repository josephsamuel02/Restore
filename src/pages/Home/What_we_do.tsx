import React, { useEffect, useRef, useState } from "react";

const WhatWeDo = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    // Respect user's reduced motion preference
    const prefersReduced = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const el = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(el);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`my-24 w-full items-center flex-col bg-white flex md:px-10 transition-transform transition-opacity duration-700 ease-out transform
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      <h3 className="text-center text-3xl my-8 text-black">What we do</h3>

      <div className="flex w-full h-auto md:w-10/12 m-auto py-10 md:px-10 items-center flex-col md:flex-row bg-white rounded-xl shadow-xl">
        <img
          src="./images/Main restore logo.jpg"
          alt="Main restore logo"
          className="flex mx-auto w-36 h-14 m-4 mb-14"
        />
        <div className="w-auto h-auto m-auto items-center flex-row bg-white flex px-10 ">
          <p className="text-sm md:text-lg mb-8 text-gray-800">
            To provide holistic support, empowerment, and training to crisis-affected
            communities, fostering spiritual growth, skill development, and resilience, as we
            work together to restore hope, dignity, and purpose in the lives of those we serve.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
