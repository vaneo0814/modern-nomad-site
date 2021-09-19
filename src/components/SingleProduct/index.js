import Image from 'next/image';
import styles from './singleProduct.module.css';
import Link from 'next/link';

const SingleProduct = ({ product }) => {
  const { productImage, productName, productAuthor, description } = product;

  return (
    <section className={styles['product']}>
      <div className={styles['product-wrapper']}>
        <div className={styles['product-image-wrapper']}>
          <Image
            className={styles['product-image']}
            src={productImage.url}
            alt={`Featured image for ${productName}`}
            layout="intrinsic"
            width={productImage.width}
            height={productImage.height}
          />
        </div>
        <div className={styles['product-data']}>
          <h2 className={styles['product-name']}>{productName}</h2>
          <h3 className={styles['product-author']}>By {productAuthor}</h3>
          
          <p
            className={styles['product-description']}
            dangerouslySetInnerHTML={{ __html: description.html }}
          />
        </div>
        <div>
        <Link href={`/blog`}>
          <a className={styles["button"]}>Go back</a>
        </Link>
      </div>
      </div>
    </section>
  );
};

export default SingleProduct;