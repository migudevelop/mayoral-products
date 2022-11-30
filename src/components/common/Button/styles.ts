import styled from 'styled-components';

export const ButtonStyled = styled.button`
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px;
  border: none;
  border-radius: 3px;
  text-transform: capitalize;
  user-select: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.textColor};
  :focus {
    outline: 0;
  }

  :disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
    background-color: ${({ theme }) => theme.secondaryColor};
  }
`;
