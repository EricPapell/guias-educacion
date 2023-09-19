import styles from "../../styles/contactoBar.module.css";
import Link from "next/link";
import Image from "next/image";
import backImage from "../../public/bg-4.jpg";
import Copyright from "./ContactoComponentes/Copyright";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

function ContactoBar() {
  return (
    <footer className={styles.footer}>
      <Image src={backImage} alt="backImage" className={styles.image} />
      <div className={styles.container}>
        <p className={styles.subtitle}>
          Recibe una asesoría personalizada. Estamos disponibles los días martes
          y miércoles de 08:30 a 15:30 en el Inca (Chalupas E7-21 y Francisco de
          Izazaga). Previa cita.
        </p>
        <div className={styles.infoContainer}>
          <p className={styles.infoContactoUbi}>
            <span className={styles.spanInfo}>
              <FontAwesomeIcon className={styles.icon} icon={faLocationDot} />
            </span>
            El Inca (Chalupas E7-21 y Francisco de Izazaga), Quito - Ecuador`
          </p>
          <p className={styles.infoContactoTelf}>
            <span className={styles.spanInfo}>
              <FontAwesomeIcon className={styles.icon} icon={faPhone} />
            </span>
            099 940 698 // 098 826 6763 // 098 085 4987
          </p>
          <Link href="/contacto" className={styles.infoContactoMail}>
            <span className={styles.spanInfo}>
              <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
            </span>
            srivadeneira@editorialtaquina.com
          </Link>
          <a
            href="mailto:produccion@editorialtaquina.com"
            className={styles.infoContactoMail2}
          >
            <span className={styles.spanInfo}>
              <FontAwesomeIcon className={styles.icon} icon={faGlobe} />
            </span>
            produccion@editorialtaquina.com
          </a>
        </div>
      </div>
      <Copyright />
    </footer>
  );
}
export default ContactoBar;
