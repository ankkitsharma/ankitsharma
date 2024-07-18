"use client";
import dynamic from "next/dynamic";
const ToggleBtn = dynamic(() => import("@/components/ToggleBtn"), {
  ssr: false,
});
import styles from "./LeftPart.module.css";
import { useEffect } from "react";
// import { Link } from "react-scroll";

export default function LeftPart() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navlinks a");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let id = entry.target.id;

            navLinks.forEach((link) => {
              link.classList.remove("active");

              // getting anchor-tag's href attribute & removing '#' from it.
              let href = link.getAttribute("href")?.substring(1);

              if (href === id) {
                link.classList.add("active");
              }
            });
          }
        });
      },
      {
        threshold: 0.9,
      }
    );

    sections.forEach((sec) => {
      observer.observe(sec);
    });
  }, []);
  return (
    <div className={styles.left}>
      <div className={styles.profile}>
        <div className={styles.name}>Ankit Sharma</div>
        <div className={styles.job}>Full Stack Developer</div>
        <div className={styles.intro}>
          Innovative Full Stack Developer with a passion for creating engaging
          websites.
        </div>
      </div>
      <header className={styles.navHeader}>
        <nav className={`navlinks`}>
          <ul className={styles.nav}>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <ToggleBtn />
      </header>
    </div>
  );
}
