/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-black text-white"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-br from-purple-600 to-blue-500 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_4px_15px_rgba(0,255,255,0.1)] transition-all bg-gradient-to-br from-purple-600/20 to-blue-500/20">
              <h3 className="text-xl font-bold mb-2 text-cyan-400">
                Medium_clone
              </h3>
              <p className="text-gray-400 mb-4">
                This project is a clone of Medium's blog post system, built with
                a modern tech stack that includes React.js, Tailwind CSS, and
                TypeScript for the frontend, and Hono.js for the backend. The
                system is designed for deployment on a serverless architecture
                on AWS lamda functions.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "ReactJs",
                  "TypeScript",
                  "NodeJs",
                  "Prisma",
                  "HonoJs",
                  "CI/CD",
                  "Docker",
                  "AWS",
                ].map((tech, key) => (
                  <motion.span
                    key={key}
                    className="bg-cyan-600/20 text-cyan-400 py-1 px-3 rounded-full text-sm hover:bg-cyan-600/30 hover:shadow-[0_2px_8px_rgba(0,255,255,0.1)] transition-all"
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <motion.a
                  href="https://github.com/harshith6322/Medium_clone"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors my-4"
                  whileHover={{ scale: 1.05, color: "#00e5ff" }}
                >
                  View Project →
                </motion.a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_4px_20px_rgba(255,105,180,0.1)] transition-all bg-gradient-to-br from-purple-600/20 to-blue-500/20">
              <h3 className="text-xl font-bold mb-2 text-pink-400">DALL-E </h3>
              <p className="text-gray-400 mb-4">
                A web application built with Node.js, Express, React, MongoDB,
                and Mongoose mimics DALL-E's functionality by generating images
                from textual descriptions. Users input descriptions via the
                frontend, processed by the backend. MongoDB stores data, while
                Mongoose simplifies database interactions. React manages the
                user interface, displaying generated images. This setup allows
                users to input descriptions and view corresponding images,
                similar to DALL-E.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React",
                  "TypeScript",
                  "Cloudinary",
                  "Tailwind",
                  "NodeJs",
                  "ExpressJs",
                  "AWS",
                ].map((tech, key) => (
                  <motion.span
                    key={key}
                    className="bg-pink-600/20 text-pink-400 py-1 px-3 rounded-full text-sm hover:bg-pink-600/30 hover:shadow-[0_2px_8px_rgba(255,105,180,0.1)] transition-all"
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <motion.a
                  href="https://github.com/harshith6322/DALL-E_MERN-APP"
                  className="text-pink-400 hover:text-pink-300 transition-colors my-4"
                  whileHover={{ scale: 1.05, color: "#ff69b4" }}
                >
                  View Project →
                </motion.a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-[0_4px_20px_rgba(75,0,130,0.1)] transition-all bg-gradient-to-br from-purple-600/20 to-blue-500/20">
              <h3 className="text-xl font-bold mb-2 text-indigo-400">CI/CD</h3>
              <p className="text-gray-400 mb-4">
                successfully automated a Node.js project CI/CD pipeline using
                Linux/Ubuntu for server environments, SSH for secure
                connections, and AWS for hosting in a VPC private subnet on EC2
                instances. Utilizing Jenkins integrated with GitHub webhooks and
                GitHub Actions, you implemented two separate workflows. Both
                workflows created Docker images of the application, pushing them
                to Docker Hub on every pull or push request. The CD pipeline
                deployed the application into a private subnet. You also used
                Prometheus/Grafana for real-time monitoring and analytics,
                ensuring optimal performance and observability throughout the
                deployment process.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Linux/Ubuntu",
                  "SSH",
                  "Jenkins",
                  "GitHub Actions",
                  "NodeJs App",
                  "AWS",
                  "Bash",
                  "Promethus/Grafna",
                ].map((tech, key) => (
                  <motion.span
                    key={key}
                    className="bg-indigo-600/20 text-indigo-400 py-1 px-3 rounded-full text-sm hover:bg-indigo-600/30 hover:shadow-[0_2px_8px_rgba(75,0,130,0.1)] transition-all"
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <motion.a
                  href="https://github.com/harshith6322/jenkins-githubactions-ci-cd-pj"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors my-4"
                  whileHover={{ scale: 1.05, color: "#4b0082" }}
                >
                  View Project →
                </motion.a>
              </div>
            </div>

            {/* Upcoming Projects */}
            <div className="p-6 rounded-xl border border-white/20 text-center bg-gray-800 bg-gradient-to-br from-purple-600/20 to-blue-500/20">
              <h3 className="text-xl font-bold mb-2 text-yellow-400">
                {" "}
                Coming Soon
              </h3>
              <p className="text-gray-400">
                Exciting projects are on the way! Stay tuned for updates.
              </p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
