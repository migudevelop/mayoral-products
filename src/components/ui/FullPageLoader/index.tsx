import { FC, memo } from 'react';
import { FullPageLoaderStyled, LoaderSpinnerStyled } from './styles';

const FullPageLoader: FC = () => (
  <FullPageLoaderStyled>
    <LoaderSpinnerStyled />
  </FullPageLoaderStyled>
);

export default memo(FullPageLoader);
