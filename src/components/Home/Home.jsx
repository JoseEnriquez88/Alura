import styles from "./home.module.css";
import logo from "/logo/Logo2x.png";
import { FaExclamationCircle } from "react-icons/fa";
import Result from "../Result/Result";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <a href="https://www.aluracursos.com/" target="_blank">
        <img
          src={logo}
          alt="logo"
          className={styles.logo}
          title="Alura Cursos"
        />
      </a>
      <div className={styles.container}>
        <div className={styles.maincontainer}>
          <div className={styles.textareaContainer}>
            <textarea
              name="textarea"
              placeholder="Ingrese el texto aquí"
              className={styles.textarea}
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
        <Result />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
