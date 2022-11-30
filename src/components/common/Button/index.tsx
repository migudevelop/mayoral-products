import { FC, MouseEventHandler, memo } from 'react';
import { ButtonStyled } from './styles';

interface Props {
  text: string;
  disabled?: boolean;
  onClick: MouseEventHandler;
}

const Button: FC<Props> = ({ text, onClick, disabled = false }) => (
  <ButtonStyled onClick={onClick} disabled={disabled}>
    {text}
  </ButtonStyled>
);

export default memo(Button);
