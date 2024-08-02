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
          href="https://chaitube.vercel.app/"
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
                <li>React</li>
                <li>Router</li>
                <li>Express</li>
                <li>Node</li>
                <li>Postgres</li>
                <li>Sessions</li>
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
                <li>React</li>
                <li>Router</li>
                <li>JWT</li>
                <li>Authorization</li>
                <li>Deployment</li>
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
                <li>Javascript</li>
                <li>Grid</li>
                <li>DOM</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
          </div>
        </a>
      </section>

      <section className={styles.heading + " " + styles.pt} id="contact">
        <h1>Contact Me</h1>
        <div className={styles.contactContainer}>
          <p>
            I'm always looking for new opportunities. Feel free to reach out to
            me.
          </p>
          <ul className={styles.contacts}>
            <li className={styles.contact}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="currentColor"
              >
                <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
              </svg>
              <div>+91-9891393575</div>
            </li>
            <li className={styles.contact}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="currentColor"
              >
                <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
              </svg>
              <div>Palam, Delhi</div>
            </li>
            <li className={styles.contact}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="currentColor"
              >
                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
              </svg>
              <div>ankitsharma2801@gmail.com</div>
            </li>
            <li className={styles.contact}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="currentColor"
              >
                <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
              </svg>
              <div>https://ankitsharma-zeta.vercel.app/</div>
            </li>
          </ul>
        </div>
      </section>
      <section
        className={
          styles.heading + " " + styles.bottomSection + " " + styles.pt
        }
      ></section>
    </div>
  );
}
