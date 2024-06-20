import React from "react";
import styles from "./index.module.css";
import LeftPart from "@/components/LeftPart";
import RightPart from "@/components/RightPart";

export default function page() {
  return (
    <div className={styles.home}>
      <LeftPart />
      <RightPart />
    </div>
  );
}
