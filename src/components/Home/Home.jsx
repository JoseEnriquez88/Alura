import styles from "./home.module.css";
import logo from "/logo/Logo2x.png";
import { FaExclamationCircle } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <img src={logo} alt="logo" className={styles.logo} />
      <div className={styles.maincontainer}>
        <div className={styles.textareaContainer}>
          <textarea
            name="phrase"
            placeholder="Ingrese el texto aquí"
          ></textarea>
        </div>
        <div className={styles.actionsContainer}>
          <p className={styles.clousureContainer}>
            <FaExclamationCircle className={styles.exclamationIcon} />
            Solo letras minúsculas y sin acentos
          </p>
          <div className={styles.buttonContainer}>
            <button className={styles.firstButton}>Encriptar</button>
            <button className={styles.secondButton}>Desencriptar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
