import { motion } from "framer-motion";
import { fadeIn } from "./lib/motion";
import { SiReact, SiTypescript, SiNodedotjs, SiThreedotjs } from "react-icons/si";

export function Skills() {
  const skills = [
      { icon: SiReact, name: "React" },
          { icon: SiTypescript, name: "TypeScript" },
              { icon: SiNodedotjs, name: "Node.js" },
                  { icon: SiThreedotjs, name: "Three.js" },
                    ];

                      return (
                          <section className="relative w-full min-h-screen mx-auto p-6">
                                <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
                                      
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                                    {skills.map((skill, index) => (
                                                              <motion.div
                                                                          key={skill.name}
                                                                                      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                                                                                                  initial="hidden"
                                                                                                              animate="show"
                                                                                                                          className="flex flex-col items-center"
                                                                                                                                    >
                                                                                                                                                <skill.icon className="w-16 h-16 text-primary mb-2" />
                                                                                                                                                            <span className="text-foreground font-medium">{skill.name}</span>
                                                                                                                                                                      </motion.div>
                                                                                                                                                                              ))}
                                                                                                                                                                                    </div>
                                                                                                                                                                                        </section>
                                                                                                                                                                                          );
                                                                                                                                                                                          }
