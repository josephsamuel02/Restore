import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const backgroundImages = [
    "/images/2.jpg",
    "/images/11.jpg",
    "/images/12.jpg",
    "/images/Banner image.jpg",
    "/images/Banner image 2.jpg",
    "/images/Banner image 3.jpg",
    "/images/2.jpg",
    "/images/11.jpg",
    "/images/12.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="w-full h-[500px] relative overflow-hidden ">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url("${backgroundImages[currentIndex]}")`,
          }}
        />
      </AnimatePresence>

      {/* Banner Content */}
      <div className="relative flex flex-row z-10 w-full h-full p-0 bg-gradient-to-r from-black to-transparent">
        <div className="mx-1 pl-12 w-full md:w-3/5 pt-28 h-11/12 flex flex-col  ">
          <h3 className="my-auto md:ml-10 text-[40px] md:text-[50px] text-white font-semibold font-Raleway">
            Restoring hope amongst the persecuted.{" "}
          </h3>
          <h3 className="my-auto m-0 md:ml-10 text-[20px] text-white font-Nunito">
            Building resilience among crisis-impacted communities.
          </h3>
          <a
            style={{ textDecoration: "none" }}
            className="flex items-center m-3 w-[151px] h-[47px] md:w-[231px] md:h-[66px] md:py-5  text-white font-Railway text-[16px] md:text-[20px] text-center shadow   my-20  rounded backdrop-opacity-75 bg-primary hover:bg-hover cursor-pointer"
          >
            <span className="mx-auto">Partner with us</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
