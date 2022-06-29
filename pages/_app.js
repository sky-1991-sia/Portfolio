import '../styles/globals.css';
import '../styles/Layout.scss';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Head from 'next/head';
import ScrollTopBtn from '../components/ScrollTopBtn';


function MyApp({ Component, pageProps }) {
  
  return (
    <>
    <Head>
      <title>portfolio | skyde</title>
      <meta name="description" content="React/Next js developer who is interested about ui/ux and backend at same time" />
      <meta name="google-site-verification" content="y5Ys5_Mrd_5R4boIGfbtRcYWE26lPceBg1TgxQzYyPw" />
    </Head>
    <Header/>
    <Component {...pageProps} />
    <ScrollTopBtn/>
    <Footer/>
      
    </>
  )
}

export default MyApp
