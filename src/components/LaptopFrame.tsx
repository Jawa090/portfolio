
import React from 'react';
import styled from 'styled-components';

interface LaptopFrameProps {
  videoUrl: string;
  title: string;
}

const LaptopFrame = ({ videoUrl, title }: LaptopFrameProps) => {
  return (
    <StyledWrapper>
      <div className="desktop">
        <div className="monitor">
          <div className="monitor-screen">
            <video autoPlay loop muted playsInline className="screen-video">
              <source src={videoUrl} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="monitor-base">
            <div className="base-stand"></div>
            <div className="base-bottom"></div>
          </div>
        </div>
      </div>
      <h3 className="project-title">{title}</h3>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .desktop {
    position: relative;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }

  .monitor {
    padding: 2%;
    border-radius: 10px;
  }

  .monitor-screen {
    background: #000000;
    padding: 5px;
    border-radius: 5px;
    aspect-ratio: 16/9;
    position: relative;
    overflow: hidden;
  }

  .screen-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2px;
  }

  .monitor-base {
    position: relative;
    margin-top: -4px;
  }

  .base-stand {
    width: 20%;
    height: 60px;
    background: linear-gradient(90deg, #2a2a2a, #3a3a3a);
    margin: 0 auto;
    clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
  }

  .base-bottom {
    width: 40%;
    height: 12px;
    background: linear-gradient(90deg, #222, #333);
    margin: -2px auto 0;
    border-radius: 0 0 10px 10px;
  }

  .project-title {
    text-align: center;
    margin-top: 1.5rem;
    color: white;
    font-size: 1.25rem;
    font-weight: 600;
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
  }

  @media (max-width: 768px) {
    .base-stand {
      height: 40px;
    }
    
    .base-bottom {
      height: 8px;
    }
  }
`;

export default LaptopFrame;
