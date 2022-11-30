import { GetStaticProps, NextPage } from 'next';
import { MainLayout, ProductCard, HomeHeader } from 'components';
import { ProductsContainer, HomeWrapper } from 'styles';
import { ProductElement } from 'interfaces';
import { useUiState } from 'providers';
import { productsApi } from 'api';
import { constants, helpers } from 'utils';

interface Props {
  products: ProductElement[];
}

const HomePage: NextPage<Props> = ({ products }) => {
  const { zoomProducts, productOrder } = useUiState();

  return (
    <MainLayout title="Home" pageDescription="Mayoral home page">
      <HomeWrapper>
        <HomeHeader />
        <ProductsContainer isMaxZoom={zoomProducts === constants.MAX_ZOOM}>
          {helpers.sortProductsByPrice(products, productOrder)?.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))}
        </ProductsContainer>
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
