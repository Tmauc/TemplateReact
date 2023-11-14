import { keyframes } from 'styled-components';

export const btnAnim = keyframes`
  0% {
    left: -100%;
  }
  50%, 100% {
    left: 100%;
  }
`;

export const jiggle = keyframes`
  0%, 5.2%, 100% {
    margin-left: 0px;
  }
  0.4% {
    margin-left: -3px;
  }
  1.2% {
    margin-left: 3px;
  }
  2% {
    margin-left: -3px;
  }
  2.8% {
    margin-left: 3px;
  }
  3.6% {
    margin-left: -3px;
  }
  4.4% {
    margin-left: 3px;
  }
`;

export const bounceLeft = keyframes`
  0%, 5.2%, 100% {
    margin-left: 0px;
  }
  25% {
    margin-left: -10px;
  }
  50% {
    margin-left: 0px;
  }
  75% {
    margin-left: 10px;
  }
`;

export const bounceLeftMobile = keyframes`
  0%, 5.2%, 100% {
    margin-left: 0px;
  }
  25% {
    margin-left: -5px;
  }
  50% {
    margin-left: 0px;
  }
  75% {
    margin-left: 5px;
  }
`;

export const jump = keyframes`
  15% {
    border-bottom-right-radius: 3px;
  }
  25% {
    transform: translateY(9px) rotate(22.5deg);
  }
  50% {
    transform: translateY(18px) scale(1, .9) rotate(45deg);
    border-bottom-right-radius: 40px;
  }
  75% {
    transform: translateY(9px) rotate(67.5deg);
  }
  100% {
    transform: translateY(0) rotate(90deg);
  }
`;

export const shadow = keyframes`
  0%, 100% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.2, 1);
  }
`;

export const glitchAnim = keyframes`
  0% {
    clip-path: var(--move1);
    transform: translate(0px, -10px);
  }
  10% {
    clip-path: var(--move2);
    transform: translate(-20px, 10px);
  }
  20% {
    clip-path: var(--move3);
    transform: translate(20px, 0px);
  }
  30% {
    clip-path: var(--move4);
    transform: translate(-20px, 10px);
  }
  40% {
    clip-path: var(--move5);
    transform: translate(20px, -10px);
  }
  50% {
    clip-path: var(--move6);
    transform: translate(-10px, 10px);
  }
  60% {
    clip-path: var(--move1);
    transform: translate(10px, -10px);
  }
  70% {
    clip-path: var(--move3);
    transform: translate(-30px, 10px);
  }
  80% {
    clip-path: var(--move2);
    transform: translate(20px, -10px);
  }
  90% {
    clip-path: var(--move4);
    transform: translate(-10px, 10px);
  }
  100% {
    clip-path: var(--move1);
    transform: translate(0);
  }
`;

export const scrollFade = keyframes`
  0% {
    transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: rotate(-45deg) translate(- 20px, 20px);
    opacity: 0;
  }
`;

export const scrollTopFade = keyframes`
  0% {
    transform: rotate(135deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: rotate(135deg) translate(- 20px, 20px);
    opacity: 0;
  }
`;
