import styled, { keyframes } from 'styled-components';
import { FaSpinner } from 'react-icons/fa';

export const FullPageLoaderStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderSpinnerStyled = styled(FaSpinner)`
  font-size: 7em;
  color: ${({ theme }) => theme.secondaryColor};
  animation: ${spin} 2s linear infinite;
`;
