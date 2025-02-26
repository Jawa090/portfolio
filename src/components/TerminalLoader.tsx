
import React from 'react';
import styled from 'styled-components';

const TerminalLoader = () => {
  return (
    <StyledWrapper>
      <div className="terminal-loader">
        <div className="terminal-header">
          <div className="terminal-title">System Status</div>
          <div className="terminal-controls">
            <div className="control close" />
            <div className="control minimize" />
            <div className="control maximize" />
          </div>
        </div>
        <div className="text">Loading...</div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  @keyframes blinkCursor {
    50% {
      border-right-color: transparent;
    }
  }

  @keyframes typeAndDelete {
    0%, 10% {
      width: 0;
    }
    45%, 55% {
      width: 6.2em;
    }
    90%, 100% {
      width: 0;
    }
  }

  @keyframes gradientBorder {
    0% {
      border-color: #0ce39a;
    }
    50% {
      border-color: #69007f;
    }
    100% {
      border-color: #fc0987;
    }
  }

  .terminal-loader {
    border: 0.1em solid #333;
    background-color: rgba(26, 26, 26, 0.95);
    color: #64ffda;
    font-family: "Fira Code", "Courier New", monospace;
    font-size: 1.2em;
    padding: 2em 1.5em;
    width: 14em;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    animation: gradientBorder 3s infinite alternate;
    backdrop-filter: blur(10px);
  }

  .terminal-header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2em;
    background: linear-gradient(90deg, #171717, #272727);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    padding: 0 0.8em;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .terminal-controls {
    display: flex;
    gap: 0.5em;
  }

  .control {
    width: 0.8em;
    height: 0.8em;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  .control:hover {
    transform: scale(1.2);
  }

  .control.close {
    background: linear-gradient(45deg, #ff5f57, #ff3527);
  }

  .control.minimize {
    background: linear-gradient(45deg, #febc2e, #f1ab14);
  }

  .control.maximize {
    background: linear-gradient(45deg, #28c840, #20ac31);
  }

  .terminal-title {
    color: #64ffda;
    font-size: 0.8em;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .text {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    border-right: 0.2em solid #64ffda;
    animation: 
      typeAndDelete 4s steps(11) infinite,
      blinkCursor 0.5s step-end infinite alternate;
    margin-top: 1.5em;
  }
`;

export default TerminalLoader;
