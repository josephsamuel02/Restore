import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const backgroundImages = [
    "/images/Banner image.jpg",
    "https://res.cloudinary.com/promotion-army/image/upload/v1653064116/cld-sample.jpg",
    "/images/Banner image.jpg",
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
          <h3 className="my-auto md:ml-10 text-[50px] text-white font-semibold font-Raleway">
            Together, we restore lives.
          </h3>
          <h3 className="m-0 ml-10 text-[20px] text-white font-Nunito">
            Building resilience among crisis-impacted believers.
          </h3>
          <a className="m-3 w-[251px] h-[72px] py-5 text-white font-Poppins text-center shadow shadow-green-300 my-20 text-[20px] rounded backdrop-opacity-75 bg-[#165a08d7] hover:bg-[#347427d7] cursor-pointer">
            Partner with us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
