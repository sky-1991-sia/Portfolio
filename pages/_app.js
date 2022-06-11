import '../styles/globals.css';
import '../styles/Layout.scss';
import '../styles/Mind.scss';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>portfolio | skyde</title>
      <meta name="description" content="React/Next js developer who is interested about ui/ux and backend at same time" />
    </Head>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
    </>
  )
}

export default MyApp
