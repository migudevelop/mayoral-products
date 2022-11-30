import { ChangeEvent, FC, memo, useEffect, useState } from 'react';
import { Input } from 'components';
import { SearchBarWrapper, SearchIconStyled } from './styles';
import { useDebounce } from 'hooks';

interface Props {
  onSearch: (value: string) => void;
}

const SearchBar: FC<Props> = ({ onSearch }) => {
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    onSearch(value);
  }, [debouncedValue]);

  return (
    <SearchBarWrapper>
      <SearchIconStyled />
      <Input placeholder="Buscar" onChange={handleChange} value={value} />
    </SearchBarWrapper>
  );
};

export default memo(SearchBar);
