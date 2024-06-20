import React from "react";
import styles from "./RightPart.module.css";

export default function RightPart() {
  return (
    <div className={styles.right}>
      <section id="hero">
        <h1>Hero</h1>
      </section>

      <section id="about">
        <h1>About</h1>
      </section>

      <section id="services">
        <h1>Services</h1>
      </section>

      <section id="gallery">
        <h1>Gallery</h1>
      </section>

      <section id="contact">
        <h1>Contact</h1>
      </section>
    </div>
  );
}
