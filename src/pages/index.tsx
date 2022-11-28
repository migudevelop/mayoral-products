import { NextPage } from 'next';
import styled from 'styled-components';
import { MainLayout } from 'components';

const Title = styled.h1`
  color: ${({ theme }) => theme.primaryColor};
`;

const HomePage: NextPage = () => {
  return (
    <MainLayout title="Home" pageDescription="Mayoral home page">
      <Title>Hello World!</Title>
    </MainLayout>
  );
};

export default HomePage;
