import styled from 'styled-components';

export const ProductPriceWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  row-gap: 0.5rem;
  flex-grow: 1;
`;

export const ProductPriceStyled = styled.label`
  color: ${({ theme }) => theme.secondaryColor};
`;
export const ProductDiscountStyled = styled.label`
  color: ${({ theme }) => theme.terciaryColor};
`;
