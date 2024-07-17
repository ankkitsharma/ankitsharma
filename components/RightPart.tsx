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
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}>
            <Image
              src={"/Projects/chaiTube.png"}
              alt="ChaiTube"
              width={150}
              height={84.375}
            />
          </div>
          <div className={styles.gridItem}>
            <div className={styles.gridHeader}>ChaiTube</div>
            <div></div>
          </div>
        </div>
      </section>

      <section className={styles.heading + " " + styles.pt} id="gallery">
        <h1>Gallery</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          elementum porta ligula in ultrices. Praesent consectetur auctor velit
          ut dapibus. Aenean feugiat volutpat feugiat. Maecenas fringilla quam
          sit amet porta suscipit. Sed viverra mollis bibendum. Nunc vel porta
          leo, a viverra dui. Praesent et est diam. Nullam sit amet est vitae
          quam molestie congue. Aenean id lacus nisl. Cras aliquet in dolor non
          dapibus. Praesent imperdiet efficitur purus imperdiet hendrerit.
          Aliquam quis eros vitae justo viverra sollicitudin ac quis justo.
          Donec at purus metus. Quisque luctus magna non lobortis vestibulum.
          Nam eu mi nulla. Donec malesuada hendrerit diam. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          elementum porta ligula in ultrices. Praesent consectetur auctor velit
          ut dapibus. Aenean feugiat volutpat feugiat. Maecenas fringilla quam
          sit amet porta suscipit. Sed viverra mollis bibendum. Nunc vel porta
          leo, a viverra dui. Praesent et est diam. Nullam sit amet est vitae
          quam molestie congue. Aenean id lacus nisl. Cras aliquet in dolor non
          dapibus. Praesent imperdiet efficitur purus imperdiet hendrerit.
          Aliquam quis eros vitae justo viverra sollicitudin ac quis justo.
          Donec at purus metus. Quisque luctus magna non lobortis vestibulum.
          Nam eu mi nulla. Donec malesuada hendrerit diam. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Nulla commodo purus quis aliquam aliquam. Suspendisse potenti. Donec
          sit amet nisl tincidunt, imperdiet urna at, venenatis ligula. Ut nec
          pulvinar tortor, elementum egestas nisi. Phasellus aliquet libero non
          pharetra feugiat. Curabitur ante nisl, laoreet quis odio id, faucibus
          consectetur magna. Nunc nec dolor libero. Sed eleifend quam ex, at
          sollicitudin lacus gravida non. Aliquam et orci velit. Curabitur vitae
          ligula a nulla tincidunt facilisis ut eget sapien. Phasellus urna
          turpis, placerat at nibh eget, facilisis pulvinar nisi. Aliquam erat
          volutpat. Phasellus sit amet metus facilisis, aliquet dolor dignissim,
          porta lorem. Etiam et nulla rutrum, elementum ante sit amet, pretium
          quam. Aenean condimentum dui sodales, tincidunt elit et, volutpat
          magna. Aenean est augue, dictum a sem vitae, rhoncus porttitor dolor.
        </p>
      </section>

      <section className={styles.heading + " " + styles.pt} id="contact">
        <h1>Contact</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          elementum porta ligula in ultrices. Praesent consectetur auctor velit
          ut dapibus. Aenean feugiat volutpat feugiat. Maecenas fringilla quam
          sit amet porta suscipit. Sed viverra mollis bibendum. Nunc vel porta
          leo, a viverra dui. Praesent et est diam. Nullam sit amet est vitae
          quam molestie congue. Aenean id lacus nisl. Cras aliquet in dolor non
          dapibus. Praesent imperdiet efficitur purus imperdiet hendrerit.
          Aliquam quis eros vitae justo viverra sollicitudin ac quis justo.
          Donec at purus metus. Quisque luctus magna non lobortis vestibulum.
          Nam eu mi nulla. Donec malesuada hendrerit diam. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          elementum porta ligula in ultrices. Praesent consectetur auctor velit
          ut dapibus. Aenean feugiat volutpat feugiat. Maecenas fringilla quam
          sit amet porta suscipit. Sed viverra mollis bibendum. Nunc vel porta
          leo, a viverra dui. Praesent et est diam. Nullam sit amet est vitae
          quam molestie congue. Aenean id lacus nisl. Cras aliquet in dolor non
          dapibus. Praesent imperdiet efficitur purus imperdiet hendrerit.
          Aliquam quis eros vitae justo viverra sollicitudin ac quis justo.
          Donec at purus metus. Quisque luctus magna non lobortis vestibulum.
          Nam eu mi nulla. Donec malesuada hendrerit diam. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Nulla commodo purus quis aliquam aliquam. Suspendisse potenti. Donec
          sit amet nisl tincidunt, imperdiet urna at, venenatis ligula. Ut nec
          pulvinar tortor, elementum egestas nisi. Phasellus aliquet libero non
          pharetra feugiat. Curabitur ante nisl, laoreet quis odio id, faucibus
          consectetur magna. Nunc nec dolor libero. Sed eleifend quam ex, at
          sollicitudin lacus gravida non. Aliquam et orci velit. Curabitur vitae
          ligula a nulla tincidunt facilisis ut eget sapien. Phasellus urna
          turpis, placerat at nibh eget, facilisis pulvinar nisi. Aliquam erat
          volutpat. Phasellus sit amet metus facilisis, aliquet dolor dignissim,
          porta lorem. Etiam et nulla rutrum, elementum ante sit amet, pretium
          quam. Aenean condimentum dui sodales, tincidunt elit et, volutpat
          magna. Aenean est augue, dictum a sem vitae, rhoncus porttitor dolor.
        </p>
      </section>
      <section
        className={
          styles.heading + " " + styles.bottomSection + " " + styles.pt
        }
      >
        <h1>Extra</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          elementum porta ligula in ultrices. Praesent consectetur auctor velit
          ut dapibus. Aenean feugiat volutpat feugiat. Maecenas fringilla quam
          sit amet porta suscipit. Sed viverra mollis bibendum. Nunc vel porta
          leo, a viverra dui. Praesent et est diam. Nullam sit amet est vitae
          quam molestie congue. Aenean id lacus nisl. Cras aliquet in dolor non
          dapibus. Praesent imperdiet efficitur purus imperdiet hendrerit.
          Aliquam quis eros vitae justo viverra sollicitudin ac quis justo.
          Donec at purus metus. Quisque luctus magna non lobortis vestibulum.
          Nam eu mi nulla. Donec malesuada hendrerit diam. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          elementum porta ligula in ultrices. Praesent consectetur auctor velit
          ut dapibus. Aenean feugiat volutpat feugiat. Maecenas fringilla quam
          sit amet porta suscipit. Sed viverra mollis bibendum. Nunc vel porta
          leo, a viverra dui. Praesent et est diam. Nullam sit amet est vitae
          quam molestie congue. Aenean id lacus nisl. Cras aliquet in dolor non
          dapibus. Praesent imperdiet efficitur purus imperdiet hendrerit.
          Aliquam quis eros vitae justo viverra sollicitudin ac quis justo.
          Donec at purus metus. Quisque luctus magna non lobortis vestibulum.
          Nam eu mi nulla. Donec malesuada hendrerit diam. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Nulla commodo purus quis aliquam aliquam. Suspendisse potenti. Donec
          sit amet nisl tincidunt, imperdiet urna at, venenatis ligula. Ut nec
          pulvinar tortor, elementum egestas nisi. Phasellus aliquet libero non
          pharetra feugiat. Curabitur ante nisl, laoreet quis odio id, faucibus
          consectetur magna. Nunc nec dolor libero. Sed eleifend quam ex, at
          sollicitudin lacus gravida non. Aliquam et orci velit. Curabitur vitae
          ligula a nulla tincidunt facilisis ut eget sapien. Phasellus urna
          turpis, placerat at nibh eget, facilisis pulvinar nisi. Aliquam erat
          volutpat. Phasellus sit amet metus facilisis, aliquet dolor dignissim,
          porta lorem. Etiam et nulla rutrum, elementum ante sit amet, pretium
          quam. Aenean condimentum dui sodales, tincidunt elit et, volutpat
          magna. Aenean est augue, dictum a sem vitae, rhoncus porttitor dolor.
        </p>
      </section>
    </div>
  );
}
