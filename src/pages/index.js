import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home // Modern Travelers</title>
      </Head>
      <div className="page-wrapper">
        <Header />
        <section className={styles["product-list"]}>
          <h2 className={styles["product-list-title"]}>
            - Photo logs from around the world -
          </h2>
          <div className={styles["product-list-grid"]}>
            <div className={styles["product-item"]}>
              <div className={styles["product-image-wrapper"]}>
                <Image
                  className={styles["product-image"]}
                  src={"/images/elephants.jpeg"}
                  alt="banners"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <h4 className={styles["product-link"]}>
                SAFARI - Lake Manyara <br /> National Park{" "}
              </h4>
            </div>
            <div className={styles["product-item"]}>
              <div className={styles["product-image-wrapper"]}>
                <Image
                  className={styles["product-image"]}
                  src={"/images/bermuda.jpeg"}
                  alt="banners"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <h4 className={styles["product-link"]}>
                BERMUDA - Warwick Bay Beach <br /> Warwick Parish{" "}
              </h4>
            </div>
            <div className={styles["product-item"]}>
              <div className={styles["product-image-wrapper"]}>
                <Image
                  className={styles["product-image"]}
                  src={"/images/spain.jpeg"}
                  alt="banners"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <h4 className={styles["product-link"]}>
                Casa Battló, Spain <br /> Art by Antoni Gaudí
              </h4>
            </div>
            <div className={styles["product-item"]}>
              <div className={styles["product-image-wrapper"]}>
                <Image
                  className={styles["product-image"]}
                  src={"/images/quote.jpeg"}
                  alt="banners"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
            </div>
            <div className={styles["product-item"]}>
              <div className={styles["product-image-wrapper"]}>
                <Image
                  className={styles["product-image"]}
                  src={"/images/journal.jpeg"}
                  alt="banners"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
            </div>
            <div className={styles["product-item"]}>
              <div className={styles["product-image-wrapper"]}>
                <Image
                  className={styles["product-image"]}
                  src={"/images/entries.jpeg"}
                  alt="banners"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
            </div>
            <div className={styles["product-item"]}>
              <div className={styles["product-image-wrapper"]}>
                <Image
                  className={styles["product-image"]}
                  src={"/images/plane.jpeg"}
                  alt="banners"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className={styles["product-item"]}>
                <Link href={`/blog`}>
                  <a className={styles["button"]}>
                    Travel tips from our crew !
                  </a>
                </Link>
              </div>
            </div>

            <div className={styles["product-item"]}>
              <h4 className={styles["product-link-about"]}>
                {" "}
                - About Modern Travelers -{" "}
              </h4>
              <p className={styles["product-link-aboutInfo"]}>
                For more than 10 years I worked my ass off. Always trying to be
                the best. Always waiting for that next promotion. Always aiming
                to earn more money. And I did. I got the fancy job and the
                promotions, the good salary and the oh-so-important big car. I
                bought myself some designer handbags and a house full of other
                useless shit, traveled whenever I could and thought I had it
                all. I also spent 10 hours a day at work and turned my computer
                back on as soon as I’d finished having dinner at home… The days
                I wouldn’t just work through dinner, that is… I got a nice house
                with a garden. Spent a small fortune on ‘stuff’… curtains,
                plants and decorations – as if I was gonna die if I had to put
                the same decorations in my Christmas tree two years in a row… I
                also spent 90% of my free time renovating and plucking weeds…
                Then I realized that NONE of my most memorable moments involved
                ANY of the possessions and ‘accomplishments’ mentioned above.
                That I was happier sleeping in a € 5 dorm room, spending 15
                hours in a shabby bus and carrying my stuff around in a € 25
                fake leather handbag that was holding together with safety-pins…
              </p>
            </div>
            <div className={styles["product-item"]}>
              <div className={styles["product-image-wrapper"]}>
                <Image
                  className={styles["product-image"]}
                  src={"/images/food.jpeg"}
                  alt="banners"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>

              <div className={styles["product-item"]}>
                <a className={styles["product-link"]}>
                  Follow us on Instagram @moderntravelers
                </a>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Home;
