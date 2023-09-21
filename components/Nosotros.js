import styles from "../styles/nosotros.module.css";
import Image from "next/image";
import img from "../public/back-5.jpg";

function Nosotros() {
  return (
    <div className={styles.container}>
      <div className={styles.containerText}>
        <h1>Nuestra Guía Educación</h1>
        <h3>Descubre, conecta, comunica</h3>
        <p>Somos la guía educativa que necesitas</p>
        <p>
          Guía Educación lanza su primera edición en 1998 como una herramienta
          pionera que conecta a las familias con los centros educativos a través
          de información relevante que les permite decidir el centro educativo
          que más se ajusta a sus convicciones, metas y necesidades.
        </p>
        <p>
          Proporcionamos información precisa y actualizada sobre instituciones
          educativas de calidad, desde preescolar hasta bachillerato y opciones
          para extracurriculares, educación especial y Homeschool.
        </p>
        <p>
          Nuestra plataforma, tanto física como digital, es una herramienta
          esencial para que los padres de familia tomen decisiones informadas
          sobre la educación de sus hijos. Destacamos los parámetros cruciales
          para la elección de centros educativos y los presentamos de manera
          clara y concisa, permitiendo a las familias comparar fácilmente entre
          diferentes opciones. Además, ofrecemos a las instituciones educativas
          la oportunidad de destacar sus propuestas únicas de valor a través de
          artículos, preguntas frecuentes y tours virtuales. Damos voz a su
          gente a través de valiosos testimonios de antiguos estudiantes, padres
          de familia, profesores y más.
        </p>
        <p>
          Nuestro compromiso es ser el recurso confiable que conecta a las
          familias con opciones educativas de calidad.
        </p>
      </div>
      <div className={styles.containerImage}>
        <Image alt="nosotros" className={styles.Image} src={img} />
      </div>
    </div>
  );
}
export default Nosotros;
