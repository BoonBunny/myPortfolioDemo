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
              <img src="https://www.hirum.com.au/wp-content/uploads/2021/11/BookingForm-MillCottage-1536x882.png" alt="coding" />
            </Tilt>
            <p>Hotel & Hospitality Website </p>
        </div>
        <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRfywC-H7MfyE_AaN-vST3cgIRpjkvdvdRag&s" alt="coding" />
            </Tilt>
            <p>E-Commerce Website for electronic devices</p>
        </div>
        <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src="https://s3.envato.com/files/67658232/inline-preview/inline-preview.__large_preview.png" alt="coding" />
            </Tilt>
            <p>GearBox Website</p>
        </div>
        <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src="https://papyrs.com/site_media/images/docs/simple-internal-company-site-example2.png" alt="coding" />
            </Tilt>
            <p>Internal HR website</p>
        </div>
        <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src="https://agentestudio.com/uploads/ckeditor/pictures/1002/content_1_dashboard.png" alt="coding" />
            </Tilt>
            <p>Online e-banking System</p>
        </div>
        <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfudrrThVZdQdABl9amD-tDrlsagPpS-w9Ag&s" alt="coding" />
            </Tilt>
            <p>E-learning System Website</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
