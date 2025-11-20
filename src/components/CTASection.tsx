import { Button } from "./ui/button";
import { motion } from "motion/react";

export function CTASection() {
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
        <div className="max-w-[700px] mx-auto text-center space-y-6 sm:space-y-8">
          <motion.h2 
            className="text-[#333333]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            Bring Rardi into your organization.
          </motion.h2>
          <motion.p 
            className="text-[#333333]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            Be among the first to deploy an autonomous on-prem AI Network Technician.
          </motion.p>
          <motion.div 
            className="flex justify-center pt-2 sm:pt-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <Button 
              className="bg-[#333333] text-[#f2f2f2] hover:bg-[#1a1a1a] px-8 sm:px-10 lg:px-12 py-5 sm:py-6 lg:py-7 h-auto w-full sm:w-auto"
              style={{ borderRadius: 0 }}
              onClick={() => {
                  window.location.href = "mailto:team@rardi.io";
              }}
            >
              Get Early Access
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}