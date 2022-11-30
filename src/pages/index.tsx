import { GetStaticProps, NextPage } from 'next';
import { MainLayout, ProductCard, HomeHeader, FullPageLoader } from 'components';
import { ProductsContainer, HomeWrapper } from 'styles';
import { ProductElement } from 'interfaces';
import { useUiState } from 'providers';
import { productsApi } from 'api';
import { constants, helpers } from 'utils';
import { useEffect, useState } from 'react';

interface Props {
  products: ProductElement[];
}

const HomePage: NextPage<Props> = ({ products }) => {
  const { zoomProducts, productOrder } = useUiState();
  const [filteredProducts, setFilteredProducts] = useState<ProductElement[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const handleOnSearch = (text: string) => {
    setLoading(true);
    productsApi
      .getFilteredProducts(text)
      .then((res) => res.json())
      .then(({ products }) => setFilteredProducts(products))
      .finally(() => setLoading(false));
  };

  return (
    <MainLayout title="Home" pageDescription="Mayoral home page">
      <HomeWrapper>
        <HomeHeader onSearch={handleOnSearch} />
        {loading && <FullPageLoader />}
        {!loading && (
          <ProductsContainer isMaxZoom={zoomProducts === constants.MAX_ZOOM}>
            {helpers.sortProductsByPrice(filteredProducts, productOrder)?.map((product) => (
              <ProductCard key={product?.id} product={product} />
            ))}
          </ProductsContainer>
        )}
      </HomeWrapper>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { products } = await productsApi.getAllProducts().then((res) => res.json());

  return {
    props: {
      products,
    },
  };
};

export default HomePage;
