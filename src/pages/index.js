import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <>
      <Head>
        <title>Modern Travelers</title>
      </Head>
      <div className='page-wrapper'>
        <Header />
        <main>
        <h3> HELLO </h3>
        </main>
        <Footer />
      </div>
    </>
  );
};


export default Home;
