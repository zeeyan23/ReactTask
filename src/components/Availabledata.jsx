import React, { useState } from 'react'
import styles from '../components/Availabledata.module.css'

export const Availabledata = (props) => {

  return (
    <div className={styles.result}>
        {<p className={styles.p1}>Records of accommodations found for the given date range:</p>}
        {props.noofadult && <p className={styles.p2}>Number of adults checked In:{props.noofadult}</p>}
        {props.noofchildren && <p className={styles.p3}>Number of children checked In:{props.noofchildren}</p>}
        {!props.noofadult &&  <p>Please fill number of adults if any otherwise Enter 0</p>}
        {!props.noofchildren && <p>Please fill number of children if any otherwise Enter 0</p>}
    </div>
  )
}

export default Availabledata;