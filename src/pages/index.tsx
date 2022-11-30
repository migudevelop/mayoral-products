import { GetStaticProps, NextPage } from 'next';
import { MainLayout, ProductCard, HomeHeader } from 'components';
import { ProductsContainer, HomeWrapper } from 'styles';
import { dbProducts } from 'database';
import { ProductElement, ProductsResponse } from 'interfaces';
import { useUiState } from 'providers';

interface Props {
  products: ProductElement[];
}

const HomePage: NextPage<Props> = ({ products }) => {
  const { zoomProducts } = useUiState();
  return (
    <MainLayout title="Home" pageDescription="Mayoral home page">
      <HomeWrapper>
        <HomeHeader />
        <ProductsContainer isMaxZoom={zoomProducts === 'MAX'}>
          {products?.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))}
        </ProductsContainer>
      </HomeWrapper>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { products }: ProductsResponse = await dbProducts.getAllProducts();

  return {
    props: {
      products,
    },
  };
};

export default HomePage;
