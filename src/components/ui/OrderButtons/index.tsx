import { FC } from 'react';
import { OrderButtonsWrapper, PlusIconStyled, MinusIconStyled } from './styles';

const OrderButtons: FC = () => {
  return (
    <OrderButtonsWrapper>
      <MinusIconStyled />
      <PlusIconStyled />
    </OrderButtonsWrapper>
  );
};

export default OrderButtons;
