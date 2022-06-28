import React, { useState } from 'react'
import styles from '../components/Availabledata.module.css'

export const Availabledata = (props) => {


  return (
    <div className={styles.result}>
        {props.checkedIn && props.checkOut && <p className={styles.p}>Records of accommodations found from {props.checkedIn} - {props.checkOut}</p>}
        {props.noofadult && <h2 className={styles.h3}>Number of adults checked In:{props.noofadult}</h2>}
        {props.noofchildren && <h2 className={styles.h3}>Number of children checked In:{props.noofchildren}</h2>}
        {!props.checkedIn && <p>Please fill date of Check In</p>}
        {!props.checkOut && <p>Please fill date of Check Out</p>}
        {!props.noofadult &&  <p>Please fill number of adults if any otherwise Enter 0</p>}
        {!props.noofchildren && <p>Please fill number of children if any otherwise Enter 0</p>}
    </div>
  )
}

export default Availabledata;