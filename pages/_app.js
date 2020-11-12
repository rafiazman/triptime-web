/** @format */

import React from 'react';
import App from 'next/app';
import Head from 'next/head';

import './_app.styles.scss';

// import '../css/global.css';
// import '../css/react-leaflet-geosearch.css';
// import '../css/leaflet.css';
// import '@fortawesome/fontawesome-free/css/all.css';
// import 'react-day-picker/lib/style.css';

import MainLayout from '../components/layout/MainLayout';
import { TripProvider } from '../contexts/TripContext';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Sanctum } from "react-sanctum";
import TopBar from "../components/TopBar/TopBar";

const theme = createMuiTheme({
  palette: {
    primary: { main: '#ff6400' },
    secondary: {
      main: '#888',
    },
  },
});

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    const sanctumConfig = {
      api_url: "https://api.triptime.cc",
      csrf_cookie_route: "api/csrf-cookie",
      signin_route: "login",
      signout_route: "logout",
      user_object_route: "user",
    };

    return (
      <>
        <Head>
          <title>TripTime - Plan your next adventure</title>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <meta name='image' property='og:image' content='https://triptime.cc/img/feature-preview/static-preview.jpg' />
          <link
            href='https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;600&display=swap'
            rel='stylesheet'
          />
          <link rel="stylesheet" href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"/>
        </Head>

        <Sanctum config={sanctumConfig}>
          <TripProvider>
            <TopBar />
            <ThemeProvider theme={theme}>
              <Component {...pageProps} />
            </ThemeProvider>
          </TripProvider>
        </Sanctum>
      </>
    );
  }
}
