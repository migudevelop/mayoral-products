import { useUiState } from 'providers';
import { FC, memo } from 'react';
import { constants } from 'utils';
import { ColumnsControllerWrapper, PlusIconStyled, MinusIconStyled } from './styles';

const ColumnsController: FC = () => {
  const { zoomProducts, setZoomProducts } = useUiState();
  const haveMaxZoom = zoomProducts === constants.MAX_ZOOM;
  return (
    <ColumnsControllerWrapper>
      <MinusIconStyled
        disabled={!haveMaxZoom}
        onClick={() => setZoomProducts(constants.MIN_ZOOM)}
      />
      <PlusIconStyled disabled={haveMaxZoom} onClick={() => setZoomProducts(constants.MAX_ZOOM)} />
    </ColumnsControllerWrapper>
  );
};

export default memo(ColumnsController);
