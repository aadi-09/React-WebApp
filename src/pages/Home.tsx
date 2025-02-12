import { Suspense } from "react";
import { Hero } from "./components/Hero.tsx";
import { About } from "./components/About.tsx";
import { Projects } from "./components/Projects.tsx";
import { Skills } from "./components/Skills.tsx";
import { Contact } from "./components/Contact.tsx";
import { Stars } from "./components/canvas/Stars.tsx";
import { Computer } from "./components/canvas/Computer.tsx";

export default function Home() {
  return (
      <div className="relative w-full h-screen overflow-hidden bg-background">
            <div className="absolute inset-0">
                    <Stars />
                          </div>
                                        <div className="relative z-0">
                                                  <section className="relative w-full h-screen mx-auto">
                                                              <Hero />
                                                                          <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
                                                                                        <Computer />
                                                                                                    </div>
                                                                                                              </section>

                                                                                                                        <About />
                                                                                                                                  <Skills />
                                                                                                                                            <Projects />
                                                                                                                                                      <Contact />
                                                                                                                                                              </div>
                                                                                                                                                                        </div>
                                                                                                                                                                          );
                                                                                                                                                                          }
