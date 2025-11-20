import {
  PlugIcon,
  BrainIcon,
  EyeIcon,
  WrenchIconSmall,
  DocumentIcon,
  HeadsetIcon
} from "./illustrations/TimelineIcons";
import { motion } from "motion/react";

interface TimelineStepProps {
  icon: React.ReactNode;
  title: string;
  isLast?: boolean;
  index: number;
}

function TimelineStep({ icon, title, isLast, index }: TimelineStepProps) {
  return (
    <motion.div 
      className="flex flex-col items-center relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.15,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
    >
      <motion.div 
        className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 border-2 border-[#333333] bg-[#f2f2f2] flex items-center justify-center relative"
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.6, 
          delay: index * 0.15 + 0.2,
          ease: [0.34, 1.56, 0.64, 1]
        }}
      >
        {/* Small grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(to right, #333333 1px, transparent 1px),
              linear-gradient(to bottom, #333333 1px, transparent 1px)
            `,
            backgroundSize: '10px 10px'
          }}
        />
        <div className="relative z-10">{icon}</div>
      </motion.div>
      <div className="mt-4 sm:mt-6">
        <h3 className="text-center text-sm sm:text-base">{title}</h3>
      </div>
    </motion.div>
  );
}

export function HowItWorks() {
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
        <motion.div 
          className="mb-8 sm:mb-10 lg:mb-12 xl:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[#333333] text-center">How Rardi Works</h2>
        </motion.div>
        
        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Continuous connecting line */}
          <motion.div 
            className="absolute top-10 lg:top-12 left-8 lg:left-12 right-8 lg:right-12 h-[2px] bg-[#333333]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1.5, 
              delay: 0.3,
              ease: [0.21, 0.47, 0.32, 0.98]
            }}
            style={{ transformOrigin: 'left' }}
          />
          
          <div className="grid grid-cols-6 gap-4 lg:gap-8">
            <TimelineStep index={0} icon={<PlugIcon />} title="Connect" />
            <TimelineStep index={1} icon={<BrainIcon />} title="Learn" />
            <TimelineStep index={2} icon={<EyeIcon />} title="Monitor" />
            <TimelineStep index={3} icon={<WrenchIconSmall />} title="Fix" />
            <TimelineStep index={4} icon={<DocumentIcon />} title="Explain" />
            <TimelineStep index={5} icon={<HeadsetIcon />} title="Support" isLast />
          </div>
        </div>

        {/* Mobile/Tablet Timeline - Stacked */}
        <div className="md:hidden grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
          <TimelineStep index={0} icon={<PlugIcon />} title="Connect" isLast />
          <TimelineStep index={1} icon={<BrainIcon />} title="Learn" isLast />
          <TimelineStep index={2} icon={<EyeIcon />} title="Monitor" isLast />
          <TimelineStep index={3} icon={<WrenchIconSmall />} title="Fix" isLast />
          <TimelineStep index={4} icon={<DocumentIcon />} title="Explain" isLast />
          <TimelineStep index={5} icon={<HeadsetIcon />} title="Support" isLast />
        </div>
      </div>
    </section>
  );
}