import styled from 'styled-components';

export const ProductCardWrapper = styled.div`
  flex: 0 0 calc(100% / 4);
`;

export const ProductCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  position: relative;
  box-shadow: 0 0 5px 1px ${({ theme }) => theme.primaryColor};
  border-radius: 0.5rem;
  padding: 1rem 0.5rem;
`;
