import { useState } from 'react'
import Availabledata from './components/Availabledata'
import FrontDesign from './components/FrontDesign'
import Header from './components/Header'
import Input from './components/Input'
import Layout from './components/Layout'


function App() {

  const [dataFound,setDataFound]=useState(false);
  var [numberofAdults,setNumberOfAdults]=useState('');
  var [numberofChildrens,setNumberOfChildrens]=useState('');

  function savedData(data){

    numberofAdults=data.enteredAdult;
    numberofChildrens=data.enteredChildren;

    if(data!=null){
        setNumberOfAdults(data.enteredAdult);
        setNumberOfChildrens(data.enteredChildren);
        setDataFound(true);
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
      noofadult={numberofAdults} 
      noofchildren={numberofChildrens}/>}
      <Layout />
    </div>
  )
}

export default App
