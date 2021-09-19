import Link from 'next/link';
import Image from 'next/image';
import styles from './productList.module.css';

const ProductList = ({ products = [] }) => {
    return (
      <section className={styles['product-list']}>
        <h2 className={styles['product-list-title']}>what's up travelers!<br/>check out some travel tips from our crew</h2>
        <div className={styles['product-list-grid']}>
          {products.length ? (
            products.map(({ id, productName, productAuthor, productImage, slug }) => (
              <div key={id} className={styles['product-item']}>
                <Link href={`/products/${slug}`}>
                  <div className={styles['product-image-wrapper']}>
                    <Image
                      className={styles['product-image']}
                      src={productImage.url}
                      alt={`Featured image for ${productName}`}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </Link>
                <h3 className={styles['product-name']}>{productName}</h3>
                <h4 className={styles['product-author']}>By {productAuthor}</h4>
                <Link href={`/blog/${slug}`}>
                  <a className={styles['product-link']}>See Posts</a>
                </Link>
              </div>
            ))
          ) : (
            <h3>No products to display!</h3>
          )}
        </div>
      </section>
    );
  };
  
  export default ProductList;