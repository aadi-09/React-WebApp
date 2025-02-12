import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/lib/constants";

export function Projects() {
  return (
      <section className="relative w-full min-h-screen mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
                  
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {projects.map((project, index) => (
                                          <motion.div
                                                      key={project.name}
                                                                  variants={fadeIn("up", "spring", index * 0.5, 0.75)}
                                                                              initial="hidden"
                                                                                          animate="show"
                                                                                                    >
                                                                                                                <Card>
                                                                                                                              <CardContent className="p-5">
                                                                                                                                              <img
                                                                                                                                                                src={project.image}
                                                                                                                                                                                  alt={project.name}
                                                                                                                                                                                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                                                                                                                                                                                                    />
                                                                                                                                                                                                                                    <h3 className="text-xl font-bold">{project.name}</h3>
                                                                                                                                                                                                                                                    <p className="text-muted-foreground mt-2">{project.description}</p>
                                                                                                                                                                                                                                                                  </CardContent>
                                                                                                                                                                                                                                                                              </Card>
                                                                                                                                                                                                                                                                                        </motion.div>
                                                                                                                                                                                                                                                                                                ))}
                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                          </section>
                                                                                                                                                                                                                                                                                                            );