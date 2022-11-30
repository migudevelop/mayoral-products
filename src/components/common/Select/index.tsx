import { SelectOptions, SelectValue } from 'interfaces';
import { FC, memo, useState } from 'react';
import {
  SelectWrapper,
  SelectLabelButtonStyled,
  DropdownStyled,
  DropdownItemStyled,
} from './styles';

interface Props {
  label?: string;
  values: SelectOptions;
  onChange: (value: string) => void;
}

const Select: FC<Props> = ({ label, onChange, values }) => {
  const [currentValue, setCurrentValue] = useState<SelectValue>({ label: '', value: '' });
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };
  const handleValueChange = (value) => {
    setCurrentValue(value);
  };
  const handleChange = (value) => {
    handleValueChange(value);
    if (onChange) onChange(value);
    toggleOpen();
  };

  return (
    <SelectWrapper>
      <SelectLabelButtonStyled onClick={toggleOpen}>
        {currentValue.value !== '' ? currentValue.label : label}
      </SelectLabelButtonStyled>
      <DropdownStyled isVisible={open}>
        {values?.map(({ label, value }, index) => (
          <DropdownItemStyled
            onClick={() => handleChange({ label, value })}
            active={value === currentValue.value}
            key={index}
          >
            {label}
          </DropdownItemStyled>
        ))}
      </DropdownStyled>
    </SelectWrapper>
  );
};

export default memo(Select);
