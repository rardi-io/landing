export function MultiNodeMap() {
  return (
    <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Grid background */}
      <line x1="0" y1="35" x2="140" y2="35" stroke="#333333" strokeWidth="0.5" opacity="0.2" />
      <line x1="0" y1="70" x2="140" y2="70" stroke="#333333" strokeWidth="0.5" opacity="0.2" />
      <line x1="0" y1="105" x2="140" y2="105" stroke="#333333" strokeWidth="0.5" opacity="0.2" />
      <line x1="35" y1="0" x2="35" y2="140" stroke="#333333" strokeWidth="0.5" opacity="0.2" />
      <line x1="70" y1="0" x2="70" y2="140" stroke="#333333" strokeWidth="0.5" opacity="0.2" />
      <line x1="105" y1="0" x2="105" y2="140" stroke="#333333" strokeWidth="0.5" opacity="0.2" />
      
      {/* Main nodes */}
      <circle cx="70" cy="30" r="14" stroke="#333333" strokeWidth="2.5" fill="#f2f2f2" />
      <circle cx="70" cy="30" r="7" stroke="#333333" strokeWidth="1.5" fill="none" />
      
      <circle cx="30" cy="70" r="14" stroke="#333333" strokeWidth="2.5" fill="#f2f2f2" />
      <circle cx="30" cy="70" r="7" stroke="#333333" strokeWidth="1.5" fill="none" />
      
      <circle cx="110" cy="70" r="14" stroke="#333333" strokeWidth="2.5" fill="#f2f2f2" />
      <circle cx="110" cy="70" r="7" stroke="#333333" strokeWidth="1.5" fill="none" />
      
      <circle cx="50" cy="110" r="12" stroke="#333333" strokeWidth="2.5" fill="#f2f2f2" />
      <circle cx="50" cy="110" r="6" stroke="#333333" strokeWidth="1.5" fill="none" />
      
      <circle cx="90" cy="110" r="12" stroke="#333333" strokeWidth="2.5" fill="#f2f2f2" />
      <circle cx="90" cy="110" r="6" stroke="#333333" strokeWidth="1.5" fill="none" />
      
      {/* Connection lines */}
      <line x1="70" y1="44" x2="38" y2="62" stroke="#333333" strokeWidth="2" />
      <line x1="70" y1="44" x2="102" y2="62" stroke="#333333" strokeWidth="2" />
      <line x1="30" y1="84" x2="50" y2="98" stroke="#333333" strokeWidth="2" />
      <line x1="110" y1="84" x2="90" y2="98" stroke="#333333" strokeWidth="2" />
      <line x1="62" y1="110" x2="78" y2="110" stroke="#333333" strokeWidth="2" />
      
      {/* Data flow */}
      <circle cx="54" cy="53" r="3" fill="#333333" />
      <circle cx="86" cy="53" r="3" fill="#333333" />
      <circle cx="40" cy="91" r="3" fill="#333333" />
      <circle cx="100" cy="91" r="3" fill="#333333" />
    </svg>
  );
}

export function MagnifyingGlass() {
  return (
    <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Magnifying glass */}
      <circle cx="55" cy="55" r="35" stroke="#333333" strokeWidth="2.5" fill="#f2f2f2" />
      <circle cx="55" cy="55" r="28" stroke="#333333" strokeWidth="1.5" fill="none" />
      
      {/* Handle */}
      <line x1="80" y1="80" x2="110" y2="110" stroke="#333333" strokeWidth="3" strokeLinecap="square" />
      <rect x="105" y="105" width="12" height="12" stroke="#333333" strokeWidth="2" fill="#f2f2f2" transform="rotate(45 111 111)" />
      
      {/* Alert/diagnostic symbol inside */}
      <circle cx="55" cy="55" r="12" stroke="#333333" strokeWidth="2" fill="none" />
      <rect x="47" y="47" width="7" height="7" stroke="#333333" strokeWidth="1.5" fill="none" />
      <rect x="61" y="47" width="7" height="7" stroke="#333333" strokeWidth="1.5" fill="none" />
      <rect x="54" y="61" width="7" height="7" stroke="#333333" strokeWidth="1.5" fill="none" />
      
      {/* Scan lines */}
      <line x1="35" y1="40" x2="45" y2="40" stroke="#333333" strokeWidth="1.5" />
      <line x1="35" y1="50" x2="45" y2="50" stroke="#333333" strokeWidth="1.5" />
      <line x1="35" y1="60" x2="45" y2="60" stroke="#333333" strokeWidth="1.5" />
    </svg>
  );
}

export function WrenchIcon() {
  return (
    <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Tool frame */}
      <rect x="30" y="30" width="80" height="80" stroke="#333333" strokeWidth="2" fill="#f2f2f2" />
      
      {/* Wrench */}
      <path d="M55 50 L55 62 L45 72 L50 77 L60 67 L72 67 L82 57 L77 52 L67 62 L67 50 Z" stroke="#333333" strokeWidth="2.5" fill="none" />
      <circle cx="77" cy="57" r="7" stroke="#333333" strokeWidth="2" fill="none" />
      <circle cx="77" cy="57" r="3" fill="#333333" />
      
      {/* Settings indicators */}
      <rect x="38" y="38" width="10" height="10" stroke="#333333" strokeWidth="1.5" fill="none" />
      <rect x="92" y="38" width="10" height="10" stroke="#333333" strokeWidth="1.5" fill="none" />
      <rect x="38" y="92" width="10" height="10" stroke="#333333" strokeWidth="1.5" fill="none" />
      <rect x="92" y="92" width="10" height="10" stroke="#333333" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export function LaptopCheck() {
  return (
    <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Laptop */}
      <rect x="30" y="40" width="80" height="55" stroke="#333333" strokeWidth="2.5" fill="#f2f2f2" />
      <rect x="25" y="95" width="90" height="8" stroke="#333333" strokeWidth="2.5" fill="#f2f2f2" />
      
      {/* Screen frame */}
      <rect x="35" y="45" width="70" height="45" stroke="#333333" strokeWidth="1.5" fill="none" />
      
      {/* Checkmark */}
      <polyline points="50,65 62,77 90,52" stroke="#333333" strokeWidth="3.5" fill="none" strokeLinecap="square" />
      
      {/* Status indicators */}
      <circle cx="55" cy="98" r="2" fill="#333333" />
      <circle cx="70" cy="98" r="2" fill="#333333" />
      <circle cx="85" cy="98" r="2" fill="#333333" />
    </svg>
  );
}

export function ChatGear() {
  return (
    <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Chat bubble */}
      <rect x="25" y="30" width="65" height="50" stroke="#333333" strokeWidth="2.5" fill="#f2f2f2" />
      <polygon points="45,80 45,100 65,80" stroke="#333333" strokeWidth="2.5" fill="#f2f2f2" />
      
      {/* Chat lines */}
      <line x1="35" y1="45" x2="70" y2="45" stroke="#333333" strokeWidth="2" />
      <line x1="35" y1="55" x2="60" y2="55" stroke="#333333" strokeWidth="2" />
      <line x1="35" y1="65" x2="75" y2="65" stroke="#333333" strokeWidth="2" />
      
      {/* Gear */}
      <circle cx="85" cy="75" r="25" stroke="#333333" strokeWidth="2.5" fill="#f2f2f2" />
      <circle cx="85" cy="75" r="13" stroke="#333333" strokeWidth="2" fill="none" />
      
      {/* Gear teeth */}
      <rect x="83" y="48" width="4" height="8" fill="#333333" />
      <rect x="83" y="94" width="4" height="8" fill="#333333" />
      <rect x="58" y="73" width="8" height="4" fill="#333333" />
      <rect x="104" y="73" width="8" height="4" fill="#333333" />
      <rect x="66" y="58" width="6" height="6" fill="#333333" transform="rotate(45 69 61)" />
      <rect x="98" y="58" width="6" height="6" fill="#333333" transform="rotate(-45 101 61)" />
      <rect x="66" y="86" width="6" height="6" fill="#333333" transform="rotate(-45 69 89)" />
      <rect x="98" y="86" width="6" height="6" fill="#333333" transform="rotate(45 101 89)" />
    </svg>
  );
}

export function PersonShield() {
  return (
    <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Person */}
      <circle cx="50" cy="45" r="18" stroke="#333333" strokeWidth="2.5" fill="#f2f2f2" />
      <path d="M25 105 Q25 75 50 75 Q75 75 75 105" stroke="#333333" strokeWidth="2.5" fill="none" />
      
      {/* Shield */}
      <path d="M85 35 L115 50 L115 85 Q115 105 85 120 Q55 105 55 85 L55 50 Z" stroke="#333333" strokeWidth="2.5" fill="#f2f2f2" />
      
      {/* Shield inner detail */}
      <path d="M85 45 L105 55 L105 80 Q105 95 85 107 Q65 95 65 80 L65 55 Z" stroke="#333333" strokeWidth="1.5" fill="none" />
      
      {/* Lock symbol */}
      <circle cx="85" cy="75" r="8" stroke="#333333" strokeWidth="2" fill="none" />
      <rect x="80" y="75" width="10" height="12" stroke="#333333" strokeWidth="2" fill="none" />
      <circle cx="85" cy="81" r="2" fill="#333333" />
    </svg>
  );
}

export function NodeGraph() {
  return (
    <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Grid */}
      <line x1="20" y1="40" x2="120" y2="40" stroke="#333333" strokeWidth="0.5" opacity="0.2" />
      <line x1="20" y1="70" x2="120" y2="70" stroke="#333333" strokeWidth="0.5" opacity="0.2" />
      <line x1="20" y1="100" x2="120" y2="100" stroke="#333333" strokeWidth="0.5" opacity="0.2" />
      <line x1="40" y1="20" x2="40" y2="120" stroke="#333333" strokeWidth="0.5" opacity="0.2" />
      <line x1="70" y1="20" x2="70" y2="120" stroke="#333333" strokeWidth="0.5" opacity="0.2" />
      <line x1="100" y1="20" x2="100" y2="120" stroke="#333333" strokeWidth="0.5" opacity="0.2" />
      
      {/* Nodes */}
      <rect x="60" y="20" width="22" height="22" stroke="#333333" strokeWidth="2.5" fill="#f2f2f2" />
      <rect x="28" y="60" width="20" height="20" stroke="#333333" strokeWidth="2.5" fill="#f2f2f2" />
      <rect x="88" y="60" width="20" height="20" stroke="#333333" strokeWidth="2.5" fill="#f2f2f2" />
      <rect x="60" y="95" width="22" height="22" stroke="#333333" strokeWidth="2.5" fill="#f2f2f2" />
      
      {/* Connections */}
      <line x1="71" y1="42" x2="38" y2="60" stroke="#333333" strokeWidth="2" />
      <line x1="71" y1="42" x2="98" y2="60" stroke="#333333" strokeWidth="2" />
      <line x1="38" y1="80" x2="71" y2="95" stroke="#333333" strokeWidth="2" />
      <line x1="98" y1="80" x2="71" y2="95" stroke="#333333" strokeWidth="2" />
      
      {/* Data points */}
      <circle cx="55" cy="51" r="3" fill="#333333" />
      <circle cx="87" cy="51" r="3" fill="#333333" />
    </svg>
  );
}

export function ServerRack() {
  return (
    <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Server rack */}
      <rect x="40" y="25" width="60" height="90" stroke="#333333" strokeWidth="2.5" fill="#f2f2f2" />
      
      {/* Server divisions */}
      <line x1="40" y1="45" x2="100" y2="45" stroke="#333333" strokeWidth="2" />
      <line x1="40" y1="65" x2="100" y2="65" stroke="#333333" strokeWidth="2" />
      <line x1="40" y1="85" x2="100" y2="85" stroke="#333333" strokeWidth="2" />
      <line x1="40" y1="105" x2="100" y2="105" stroke="#333333" strokeWidth="2" />
      
      {/* Server details - unit 1 */}
      <circle cx="50" cy="35" r="2.5" fill="#333333" />
      <circle cx="58" cy="35" r="2.5" fill="#333333" />
      <line x1="65" y1="33" x2="90" y2="33" stroke="#333333" strokeWidth="1.5" />
      <line x1="65" y1="37" x2="85" y2="37" stroke="#333333" strokeWidth="1.5" />
      
      {/* Server details - unit 2 */}
      <circle cx="50" cy="55" r="2.5" fill="#333333" />
      <circle cx="58" cy="55" r="2.5" fill="#333333" />
      <line x1="65" y1="53" x2="90" y2="53" stroke="#333333" strokeWidth="1.5" />
      <line x1="65" y1="57" x2="85" y2="57" stroke="#333333" strokeWidth="1.5" />
      
      {/* Server details - unit 3 */}
      <circle cx="50" cy="75" r="2.5" fill="#333333" />
      <circle cx="58" cy="75" r="2.5" fill="#333333" />
      <line x1="65" y1="73" x2="90" y2="73" stroke="#333333" strokeWidth="1.5" />
      <line x1="65" y1="77" x2="85" y2="77" stroke="#333333" strokeWidth="1.5" />
      
      {/* Server details - unit 4 */}
      <circle cx="50" cy="95" r="2.5" fill="#333333" />
      <circle cx="58" cy="95" r="2.5" fill="#333333" />
      <line x1="65" y1="93" x2="90" y2="93" stroke="#333333" strokeWidth="1.5" />
      <line x1="65" y1="97" x2="85" y2="97" stroke="#333333" strokeWidth="1.5" />
    </svg>
  );
}

export function ShieldBuilding() {
  return (
    <svg width="350" height="350" viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Shield */}
      <path d="M175 30 L270 65 L270 155 Q270 235 175 310 Q80 235 80 155 L80 65 Z" stroke="#333333" strokeWidth="2.5" fill="none" />
      
      {/* Inner shield layer */}
      <path d="M175 50 L250 75 L250 145 Q250 210 175 275 Q100 210 100 145 L100 75 Z" stroke="#333333" strokeWidth="1.5" fill="none" opacity="0.3" />
      
      {/* Building */}
      <rect x="135" y="130" width="80" height="110" stroke="#333333" strokeWidth="2.5" fill="#f2f2f2" />
      
      {/* Building vertical lines */}
      <line x1="155" y1="130" x2="155" y2="240" stroke="#333333" strokeWidth="1.5" />
      <line x1="175" y1="130" x2="175" y2="240" stroke="#333333" strokeWidth="1.5" />
      <line x1="195" y1="130" x2="195" y2="240" stroke="#333333" strokeWidth="1.5" />
      
      {/* Building floors */}
      <line x1="135" y1="155" x2="215" y2="155" stroke="#333333" strokeWidth="1.5" />
      <line x1="135" y1="180" x2="215" y2="180" stroke="#333333" strokeWidth="1.5" />
      <line x1="135" y1="205" x2="215" y2="205" stroke="#333333" strokeWidth="1.5" />
      
      {/* Windows */}
      <rect x="142" y="137" width="8" height="12" stroke="#333333" strokeWidth="1" fill="none" />
      <rect x="162" y="137" width="8" height="12" stroke="#333333" strokeWidth="1" fill="none" />
      <rect x="182" y="137" width="8" height="12" stroke="#333333" strokeWidth="1" fill="none" />
      <rect x="202" y="137" width="8" height="12" stroke="#333333" strokeWidth="1" fill="none" />
      
      <rect x="142" y="162" width="8" height="12" stroke="#333333" strokeWidth="1" fill="none" />
      <rect x="162" y="162" width="8" height="12" stroke="#333333" strokeWidth="1" fill="none" />
      <rect x="182" y="162" width="8" height="12" stroke="#333333" strokeWidth="1" fill="none" />
      <rect x="202" y="162" width="8" height="12" stroke="#333333" strokeWidth="1" fill="none" />
      
      <rect x="142" y="187" width="8" height="12" stroke="#333333" strokeWidth="1" fill="none" />
      <rect x="162" y="187" width="8" height="12" stroke="#333333" strokeWidth="1" fill="none" />
      <rect x="182" y="187" width="8" height="12" stroke="#333333" strokeWidth="1" fill="none" />
      <rect x="202" y="187" width="8" height="12" stroke="#333333" strokeWidth="1" fill="none" />
      
      {/* Door */}
      <rect x="165" y="215" width="20" height="25" stroke="#333333" strokeWidth="2" fill="none" />
      <circle cx="180" cy="227" r="1.5" fill="#333333" />
      
      {/* Network antenna on building */}
      <line x1="175" y1="130" x2="175" y2="110" stroke="#333333" strokeWidth="2" />
      <circle cx="175" cy="105" r="5" stroke="#333333" strokeWidth="1.5" fill="none" />
      <circle cx="175" cy="105" r="8" stroke="#333333" strokeWidth="1" fill="none" opacity="0.5" />
    </svg>
  );
}