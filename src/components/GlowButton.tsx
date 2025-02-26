
import React from 'react';
import styled from 'styled-components';

interface GlowButtonProps {
  children: React.ReactNode;
  variant?: 'rainbow' | 'gradient';
}

const GlowButton = ({ children, variant = 'rainbow' }: GlowButtonProps) => {
  if (variant === 'rainbow') {
    return (
      <StyledWrapper>
        <button data-label={children} className="rainbow-hover">
          <span className="sp">{children}</span>
        </button>
      </StyledWrapper>
    );
  }

  return (
    <StyledWrapper>
      <button className="button">
        <span>{children}</span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .rainbow-hover {
    font-size: 16px;
    font-weight: 700;
    color: #ff7576;
    background-color: #2B3044;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 12px 24px;
    position: relative;
    line-height: 24px;
    border-radius: 9px;
    box-shadow: 0px 1px 2px #2B3044,
      0px 4px 16px #2B3044;
    transform-style: preserve-3d;
    transform: scale(var(--s, 1)) perspective(600px)
      rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg));
    perspective: 600px;
    transition: transform 0.1s;
  }

  .sp {
    background: linear-gradient(
        90deg,
        #866ee7,
        #ea60da,
        #ed8f57,
        #fbd41d,
        #2cca91
      );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    display: block;
  }

  .rainbow-hover:active {
    transition: 0.3s;
    transform: scale(0.93);
  }

  .button {
    position: relative;
    text-decoration: none;
    color: #fff;
    background: linear-gradient(45deg, #0ce39a, #69007f, #fc0987);
    padding: 14px 25px;
    border-radius: 10px;
    font-size: 1.25em;
    cursor: pointer;
    border: none;
    outline: none;
  }

  .button span {
    position: relative;
    z-index: 1;
  }

  .button::before {
    content: "";
    position: absolute;
    inset: 1px;
    background: #272727;
    border-radius: 9px;
    transition: 0.5s;
  }

  .button:hover::before {
    opacity: 0.7;
  }

  .button::after {
    content: "";
    position: absolute;
    inset: 0px;
    background: linear-gradient(45deg, #0ce39a, #69007f, #fc0987);
    border-radius: 9px;
    transition: 0.5s;
    opacity: 0;
    filter: blur(20px);
  }

  .button:hover:after {
    opacity: 1;
  }
`;

export default GlowButton;
