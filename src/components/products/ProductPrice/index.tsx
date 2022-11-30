import { FC, memo } from 'react';
import { ProductPriceWrapper, ProductPriceStyled, ProductDiscountStyled } from './styles';
import { formats, helpers } from 'utils';

interface Props {
  price: number;
  discount?: number;
}

const ProductPrice: FC<Props> = ({ price, discount }) => {
  return (
    <ProductPriceWrapper>
      <ProductPriceStyled>{formats.numberToCurrency({ number: price })}</ProductPriceStyled>
      {discount && (
        <ProductDiscountStyled>
          {`${formats.numberToCurrency({
            number: helpers.calculatePriceWithOffer(price, discount),
          })}(-${discount}%)`}
        </ProductDiscountStyled>
      )}
    </ProductPriceWrapper>
  );
};

export default memo(ProductPrice);
