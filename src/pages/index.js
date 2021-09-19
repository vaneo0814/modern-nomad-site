import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getPostList } from '../utils/posts';
import { getProductList } from '../utils/products';
import ProductList from '../components/ProductList';


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

export const getStaticProps = async () => {
  const postList = getPostList();
  const productList = await getProductList();
  return {
    props: {
      postList,
      productList,
    },
  };
};