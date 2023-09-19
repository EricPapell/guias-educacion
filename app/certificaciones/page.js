import styles from "../../styles/certicaciones.module.css";
import Image from "next/image";
import efqm from "../../public/efqm.png";
function certificaciones() {
  return (
    <section className={styles.container}>
      <div className={styles.containerBox}>
        <h1>titulo</h1>
        <h4>
          {" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
          facere iste excepturi ut accusamus ratione tenetur natus neque ipsa
          eaque, modi, in sint cumque
        </h4>
        <p>
          iusto. Magni quas distinctio placeat explicabo unde reiciendis, vitae,
          adipisci facere sequi consequatur officiis, aspernatur laudantium
          soluta. Culpa suscipit voluptates est ea enim recusandae earum optio.
          Consectetur, totam odio! Laborum minus eligendi fuga, deleniti,
          repellat officiis amet porro, vero impedit veritatis aliquam. Ratione
          officiis repudiandae similique iure quos inventore numquam, dolor
          minus facere quae laudantium ab? Autem quam sapiente inventore
          deserunt impedit voluptatum, odio dolorum molestias incidunt ipsam,
          illo suscipit minus cupiditate. Hic corrupti suscipit necessitatibus
          dolor sit repellendus pariatur, dolorum reiciendis exercitationem
          molestiae culpa ducimus cumque consectetur deleniti tempore expedita
          soluta, fuga repellat. Accusantium sapiente officia culpa odio nihil
          nobis sequi, corrupti unde cumque error numquam, cupiditate ipsam
          mollitia explicabo qui ullam! Et veritatis hic ullam ut repudiandae,
          perferendis nobis, sit numquam totam iste libero incidunt! Ipsam quia,
          amet quisquam, neque corporis consectetur laboriosam, corrupti earum
          molestiae quas quibusdam deleniti. Ipsam inventore labore dolores
          veritatis velit a blanditiis consequatur optio exercitationem
          accusamus aliquam eveniet commodi quos perferendis nemo est, id
          tempora non sunt earum cum officiis nesciunt. Assumenda rerum labore
          facere facilis praesentium aliquam doloribus?nobis sequi, corrupti
          unde cumque error numquam, cupiditate ipsam mollitia explicabo qui
          ullam! Et veritatis hic ullam ut repudiandae, perferendis nobis, sit
          numquam totam iste libero incidunt! Ipsam quia, amet quisquam, neque
          corporis consectetur laboriosam, corrupti earum molestiae quas
          quibusdam deleniti. Ipsam inventore labore dolores veritatis velit a
          blanditiis consequatur optio exercitationem accusamus aliquam eveniet
          commodi quos perferendis nemo est, id tempora non sunt earum cum
          officiis nesciunt. Assumenda rerum labore facere facilis praesentium
          aliquam doloribus?
        </p>
      </div>
      <h1 className={styles.callToAction}>
        ¡Descubre los colegios que cuentan con las certificaciones que te
        interesan!
      </h1>
      <div className={styles.containerCertificadosBox}>
        <div>
          <Image className={styles.logoImg} src={efqm} />
        </div>
        <div>
          <Image className={styles.logoImg} src={efqm} />
        </div>
        <div>
          <Image className={styles.logoImg} src={efqm} />
        </div>
        <div>
          <Image className={styles.logoImg} src={efqm} />
        </div>
        <div>
          <Image className={styles.logoImg} src={efqm} />
        </div>
        <div>
          <Image className={styles.logoImg} src={efqm} />
        </div>
      </div>
      <div className={styles.containerLogoBox}>
        <div className={styles.LogoCard}>
          <Image className={styles.logoImg} src={efqm} />
          <button>EXPLORA!</button>
        </div>
        <div className={styles.LogoCard}>
          <Image className={styles.logoImg} src={efqm} />
          <button>EXPLORA!</button>
        </div>
        <div className={styles.LogoCard}>
          <Image className={styles.logoImg} src={efqm} />
          <button>EXPLORA!</button>
        </div>
        <div className={styles.LogoCard}>
          <Image className={styles.logoImg} src={efqm} />
          <button>EXPLORA!</button>
        </div>
      </div>
    </section>
  );
}
export default certificaciones;
