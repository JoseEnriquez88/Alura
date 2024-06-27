import { useState, useRef } from "react";
import styles from "./home.module.css";
import logo from "/logo/Logo2x.png";
import { FaExclamationCircle } from "react-icons/fa";
import Result from "../Result/Result";
// import Footer from "../Footer/Footer";

const Home = () => {
  const [inputText, setInputText] = useState("");
  const [processedText, setProcessedText] = useState("");
  const encryptButtonRef = useRef(null);
  const decryptButtonRef = useRef(null);

  const handleEncrypt = () => {
    const encryptedText = inputText
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
    setProcessedText(encryptedText);
  };

  const handleDecrypt = () => {
    const decryptedText = inputText
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    setProcessedText(decryptedText);
  };

  const handleMouseOver = () => {
    encryptButtonRef.current.classList.add(styles.firstButtonHover);
    decryptButtonRef.current.classList.add(styles.secondButtonHover);
  };

  const handleMouseOut = () => {
    encryptButtonRef.current.classList.remove(styles.firstButtonHover);
    decryptButtonRef.current.classList.remove(styles.secondButtonHover);
  };

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
        <div className={styles.mainContainer}>
          <div className={styles.textareaContainer}>
            <textarea
              name="textarea"
              placeholder="Ingrese el texto aquí"
              className={styles.textarea}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              maxLength={200}
              required
            ></textarea>
          </div>
          <div className={styles.actionsContainer}>
            <p className={styles.clousureContainer}>
              <FaExclamationCircle className={styles.exclamationIcon} />
              Solo letras minúsculas y sin acentos
            </p>
            <div className={styles.buttonContainer}>
              <button
                className={styles.firstButton}
                onClick={handleEncrypt}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                ref={encryptButtonRef}
              >
                Encriptar
              </button>
              <button
                className={styles.secondButton}
                onClick={handleDecrypt}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                ref={decryptButtonRef}
              >
                Desencriptar
              </button>
            </div>
          </div>
        </div>
        <Result processedText={processedText} />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
