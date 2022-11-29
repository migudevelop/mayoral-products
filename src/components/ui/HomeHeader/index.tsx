import { FC } from 'react';
import { SearchBar, ColumnsController } from 'components';
import { HomeWrapper } from './styles';

const HomeHeader: FC = () => (
  <HomeWrapper>
    <SearchBar />
    <ColumnsController />
  </HomeWrapper>
);

export default HomeHeader;
