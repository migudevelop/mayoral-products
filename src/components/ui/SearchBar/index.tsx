import { FC } from 'react';
import { Input } from 'components';
import { SearchBarWrapper, SearchIconStyled } from './styles';

const SearchBar: FC = () => {
  return (
    <SearchBarWrapper>
      <SearchIconStyled />
      <Input placeholder="Buscar" />
    </SearchBarWrapper>
  );
};

export default SearchBar;
