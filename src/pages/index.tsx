import { NextPage } from 'next';
import { MainLayout, ProductCard } from 'components';
import { ProductsContainer } from 'styles';

const HomePage: NextPage = () => {
  return (
    <MainLayout title="Home" pageDescription="Mayoral home page">
      <ProductsContainer>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductsContainer>
    </MainLayout>
  );
};

export default HomePage;
