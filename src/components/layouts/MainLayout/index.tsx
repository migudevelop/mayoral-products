import { FC, memo, PropsWithChildren } from 'react';
import Head from 'next/head';

interface Props {
  title: string;
  pageDescription: string;
}

const MainLayout: FC<PropsWithChildren<Props>> = ({ children, title, pageDescription }) => {
  return (
    <>
      <Head>
        <title>{title} - Mayoral</title>
        <meta name="description" content={pageDescription} />
      </Head>
      <main>{children}</main>
    </>
  );
};

export default memo(MainLayout);
