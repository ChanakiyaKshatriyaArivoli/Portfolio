import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { SiFramer } from "react-icons/si";
import { FaUnity } from "react-icons/fa6";

const iconVariants = (duration) => ({
  initial: { y: 0 },  // Starting position
  animate: {
    y: [0, 80, 0],  // Moves the icon down by 40px and then back to its original position
    transition: {
      duration: duration,  // Duration of the movement
      ease: "linear",
      repeat: Infinity,  // Infinite repeat
      repeatType: "reverse",  // Reverse the animation after it finishes
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        id="technologies"
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 2 }}
        className="flex flex-wrap items-center justify-center gap-12"
      >
        {[
          { Icon: RiReactjsLine, color: "text-cyan-400", duration: 2 },
          { Icon: FaUnity, color: "text-white", duration: 3 },
          { Icon: SiMongodb, color: "text-green-500", duration: 2 },
          { Icon: SiFramer, color: "text-white", duration: 3 },
          { Icon: FaNodeJs, color: "text-green-500", duration: 2 },
          { Icon: RiTailwindCssFill, color: "text-fuchsia-600", duration: 3 },
        ].map(({ Icon, color, duration }, index) => (
          <motion.div
            key={index}
            variants={iconVariants(duration)}
            initial="initial"
            animate="animate"
            className="relative p-1 rounded-2xl border-4 border-neutral-900 transition-all duration-500 hover:border-transparent group"
          >
            <motion.div className="relative z-10 p-4 rounded-2xl bg-neutral-900">
              <Icon className={`text-7xl ${color}`} />
            </motion.div>
            <div className="absolute inset-0 rounded-2xl border-4 border-transparent transition-all duration-500 group-hover:border-transparent group-hover:bg-gradient-to-r group-hover:from-pink-300 group-hover:via-slate-500 group-hover:to-purple-500"></div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
