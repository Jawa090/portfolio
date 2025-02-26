
import React from 'react';
import styled from 'styled-components';

interface GradientBorderButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  fileUrl?: string;
}

const GradientBorderButton = ({ children, className = "", onClick, fileUrl }: GradientBorderButtonProps) => {
  const handleClick = () => {
    if (fileUrl) {
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = fileUrl.split('/').pop() || 'download';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <StyledWrapper className={className}>
      <button className="w-full" onClick={handleClick}>{children}</button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  width: 100%;
  
  button {
   --border-radius: 9px;
   --border-width: 4px;
   appearance: none;
   position: relative;
   padding: 1em 2em;
   border: 0;
   font-family: "Roboto", Arial, "Segoe UI", sans-serif;
   font-size: 18px;
   font-weight: 500;
   color: #fff;
   z-index: 2;
   cursor: pointer;
   width: 100%;
  }

  button::after {
   --m-i: linear-gradient(#000, #000);
   --m-o: content-box, padding-box;
   content: "";
   position: absolute;
   left: 0;
   top: 0;
   width: 100%;
   height: 100%;
   padding: var(--border-width);
   border-radius: var(--border-radius);
   background-image: conic-gradient(
      #488cfb,
      #29dbbc,
      #ddf505,
      #ff9f0e,
      #e440bb,
      #655adc,
      #488cfb
    );
   -webkit-mask-image: var(--m-i), var(--m-i);
   mask-image: var(--m-i), var(--m-i);
   -webkit-mask-origin: var(--m-o);
   mask-origin: var(--m-o);
   -webkit-mask-clip: var(--m-o);
   mask-composite: exclude;
   -webkit-mask-composite: destination-out;
   filter: hue-rotate(0);
   animation: rotate-hue linear 500ms infinite;
   animation-play-state: paused;
  }

  button:hover::after {
   animation-play-state: running;
  }

  @keyframes rotate-hue {
   to {
    filter: hue-rotate(1turn);
   }
  }

  button,
  button::after {
   box-sizing: border-box;
  }

  button:active {
   --border-width: 5px;
  }

  @media (max-width: 768px) {
    button {
      padding: 0.8em 1.5em;
      font-size: 16px;
      --border-width: 3px;
    }
  }
`;

export default GradientBorderButton;
