import aboutImg from "../assets/CKSideProfileSquare.JPG";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 id="aboutme" className="my-20 text-center text-4xl">
        About
        <span className="tracking-tight bg-gradient-to-r to-zinc-600 from-indigo-600 bg-clip-text text-transparent"> Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl"
              src={aboutImg}
              alt="about"
              style={{
                maskImage: "linear-gradient(to bottom, black 90%, transparent)",
                WebkitMaskImage: "linear-gradient(to bottom, black 90%, transparent)",
              }}
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">
              {ABOUT_TEXT.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
