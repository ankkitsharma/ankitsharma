"use client";
import React, { useEffect, useState } from "react";
import styles from "./ToggleBtn.module.css";
import useLocalStorage from "use-local-storage";
import { Toggle } from "@/components/Toggle";

export default function ToggleBtn(props: any) {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [isDark]);

  return (
    <div className={styles.App} data-theme={isDark ? "dark" : "light"}>
      <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
    </div>
  );
}
