import React from 'react';
import styles from './components.module.css'; 

const About = () => {
  return (
    <>
        <div className={styles.about}>
            <h2 className={styles.h2}>Un poco sobre mí</h2>
            <p className={styles.p}>
                Soy Florencia Uehara, una nueva desarrolladora frontend con ganas de crear experiencias web increíbles. Anteriormente estuve en laboratorios relacionados con la química y microbiología, pero decidí que era momento de entrar al mundo de la programación que tanto me daba curiosidad, ¡y la verdad es que me viene gustando mucho!
            </p>
        </div>
        <div className={styles.conocimientos}>
            <h3 className={styles.h3}><i className="bi bi-code-square"></i>&nbsp; Conocimientos</h3>
            <p className={styles.p}>
                Cuento con certificado del curso de Desarrollo Frontend, en donde aprendí <b>HTML</b>, <b>CSS</b>, <b>Bootstrap</b>, <b>JavaScript</b>. Además, cuento con certificados en <b>ReactJS</b>, Bases de datos y <b>SQL</b> con PostgreSQL, y <b>Python</b>, mientras realizo el curso del Backend, desarrollando con <b>Django</b>. También tengo conocimiento básico del framework <b>Qwik</b>.
            </p>
        </div>
        <div></div>
    </>
  );
}

export default About;
