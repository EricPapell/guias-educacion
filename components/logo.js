import styles from "../styles/layout.module.css";
import Image from "next/image";
import Link from "next/link";
import img from "../public/logo.png";
function Logo() {
  return (
    <div className={styles.containerLogo}>
      <Link href="/">
        <Image alt="logo" className={styles.containerLogoImg} src={img} />
      </Link>
      <div className={styles.containerLogoCiudad}>
        <p>Ciudad</p>
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
