import React from "react";

function Transaction({ transaction, deleteTransaction }) {
  return (
    <tr key={transaction.id}>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
      <td>
        <button onClick={() => deleteTransaction(transaction.id)} className="delete-button">
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Transaction;
