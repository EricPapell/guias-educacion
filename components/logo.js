import styles from "../styles/layout.module.css";

function Logo() {
  return (
    <div className={styles.containerLogo}>
      <p>LOGO</p>
      <div className={styles.containerLogoCiudad}>
        <label for="ciudad">Ciudad</label>
        <select id="ciudad">
          <option className={styles.option} value="quito">
            Quito y Valles{" "}
          </option>
          <option className={styles.option} value="guayaquil">
            Guayaquil{" "}
          </option>
        </select>
      </div>
    </div>
  );
}

export default Logo;
