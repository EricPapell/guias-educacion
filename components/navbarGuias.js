import styles from "../styles/layout.module.css";
import Link from "next/link";

function NavbarGuias() {
  return (
    <section className={styles.containerNav}>
      <div className={styles.containerNavButtons}>
        <Link className={styles.links} href="certificaciones">
          <div>
            <p>Certificaciones/Programas</p>
          </div>
        </Link>
        <Link className={styles.links} href="idiomas">
          <div>
            <p>Idiomas</p>
          </div>
        </Link>
        <Link className={styles.links} href="intercambios-estudiantiles">
          <div>
            <p>Intercambios</p>
          </div>
        </Link>
        <Link className={styles.links} href="pension">
          <div>
            <p>Pensión</p>
          </div>
        </Link>
        <Link className={styles.links} href="becas">
          <div>
            <p>Becas</p>
          </div>
        </Link>
        <Link className={styles.links} href="educacion-especial">
          <div>
            <p>Educación Especial</p>
          </div>
        </Link>
        <Link className={styles.links} href="home-school">
          <div>
            <p>Home School</p>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default NavbarGuias;
