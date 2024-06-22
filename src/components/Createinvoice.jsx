import { useState } from 'react';
import '../App.css'
import Tableform from './Tableform';

const Createinvoice = () => {

  const date= new Date().toISOString().slice(0,10);
  const [nameTo, setNameTo] = useState('');
  const [addressTo, setAddressTo] = useState('');
  const [nameFrom, setNameFrom] = useState('');
  const [addressFrom, setAddressFrom] = useState('');

  return(
    <div>
    <div className="currDate"><b>Current Date: </b>{date}</div>
    <div className="dueDate"><b>Due Date: </b><input className="inputData" type="date" /></div>
    <hr id="line"/>
    <div className="bill">
      <div className="bill-to">
        <p><b>Bill to:</b></p>
        <input className="inputData" type="text" value={nameTo} placeholder='Who is this invoice to?' onChange={(e) => setNameTo(e.target.value)}></input>
        <input className="inputData margin" type="text" placeholder='Billing Address' value={addressTo} onChange={(e) => setAddressTo(e.target.value)}></input>
      </div>
      <div className="bill-from">
        <p><b>Bill from:</b></p>
        <input className="inputData" type="text" placeholder='Who is this invoice from?' value={nameFrom} onChange={(e) => setNameFrom(e.target.value)}></input>
        <input className="inputData margin" type="text" placeholder='Billing Address' value={addressFrom} onChange={(e) => setAddressFrom(e.target.value)}></input>
      </div>
    </div>
    <hr id="line"/>
    <Tableform/>
    </div> 
  )
};

export default Createinvoice;