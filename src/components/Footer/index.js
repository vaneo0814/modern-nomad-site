import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-wrapper"]}>
        <h3>Modern Travelers © 2021</h3>
        <h4>Created by Vanessa Orellana</h4>
      </div>
    </footer>
  );
};

export default Footer;
