import '../styles/globals.css';
import '../styles/Layout.scss';
import '../styles/Mind.scss';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
    </>
  )
}

export default MyApp
