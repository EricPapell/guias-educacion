import styles from "../../styles/page.module.css";
import Image from "next/image";
import img from "../../public/back-5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
const elLeft = <FontAwesomeIcon icon={faChevronLeft} />;
const elRight = <FontAwesomeIcon icon={faChevronRight} />;

function Carroussel() {
  return (
    <section className={styles.containerCarrousel}>
      <div className={styles.containerCarrouselBox}>
        <button className={styles.buttonLeft}>{elLeft}</button>
        <div className={styles.divLayout}></div>
        <div className={styles.containerCarrouselInfo}>
          <h1>El indispensable de la ligereza</h1>
          <h3>Lorem ipsum dolor sit amet </h3>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            nostrum ipsam itaque tempora, omnis quod ducimus voluptatem
            consectetur minima tenetur?
          </p>
          <button>LEER MÁS</button>
        </div>
        <button className={styles.buttonRight}>{elRight}</button>
      </div>
      <div className={styles.layer}></div>
      <Image className={styles.imageCarrousel} src={img} />
    </section>
  );
}

export default Carroussel;
