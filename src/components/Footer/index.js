import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-wrapper"]}>
        <h3 className={styles['footer-logo']}>Modern Travelers © 2021</h3>
        <h4 className={styles['footer-logo']}>Created by Vanessa Orellana</h4>
      </div>
    </footer>
  );
};

export default Footer;
