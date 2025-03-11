/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "Sass",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Redux",
    "TailwindCSS",
  ];

  const backendSkills = ["Node.js", "Express.js", "Hono.js", "JWT", "Rest API"];
  const databaseAndOrm = ["MongoDB", "Mongoose"];
  const devopsAndTools = [
    "Git",
    "GitHub",
    "Docker",
    "Jenkins/GitHub Actions",
    "Linux/Ubuntu",
    "Bash/Scripting",
    "Ansible",
    "AWS",
    "Kubernetes",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-black text-white"
    >
      <RevealOnScroll>
        <motion.div
          className="max-w-4xl mx-auto px-6 md:px-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-br from-purple-600 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="rounded-xl p-8 border border-transparent bg-gradient-to-br from-purple-600/20 to-blue-500/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <p className="text-gray-400 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 bg-gradient-to-br from-purple-600/20 to-blue-500/20 hover:from-purple-600/30 hover:to-blue-500/30 transition-all">
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-br from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-gradient-to-br from-indigo-600 to-pink-500 text-white py-1 px-3 rounded-full text-sm hover:opacity-90 hover:shadow-md transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 bg-gradient-to-br from-purple-600/20 to-blue-500/20 hover:from-purple-600/30 hover:to-blue-500/30 transition-all">
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-br from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  Backend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-gradient-to-br from-indigo-600 to-pink-500 text-white py-1 px-3 rounded-full text-sm hover:opacity-90 hover:shadow-md transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 bg-gradient-to-br from-purple-600/20 to-blue-500/20 hover:from-purple-600/30 hover:to-blue-500/30 transition-all">
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-br from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  DevOps & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {devopsAndTools.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-gradient-to-br from-indigo-600 to-pink-500 text-white py-1 px-3 rounded-full text-sm hover:opacity-90 hover:shadow-md transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 bg-gradient-to-br from-purple-600/20 to-blue-500/20 hover:from-purple-600/30 hover:to-blue-500/30 transition-all">
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-br from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  Database & ORM
                </h3>
                <div className="flex flex-wrap gap-2">
                  {databaseAndOrm.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-gradient-to-br from-indigo-600 to-pink-500 text-white py-1 px-3 rounded-full text-sm hover:opacity-90 hover:shadow-md transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border border-transparent bg-gradient-to-br from-purple-600/20 to-blue-500/20 hover:shadow-2xl transition-all flex flex-col">
              <div>
                <h3 className="text-xl font-bold mb-4 text-purple-500">
                  🏫 Education
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    <strong>B.E. in Computer Science</strong> - Sathyabama
                    Institute of Science and Technology (2020-2024)
                  </li>
                  <li>
                    Relevant Coursework: Web Development, Cloud Computing,
                    Databases, Operating System.
                  </li>
                </ul>
              </div>

              <div className="w-[60%] max-w-xs aspect-square rounded-full flex justify-center items-center mx-auto mt-auto bg-gradient-to-br from-purple-600/20 to-blue-500/20 border-4 border-purple-600 animate-border-color">
                <span className="text-2xl font-bold text-white">8.2 Cgpa</span>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-transparent bg-gradient-to-br from-purple-600/20 to-blue-500/20 hover:shadow-2xl transition-all flex flex-col">
              <div>
                <h3 className="text-xl font-bold mb-4 text-purple-500">
                  💼 Freelance Projects
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    I have successfully earned over $50K through various
                    freelance projects, showcasing my ability to deliver quality
                    work.
                  </li>
                  <li>
                    My expertise includes developing both static and dynamic web
                    pages customized to meet diverse client requirements.
                  </li>
                  <li>
                    I have created web pages that are 95% SEO optimized,
                    ensuring excellent Google indexing and visibility.
                  </li>
                </ul>
              </div>

              {/* <div className="w-[60%] max-w-xs aspect-square rounded-full flex justify-center items-center mx-auto mt-auto bg-gradient-to-br from-purple-600/20 to-blue-500/20 border-4 border-purple-600 border-t-blue-500">
                <span className="text-2xl font-bold text-white">9.0⭐</span>
              </div> */}
              <div className="w-[60%] max-w-xs aspect-square rounded-full flex justify-center items-center mx-auto mt-auto bg-gradient-to-br from-purple-600/20 to-blue-500/20 border-4 border-purple-600 animate-border-color">
                <span className="text-2xl font-bold text-white">9.0⭐</span>
              </div>
            </div>
          </div>
        </motion.div>
      </RevealOnScroll>
    </section>
  );
};
