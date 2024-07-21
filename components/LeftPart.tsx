"use client";
import dynamic from "next/dynamic";
const ToggleBtn = dynamic(() => import("@/components/ToggleBtn"), {
  ssr: false,
});
import styles from "./LeftPart.module.css";
import { useEffect } from "react";
import Image from "next/image";
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
        <div className={styles.contactContainer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height={25}
            width={25}
            fill="currentColor"
            aria-label="linkedin"
          >
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            height={25}
            aria-label="github"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={25}
            viewBox="0 -960 960 960"
            width={25}
            fill="currentColor"
            aria-label="mail"
          >
            <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
          </svg>
          <ToggleBtn className={styles.toggleBtn} />
        </div>
      </header>
    </div>
  );
}
