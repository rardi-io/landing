export function ShieldNetwork() {
  return (
    <svg width="350" height="380" viewBox="0 0 350 380" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Shield outline */}
      <path d="M175 20 L290 60 L290 160 Q290 250 175 340 Q60 250 60 160 L60 60 Z" stroke="#333333" strokeWidth="2.5" fill="none" />
      
      {/* Inner shield detail */}
      <path d="M175 40 L270 70 L270 150 Q270 225 175 305 Q80 225 80 150 L80 70 Z" stroke="#333333" strokeWidth="1.5" fill="none" opacity="0.4" />
      
      {/* Central network hub */}
      <circle cx="175" cy="140" r="25" stroke="#333333" strokeWidth="2.5" fill="#f2f2f2" />
      <circle cx="175" cy="140" r="18" stroke="#333333" strokeWidth="1.5" fill="none" />
      <circle cx="175" cy="140" r="11" stroke="#333333" strokeWidth="1" fill="none" />
      <circle cx="175" cy="140" r="5" fill="#333333" />
      
      {/* Network nodes - Layer 1 */}
      <rect x="115" y="100" width="25" height="20" stroke="#333333" strokeWidth="2" fill="#f2f2f2" />
      <line x1="120" y1="106" x2="135" y2="106" stroke="#333333" strokeWidth="1" />
      <line x1="120" y1="114" x2="135" y2="114" stroke="#333333" strokeWidth="1" />
      
      <rect x="210" y="100" width="25" height="20" stroke="#333333" strokeWidth="2" fill="#f2f2f2" />
      <line x1="215" y1="106" x2="230" y2="106" stroke="#333333" strokeWidth="1" />
      <line x1="215" y1="114" x2="230" y2="114" stroke="#333333" strokeWidth="1" />
      
      {/* Network nodes - Layer 2 */}
      <circle cx="120" cy="180" r="15" stroke="#333333" strokeWidth="2" fill="#f2f2f2" />
      <circle cx="120" cy="180" r="8" stroke="#333333" strokeWidth="1.5" fill="none" />
      
      <circle cx="230" cy="180" r="15" stroke="#333333" strokeWidth="2" fill="#f2f2f2" />
      <circle cx="230" cy="180" r="8" stroke="#333333" strokeWidth="1.5" fill="none" />
      
      {/* Network nodes - Layer 3 */}
      <rect x="150" y="220" width="20" height="18" stroke="#333333" strokeWidth="2" fill="#f2f2f2" />
      <line x1="155" y1="226" x2="165" y2="226" stroke="#333333" strokeWidth="1" />
      <line x1="155" y1="232" x2="165" y2="232" stroke="#333333" strokeWidth="1" />
      
      <rect x="180" y="220" width="20" height="18" stroke="#333333" strokeWidth="2" fill="#f2f2f2" />
      <line x1="185" y1="226" x2="195" y2="226" stroke="#333333" strokeWidth="1" />
      <line x1="185" y1="232" x2="195" y2="232" stroke="#333333" strokeWidth="1" />
      
      {/* Server stack - Bottom */}
      <rect x="160" y="260" width="30" height="35" stroke="#333333" strokeWidth="2" fill="#f2f2f2" />
      <line x1="160" y1="270" x2="190" y2="270" stroke="#333333" strokeWidth="1.5" />
      <line x1="160" y1="280" x2="190" y2="280" stroke="#333333" strokeWidth="1.5" />
      <line x1="160" y1="290" x2="190" y2="290" stroke="#333333" strokeWidth="1.5" />
      <circle cx="167" cy="285" r="2" fill="#333333" />
      <circle cx="175" cy="285" r="2" fill="#333333" />
      <circle cx="183" cy="285" r="2" fill="#333333" />
      
      {/* Connection lines */}
      <line x1="140" y1="110" x2="158" y2="124" stroke="#333333" strokeWidth="2" />
      <line x1="210" y1="110" x2="192" y2="124" stroke="#333333" strokeWidth="2" />
      
      <line x1="133" y1="166" x2="150" y2="140" stroke="#333333" strokeWidth="2" />
      <line x1="217" y1="166" x2="200" y2="140" stroke="#333333" strokeWidth="2" />
      
      <line x1="175" y1="165" x2="160" y2="220" stroke="#333333" strokeWidth="1.8" />
      <line x1="175" y1="165" x2="190" y2="220" stroke="#333333" strokeWidth="1.8" />
      
      <line x1="160" y1="235" x2="175" y2="260" stroke="#333333" strokeWidth="1.8" />
      <line x1="190" y1="235" x2="175" y2="260" stroke="#333333" strokeWidth="1.8" />
      
      {/* Data flow indicators */}
      <circle cx="149" cy="117" r="3" fill="#333333" />
      <circle cx="201" cy="117" r="3" fill="#333333" />
      <circle cx="142" cy="153" r="3" fill="#333333" />
      <circle cx="208" cy="153" r="3" fill="#333333" />
      <circle cx="168" cy="193" r="2.5" fill="#333333" />
      <circle cx="182" cy="193" r="2.5" fill="#333333" />
    </svg>
  );
}