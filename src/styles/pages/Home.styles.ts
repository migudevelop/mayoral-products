import styled from 'styled-components';

const ProductsContainerGrid = ({ columns }: { columns: number }) =>
  `grid-template-columns: repeat(${columns}, minmax(calc(${100 / columns}% - 16px), auto));`;

export const ProductsContainer = styled.section`
  display: grid;
  ${ProductsContainerGrid}
  grid-gap: 1rem
`;
