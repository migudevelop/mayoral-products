import { FC, memo } from 'react';
import { SearchBar, ColumnsController, OrderElements } from 'components';
import { HomeWrapper } from './styles';

const HomeHeader: FC = () => (
  <HomeWrapper>
    <SearchBar />
    <OrderElements />
    <ColumnsController />
  </HomeWrapper>
);

export default memo(HomeHeader);
