import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
      return (
            <section className="relative w-full min-h-screen mx-auto p-6">
                  <motion.div
                          variants={fadeIn("", "", 0.1, 1)}
                                  className="mt-4 text-muted-foreground text-[17px] max-w-3xl leading-[30px]"
                                        >
                                                <Card>
                                                          <CardContent className="pt-6">
                                                                      <div className="flex items-center gap-4 mb-6">
                                                                                    <img
                                                                                                    src="https://images.unsplash.com/photo-1573496799515-eebbb63814f2"
                                                                                                                    alt="Profile"
                                                                                                                                    className="w-24 h-24 rounded-full object-cover"
                                                                                                                                                  />
                                                                                                                                                                <div>
                                                                                                                                                                                <h2 className="text-2xl font-bold text-foreground">About Me</h2>
                                                                                                                                                                                                <p className="text-muted-foreground">Full Stack Developer</p>
                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                          </div>

                                                                                                                                                                                                                                      <p className="mb-4">
                                                                                                                                                                                                                                                    I'm a skilled software developer with experience in TypeScript and
                                                                                                                                                                                                                                                                  JavaScript, and expertise in frameworks like React, Node.js, and
                                                                                                                                                                                                                                                                                Three.js. I'm a quick learner and collaborate closely with clients to
                                                                                                                                                                                                                                                                                              create efficient, scalable, and user-friendly solutions that solve
                                                                                                                                                                                                                                                                                                            real-world problems.
                                                                                                                                                                                                                                                                                                                        </p>
                                                                                                                                                                                                                                                                                                                                  </CardContent>
                                                                                                                                                                                                                                                                                                                                          </Card>
                                                                                                                                                                                                                                                                                                                                                </motion.div>
                                                                                                                                                                                                                                                                                                                                                    </section>
      );
}
      )
}