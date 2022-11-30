import styled, { css } from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa';

const ColorButtons = ({ theme }) =>
  css`
    color: ${theme.secondaryColor};
  `;

export const ColumnsControllerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  user-select: none;
  ${ColorButtons}
`;

const DisabledButton = ({ disabled }: { disabled: boolean }) =>
  disabled &&
  css`
    pointer-events: none;
    opacity: 0.4;
  `;

const CommonIconsStyled = css`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  ${DisabledButton}
`;

export const PlusIconStyled = styled(FaPlus)`
  ${CommonIconsStyled}
`;
export const MinusIconStyled = styled(FaMinus)`
  ${CommonIconsStyled}
`;
