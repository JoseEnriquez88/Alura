import styles from "./result.module.css";
import muñeco from "/images/Muñeco.png";

const Result = () => {
  return (
    <div className={styles.mainContainer}>
      <img src={muñeco} alt="img" className={styles.image} />
      <div className={styles.textContainer}>
        <h1>Ningún mensaje fue encontrado</h1>
        <p>Ingresa el texto que deseas encriptar o desencriptar</p>
      </div>
    </div>
  );
};

export default Result;
