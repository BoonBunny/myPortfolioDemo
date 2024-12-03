import React from 'react'
import styles from './Portfolio.module.css'
import Tilt from 'react-parallax-tilt';

function Portfolio() {
  return (
    <div id='portfolio' className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src="src/assets/Images/hospitality-services.webp" alt="coding" />
            </Tilt>
            <p>Hotel & Hospitality Website </p>
        </div>
        <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src="src/assets/Images/ecommerce-service.webp" alt="coding" />
            </Tilt>
            <p>E-Commerce Website for electronic devices</p>
        </div>
        <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src="src/assets/Images/gearbox-service.webp" alt="coding" />
            </Tilt>
            <p>GearBox Website</p>
        </div>
        <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src="src/assets/Images/internal-website.webp" alt="coding" />
            </Tilt>
            <p>Internal HR website</p>
        </div>
        <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src="src/assets/Images/online-banking.webp" alt="coding" />
            </Tilt>
            <p>Online e-banking System</p>
        </div>
        <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src="src/assets/Images/elearning-website.webp" alt="coding" />
            </Tilt>
            <p>E-learning System Website</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
