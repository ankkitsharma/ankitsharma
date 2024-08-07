"use client";
import { useState, useEffect } from "react";
import styles from "./index.module.css";
import LeftPart from "@/components/LeftPart";
import RightPart from "@/components/RightPart";
import { Suspense } from "react";
import Loader from "@/components/Loading";

export default function page() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.home}>
          <LeftPart />
          <RightPart />
        </div>
      )}
    </>
  );
}
