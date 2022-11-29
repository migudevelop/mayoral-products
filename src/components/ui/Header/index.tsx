import { FC } from 'react';
import { SearchBar, OrderButtons } from 'components';
import { HeaderWrapper } from './styles';

const Header: FC = () => (
  <HeaderWrapper>
    <SearchBar />
    <OrderButtons />
  </HeaderWrapper>
);

export default Header;
