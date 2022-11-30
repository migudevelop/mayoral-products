import styled from 'styled-components';

export const ProductImageWrapper = styled.figure`
  width: 100%;
  position: relative;
`;

export const ProductImageStyled = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const ProductImageTextStyled = styled.figcaption`
  color: ${({ theme }) => theme.secondaryColor};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
`;
