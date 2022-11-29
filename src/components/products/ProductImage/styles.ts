import styled from 'styled-components';

export const ProductImageWrapper = styled.figure`
  width: 100%;
  max-width: 130px;
  position: relative;
`;

export const ProductImageStyled = styled.img`
  width: 100%;
  max-height: 150px;
  object-fit: cover;
`;

export const ProductImageTextStyled = styled.figcaption`
  color: ${({ theme }) => theme.secondaryColor};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
