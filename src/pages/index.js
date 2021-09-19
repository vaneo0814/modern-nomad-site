import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';


const flightsHome = ({ postList }) => {
    return (
      <>
        <Head>
          <title>Modern Travelers</title>
        </Head>
        <div className='page-wrapper'>
          <Header />
          <main>
            <pre>{JSON.stringify(postList, null, 2)}</pre>
            <h1>HELLO CHRIS</h1>
          </main>
          <Footer />
        </div>
      </>
    );
  };

export default flightsHome;