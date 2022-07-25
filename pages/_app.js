import { Fragment } from 'react';
import Head from 'next/head';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout/layout';
import '../styles/adminSideNav.css'
import '../styles/globals.css';

function MyApp({ Component, pageProps, ...appProps }) {
    if ([`/dashboard`].includes(appProps.router.pathname))
      return (
        <Fragment>
          <Head>
            <title>STEM Dashboard</title>
            <link rel="stylesheet" href="https://use.typekit.net/jyt4vtq.css" />
            <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet' />
            <link rel="icon" type="image/x-icon" href="/icons/favicon.ico" />
          </Head>
          <Component {...pageProps} />
        </Fragment>
      );
      return (
        <Fragment>
          <Head>
            <title>STEM</title>
            <link rel="stylesheet" href="https://use.typekit.net/jyt4vtq.css" />
            <link rel="icon" type="image/x-icon" href="/icons/favicon.ico" />
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Fragment>
      );
}

export default MyApp;
