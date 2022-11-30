import styled from 'styled-components';
import { styleHelpers } from 'utils';

export const HomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  margin: 1.5rem 0;
`;

const ProductsContainerGrid = ({ isMaxZoom }: { isMaxZoom: boolean }) => {
  const columnsMobile = isMaxZoom ? 3 : 2;
  const columnsDesktop = isMaxZoom ? 4 : 3;
  return `grid-template-columns: repeat(${columnsMobile}, minmax(calc(${
    100 / columnsMobile
  }% - 16px), auto));
  ${styleHelpers.MEDIAQUERIES.desktop}{
    grid-template-columns: repeat(${columnsDesktop}, minmax(calc(${
    100 / columnsDesktop
  }% - 16px), auto));
  }
  `;
};

export const ProductsContainer = styled.section`
  display: grid;
  ${ProductsContainerGrid}
  grid-gap: 1rem
`;
