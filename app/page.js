"use client";
import styles from "../styles/page.module.css";
import { useState, useEffect, useRef } from "react";
import Carroussel from "@/components/GuiasComponents/carrousselGuias";
import Nosotros from "@/components/Nosotros";

export default function Home() {
  return (
    <section className={styles.container}>
      <Carroussel />
      <Nosotros />
    </section>
  );
}
