import { useState, useRef } from "react";
import { motion } from "framer-motion";
import styles from "./home.module.css";
import logo from "/logo/Logo2x.png";
import { FaExclamationCircle } from "react-icons/fa";
import Result from "../Result/Result";
import {
  textAreaVariants,
  firstButtonVariants,
  secondButtonVariants,
} from "../../utilities/motions/variants";

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
    <div className={styles.homeWrapper}>
      <a href="https://www.aluracursos.com/" target="_blank">
        <img
          src={logo}
          alt="logo"
          className={styles.homeLogo}
          title="Alura Cursos"
        />
      </a>
      <div className={styles.homeContainer}>
        <div className={styles.homeMainContainer}>
          <motion.div
            className={styles.textareaContainer}
            variants={textAreaVariants}
            initial="initial"
            animate="animate"
          >
            <textarea
              name="textarea"
              placeholder="Ingrese el texto aquí"
              className={styles.textarea}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              maxLength={200}
              required
              autoFocus
            ></textarea>
          </motion.div>
          <div className={styles.actionsContainer}>
            <p className={styles.clousureContainer}>
              <FaExclamationCircle className={styles.exclamationIcon} />
              Solo letras minúsculas y sin acentos
            </p>
            <motion.div className={styles.homeButtonContainer}>
              <motion.button
                className={styles.firstButton}
                onClick={handleEncrypt}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                ref={encryptButtonRef}
                variants={firstButtonVariants}
                initial="initial"
                animate="animate"
              >
                Encriptar
              </motion.button>
              <motion.button
                className={styles.secondButton}
                onClick={handleDecrypt}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                ref={decryptButtonRef}
                variants={secondButtonVariants}
                initial="initial"
                animate="animate"
              >
                Desencriptar
              </motion.button>
            </motion.div>
          </div>
        </div>
        <Result processedText={processedText} />
      </div>
    </div>
  );
};

export default Home;
