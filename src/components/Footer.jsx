import React from 'react'
import styles from '../components/Footer.module.css'
export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
      <a href=''>Luxury Hotels Network</a>
        <p>All hotels and vacation rental properties listed<br /> 
        on this website are independently owned and operated.</p>
      </div>
        <div className={styles.links}>
          <h4>For Customers</h4>
          <a href=''>About Luviana</a>
          <a href=''>Customer Care/Help</a>
          <a href=''>Corporate Accounts</a>
          <a href=''>Financial Information</a>
          <a href=''>Terms & Conditions</a>
        </div>
        <div className={styles.contact}>
          <h4>Contact Us</h4>
          <p>3015 Grand Ave, Coconut Grove,<br />Merrick Way, FL 12345</p>
          <a href=''>hello@luviana.com</a><br />
          <a href=''>1.954.456.6789</a><br />
          <a href=''>1.954.456.6788</a><br />
          <a href=''>24/7 Customer Service</a>
        </div>
    </div>
  )
}

export default Footer;