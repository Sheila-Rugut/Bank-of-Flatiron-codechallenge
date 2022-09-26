//import React from "react";
import React,{useEffect,useState} from 'react';
import AccountContainer from "./AccountContainer";
import TransactionsList from './TransactionsList';
import AddTransactionForm from "./AddTransactionForm";


function App() {
  const[transactions,setTransactions]=useState([]);
useEffect(()=>{
  fetch("http://localhost:8000/transactions")
  .then(resp=>resp.json())
  .then(data=>setTransactions(data))
}, []);
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
  fetch("http://localhost:8000/transactions",serverOptions)
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

export default App;
