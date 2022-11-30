import { FC, memo, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { InputStyled } from './styles';

type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input: FC<Props> = ({
  type = 'text',
  placeholder = '',
  onChange,
  onKeyDown,
  disabled = false,
  value,
}) => (
  <InputStyled
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    onKeyDown={onKeyDown}
    disabled={disabled}
    value={value}
  />
);

export default memo(Input);
