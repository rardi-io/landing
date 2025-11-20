import { motion } from "motion/react";

export function NetworkDiagram() {
  return (
    <svg 
      width="100%" 
      height="100%" 
      viewBox="0 0 500 500" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="max-w-full h-auto"
    >
      {/* Pulse rings emanating from center */}
      <motion.circle 
        cx="250" 
        cy="250" 
        r="60" 
        stroke="#333333" 
        strokeWidth="2" 
        fill="none"
        initial={{ r: 60, opacity: 0.8 }}
        animate={{ r: [60, 120, 180], opacity: [0.8, 0.3, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
      />
      <motion.circle 
        cx="250" 
        cy="250" 
        r="60" 
        stroke="#333333" 
        strokeWidth="2" 
        fill="none"
        initial={{ r: 60, opacity: 0.8 }}
        animate={{ r: [60, 120, 180], opacity: [0.8, 0.3, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1 }}
      />
      <motion.circle 
        cx="250" 
        cy="250" 
        r="60" 
        stroke="#333333" 
        strokeWidth="2" 
        fill="none"
        initial={{ r: 60, opacity: 0.8 }}
        animate={{ r: [60, 120, 180], opacity: [0.8, 0.3, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 2 }}
      />
      
      {/* Central AI Core */}
      <circle cx="250" cy="250" r="60" stroke="#333333" strokeWidth="2" fill="none" />
      <circle cx="250" cy="250" r="50" stroke="#333333" strokeWidth="1.5" fill="none" />
      <circle cx="250" cy="250" r="40" stroke="#333333" strokeWidth="1" fill="none" />
      
      {/* AI Brain Pattern */}
      <path d="M230 240 Q240 230 250 240 Q260 230 270 240" stroke="#333333" strokeWidth="2" fill="none" />
      <path d="M230 260 Q240 270 250 260 Q260 270 270 260" stroke="#333333" strokeWidth="2" fill="none" />
      <circle cx="235" cy="245" r="3" fill="#333333" />
      <circle cx="265" cy="245" r="3" fill="#333333" />
      
      {/* Network Nodes - Top */}
      <motion.g
        initial={{ opacity: 0.5, scale: 0.95 }}
        animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1, 0.95] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        style={{ transformOrigin: "250px 70px" }}
      >
        <rect x="220" y="50" width="60" height="40" stroke="#333333" strokeWidth="2" fill="#f2f2f2" />
        <line x1="230" y1="60" x2="270" y2="60" stroke="#333333" strokeWidth="1.5" />
        <line x1="230" y1="70" x2="270" y2="70" stroke="#333333" strokeWidth="1.5" />
        <line x1="230" y1="80" x2="270" y2="80" stroke="#333333" strokeWidth="1.5" />
        <circle cx="240" cy="70" r="2" fill="#333333" />
        <circle cx="260" cy="70" r="2" fill="#333333" />
      </motion.g>
      
      {/* Network Nodes - Right */}
      <motion.g
        initial={{ opacity: 0.5, scale: 0.95 }}
        animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1, 0.95] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
        style={{ transformOrigin: "415px 250px" }}
      >
        <rect x="380" y="220" width="70" height="60" stroke="#333333" strokeWidth="2" fill="#f2f2f2" />
        <line x1="390" y1="235" x2="440" y2="235" stroke="#333333" strokeWidth="1.5" />
        <line x1="390" y1="245" x2="440" y2="245" stroke="#333333" strokeWidth="1.5" />
        <line x1="390" y1="255" x2="440" y2="255" stroke="#333333" strokeWidth="1.5" />
        <line x1="390" y1="265" x2="440" y2="265" stroke="#333333" strokeWidth="1.5" />
        <circle cx="400" cy="245" r="2" fill="#333333" />
        <circle cx="410" cy="245" r="2" fill="#333333" />
        <circle cx="400" cy="265" r="2" fill="#333333" />
        <circle cx="410" cy="265" r="2" fill="#333333" />
      </motion.g>
      
      {/* Network Nodes - Bottom */}
      <motion.g
        initial={{ opacity: 0.5, scale: 0.95 }}
        animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1, 0.95] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        style={{ transformOrigin: "250px 420px" }}
      >
        <circle cx="250" cy="420" r="35" stroke="#333333" strokeWidth="2" fill="#f2f2f2" />
        <circle cx="250" cy="420" r="25" stroke="#333333" strokeWidth="1.5" fill="none" />
        <circle cx="250" cy="420" r="15" stroke="#333333" strokeWidth="1.5" fill="none" />
        <line x1="250" y1="405" x2="250" y2="395" stroke="#333333" strokeWidth="2" />
      </motion.g>
      
      {/* Network Nodes - Left */}
      <motion.g
        initial={{ opacity: 0.5, scale: 0.95 }}
        animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1, 0.95] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2.1 }}
        style={{ transformOrigin: "85px 250px" }}
      >
        <rect x="50" y="220" width="70" height="60" stroke="#333333" strokeWidth="2" fill="#f2f2f2" />
        <rect x="60" y="235" width="50" height="15" stroke="#333333" strokeWidth="1.5" fill="none" />
        <rect x="60" y="255" width="50" height="15" stroke="#333333" strokeWidth="1.5" fill="none" />
        <line x1="70" y1="240" x2="100" y2="240" stroke="#333333" strokeWidth="1" />
        <line x1="70" y1="260" x2="100" y2="260" stroke="#333333" strokeWidth="1" />
      </motion.g>
      
      {/* Connection Lines with Data Flow */}
      <line x1="250" y1="90" x2="250" y2="190" stroke="#333333" strokeWidth="2.5" />
      <motion.circle 
        cx="250" 
        cy="120" 
        r="4" 
        fill="#333333"
        animate={{ cy: [120, 190], opacity: [1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
      <motion.circle 
        cx="250" 
        cy="150" 
        r="4" 
        fill="#333333"
        animate={{ cy: [150, 190], opacity: [1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
      />
      
      <line x1="310" y1="250" x2="380" y2="250" stroke="#333333" strokeWidth="2.5" />
      <motion.circle 
        cx="330" 
        cy="250" 
        r="4" 
        fill="#333333"
        animate={{ cx: [310, 380], opacity: [1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
      <motion.circle 
        cx="360" 
        cy="250" 
        r="4" 
        fill="#333333"
        animate={{ cx: [310, 380], opacity: [1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
      />
      
      <line x1="250" y1="310" x2="250" y2="385" stroke="#333333" strokeWidth="2.5" />
      <motion.circle 
        cx="250" 
        cy="330" 
        r="4" 
        fill="#333333"
        animate={{ cy: [310, 385], opacity: [1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
      <motion.circle 
        cx="250" 
        cy="360" 
        r="4" 
        fill="#333333"
        animate={{ cy: [310, 385], opacity: [1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
      />
      
      <line x1="120" y1="250" x2="190" y2="250" stroke="#333333" strokeWidth="2.5" />
      <motion.circle 
        cx="140" 
        cy="250" 
        r="4" 
        fill="#333333"
        animate={{ cx: [120, 190], opacity: [1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
      <motion.circle 
        cx="170" 
        cy="250" 
        r="4" 
        fill="#333333"
        animate={{ cx: [120, 190], opacity: [1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
      />
      
      {/* Diagonal connections */}
      <line x1="295" y1="205" x2="360" y2="140" stroke="#333333" strokeWidth="2" opacity="0.5" />
      <line x1="205" y1="205" x2="140" y2="140" stroke="#333333" strokeWidth="2" opacity="0.5" />
      
      {/* Corner indicators - Top Left */}
      <motion.g
        initial={{ opacity: 0.5, scale: 0.95 }}
        animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1, 0.95] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2.4 }}
        style={{ transformOrigin: "100px 100px" }}
      >
        <rect x="80" y="80" width="40" height="40" stroke="#333333" strokeWidth="2" fill="#f2f2f2" />
        <line x1="90" y1="95" x2="110" y2="95" stroke="#333333" strokeWidth="1.5" />
        <line x1="90" y1="105" x2="110" y2="105" stroke="#333333" strokeWidth="1.5" />
      </motion.g>
      
      {/* Corner indicators - Top Right */}
      <motion.g
        initial={{ opacity: 0.5, scale: 0.95 }}
        animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1, 0.95] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2.7 }}
        style={{ transformOrigin: "400px 100px" }}
      >
        <rect x="380" y="80" width="40" height="40" stroke="#333333" strokeWidth="2" fill="#f2f2f2" />
        <circle cx="400" cy="100" r="12" stroke="#333333" strokeWidth="1.5" fill="none" />
        <line x1="400" y1="92" x2="400" y2="108" stroke="#333333" strokeWidth="1.5" />
        <line x1="392" y1="100" x2="408" y2="100" stroke="#333333" strokeWidth="1.5" />
      </motion.g>
    </svg>
  );
}