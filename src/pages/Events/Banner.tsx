import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const backgroundImages = ["/images/18.jpg", "/images/2.jpg", "/images/5.jpg"];

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
        <div className="mx-1 pl-7 w-full md:w-4/5 pt-20 h-11/12 flex flex-col  ">
          <h3 className="my-auto ml-2 md:ml-10 text-[50px] md:text-6xl text-white font-semibold font-Raleway">
            Our Outreach Events
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;
