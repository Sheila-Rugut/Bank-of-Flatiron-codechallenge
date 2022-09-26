import React from "react";
import './App.css';
import AccountContainer from "./AccountContainer";
import Transaction from "./Transaction";
import Search from "./Search";
import TransactionsList from "./TransactionsList";

function App() {
  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
        <Transaction />
        <Search />
        <TransactionsList />
      </div>
      <AccountContainer />
    </div>
  );
}

export default App;
