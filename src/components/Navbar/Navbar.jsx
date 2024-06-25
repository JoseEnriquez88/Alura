import logo from "/logo/Logo2x.png";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.mainContainer}>
      <img src={logo} alt="logo" className={styles.logo} />
      <h1>Navbar</h1>
    </div>
  );
};

export default Navbar;
