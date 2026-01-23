import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { LayoutProps } from '@/types/common';

const DEFAULT_TITLE = 'Roman Kriuchkov - Backend Developer';
const DEFAULT_DESCRIPTION = 'Backend Developer specializing in Java, C/C++, Python, TypeScript, and modern backend technologies';

const Layout: React.FC<LayoutProps> = ({
  children,
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="author" content="Roman Kriuchkov" />
        <meta name="keywords" content="Backend Developer, Java, TypeScript, Spring Boot, NestJS" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
