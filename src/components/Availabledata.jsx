import React, { useState } from 'react'
import styles from '../components/Availabledata.module.css'

export const Availabledata = (props) => {

  return (
    <div className={styles.result}>
        {<p className={styles.p1}>Records of accommodations found for the given date range {props.dateofcheckIn} to {props.dateofcheckOut} is:</p>}
        {!props.dateofcheckIn && <p className={styles.p3}>Please Enter the Check In date</p>}
        {props.dateofcheckIn && props.noofadult && 
        <>
        <p className={styles.p3}>Number of adults checked In:{props.noofadult}</p>
        <p className={styles.p3}>Number of children checked In:{props.noofchildren}</p>
        </>}
    </div>
  )
}

export default Availabledata;