import {Button} from "./ui/button";
import {NetworkDiagram} from "./illustrations/NetworkDiagram";
import {motion} from "motion/react";

export function Hero() {
    return (
        <section className="w-full bg-[#f2f2f2] relative overflow-hidden">
            {/* Animated grid background */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{opacity: 0}}
                animate={{opacity: 0.04}}
                transition={{duration: 1.2}}
                style={{
                    backgroundImage: `
            linear-gradient(to right, #333333 1px, transparent 1px),
            linear-gradient(to bottom, #333333 1px, transparent 1px)
          `,
                    backgroundSize: '30px 30px'
                }}
            />

            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 relative z-10">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
                    <motion.div
                        className="space-y-6 lg:space-y-8"
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98]}}
                    >
                        <motion.h1
                            className="text-[#333333] font-black"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98]}}
                        >
                            The World's First <span className={"text-[#555555]"}>AI</span> Network Technician
                        </motion.h1>
                        <motion.p
                            className="text-[#333333]"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98]}}
                        >
                            Rardi lives inside your network and works like a full-time technician — monitoring
                            everything, diagnosing issues instantly, fixing problems automatically, managing devices,
                            and supporting users. All locally. All securely. All the time.
                        </motion.p>
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.6, ease: [0.21, 0.47, 0.32, 0.98]}}
                        >
                            <Button
                                className="bg-[#333333] text-[#f2f2f2] hover:bg-[#1a1a1a] px-6 sm:px-8 py-5 sm:py-6 h-auto w-full sm:w-auto"
                                style={{borderRadius: 0}}
                                onClick={
                                    () => window.location.href = "mailto:team@rardi.io"
                                }
                            >
                                Contact the team
                            </Button>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="flex justify-center md:justify-start mt-8 md:mt-0"
                        initial={{opacity: 0, scale: 0.9}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 1, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98]}}
                    >
                        <div className="w-full max-w-[400px] md:max-w-none">
                            <NetworkDiagram/>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}