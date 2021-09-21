import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductForm from '../../components/ProductForm';


const contactForm = () => {
  return (
    <>
      <Head>
        <title>Travel tips // Modern Travelers</title>
      </Head>
      <div className="page-wrapper">
        <Header/>
        <main>
          {/*product form*/}
          <ProductForm/>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default contactForm;
