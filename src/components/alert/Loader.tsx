import styled, { keyframes } from "styled-components";

interface LoadingCycleProps {
  position?: string;
}

const LoadingCycle = ({ position = "fixed" }: LoadingCycleProps) => {
  return (
    <LoadingBox position={position}>
      <Circle></Circle>
      <Circle></Circle>
      <Circle></Circle>
    </LoadingBox>
  );
};

export default LoadingCycle;

const cycle = keyframes`
from {
  opacity: 1;
  transform: scale(1);
  background-color: #2E83F5;
}
to {
  opacity: 0.8;
  transform: scale(.75);
}
  
`;

const LoadingBox = styled.div<{ position: string }>`
  position: ${({ position }) => position};
  ${({ theme }) => theme.mixins.flexBox()}
  gap: 1rem;
  z-index: 50;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
`;

const Circle = styled.div`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  transtion: background-color 2s;
  :nth-child(1) {
    animation: ${cycle} 0.4s ease 0s infinite alternate;
    background-color: white;
  }
  :nth-child(2) {
    animation: ${cycle} 0.4s ease 0.2s infinite alternate;
    background-color: white;
  }
  :nth-child(3) {
    animation: ${cycle} 0.4s ease 0.4s infinite alternate;
    background-color: white;
  }
`;
