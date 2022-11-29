import styled from 'styled-components';

export const ProductPriceWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 0.5rem;
`;

export const ProductPriceStyled = styled.label`
  color: ${({ theme }) => theme.secondaryColor};
`;
export const ProductDiscountStyled = styled.label`
  color: ${({ theme }) => theme.terciaryColor};
`;
