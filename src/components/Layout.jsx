import React from 'react'
import styles from '../components/Layout.module.css'
import companyLogo from '../image/welcome1.jpg';
import welcome2 from '../image/welcome2.jpg';
import classic from '../image/classic.jpg';
import comfort from '../image/comfort.jpg';
import superior from '../image/superior.jpg';
import sea from '../image/sea.jpg';
import Footer from './Footer';
export const Layout = () => {
  return (
    <div className={styles.v}>
        <div className={styles.para}>
        <p>RAISING COMFORT TO THE HIGHEST LEVEL</p>
        <h3>Welcome to Luviana Hotel Resort</h3>
        <p className={styles.largepara}>The Hotel Luviana is the right choice for visitors who are searching for a 
            combination <br />of charm and a convenient position from where to explore surroundings.<br />
            The rooms are arranged on the first, second and third floors.<br /> On the top floor, 
            there is also a charming terrace or solarium available for the use of guests, <br />
            from where you can enjoy the view.</p><br /><br /><br /><br />
        <a href='' className={styles.moreinfo}>MORE INFO</a>
        </div>
        {/* <img src={sea} className={styles.sea} alt="sea image"/> */}
        <div className={styles.overlaydiv}>
          <div>
            <h1>Our Amenities</h1>
          </div>
          <div>
            <p className={styles.para2}>
            The hotel is arranged on three floors without a lift.<br /> On the ground floor, 
            apart from the reception,<br /> there is a comfortable lounge where you can sit and drink tea.
            </p>
          </div>
        </div>
        <div className={styles.raise}>
          <p>RAISING COMFORT TO THE HIGHEST LEVEL</p>
          <h3>Rooms & Suites</h3>
          <div className={styles.option}>
            <div>
              <img src={superior} className={styles.welcome1} alt="background image"/>
              <p>Superior Double Room $129 per night</p>
            </div>
            <div>
              <img src={classic} className={styles.welcome1} alt="background image"/>
              <p>Superior Double Room $129 per night</p>
            </div>
            <div>
              <img src={comfort} className={styles.welcome1} alt="background image"/>
              <p>Superior Double Room $129 per night</p>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}
export default Layout;