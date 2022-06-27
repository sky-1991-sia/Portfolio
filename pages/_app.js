import '../styles/globals.css';
import '../styles/Layout.scss';
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Head from 'next/head';
import Script from 'next/script'


function MyApp({ Component, pageProps }) {
  
  return (
    <>
    <Head>
      <title>portfolio | skyde</title>
      <meta name="description" content="React/Next js developer who is interested about ui/ux and backend at same time" />
      <meta name="google-site-verification" content="y5Ys5_Mrd_5R4boIGfbtRcYWE26lPceBg1TgxQzYyPw" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
    </Head>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
      <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></Script>
      <Script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" ></Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></Script>

    </>
  )
}

export default MyApp
