import {
  MultiNodeMap,
  MagnifyingGlass,
  WrenchIcon,
  LaptopCheck,
  ChatGear,
  PersonShield,
  NodeGraph,
  ServerRack
} from "./illustrations/FeatureIcons";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

interface FeatureBlockProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  index: number;
  onHoverChange: (isHovered: boolean) => void;
  firstWordColor: string;
}

function FeatureBlock({ icon, title, children, index, onHoverChange, firstWordColor }: FeatureBlockProps) {
  const words = title.split(' ');
  const firstWord = words[0];
  const restOfTitle = words.slice(1).join(' ');

  return (
    <motion.div
      className="min-w-[350px] sm:min-w-[450px] space-y-6 relative p-6 sm:p-8 border-2 border-[#333333] bg-[#f2f2f2]"
      initial={{ opacity: 0, x: 50, rotateY: -15 }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      onHoverStart={() => onHoverChange(true)}
      onHoverEnd={() => onHoverChange(false)}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
    >
      {/* Animated grid background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.06 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
        style={{
          backgroundImage: `
            linear-gradient(to right, #333333 1px, transparent 1px),
            linear-gradient(to bottom, #333333 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      />
      
      <motion.div
        className="flex justify-start relative z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: index * 0.1 + 0.3,
          ease: [0.34, 1.56, 0.64, 1]
        }}
      >
        {icon}
      </motion.div>
      <h3 className="text-[#333333] relative z-10">
        <span style={{ color: firstWordColor }}>{firstWord}</span> {restOfTitle}
      </h3>
      <div className="text-[#333333] space-y-3 relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

export function FeatureGrid() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const cardsPerView = 2;
  const totalCards = 8;
  const maxIndex = totalCards - cardsPerView;

  // Auto-scroll effect - pauses when hovering, always starts from first card
  useEffect(() => {
    // Reset to first card on mount
    setCurrentIndex(0);
  }, []);

  useEffect(() => {
    if (isHovered) return; // Don't scroll when hovering
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) {
          return 0; // Reset to beginning
        }
        return prev + 1;
      });
    }, 6000); // Change card every 6 seconds (slower)

    return () => clearInterval(interval);
  }, [maxIndex, isHovered]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const handleHoverChange = (hovered: boolean) => {
    setIsHovered(hovered);
  };

  const features = [
    {
      icon: <MultiNodeMap />,
      title: "Monitors Your Entire Infrastructure",
      firstWordColor: "#22c55e", // Green - active monitoring/healthy
      content: (
        <>
          <p>Rardi continuously observes all layers:</p>
          <ul className="space-y-2 list-none">
            <li>• LAN, WAN, Wi-Fi</li>
            <li>• Switches, routers, firewalls</li>
            <li>• Servers, VMs, endpoints</li>
            <li>• DNS, DHCP, RADIUS, AD</li>
            <li>• Authentication flows</li>
            <li>• Apps (email, SSO, ERP, Moodle)</li>
            <li>• Certificates, configs, policies</li>
            <li>• Latency, throughput, anomalies</li>
          </ul>
        </>
      )
    },
    {
      icon: <MagnifyingGlass />,
      title: "Detects, Diagnoses & Explains Issues",
      firstWordColor: "#f59e0b", // Amber - detection/warning/analysis
      content: (
        <>
          <p>When something breaks, Rardi:</p>
          <ul className="space-y-2 list-none">
            <li>• Analyzes logs & metrics</li>
            <li>• Correlates patterns</li>
            <li>• Identifies root cause</li>
            <li>• Explains in clear language</li>
            <li>• Recommends or executes the safest fix</li>
          </ul>
          <div className="mt-4 p-4 border-l-2 border-[#333333]">
            <p className="italic">
              "Wi-Fi failures in Residence Hall. AP RH-17 offline. DHCP scope exhausted. Root cause: IP exhaustion leading to authentication failures."
            </p>
          </div>
        </>
      )
    },
    {
      icon: <WrenchIcon />,
      title: "Automatically Fixes Problems (Safely)",
      firstWordColor: "#22c55e", // Green - fixes/success/safe
      content: (
        <>
          <p>Safe, reversible actions:</p>
          <ul className="space-y-2 list-none">
            <li>• Reboot APs</li>
            <li>• Restart services</li>
            <li>• Fix DNS/DHCP</li>
            <li>• Reset accounts</li>
            <li>• Fix VLAN/routing</li>
            <li>• Patch vulnerabilities</li>
            <li>• Roll back configs</li>
            <li>• Enforce policies</li>
          </ul>
        </>
      )
    },
    {
      icon: <LaptopCheck />,
      title: "Manages All Devices & Endpoints",
      firstWordColor: "#3b82f6", // Blue - management/control/coordination
      content: (
        <ul className="space-y-2 list-none">
          <li>• OS patching</li>
          <li>• App deployment</li>
          <li>• Domain join</li>
          <li>• Laptop provisioning</li>
          <li>• Compliance enforcement</li>
          <li>• Profile migrations</li>
        </ul>
      )
    },
    {
      icon: <ChatGear />,
      title: "AI Helpdesk",
      firstWordColor: "#8b5cf6", // Purple - AI/intelligent/support
      content: (
        <>
          <p>Users interact directly:</p>
          <ul className="space-y-2 list-none">
            <li>• "I can't log in."</li>
            <li>• "Wi-Fi is slow."</li>
            <li>• "Unlock my account."</li>
            <li>• "Set up a laptop."</li>
          </ul>
          <p className="mt-4">Immediate diagnostics + action.</p>
        </>
      )
    },
    {
      icon: <PersonShield />,
      title: "Identity & Permission Awareness",
      firstWordColor: "#ef4444", // Red - identity/security/critical
      content: (
        <>
          <p>Understands:</p>
          <ul className="space-y-2 list-none">
            <li>• User roles</li>
            <li>• Permissions</li>
            <li>• System access</li>
            <li>• Policies</li>
          </ul>
        </>
      )
    },
    {
      icon: <NodeGraph />,
      title: "Infrastructure Intelligence Layer",
      firstWordColor: "#3b82f6", // Blue - infrastructure/intelligence/data
      content: (
        <>
          <p>Builds internal models of:</p>
          <ul className="space-y-2 list-none">
            <li>• Devices</li>
            <li>• Topology</li>
            <li>• Dependencies</li>
            <li>• User activity</li>
            <li>• Health metrics</li>
          </ul>
        </>
      )
    },
    {
      icon: <ServerRack />,
      title: "Fully On-Premises",
      firstWordColor: "#22c55e", // Green - fully/complete/secure
      content: (
        <ul className="space-y-2 list-none">
          <li>• No cloud calls</li>
          <li>• No external data</li>
          <li>• Fully local inference</li>
          <li>• Ideal for secure orgs</li>
        </ul>
      )
    }
  ];

  return (
    <section className="w-full bg-[#f2f2f2] border-t border-[#333333]/20 relative overflow-hidden">
      {/* Background grid */}
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
          className="mb-8 sm:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[#333333]">What Rardi Does</h2>
        </motion.div>
        
        <div className="relative">
          <div className="overflow-x-auto overflow-y-hidden scrollbar-hide">
            <style>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
              .scrollbar-hide {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}</style>
            <motion.div 
              className="flex gap-4 sm:gap-6"
              animate={{ x: -currentIndex * (450 + 24) }}
              transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              {features.map((feature, index) => (
                <FeatureBlock key={index} index={index} icon={feature.icon} title={feature.title} onHoverChange={handleHoverChange} firstWordColor={feature.firstWordColor}>
                  {feature.content}
                </FeatureBlock>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3 sm:gap-4 justify-center mt-6 sm:mt-8">
            <Button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="bg-[#333333] text-[#f2f2f2] hover:bg-[#1a1a1a] disabled:opacity-30 disabled:cursor-not-allowed px-4 sm:px-6 py-4 sm:py-6 h-auto"
              style={{ borderRadius: 0 }}
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <Button
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              className="bg-[#333333] text-[#f2f2f2] hover:bg-[#1a1a1a] disabled:opacity-30 disabled:cursor-not-allowed px-4 sm:px-6 py-4 sm:py-6 h-auto"
              style={{ borderRadius: 0 }}
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}