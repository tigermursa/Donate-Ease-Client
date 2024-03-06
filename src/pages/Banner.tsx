import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

const Banner = () => {
  const imageLinks = useMemo(
    () => [
      "https://images.unsplash.com/photo-1609139003551-ee40f5f73ec0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1683134261048-dfb427f8becf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://www.thknh.org.sg/wp-content/uploads/2021/10/Donation-in-kind-1-scaled-e1635155009580.jpg",
      "https://gapio.in/wp-content/uploads/2022/05/1_4XRAX4obUOvMVqWibVCneQ.jpeg",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1663089601352-780e4998cc0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1663091594914-0988859bfa92?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    []
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imageAnimation = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const textAnimation1 = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const textAnimation2 = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const buttonAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageLinks.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [imageLinks]);

  return (
    <motion.div
      className="flex flex-col justify-center items-center mt-24 mb-10"
      id="home"
    >
      {/* text */}
      <div className="text-center space-y-6 mb-5">
        <motion.p
          initial="hidden"
          animate="visible"
          variants={textAnimation1}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-lg md:text-2xl font-semibold"
        >
          Donate Ease Specially Created for
        </motion.p>
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={textAnimation2}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-xl md:text-5xl font-semibold"
        >
          Charity, Nonprofit, Fundraising & Crowdfunding
        </motion.h2>
        <motion.button
          variants={buttonAnimation}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
          className="btn-primary"
        >
          Contact now
        </motion.button>
      </div>
      {/* Hero Image */}
      <motion.div
        variants={imageAnimation}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <img
          className="max-w-full h-[250px] md:h-[350px] lg:h-[550px] rounded-3xl"
          src={imageLinks[currentImageIndex]}
          alt=""
        />
      </motion.div>
    </motion.div>
  );
};

export default Banner;
