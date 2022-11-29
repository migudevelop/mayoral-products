import { FC } from 'react';
import { Button, ProductImage, ProductPrice } from 'components';
import { ProductCardWrapper, ProductCardContent } from './styles';

const ProductCard: FC = () => {
  return (
    <ProductCardWrapper>
      <ProductCardContent>
        <ProductImage
          src="https://media.mayoral.com/wcsstore/mayoral/images/catalog/mayoral/trenka-para-recien-nacido_id_12-02408-079-M-4.JPG"
          imgText="
					Chaquetón con borrego para recién nacido
	        	"
        />
        <ProductPrice price={20} discount={40} />
        <Button text="Añadir" onClick={() => console.log('hola')} />
      </ProductCardContent>
    </ProductCardWrapper>
  );
};

export default ProductCard;
