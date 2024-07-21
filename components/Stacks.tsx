import React from "react";
import styles from "./Stacks.module.css";
import Image from "next/image";

export default function Stacks() {
  return (
    <div className={styles.stacks}>
      <div className={styles.item}>
        <Image src="/react.svg" alt="react" width={40} height={40} />
        <p>React</p>
      </div>
      <div className={styles.item}>
        <Image src="/nextjs.svg" alt="nextjs" width={40} height={40} />
        <p>NextJS</p>
      </div>
      <div className={styles.item}>
        <Image src="/nodejs.svg" alt="nodejs" width={40} height={40} />
        <p>NodeJS</p>
      </div>
      <div className={styles.item}>
        <Image src="/postgresql.png" alt="postgresql" width={40} height={40} />
        <p>PostgreSQL</p>
      </div>
      <div className={styles.item}>
        <Image src="/typescript.png" alt="typescript" width={40} height={40} />
        <p>TypeScript</p>
      </div>
      <div className={styles.item}>
        <Image src="/tailwind.svg" alt="tailwind" width={40} height={40} />
        <p>Tailwind</p>
      </div>
      <div className={styles.item}>
        <Image src="/css3.svg" alt="css3" width={40} height={40} />
        <p>CSS</p>
      </div>
      <div className={styles.item}>
        <Image src="/html.png" alt="html" width={40} height={40} />
        <p>HTML</p>
      </div>
      {/* <div className={styles.item}>
        <Image src="/github.svg" alt="github" width={40} height={40} />
      </div> */}
    </div>
  );
}
