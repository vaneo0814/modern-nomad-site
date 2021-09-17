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
          <Header/>
        <main>
          <h2>Modern Travelers</h2>
        </main>
        <Footer/>
      </div>
    </>
  );
};

export default Home;