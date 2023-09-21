"use client";
import styles from "../../styles/colegio.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const mas = <FontAwesomeIcon icon={faAngleDown} />;

function Preguntas() {
  const [style, setStyle] = useState("none");
  const [styleBtn, setStyleBtn] = useState("rotateZ(0deg)");
  const handlePregunta = function () {
    style === "none" ? setStyle("inherit") : setStyle("none");
    styleBtn === "rotateZ(0deg)"
      ? setStyleBtn("rotateZ(180deg)")
      : setStyleBtn("rotateZ(0deg)");
  };
  return (
    <div className={styles.containerPreguntas}>
      <h1 className={styles.containerPreguntasTitulo}>Preguntas frecuentes</h1>
      <div className={styles.containerPreguntasBoxFirst}>
        <div
          onClick={handlePregunta}
          className={styles.containerPreguntasBoxFirstLayout}
        >
          <p className={styles.containerPreguntasBoxPregunta}>
            ¿Con que certificaciones cuenta?
          </p>
          <p
            style={{ transform: styleBtn }}
            className={styles.containerPreguntasBoxIconoMas}
          >
            {mas}
          </p>
        </div>
        <p
          style={{ display: style }}
          className={styles.containerPreguntasBoxRespuesta}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
          voluptatum nihil magni eaque beatae dolorem accusamus vero sequi est
          voluptates quam sed reiciendis esse alias, autem possimus perferendis
          odio architecto maiores minus, fuga similique consectetur numquam?
          Commodi unde perferendis hic suscipit sunt. Possimus maiores
          necessitatibus laudantium quis velit tempore incidunt vel sint culpa
          quasi nisi dignissimos nemo, quae hic beatae deleniti dicta qui
          officia assumenda quibusdam! Perferendis accusantium doloremque fugiat
          dolorum quidem veniam voluptates ut optio incidunt amet, sit nulla
          quam laborum, expedita praesentium dignissimos earum, numquam eaque!
          Quod cumque reiciendis maxime voluptatibus laborum vero eligendi amet
          iure sint inventore.
        </p>
      </div>
      <div className={styles.containerPreguntasBox}>
        <div className={styles.containerPreguntasBoxLayout}>
          <p className={styles.containerPreguntasBoxPregunta}>Idiomas</p>
          <p className={styles.containerPreguntasBoxIconoMas}>{mas}</p>
        </div>
      </div>
      <div className={styles.containerPreguntasBox}>
        <div className={styles.containerPreguntasBoxLayout}>
          <p className={styles.containerPreguntasBoxPregunta}>
            ¿Cuál es el costo de la matrícula y las tarifas escolares?
          </p>
          <p className={styles.containerPreguntasBoxIconoMas}>{mas}</p>
        </div>
      </div>
    </div>
  );
}
export default Preguntas;
