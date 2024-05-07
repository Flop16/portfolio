import React from 'react';
import styles from './components.module.css'; 

const Project = () => {
    return (
      <>
        <div className={styles.project}>           
          <h2>PROYECTOS</h2>
          <p> Por el momento cuento con proyectos realizados en mi aprendizaje, que reflejan mis habilidades en HTML, CSS y JavaScript, entre otros. ¡Te invito a explorar lo que voy aprendiendo! </p>
        </div>

        <div className={styles.projectsWrapper}>
        <div className={styles.projectsContainer}>
          <div className={styles.pj1}>
            <h3><a href="https://saia.ar/" target="_blank" rel="noopener noreferrer"><i className="bi bi-window"></i>&nbsp; Landing SAIA </a></h3>
            <p> Estoy en un voluntariado en el cual formo parte del equipo que se encarga de la landing de la Sociedad Argentina de Inteligencia Artificial. </p>
          </div>
          <div className={styles.pj2}>
            <h3><a href="https://masajes-react.netlify.app" target="_blank" rel="noopener noreferrer"><i className="bi bi-window"></i>&nbsp; Sitio bienestar </a></h3>
            <p> Sitio realizado en el curso para poner en práctica el uso de ReactJS, uso de API rest, y aplicar lo aprendido en Frontend. </p>
          </div>
          <div className={styles.pj3}>
            <h3><a href="https://pasteleria-front.netlify.app" target="_blank" rel="noopener noreferrer"><i className="bi bi-window"></i>&nbsp; Sitio pastelería </a></h3>
            <p> Sitio realizado en el curso para finalizar desarrollo Frontend, con el uso de HTML, JavaScript, CSS y Bootstrap. </p>
          </div>
          <div className={styles.pj4}>
            <h3><a href="https://sitio-pruebaqwik.netlify.app" target="_blank" rel="noopener noreferrer"><i className="bi bi-window"></i>&nbsp; Sitio prueba </a></h3>
            <p> Sitio base realizado en Qwik, para tener un primer acercamiento con este framework.</p>
          </div>
        </div>

        </div>
      </>
    );
};

export default Project;





/*
          <div className={styles.pj1}>
            <h3><a href="https://saia.ar/"><i className="bi bi-window"></i>&nbsp; Landing SAIA </a></h3>
            <p> Formo parte del equipo que se encarga de la landing de la Sociedad Argentina de Inteligencia Artificial. </p>
          </div>
          <div className={styles.pj2}>
            <h3><a href="https://masajes-react.netlify.app"><i className="bi bi-window"></i>&nbsp; Sitio de bienestar </a></h3>
            <p> Sitio realizado en el curso para poner en práctica el uso de ReactJS, uso de API rest, y aplicar lo aprendido en Frontend. </p>
          </div>
          <div className={styles.pj3}>
            <h3><a href="https://masajes-react.netlify.app"><i className="bi bi-window"></i>&nbsp; Sitio de pastelería </a></h3>
            <p> Sitio realizado en el curso para finalizar desarrollo Frontend, con el uso de HTML, JavaScript, CSS y Bootstrap. </p>
          </div>
          <div className={styles.pj4}>
            <h3><a href="https://sitio-pruebaqwik.netlify.app"><i className="bi bi-window"></i>&nbsp; Sitio prueba </a></h3>
            <p> Sitio base realizado en Qwik, para tener un primer acercamiento con este framework.</p>
          </div>
*/