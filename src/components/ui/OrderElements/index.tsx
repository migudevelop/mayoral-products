import { Select } from 'components';
import { useUiState } from 'providers';
import { FC, memo } from 'react';
import { OrderProductsWrapper } from './styles';
import { constants } from 'utils';

const OPTIONS = [
  { label: 'Precio DESC', value: constants.DESC_ORDER },
  { label: 'Precio ASC', value: constants.ASC_ORDER },
];

const OrderProducts: FC = () => {
  const { setProductOrder } = useUiState();

  const handleOnChange = (e) => {
    setProductOrder(e.value);
  };

  return (
    <OrderProductsWrapper>
      <Select label="Ordenar por Precio" values={OPTIONS} onChange={handleOnChange} />
    </OrderProductsWrapper>
  );
};

export default memo(OrderProducts);
