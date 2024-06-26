import styles from "./result.module.css";
import muñeco from "/images/Muñeco.png";

const Result = ({ processedText }) => {
  return (
    <div className={styles.mainContainer}>
      {processedText ? (
        <div className={styles.textContainer}>
          <p className={styles.processedText}>{processedText}</p>
          <button
            className={styles.copyButton}
            onClick={() => navigator.clipboard.writeText(processedText)}
          >
            Copiar
          </button>
        </div>
      ) : (
        <>
          <img src={muñeco} alt="img" className={styles.image} />
          <div className={styles.textContainer}>
            <h1>Ningún mensaje fue encontrado</h1>
            <p className={styles.advice}>Ingresa el texto que deseas encriptar o desencriptar</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Result;
