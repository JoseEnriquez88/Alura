import styles from "./footer.module.css";
const URL = "https://my-portfolio-gamma-olive.vercel.app/";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.mainContainer}></div>
      <div className={styles.textContainer}>
        Desarrollado por:
        <a href={URL} target="_blank">
          Jose Enriquez
          <img src="/logo.png" alt="logo" className={styles.logo} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
