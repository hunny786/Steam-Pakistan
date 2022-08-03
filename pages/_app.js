import { Fragment } from 'react';
import Head from 'next/head';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout/layout';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/adminSideNav.css'
import '../styles/globals.css';

const MyApp = ({ Component, pageProps, ...appProps }) => {
    if ([`/Login`].includes(appProps.router.pathname) || [`/Register`].includes(appProps.router.pathname))
      return (
        <Fragment>
          <Head>
            <title>STEAM Login</title>
            <link rel="stylesheet" href="https://use.typekit.net/jyt4vtq.css" />
            <link rel="icon" type="image/x-icon" href="/icons/favicon.ico" />
          </Head>
          <Component {...pageProps} />
        </Fragment>
      );
    if ([`/dashboard`].includes(appProps.router.pathname) || [`/dashboard/school`].includes(appProps.router.pathname) || [`/dashboard/schools`].includes(appProps.router.pathname) || [`/dashboard/createSchoolReport`].includes(appProps.router.pathname) || [`/dashboard/schoolSecondLevel`].includes(appProps.router.pathname) || [`/dashboard/summaryDashboard`].includes(appProps.router.pathname) || [`/dashboard/howToVideo`].includes(appProps.router.pathname) || [`/dashboard/howToGuide`].includes(appProps.router.pathname) || [`/dashboard/pedagogy`].includes(appProps.router.pathname) || [`/dashboard/settings`].includes(appProps.router.pathname))
      return (
        <Fragment>
          <Head>
            <title>STEAM Dashboard</title>
            <link rel="stylesheet" href="https://use.typekit.net/jyt4vtq.css" />
            <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet' />
            <link rel="icon" type="image/x-icon" href="/icons/favicon.ico" />
          </Head>
          <Component {...pageProps} />
        </Fragment>
      );
      return (
        <Fragment>
          <Head>
            <title>STEAM</title>
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
