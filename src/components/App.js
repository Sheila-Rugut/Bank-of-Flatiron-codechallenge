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
function handleUpdateOnSubmission(AddTransaction){
  console.log(AddTransaction)
  setTransactions(transactions=>[...transactions,AddTransaction])
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
