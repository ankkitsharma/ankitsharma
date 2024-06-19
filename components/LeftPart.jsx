import React from "react";
import ToggleBtn from "@/components/ToggleBtn";
import styles from "./LeftPart.module.css";

export default function LeftPart() {
  return (
    <div className={styles.App}>
      <div>LeftPart</div>
      <ToggleBtn />
    </div>
  );
}
