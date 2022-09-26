import React from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  function handleUpdateOnSubmission(AddTransactionForm){
  console.log(AddTransactionForm)
  }
  return (
    <div>
      <Search />
      <AddTransactionForm onSubmission={handleUpdateOnSubmission}/>
      <TransactionsList />
    </div>
  );
}

export default AccountContainer;
