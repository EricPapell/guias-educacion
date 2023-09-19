import styles from "../styles/page.module.css";

import Carroussel from "@/components/GuiasComponents/carrousselGuias";

export default function Home() {
  return (
    <section className={styles.container}>
      <Carroussel />
    </section>
  );
}
