import React from 'react'
import styles from './Testimonials.module.css'

function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>Testimonials</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
            <p>Working with him was a game-changer for our website. They transformed our outdated interface into a sleek, modern design that’s both visually appealing and highly functional. Our users have complimented the seamless navigation, and our engagement metrics have improved dramatically. We couldn't be happier with the results!</p>
            <img src="src/assets/Images/user1.png" alt="clients" />
            <h4>Ananda Joe</h4>
            <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
            <p>We hired him to revamp our e-commerce platform, and the results exceeded our expectations. Their attention to detail and expertise in responsive design ensured that our site looks fantastic on any device. Since the redesign, our mobile traffic and conversions have skyrocketed. Highly recommend their services!</p>
            <img src="src/assets/Images/user2.png" alt="clients" />
            <h4>Nirungul Insagul</h4>
            <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
            <p>He brought incredible energy and creativity to our project. They were open to feedback, highly communicative, and consistently delivered beyond what we envisioned. Their innovative ideas and commitment to excellence made them an integral part of our project's success. We look forward to working with them again</p>
            <img src="src/assets/Images/user3.png" alt="clients" />
            <h4>Benjamin Thavanahathaya</h4>
            <p className={styles.bio}>Web Developer</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
