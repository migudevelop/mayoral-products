import styled from 'styled-components';

export const HomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  margin: 1.5rem 0;
`;

const ProductsContainerGrid = ({ columns }: { columns: number }) =>
  `grid-template-columns: repeat(${columns}, minmax(calc(${100 / columns}% - 16px), auto));`;

export const ProductsContainer = styled.section`
  display: grid;
  ${ProductsContainerGrid}
  grid-gap: 1rem
`;
