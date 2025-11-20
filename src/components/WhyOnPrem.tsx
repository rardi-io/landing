import { ShieldBuilding } from "./illustrations/FeatureIcons";
import { motion } from "framer-motion";

export function WhyOnPrem() {
  return (
    <section className="w-full bg-[#f2f2f2] border-t border-[#333333]/20 relative overflow-hidden">
      {/* Animated grid background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: `
            linear-gradient(to right, #333333 1px, transparent 1px),
            linear-gradient(to bottom, #333333 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-center">
          <motion.div 
            className="space-y-4 sm:space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <h2 className="text-[#333333]">
              Your data never leaves your network.
            </h2>
            <p className="text-[#333333]">
              Rardi runs exclusively on-premises for maximum privacy. Logs, configurations, and telemetry remain fully within your environment — ideal for universities, enterprises, healthcare, and government.
            </p>
          </motion.div>
          <motion.div 
            className="flex justify-center mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <motion.div
              className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-none"
              animate={{ 
                y: [0, -8, 0],
                scale: [1, 1.03, 1]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ShieldBuilding />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}