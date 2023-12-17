
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function App() {

const [amount,setAmount]=useState(0);
const [year,setYear]=useState(0);
const [rate,setRate]=useState(0);

const [interest,setInterest]=useState(0);

console.log(amount);
console.log(year);
console.log(rate);

 const calculate=(e)=>{
     const output=amount*year*rate/100;
     console.log(output);
     setInterest(output)
}

const reset=(e)=>{
  setAmount(0)
  setYear(0)
  setRate(0)
  setInterest(0)
}

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>Simple Interest Calculator</h1>
          <p>Calculate your simple interest with us ❤️</p>
        </div>
        <br /> <br />
        <div className="total">
          <h2>&#8377; {interest} </h2>
          <p>Your Total Interest</p>
        </div>
        <br /> <br />
        <div className="form">
          <form className='input'>
            <TextField id="outlined-basic" value={amount||""} onChange={(e)=>setAmount(e.target.value)} label="Amount" variant="filled" />
            <br />   <TextField id="filled-basic" value={year||""} onChange={(e)=>setYear(e.target.value)} label="Year" variant="filled" />
            <br />  <TextField id="standard-basic" value={rate||""} onChange={(e)=>setRate(e.target.value)}  label="Rate of Interest" variant="filled" />
          </form>
        </div>
        <br />
        <div className="button">
          <Button variant="contained" onClick={e=>calculate(e)}>Calculate</Button>
          <Button variant="contained" onClick={e=>reset(e)}>Reset</Button>


        </div>
      </div>
    </div>
  );
}

export default App;
