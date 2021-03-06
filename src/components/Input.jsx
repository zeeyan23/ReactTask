import React from 'react'
import { useState } from 'react';
import styles from '../components/Input.module.css'
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import FrontDesign from './FrontDesign';
import Layout from './Layout';

export const Input = ( props) => {

    const navigate=useNavigate();
    const [enteredCheckIn,setEnteredCheckIn]=useState('');
    const [newFormatedDate,setEnteredCheckOut]=useState('');
    const [enteredAdult,setEnteredAdult]=useState(1);
    const [enteredChildren,setEnteredChildren]=useState(0);

    function checkinChangeHandler(event){

        setEnteredCheckIn(event.target.value);

        var meetingStartDateInput = document.querySelector('#create-smeeting-startdate');
        var meetingEndDateInput = document.querySelector('#create-smeeting-enddate');

        meetingStartDateInput.addEventListener('change', function(){
            if(this.value != '') setEndDate(this.value);
        });

        function setEndDate(meetingDate){
            let date = new Date(meetingDate);
            date = new Date(date.setDate(date.getDate() + 1));

            function formatNum(num) {
                if(num < 10) return `0${num}`
                return num;
            }

            let newFormatedDate = `${date.getFullYear()}-${formatNum(date.getMonth()+1)}-${formatNum(date.getDate())}`;

            setEnteredCheckOut(newFormatedDate);
            meetingEndDateInput.value = newFormatedDate;
            meetingEndDateInput.setAttribute('min', newFormatedDate);
            meetingStartDateInput.setAttribute('max', date);

        }
    }
    const disableDates=()=>{
        const today = new Date();
        const dd = String(today.getDate() ).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
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
        const FormData={
            enteredCheckIn,
            newFormatedDate,
            enteredAdult,
            enteredChildren
        }
        props.onSaveData(FormData);
        navigate('/ReactTask/dist/availabledata/');
        setEnteredCheckIn("");
        setEnteredCheckOut("");
        setEnteredAdult("");
        setEnteredChildren("");

    }
  return (
    <>
    <Header />
    <FrontDesign />
    <form onSubmit={handleSubmit} className={styles.form}>
        <label>Check-in:*</label>
        <input type='date'name="datepickers" min={disableDates()}  value={enteredCheckIn} onChange={checkinChangeHandler} id="create-smeeting-startdate"></input>
        <label>Check-out:*</label>
        <input type='date' name="datepickers" value={newFormatedDate} onChange={checkoutChangeHandler} id="create-smeeting-enddate" ></input>
        <label>Adults:</label>
        <input type='number' min='1' max='15' value={enteredAdult} onChange={adultChangeHandler}></input>
        <label>Children:</label>
        <input type='number' min='0' max='10' value={enteredChildren} onChange={childrenChangeHandler}></input>
        <button>Submit</button>
    </form>
    <Layout />
    </>
  )
}

export default Input
