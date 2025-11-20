import { motion } from "motion/react";

export function WhatIsRardi() {
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
        {/* Text content in bordered sections */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Left card */}
          <motion.div 
            className="border-2 border-[#333333] p-6 sm:p-8 lg:p-10 bg-[#f2f2f2] relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 border-l-2 border-b-2 border-[#333333]" />
            <motion.h2 
              className="text-[#333333] mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              An autonomous AI that works inside your network — not in the cloud.
            </motion.h2>
          </motion.div>

          {/* Right card */}
          <motion.div 
            className="border-2 border-[#333333] p-6 sm:p-8 lg:p-10 bg-[#f2f2f2] relative flex items-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {/* Corner accent */}
            <div className="absolute bottom-0 left-0 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 border-r-2 border-t-2 border-[#333333]" />
            <motion.p 
              className="text-[#333333]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              Rardi is an on-premise AI that behaves like a real network technician. It monitors your entire infrastructure, understands operational context, diagnoses issues instantly, fixes problems safely, and supports users in real time. Everything runs locally, under your control.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}