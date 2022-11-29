import { FC } from 'react';
import { SearchBar } from 'components';
import { HeaderWrapper } from './styles';

const Header: FC = () => (
  <HeaderWrapper>
    <SearchBar />
  </HeaderWrapper>
);

export default Header;
