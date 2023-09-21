import styles from "../styles/layout.module.css";
import Link from "next/link";

function NavbarGuias() {
  return (
    <section className={styles.containerNav}>
      <div className={styles.containerNavButtons}>
        <Link className={styles.links} href="certificaciones">
          <div>
            <h3>Certificaciones/Programas</h3>
          </div>
        </Link>
        <Link className={styles.links} href="idiomas">
          <div>
            <h3>Idiomas</h3>
          </div>
        </Link>
        <Link className={styles.links} href="intercambios-estudiantiles">
          <div>
            <h3>Intercambios</h3>
          </div>
        </Link>
        <Link className={styles.links} href="pension">
          <div>
            <h3>Pensión</h3>
          </div>
        </Link>
        <Link className={styles.links} href="becas">
          <div>
            <h3>Becas</h3>
          </div>
        </Link>
        <Link className={styles.links} href="educacion-especial">
          <div>
            <h3>Educación Especial</h3>
          </div>
        </Link>
        <Link className={styles.links} href="home-school">
          <div>
            <h3>Home School</h3>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default NavbarGuias;
