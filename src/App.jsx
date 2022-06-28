import { useState } from 'react'
import Availabledata from './components/Availabledata'
import Footer from './components/Footer'
import FrontDesign from './components/FrontDesign'
import Header from './components/Header'
import Input from './components/Input'
import Layout from './components/Layout'


function App() {

  const [dataFound,setDataFound]=useState(false);
  var [checkedInData,setCheckedInData]=useState('');
    var [checkedOutData,setCheckedOutData]=useState('');
    var [numberofAdults,setNumberOfAdults]=useState('');
    var [numberofChildrens,setNumberOfChildrens]=useState('');

  function savedData(data){

    checkedInData=data.enteredCheckIn;
    checkedOutData=data.enteredCheckOut;
    numberofAdults=data.enteredAdult;
    numberofChildrens=data.enteredChildren;

    if(data!=null){
        setCheckedInData(data.enteredCheckIn);
        setCheckedOutData(data.enteredCheckOut);
        setNumberOfAdults(data.enteredAdult);
        setNumberOfChildrens(data.enteredChildren);
        setDataFound(true);
        // console.log(data)
    }
    else{
        setDataFound(false);
    }
}
  return (
    <div>
      <Header />
      <FrontDesign />
      <Input onSaveData={savedData}/>
      {dataFound &&  <Availabledata  
      checkedIn={checkedInData} 
      checkOut={checkedOutData} 
      noofadult={numberofAdults} 
      noofchildren={numberofChildrens}/>}
      <Layout />
      {/* <Footer /> */}
    </div>
  )
}

export default App
