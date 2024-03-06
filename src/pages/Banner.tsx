import { motion } from "framer-motion";

const Banner = () => {
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
          transition={{ duration: 1, ease: "easeInOut", delay: 1 }} // Delay the button animation by 1 second
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
          src="https://www.thknh.org.sg/wp-content/uploads/2021/10/Donation-in-kind-1-scaled-e1635155009580.jpg"
          alt=""
        />
      </motion.div>
    </motion.div>
  );
};

export default Banner;
