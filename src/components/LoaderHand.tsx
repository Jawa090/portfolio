
import styled from 'styled-components';

const LoaderHand = () => {
  return (
    <StyledWrapper>
      <div className="hand">
        <div className="finger" />
        <div className="finger" />
        <div className="finger" />
        <div className="finger" />
        <div className="palm" />		
        <div className="thumb" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .hand {
    --tap-speed: 0.6s;
    --tap-stagger: 0.1s;
    position: relative;
    width: 80px;
    height: 60px;
    margin-left: 80px;
    background: linear-gradient(45deg, #0ce39a, #69007f, #fc0987);
    border-radius: 10px;
    perspective: 600px;
    transform-style: preserve-3d;
    box-shadow: 0px 1px 2px rgba(43, 48, 68, 0.5),
      0px 4px 16px rgba(43, 48, 68, 0.5);
  }

  .hand::before {
    content: "";
    position: absolute;
    inset: 1px;
    background: #272727;
    border-radius: 9px;
    z-index: 0;
  }

  .hand::after {
    content: "";
    position: absolute;
    inset: 0px;
    background: linear-gradient(45deg, #0ce39a, #69007f, #fc0987);
    border-radius: 9px;
    filter: blur(20px);
    opacity: 0.5;
  }

  .palm {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      90deg,
      #866ee7,
      #ea60da,
      #ed8f57,
      #fbd41d,
      #2cca91
    );
    border-radius: 10px 40px;
    z-index: 1;
  }

  .thumb {
    position: absolute;
    width: 120%;
    height: 38px;
    background: linear-gradient(45deg, #0ce39a, #69007f, #fc0987);
    bottom: -18%;
    right: 1%;
    transform-origin: calc(100% - 20px) 20px;
    transform: rotate(-20deg);
    border-radius: 30px 20px 20px 10px;
    z-index: 1;
  }

  .finger {
    position: absolute;
    width: 80%;
    height: 35px;
    background: linear-gradient(
      90deg,
      #866ee7,
      #ea60da,
      #ed8f57,
      #fbd41d,
      #2cca91
    );
    bottom: 32%;
    right: 64%;
    transform-origin: 100% 20px;
    animation-duration: calc(var(--tap-speed) * 2);
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    transform: rotate(10deg);
    z-index: 1;
  }

  .finger:before {
    content: '';
    position: absolute;
    width: 140%;
    height: 30px;
    background: linear-gradient(45deg, #0ce39a, #69007f, #fc0987);
    bottom: 8%;
    right: 65%;
    transform-origin: calc(100% - 20px) 20px;
    transform: rotate(-60deg);
    border-radius: 20px;
  }

  .finger:nth-child(1) {
    animation-delay: 0;
    filter: brightness(70%);
    animation-name: tap-upper-1;
  }

  .finger:nth-child(2) {
    animation-delay: var(--tap-stagger);
    filter: brightness(80%);
    animation-name: tap-upper-2;
  }

  .finger:nth-child(3) {
    animation-delay: calc(var(--tap-stagger) * 2);
    filter: brightness(90%);
    animation-name: tap-upper-3;
  }

  .finger:nth-child(4) {
    animation-delay: calc(var(--tap-stagger) * 3);
    filter: brightness(100%);
    animation-name: tap-upper-4;
  }

  @keyframes tap-upper-1 {
    0%, 50%, 100% {
      transform: rotate(10deg) scale(0.4);
    }
    40% {
      transform: rotate(50deg) scale(0.4);
    }
  }

  @keyframes tap-upper-2 {
    0%, 50%, 100% {
      transform: rotate(10deg) scale(0.6);
    }
    40% {
      transform: rotate(50deg) scale(0.6);
    }
  }

  @keyframes tap-upper-3 {
    0%, 50%, 100% {
      transform: rotate(10deg) scale(0.8);
    }
    40% {
      transform: rotate(50deg) scale(0.8);
    }
  }

  @keyframes tap-upper-4 {
    0%, 50%, 100% {
      transform: rotate(10deg) scale(1);
    }
    40% {
      transform: rotate(50deg) scale(1);
    }
  }
`;

export default LoaderHand;
