import styled, { css } from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa';

const ColorButtons = ({ theme }) =>
  css`
    color: ${theme.secondaryColor};
  `;

export const OrderButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  user-select: none;
  ${ColorButtons}
`;

const CommonIconsStyled = css`
  width: 2rem;
  height: 2rem;
`;

export const PlusIconStyled = styled(FaPlus)`
  ${CommonIconsStyled}
`;
export const MinusIconStyled = styled(FaMinus)`
  ${CommonIconsStyled}
`;
