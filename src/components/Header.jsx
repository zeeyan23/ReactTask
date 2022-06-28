import React from 'react'
import styles from '../components/Header.module.css'
export const Header = () => {
  return (
    <nav className={styles.nav}>
        <ul>
            <li>
                <a href='/logo'>enavato<span>market</span></a>
                <a href='/buynow' className={styles.buynowBtn}>Buy Now</a>
            </li>
        </ul>
    </nav>
  )
}

export default Header;