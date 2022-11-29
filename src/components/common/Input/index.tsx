import { FC, memo, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { InputStyled } from './styles';

type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input: FC<Props> = ({ type = 'text', placeholder = '', onChange, disabled = false }) => (
  <InputStyled type={type} placeholder={placeholder} onChange={onChange} disabled={disabled} />
);

export default memo(Input);
