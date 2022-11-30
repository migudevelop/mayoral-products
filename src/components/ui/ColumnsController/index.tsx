import { useUiState } from 'providers';
import { FC, memo } from 'react';
import { ColumnsControllerWrapper, PlusIconStyled, MinusIconStyled } from './styles';

const ColumnsController: FC = () => {
  const { setZoomProducts } = useUiState();
  return (
    <ColumnsControllerWrapper>
      <MinusIconStyled onClick={() => setZoomProducts('MIN')} />
      <PlusIconStyled onClick={() => setZoomProducts('MAX')} />
    </ColumnsControllerWrapper>
  );
};

export default memo(ColumnsController);
