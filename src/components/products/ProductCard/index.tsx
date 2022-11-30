import { FC } from 'react';
import { Button, ProductImage, ProductPrice } from 'components';
import { ProductCardWrapper, ProductCardContent, MoreColorsStyled } from './styles';
import { ProductElement } from 'interfaces';

interface Props {
  product: ProductElement;
}

const ProductCard: FC<Props> = ({ product }) => {
  const { discount, image, moreColors, name, price } = product;
  const handleAddProduct = () => alert('Añadido');

  return (
    <ProductCardWrapper>
      <ProductCardContent>
        <ProductImage src={image} imgText={name} />
        <ProductPrice price={price} discount={discount} />
        {moreColors && <MoreColorsStyled>Más colores</MoreColorsStyled>}
        <Button text="Añadir" onClick={handleAddProduct} />
      </ProductCardContent>
    </ProductCardWrapper>
  );
};

export default ProductCard;
