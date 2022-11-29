import { NextPage } from 'next';
import { MainLayout, ProductCard, HomeHeader } from 'components';
import { ProductsContainer, HomeWrapper } from 'styles';

const HomePage: NextPage = () => {
  return (
    <MainLayout title="Home" pageDescription="Mayoral home page">
      <HomeWrapper>
        <HomeHeader />
        <ProductsContainer columns={2}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductsContainer>
      </HomeWrapper>
    </MainLayout>
  );
};

export default HomePage;
