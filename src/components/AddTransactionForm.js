import React, { useState } from "react";

function AddTransactionForm({ onAddTransaction }) {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTransaction(formData);
    setFormData({
      date: "",
      description: "",
      category: "",
      amount: "",
    });
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date" value={formData.date} onChange={handleInputChange} />
          <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleInputChange} />
          <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleInputChange} />
          <input type="number" name="amount" placeholder="Amount" step="0.01" value={formData.amount} onChange={handleInputChange} />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
