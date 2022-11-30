import styled, { css } from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const ColorAndBackGroundSearch = ({ theme }) =>
  css`
    color: ${theme.secondaryColor};
    border: 2px solid ${theme.secondaryColor};
  `;

export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
  padding: 0.5rem;
  ${ColorAndBackGroundSearch}
  user-select: none;
`;

export const SearchIconStyled = styled(FaSearch)``;
