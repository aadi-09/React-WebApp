import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

export function Hero() {
  return (
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 px-6">
            <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-primary" />
                            <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-primary" />
                                  </div>

                                        <motion.div
                                                variants={fadeIn("right", "tween", 0.2, 1)}
                                                        initial="hidden"
                                                                animate="show"
                                                                        className="flex flex-col justify-center items-start"
                                                                              >
                                                                                      <h1 className="font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] text-foreground">
                                                                                                Hi, I'm <span className="text-primary">Jane</span>
                                                                                                        </h1>
                                                                                                                <p className="text-muted-foreground font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2">
                                                                                                                          I develop 3D visuals, user interfaces,
                                                                                                                                    <br className="sm:block hidden" />
                                                                                                                                              and web applications
                                                                                                                                                      </p>
                                                                                                                                                            </motion.div>
                                                                                                                                                                </div>
                                                                                                                                                                  );
                                                                                                                                                                  }
                                                                                                                                                                  