//import React from "react";
/*import React,{useEffect,useState} from 'react';
//import axios from 'axios';
import AccountContainer from "./AccountContainer";
import TransactionsList from './TransactionsList';
import AddTransactionForm from "./AddTransactionForm";


function App() {
  const[transactions,setTransactions]=useState([])
  const fetchData=() => {
    fetch('http://localhost:8001/transactions')
      .then((response) => response.json())
      .then(data => {
        setTransactions((data))
        console.log(data)})
      .catch((err) => console.log(err));
  }
  useEffect(()=>{
    fetchData()
  }, [])
console.log(transactions)
function handleUpdateOnSubmission(addTransaction){
  console.log(addTransaction)
  setTransactions(transactions=>[...transactions,addTransaction])
  
  const serverOptions={
    method: "POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringIfy(addTransaction)
  
  }
  fetch('http://localhost:8001/transactions',serverOptions)
  .then(r=>r.json())
  .then(newItem=>setTransactions(updatedTransactions=>[...updatedTransactions,newItem]))
  .catch(error=>console.log(error))  
}

  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer />
      <TransactionsList transactions={transactions}/>
      <AddTransactionForm onSubmission={handleUpdateOnSubmission}/>
    </div>
  );
}

export default App;*/
import React from "react";
import AccountContainer from "./AccountContainer";

function App() {
  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer />
    </div>
  );
}

export default App;