import { FC } from 'react';
import { ProductImageWrapper, ProductImageStyled, ProductImageTextStyled } from './styles';

interface Props {
  src?: string;
  alt?: string;
  imgText?: string;
}

const ProductCard: FC<Props> = ({ src, alt = '', imgText }) => {
  return (
    <ProductImageWrapper>
      <ProductImageStyled src={src} alt={alt} />
      {imgText && <ProductImageTextStyled>{imgText}</ProductImageTextStyled>}
    </ProductImageWrapper>
  );
};

export default ProductCard;
