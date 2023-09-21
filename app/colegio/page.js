import styles from "../../styles/colegio.module.css";
import Image from "next/image";
import logo from "../../public/logo.png";
import test from "../../public/testimonio.jpg";
import Preguntas from "@/components/Colegios/Pregunta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faLaptop,
  faPhone,
  faEnvelope,
  faLocationArrow,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
const ubicacion = <FontAwesomeIcon icon={faLocationDot} />;
const laptop = <FontAwesomeIcon icon={faLaptop} />;
const mail = <FontAwesomeIcon icon={faEnvelope} />;
const phone = <FontAwesomeIcon icon={faPhone} />;
const flechita = <FontAwesomeIcon icon={faLocationArrow} />;
const mas = <FontAwesomeIcon icon={faAngleDown} />;

function colegio() {
  return (
    <section className={styles.container}>
      {/* <Image src={logo} /> */}
      <h1 className={styles.title}>Colegio Aleman</h1>
      <div className={styles.containerMaps}>
        <article className={styles.containerMapsArticle}>
          <h1>Colegio</h1>
          <h3>Sumario</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            laboriosam in aut commodi deleniti iusto laudantium fugiat
            voluptatibus eius adipisci! Dolore blanditiis aliquid odit corporis
            nihil itaque ratione minus! Alias natus fugit debitis explicabo
            earum iste reprehenderit maiores tempora, recusandae inventore ad
            repellat culpa fuga officia voluptatum ducimus in quo minus?
            Corrupti placeat omnis perferendis voluptatem deserunt similique
            rerum accusamus mollitia autem a labore eum error nesciunt
            asperiores consequatur quidem ab, obcaecati eos sequi? Vero sint
            officia error quod quae saepe animi, nemo voluptatibus aspernatur
            aut! Possimus et ducimus quod aliquid eum quos, beatae labore fugit
            autem, rem non, pariatur sunt! Quae voluptates aliquid blanditiis
            similique, ut ratione in provident porro perferendis asperiores eum
            voluptatum ab ad nostrum eveniet illum dolor ducimus officia
            doloribus voluptas recusandae minima non! Nulla neque voluptatibus
            soluta, repellat nemo sed quis optio voluptatum excepturi
            reprehenderit repellendus? Rem repellat eos repudiandae nisi
            incidunt in molestiae mollitia cupiditate soluta perferendis cum aut
            nemo ullam laboriosam cumque harum, aperiam provident, magnam ad,
            possimus ipsam explicabo. Eius alias assumenda totam consectetur
            ratione sint adipisci deleniti omnis vel porro. Saepe deleniti dicta
            ut eveniet repellendus ratione quam vitae vel impedit pariatur
            deserunt dolor id delectus accusamus recusandae fugit reprehenderit,
            explicabo odit aliquid suscipit ab mollitia iure! Necessitatibus
            enim eaque facere dignissimos architecto temporibus blanditiis,
            voluptates ipsum nesciunt impedit dolores, eligendi culpa corporis
            amet similique aut? Ex numquam quibusdam reprehenderit nulla atque
            sit molestias, dolorum veniam neque commodi, autem explicabo eius
            soluta porro expedita. Ipsam aspernatur minima velit perferendis
            eveniet, non vel modi facere inventore saepe, cumque dolore nulla
            alias tempore doloremque incidunt perspiciatis quis corporis.
            Consequatur nemo dolor perspiciatis aliquam cupiditate similique
            quam. Praesentium quia, dolorem molestiae officiis consequatur
            dolores fuga cum non voluptas similique consectetur magni fugit,
            commodi consequuntur sed quae accusamus laboriosam libero iste
            nihil! Debitis, impedit similique?
          </p>
        </article>
        <div className={styles.containerMapsMap}></div>
        <div className={styles.containerMapsInfo}>
          <div className={styles.containerMapsInfoTextUbi}>
            <p className={styles.iconos}>{ubicacion}</p>
            <p className={styles.infoText}>
              El Inca (Chalupas E7-21 y Francisco de Izazaga), Quito - Ecuador
            </p>
          </div>
          <div className={styles.containerMapsInfoGrid}>
            <div className={styles.containerMapsInfoTextWeb}>
              <p className={styles.iconos2}>{laptop}</p>
              <a
                className={styles.infoText}
                href="https://www.caq.edu.ec/"
                target="_blank"
              >
                Sitio web
              </a>
              <p className={styles.flechita}>{flechita}</p>
            </div>
            <div className={styles.containerMapsInfoTextMail}>
              <p className={styles.iconos2}>{mail}</p>
              <p className={styles.infoText}>email@gmail.com</p>
              <p className={styles.flechita}>{flechita}</p>
            </div>
            <div className={styles.containerMapsInfoTextPhone}>
              <p className={styles.iconos2}>{phone}</p>
              <p className={styles.infoText}>+593 09999999</p>
            </div>
          </div>
        </div>
      </div>
      {/* TESTIMONIOS */}
      {/* TESTIMONIOS */}
      {/* TESTIMONIOS */}
      <div className={styles.containerTitleTestimonios}>
        <div className={styles.linea}></div>
        <h1>LA VOZ DE NUESTRA GENTE</h1>
        <div className={styles.linea}></div>
      </div>
      <div className={styles.containerTestimonios}>
        <div>
          <Image className={styles.imagen} src={test} />
          <h5>Eric</h5>
        </div>
        <div>
          <Image className={styles.imagen} src={test} />
          <h5>Eric</h5>
        </div>
        <div>
          <Image className={styles.imagen} src={test} />
          <h5>Eric</h5>
        </div>
        <div>
          <Image className={styles.imagen} src={test} />
          <h5>Eric</h5>
        </div>
      </div>
      {/*PREGUNTAS  */}
      {/*PREGUNTAS  */}
      {/*PREGUNTAS  */}
      <Preguntas />
    </section>
  );
}
export default colegio;
