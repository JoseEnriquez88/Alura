import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.mainContainer}></div>
      <div className={styles.textContainer}>
        Desarrollado por:
        <a href="https://portfolio-pi-ten-78.vercel.app/" target="_blank">
          Jose Enriquez
          <img src="/logo.png" alt="logo" className={styles.logo} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
