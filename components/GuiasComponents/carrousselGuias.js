"use client";
import styles from "../../styles/page.module.css";
import Image from "next/image";
import img from "../../public/back-5.jpg";
import img2 from "../../public/bg-4.jpg";
import img3 from "../../public/bg-3.jpg";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
const elLeft = <FontAwesomeIcon icon={faChevronLeft} />;
const elRight = <FontAwesomeIcon icon={faChevronRight} />;

// Numero Articulos
const numeroArticulos = 3;
const x = (numeroArticulos - 1) * -100;

function Carroussel() {
  let id;
  const [style, setstyle] = useState(0);

  const handleRight = function () {
    setstyle(style - 100);
    clearInterval(id);
  };
  const handleRightTimer = function () {
    if (style > x) {
      setstyle(style - 100);
      console.log(1);
    } else if (style === x) {
      setstyle(0);
      console.log(1);
    }
  };
  const handleLeft = function () {
    setstyle(style + 100);
    clearInterval(id);
  };
  const handleRightLast = function () {
    setstyle(0);
    clearInterval(id);
  };
  const handleLeftLast = function () {
    setstyle(x);
    clearInterval(id);
  };
  useEffect(() => {
    id = setInterval(() => {
      handleRightTimer(), clearInterval(id);
    }, 5000);
  }, [style]);
  console.log(style);

  return (
    <div className={styles.containerSlider}>
      <section
        className={styles.containerCarrousel}
        style={{ transform: `translateX(${style}%)` }}
      >
        <div className={styles.containerCarrouselBox}>
          <button onClick={handleLeftLast} className={styles.buttonLeft}>
            {elLeft}
          </button>
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
          <button onClick={handleRight} className={styles.buttonRight}>
            {elRight}
          </button>
        </div>
        <div className={styles.layer}></div>
        <Image alt="carroussel" className={styles.imageCarrousel} src={img} />
      </section>
      {/*  */}
      <section
        style={{ transform: `translateX(${100 + style}%)` }}
        className={styles.containerCarrousel}
      >
        <div className={styles.containerCarrouselBox}>
          <button onClick={handleLeft} className={styles.buttonLeft}>
            {elLeft}
          </button>
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
          <button onClick={handleRight} className={styles.buttonRight}>
            {elRight}
          </button>
        </div>
        <div className={styles.layer}></div>
        <Image alt="carroussel" className={styles.imageCarrousel} src={img2} />
      </section>
      {/*  */}
      <section
        style={{ transform: `translateX(${200 + style}%)` }}
        className={styles.containerCarrousel}
      >
        <div className={styles.containerCarrouselBox}>
          <button onClick={handleLeft} className={styles.buttonLeft}>
            {elLeft}
          </button>
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
          <button onClick={handleRightLast} className={styles.buttonRight}>
            {elRight}
          </button>
        </div>
        <div className={styles.layer}></div>
        <Image alt="carroussel" className={styles.imageCarrousel} src={img3} />
      </section>
    </div>
  );
}

export default Carroussel;
