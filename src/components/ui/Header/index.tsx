import { FC } from 'react';
import { SearchBar, ColumnsController } from 'components';
import { HeaderWrapper } from './styles';

const Header: FC = () => (
  <HeaderWrapper>
    <SearchBar />
    <ColumnsController />
  </HeaderWrapper>
);

export default Header;
