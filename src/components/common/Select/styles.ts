import { DropdownItemProps, DropdownProps } from 'interfaces';
import styled, { css } from 'styled-components';

export const SelectWrapper = styled.div`
  position: relative;
  margin: 0;
`;

export const SelectLabelButtonStyled = styled.button`
  border-radius: 8px;
  padding: 0.5rem;
  border: 2px solid #bfc2c7;
  min-width: 10rem;
  font-weight: 500;
  background-color: #fff;
  color: #111;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: 0.3s ease;
  user-select: none;
  &:hover {
    background-color: #eee;
  }
`;

export const DropdownStyled = styled.div<DropdownProps>`
  position: absolute;
  top: 0;
  left: 0;
  max-height: 40vmax;
  min-width: 10rem;
  padding: 0.4rem;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background: #fafafa;
  border: 1.5px solid slategrey;
  transition: max-height 0.2s ease;
  z-index: 2;
  ${({ isVisible }) =>
    isVisible !== true &&
    css`
      max-height: 40px;
      visibility: hidden;
    `}
`;

export const DropdownItemStyled = styled.div<DropdownItemProps>`
  display: flex;
  align-items: center;
  width: 90%;
  margin: 0.15rem 0;
  padding: 0.3rem 0.5rem;
  font-size: 0.9rem;
  font-weight: 400;
  color: #333;
  border-radius: 0.3rem;
  cursor: pointer;
  user-select: none;
  ${({ active }) =>
    active &&
    css`
      color: #74a6e4;
      font-weight: 500;
    `}
  &:hover, :focus, :focus:hover {
    background-color: #166edc;
    color: #fafafa;
    outline: none;
  }
`;
