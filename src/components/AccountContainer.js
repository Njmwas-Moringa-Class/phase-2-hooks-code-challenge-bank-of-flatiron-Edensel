import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
        setFilteredTransactions(data);
      })
      .catch((error) => console.error("Error fetching transactions:", error));
  }, []);

  const handleSearch = (term) => {
    const filtered = transactions.filter((transaction) =>
      Object.values(transaction).some(
        (field) =>
          typeof field === "string" &&
          (field.toLowerCase().includes(term.toLowerCase()) ||
            (typeof transaction.amount === "number" &&
              transaction.amount.toString().includes(term.toLowerCase())))
      )
    );
    setFilteredTransactions(filtered);
  };
  
  

  const handleAddTransaction = (newTransaction) => {
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    })
      .then((response) => response.json())
      .then((data) => {
        setTransactions([...transactions, data]);
        handleSearch("");
      })
      .catch((error) => console.error("Error adding transaction:", error));
  };

  

  return (
    <div>
      <Search setSearchTerm={handleSearch} />
      <AddTransactionForm handleAddTransaction={handleAddTransaction} />
      <TransactionsList
        transactions={filteredTransactions}
      />
    </div>
  );
}

export default AccountContainer;
