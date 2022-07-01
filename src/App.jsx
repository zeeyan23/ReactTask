import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Availabledata from './components/Availabledata';
import Input from './components/Input';
function App() {

  const [dataFound,setDataFound]=useState(false);
  var [enteredCheckIn,setEnteredCheckIn]=useState('');
  var [enteredCheckOut,setEnteredCheckOut]=useState('');
  var [numberofAdults,setNumberOfAdults]=useState('');
  var [numberofChildrens,setNumberOfChildrens]=useState('');
  
    function savedData(data){
    
      numberofAdults=data.enteredAdult;
      numberofChildrens=data.enteredChildren;
      enteredCheckIn=data.enteredCheckIn;
      enteredCheckOut=data.newFormatedDate;

     console.log(data.enteredCheckIn)
      if(data!=null){
          setNumberOfAdults(data.enteredAdult);
          setNumberOfChildrens(data.enteredChildren);
          setEnteredCheckIn(data.enteredCheckIn);
          setEnteredCheckOut(data.newFormatedDate);
          setDataFound(true);
      }
      else{
          setDataFound(false);
      }
  }
  return (
    <>
    <Routes>
      <Route path="/ReactTask/dist/" element={<Input onSaveData={savedData}/> }/>
      <Route path="/ReactTask/dist/availabledata" element={dataFound && 
        <Availabledata
        dateofcheckIn={enteredCheckIn}
        dateofcheckOut={enteredCheckOut}
        noofadult={numberofAdults} 
        noofchildren={numberofChildrens}
        /> }/>
    </Routes>
    </>
  )
}

export default App
