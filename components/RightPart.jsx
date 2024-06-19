import React from "react";
import styles from "./RightPart.module.css";

export default function RightPart() {
  return (
    <div className={styles.App}>
      {[...Array(50)].map((_, i) => (
        <div key={i}>
          Hello hello hello
          hellodfsssssddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddssssssssssssssssssssssssssssssssssssssss
        </div>
      ))}
    </div>
  );
}
