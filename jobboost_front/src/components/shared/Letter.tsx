const LetterIllustration = () => {
    return (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="envelope-clip">
            <path d="M20 40 L180 40 L180 160 L20 160 Z" />
          </clipPath>
        </defs>
        
        <rect x="20" y="40" width="160" height="120" fill="#f8fafc" stroke="#0f172a" strokeWidth="2">
          <animate 
            attributeName="y" 
            values="40;45;40" 
            dur="4s" 
            repeatCount="indefinite" 
          />
        </rect>
        
        <g clipPath="url(#envelope-clip)">
          <rect x="35" y="60" width="130" height="4" rx="2" fill="#e2e8f0">
            <animate 
              attributeName="width" 
              values="0;130" 
              dur="1s" 
              begin="0.2s"
              fill="freeze" 
            />
          </rect>
          
          <rect x="35" y="80" width="100" height="4" rx="2" fill="#e2e8f0">
            <animate 
              attributeName="width" 
              values="0;100" 
              dur="1s" 
              begin="0.4s"
              fill="freeze" 
            />
          </rect>
          
          <rect x="35" y="100" width="120" height="4" rx="2" fill="#e2e8f0">
            <animate 
              attributeName="width" 
              values="0;120" 
              dur="1s" 
              begin="0.6s"
              fill="freeze" 
            />
          </rect>
        </g>
        
        <g stroke="#3b82f6" strokeWidth="2">
          <path d="M40 30 L40 20">
            <animate 
              attributeName="opacity" 
              values="0;1;0" 
              dur="2s" 
              repeatCount="indefinite" 
            />
          </path>
          <path d="M35 25 L45 25">
            <animate 
              attributeName="opacity" 
              values="0;1;0" 
              dur="2s" 
              repeatCount="indefinite" 
            />
          </path>
        </g>
        
        <g stroke="#3b82f6" strokeWidth="2" transform="translate(160,0)">
          <path d="M40 30 L40 20">
            <animate 
              attributeName="opacity" 
              values="0;1;0" 
              dur="2s" 
              begin="1s"
              repeatCount="indefinite" 
            />
          </path>
          <path d="M35 25 L45 25">
            <animate 
              attributeName="opacity" 
              values="0;1;0" 
              dur="2s" 
              begin="1s"
              repeatCount="indefinite" 
            />
          </path>
        </g>
      </svg>
    );
  };
  
export default LetterIllustration