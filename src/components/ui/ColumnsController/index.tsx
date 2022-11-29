import { FC } from 'react';
import { ColumnsControllerWrapper, PlusIconStyled, MinusIconStyled } from './styles';

const ColumnsController: FC = () => {
  return (
    <ColumnsControllerWrapper>
      <MinusIconStyled />
      <PlusIconStyled />
    </ColumnsControllerWrapper>
  );
};

export default ColumnsController;
