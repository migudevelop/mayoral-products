import { FC, memo } from 'react';
import { SearchBar, ColumnsController, OrderElements } from 'components';
import { HomeWrapper } from './styles';

interface Props {
  onSearch: (value: string) => void;
}

const HomeHeader: FC<Props> = ({ onSearch }) => (
  <HomeWrapper>
    <SearchBar onSearch={onSearch} />
    <OrderElements />
    <ColumnsController />
  </HomeWrapper>
);

export default memo(HomeHeader);
