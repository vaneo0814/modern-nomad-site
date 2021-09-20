import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './index.module.css';
import Image from 'next/image';



const Home = () => {
  return (
    <>
      <Head>
        <title>Home // Modern Travelers</title>
      </Head>
      <div className='page-wrapper'>
        <Header />
        <section className={styles['product-list']}>
        <h2 className={styles['product-list-title']}>what's up travelers!<br/>check out some travel tips from our crew</h2>
        <div className={styles['product-list-grid']}>
              <div className={styles['product-item']}>
                  <div className={styles['product-image-wrapper']}>
                    <Image
                      className={styles['product-image']}
                      src={'/images/header'}
                      alt= "banners"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                <h3 className={styles['product-name']}>Hello</h3>
                <h4 className={styles['product-author']}>By </h4>
                  <a className={styles['product-link']}>See Posts</a>
      
              </div>    
        </div>
      </section>
        <Footer />
      </div>
    </>
  );
};


export default Home;
