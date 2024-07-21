import React from "react";
import styles from "./RightPart.module.css";
import Stacks from "./Stacks";
import Image from "next/image";

export default function RightPart() {
  return (
    <div className={styles.right}>
      <section className={styles.heading} id="skills">
        <h1>Skills</h1>
        <Stacks />
      </section>

      <section className={styles.heading + " " + styles.pt} id="experience">
        <h1>Experience</h1>
        <a
          href="https://www.ymgrad.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.gridContainer}>
            <div className={styles.gridItem + " " + styles.date}>
              April 2024 - Present
            </div>
            <div className={styles.gridItem}>
              <div className={styles.gridHeader}>
                Software Developer at Ymgrad
              </div>
              <ul className={styles.gridBody}>
                <li>
                  Worked on migrating the website from React.js to Next.js for
                  better optimisation and faster load time.
                </li>
                <li>
                  Used Redux for state management, and fixed bugs in the Auth
                  actions of the projects redux library.
                </li>
                <li>
                  Fixed routing issues that came due to migration from React
                  Router to Nextjs Pages router.
                </li>
                <li>
                  Implemented lazy loading to improve page load time. Redesigned
                  Several Components and Pages using React and CSS frameworks
                  like tailwind, bootstrap, etc
                </li>
              </ul>
              <ul className={styles.techUsed}>
                <li>Nextjs</li>
                <li>Redux</li>
                <li>Router</li>
                <li>Tailwind</li>
                <li>Bootstrap</li>
              </ul>
            </div>
          </div>
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.resume}
        >
          View my Résumé
        </a>
      </section>

      <section className={styles.heading + " " + styles.pt} id="projects">
        <h1>Projects</h1>
        <a
          href="https://github.com/ankkitsharma/Video-Streaming-Website"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.gridContainer}>
            <div className={styles.gridItem}>
              <Image
                src={"/Projects/chaiTube.png"}
                alt="ChaiTube Screenshot"
                width={150}
                height={84.375}
              />
            </div>
            <div className={styles.gridItem}>
              <div className={styles.gridHeader}>ChaiTube</div>
              <div className={styles.gridBody}>
                A fullstack Video Streaming Website inspired by Youtube, built
                using React, Express, Node and PostgreSQL{" "}
              </div>
              <ul className={styles.techUsed}>
                <li>Nextjs</li>
                <li>Redux</li>
                <li>Router</li>
                <li>Tailwind</li>
                <li>Bootstrap</li>
              </ul>
            </div>
          </div>
        </a>
        <a
          href="https://attendance-portal-client.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.gridContainer}>
            <div className={styles.gridItem}>
              <Image
                src={"/Projects/attendancePortal.png"}
                alt="Attendance Portal Screenshot"
                width={150}
                height={84.375}
              />
            </div>
            <div className={styles.gridItem}>
              <div className={styles.gridHeader}>Attendance Portal</div>
              <div className={styles.gridBody}>
                A full-stack web application for managing attendance records
                using JavaScript technologies including Node.js, Express, and
                React.
              </div>
              <ul className={styles.techUsed}>
                <li>Nextjs</li>
                <li>Redux</li>
                <li>Router</li>
                <li>Tailwind</li>
                <li>Bootstrap</li>
              </ul>
            </div>
          </div>
        </a>
        <a
          href="https://ankkitsharma.github.io/Etch-a-sketch/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.gridContainer}>
            <div className={styles.gridItem}>
              <Image
                src={"/Projects/etchASketch.png"}
                alt="Etch a sketch Screenshot"
                width={150}
                height={84.375}
              />
            </div>
            <div className={styles.gridItem}>
              <div className={styles.gridHeader}>EtchASketch</div>
              <div className={styles.gridBody}>
                A browser version of something between a sketchpad and an
                Etch-A-Sketch
              </div>
              <ul className={styles.techUsed}>
                <li>Nextjs</li>
                <li>Redux</li>
                <li>Router</li>
                <li>Tailwind</li>
                <li>Bootstrap</li>
              </ul>
            </div>
          </div>
        </a>
      </section>

      <section
        className={
          styles.heading + " " + styles.pt + " " + styles.contactContainer
        }
        id="contact"
      >
        <h1>Contact Me</h1>
        <p>
          I'm always looking for new opportunities. Feel free to reach out to
          me.
        </p>
        <ul className={styles.contacts}>
          <li className={styles.contact}>
            <Image
              src={"/contact/phone.svg"}
              alt="Phone"
              width={20}
              height={20}
            />{" "}
            <div>+91-9891393575</div>
          </li>
          <li className={styles.contact}>
            <Image
              src={"/contact/location.svg"}
              alt="location"
              width={20}
              height={20}
            />{" "}
            <div>Palam, Delhi</div>
          </li>
          <li className={styles.contact}>
            <Image
              src={"/contact/mail.svg"}
              alt="mail"
              width={20}
              height={20}
            />{" "}
            <div>ankitsharma2801@gmail.com</div>
          </li>
          <li className={styles.contact}>
            <Image
              src={"/contact/home.svg"}
              alt="home"
              width={20}
              height={20}
            />{" "}
            <div>https://ankitsharma-zeta.vercel.app/</div>
          </li>
        </ul>
      </section>
      <section
        className={
          styles.heading + " " + styles.bottomSection + " " + styles.pt
        }
      ></section>
    </div>
  );
}
