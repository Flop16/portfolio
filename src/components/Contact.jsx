import React from 'react';
import styles from './contact.module.css'; 

const Contact = () => {
  return (
    <>
        <div className={styles.contact}>
            <h2 className={styles.h2}>Contacto</h2>
            <p className={styles.p}>
              Me pueden encontrar por aquí: 
              <br />
            </p>
            <div className={styles.buttonContainer}>
              <a href="https://www.linkedin.com/in/florenciauehara/" className={styles.button} target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i>&nbsp; LinkedIn</a>
              <a href="https://github.com/Flop16" className={styles.button} target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i>&nbsp; GitHub</a>
              <a href="mailto:florenciauehara@gmail.com" className={styles.button} target="_blank" rel="noopener noreferrer"><i className="bi bi-envelope-fill"></i>&nbsp; ¡Escríbeme!</a>
            </div>
        </div>
    </>
  );
}

export default Contact;


 

