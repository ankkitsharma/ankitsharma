"use client";
import React, { useEffect, useState } from "react";
import styles from "./ToggleBtn.module.css";
import useLocalStorage from "use-local-storage";
import { Toggle } from "@/components/Toggle";

export default function ToggleBtn() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    <div className={styles.App} data-theme={isDark ? "dark" : "light"}>
      <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      <h1 className={styles.title}>Hello world!</h1>
      <div className={styles.box}>
        <h2>This is a box</h2>
      </div>
    </div>
  );
}
