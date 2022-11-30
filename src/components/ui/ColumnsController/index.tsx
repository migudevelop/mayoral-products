import { useUiState } from 'providers';
import { FC, memo } from 'react';
import { constants } from 'utils';
import { ColumnsControllerWrapper, PlusIconStyled, MinusIconStyled } from './styles';

const ColumnsController: FC = () => {
  const { setZoomProducts } = useUiState();
  return (
    <ColumnsControllerWrapper>
      <MinusIconStyled onClick={() => setZoomProducts(constants.MIN_ZOOM)} />
      <PlusIconStyled onClick={() => setZoomProducts(constants.MAX_ZOOM)} />
    </ColumnsControllerWrapper>
  );
};

export default memo(ColumnsController);
