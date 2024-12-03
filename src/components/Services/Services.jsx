import React from 'react'
import styles from './Services.module.css'
import { FaCode, FaPaintbrush, FaDesktop  } from "react-icons/fa6";

function Services() {
  return (
    <div id='services' className={styles.services_con}>
        <h3 className={styles.services_title}>My Services</h3>
        <div className={styles.services_list}>
            <div className={styles.services_items}>
                <FaCode />
                <h4>Web Development</h4>
                <p>
                We encompass a wide range of services, which include websites or web apps, cybersecurity solutions, UX/UI design, e-Commerce solutions, website architectures, QA testing, and maintenance
                </p>
            </div>
            <div className={styles.services_items}>
                <FaPaintbrush />
                <h4>Web Design</h4>
                <p>
                We create the design and layout of a website with their technical expertise and knowledge while keeping in mind the client's requirements by using Figma Design.
                </p>
            </div>
            <div className={styles.services_items}>
                <FaDesktop />
                <h4>Front-end Consulting</h4>
                <p>
                We work with clients to promote the success of their business through web development and design.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Services
