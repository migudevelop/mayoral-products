import { FC } from 'react';
import { ProductPriceWrapper, ProductPriceStyled, ProductDiscountStyled } from './styles';
import { formats } from 'utils';

type Props = {
  price: number;
  discount?: number;
};

const ProductPrice: FC<Props> = ({ price, discount }) => {
  return (
    <ProductPriceWrapper>
      <ProductPriceStyled>{formats.numberToCurrency({ number: price })}</ProductPriceStyled>
      {discount && (
        <ProductDiscountStyled>
          {formats.numberToCurrency({ number: discount })}
        </ProductDiscountStyled>
      )}
    </ProductPriceWrapper>
  );
};

export default ProductPrice;
