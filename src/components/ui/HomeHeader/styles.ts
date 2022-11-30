import styled from 'styled-components';
import { styleHelpers } from 'utils';

export const HomeWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  gap: 1rem;
  ${styleHelpers.MEDIAQUERIES.desktop} {
    justify-content: space-between;
    flex-direction: row;
    div:first-child {
      flex: 0.5;
    }
  }
`;
