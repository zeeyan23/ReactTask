import React from 'react'
import { useState } from 'react';
import styles from '../components/Input.module.css'

export const Input = ( props) => {

    const [enteredCheckIn,setEnteredCheckIn]=useState('');
    const [enteredCheckOut,setEnteredCheckOut]=useState('');
    const [enteredAdult,setEnteredAdult]=useState('');
    const [enteredChildren,setEnteredChildren]=useState('');
    const [valid,setValid]=useState(true);

    function checkinChangeHandler(event){
        setEnteredCheckIn(event.target.value);
    }
    function checkoutChangeHandler(event){
        setEnteredCheckOut(event.target.value);
    }
    function adultChangeHandler(event){
        setEnteredAdult(event.target.value);
    }
    function childrenChangeHandler(event){
        setEnteredChildren(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        if((enteredAdult || enteredChildren)==null){
            return;
        }
        const FormData={
            enteredCheckIn,
            enteredCheckOut,
            enteredAdult,
            enteredChildren
        }
        props.onSaveData(FormData);
    }
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
        <label>Check-in:*</label>
        <input type='date' onChange={checkinChangeHandler}></input>
        <label>Check-out:*</label>
        <input type='date' onChange={checkoutChangeHandler}></input>
        <label>Adults:</label>
        <input type='number' min='1' max='15' onChange={adultChangeHandler} placeholder='No.of Adults'></input>
        <label>Children:</label>
        <input type='number' min='0' max='10' onChange={childrenChangeHandler} placeholder='No.of Children'></input>
        <button>Submit</button>
        {!valid && <p>Please enter all fields!!</p>}
    </form>

  )
}

export default Input
