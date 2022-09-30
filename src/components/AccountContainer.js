/*import React from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  
  return (
    <div>
      <Search />
      <AddTransactionForm />
      <TransactionsList />
    </div>
  );
}

export default AccountContainer;*/
import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transaction, setTransaction] = useState([])
  const [search, setSearch] = useState("")
  useEffect(() => {
    fetch("http://localhost:8001/transactions?q=" + search)
      .then((r) => r.json())
      .then(transaction => setTransaction(transaction))
  }, [search])
  function handleSearch(e) {
    setSearch(e.target.value)
  }
  return (
    <div>
      <Search handleSearch={handleSearch} />
      <AddTransactionForm />
      <TransactionsList transactions={transaction} />
    </div>
  );
}

export default AccountContainer;

