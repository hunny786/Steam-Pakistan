import { Fragment } from 'react';
import Head from 'next/head';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>STEM</title>
        <link rel="stylesheet" href="https://use.typekit.net/jyt4vtq.css" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>)
}

export default MyApp;
