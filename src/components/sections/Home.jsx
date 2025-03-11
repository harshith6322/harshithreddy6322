/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative  bg-gradient-to-br from-purple-600/20 to-blue-500/20 px-5 "
    >
      <RevealOnScroll>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl mx-auto"
        >
          <div className="text-center md:text-left z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-br from-purple-600 to-blue-500 bg-clip-text text-transparent leading-tight">
              Hi, I'm Harshith
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto md:mx-0">
              I'm a full-stack developer who loves crafting clean, scalable web
              applications. My goal is to build solutions that offer both
              exceptional performance and a delightful user experience.
            </p>

            <div className="flex flex-row justify-center md:justify-start space-x-2 md:space-x-4">
              <div className="inline-block bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 md:p-1 rounded-full transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <a
                  href="#projects"
                  className="block bg-black text-white py-2 md:py-3 px-3 md:px-6 rounded-full font-medium text-sm md:text-base"
                >
                  View projects
                </a>
              </div>

              <div className="inline-block bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 md:p-1 rounded-full transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <a
                  href="#contact"
                  className="block bg-black text-white py-2 md:py-3 px-3 md:px-6 rounded-full font-medium text-sm md:text-base"
                >
                  Contact Me
                </a>
              </div>

              <div className="inline-block bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 md:p-1 rounded-full transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <a
                  href="../public/File/HarshithReddy_Resume.pdf"
                  className="block bg-black text-white py-2 md:py-3 px-3 md:px-6 rounded-full font-medium text-sm md:text-base"
                  target="_blank"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-0 md:w-1/2 flex flex-col items-center ">
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
              className="rounded-full bg-gradient-to-br from-purple-600 to-blue-500 p-1"
            >
              <img
                src="/MY.gif"
                alt="Harshith Profile"
                className="w-48 h-48 md:w-60 md:h-60 rounded-full shadow-lg"
              />
            </motion.div>

            <div className="flex space-x-6 mt-4">
              <a
                href="https://github.com/harshith6322"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Github size={32} />
              </a>

              <a
                href="https://www.linkedin.com/in/harshith-reddy-212279211?utm_source=share&utm_campaign=share_via&utm_con"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Linkedin size={32} />
              </a>
            </div>
          </div>
        </motion.div>
      </RevealOnScroll>
    </section>
  );
};
