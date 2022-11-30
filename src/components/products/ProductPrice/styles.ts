import { ProductPriceTextProps } from 'interfaces';
import styled, { css } from 'styled-components';

export const ProductPriceWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  row-gap: 0.5rem;
  flex-grow: 1;
`;

export const ProductPriceStyled = styled.label<ProductPriceTextProps>`
  color: ${({ theme }) => theme.secondaryColor};
  ${({ haveDiscount }) =>
    haveDiscount &&
    css`
      text-decoration: line-through;
    `}
`;
export const ProductDiscountStyled = styled.label`
  color: ${({ theme }) => theme.terciaryColor};
`;
