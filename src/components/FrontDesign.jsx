import React from 'react'
import backgrd from '../image/background.jpg';
import styles from '../components/FrontDesign.module.css'

export const FrontDesign = () => {
  return (
    <div className={styles.div}>
        <img src={backgrd} alt="background image"/>
        <h1 className={styles.topleft}>Hello.Salut.Hola</h1>
        <p className={styles.toptoleft}>Our Hotels & Resorts remain stylish, modern, 
            forward thinking global leader<br /> of hospitality and we help make traveling easier with our smart design, 
            innovative<br /> restaurant concepts, unique activities, nature and authentic hospitality.</p>
        <a href='' className={styles.toptoleftmoreinfo}>MORE INFO</a>
    </div>
  )
}

export default FrontDesign;