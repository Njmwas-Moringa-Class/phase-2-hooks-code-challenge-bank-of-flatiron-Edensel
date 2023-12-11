import React, { useState } from "react";
import Transaction from "./Transaction";

function TransactionsList({ transactions, deleteTransaction }) {
  const [sortBy, setSortBy] = useState("");

  const handleSort = (type) => {
    if (sortBy === type) {
      setSortBy("");
    } else {
      setSortBy(type);
    }
  };

  const sortedTransactions = [...transactions].sort((a, b) => {
    if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    } else if (sortBy === "description") {
      return a.description.localeCompare(b.description);
    }
    return 0;
  });

  return (
    <table className="ui celled striped padded table">
      <thead>
        <tr>
          <th>
            <button
              className="ui button"
              onClick={() => handleSort("date")}
            >
              Date
            </button>
          </th>
          <th>
            <button
              className="ui button"
              onClick={() => handleSort("description")}
            >
              Description
            </button>
          </th>
          <th>
            <button
              className="ui button"
              onClick={() => handleSort("category")}
            >
              Category
            </button>
          </th>
          <th>
            <button
              className="ui button"
              onClick={() => handleSort("amount")}
            >
              Amount
            </button>
          </th>
          <th>
            <h3 className="ui center aligned header">Action</h3>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedTransactions.map((transaction) => (
          <Transaction
            key={transaction.id}
            transaction={transaction}
            deleteTransaction={deleteTransaction}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsList;
