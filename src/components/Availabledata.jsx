import React, { useState } from 'react'
import styles from '../components/Availabledata.module.css'

export const Availabledata = (props) => {

  return (
    <div className={styles.result}> 
        {<p className={styles.p1}>Records of accommodations found for the given date range {props.dateofcheckIn} to {props.dateofcheckOut} is:</p>}
        {!props.dateofcheckIn && <p className={styles.p3}>Please Enter the Check In date</p>}
        {props.dateofcheckIn && props.noofadult && <p className={styles.p2}>Number of adults checked In:{props.noofadult}</p>}
        {props.dateofcheckIn && props.noofchildren && <p className={styles.p3}>Number of children checked In:{props.noofchildren}</p>}
        {props.dateofcheckIn && !props.noofadult &&  <p className={styles.p3}>Number of children checked In:1</p>}
        {props.dateofcheckIn && !props.noofchildren && <p className={styles.p3}>Number of children checked In:0</p>}
    </div>
  )
}

export default Availabledata;