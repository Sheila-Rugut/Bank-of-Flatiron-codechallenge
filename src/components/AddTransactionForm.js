import React,{useState} from "react";

function AddTransactionForm({onSubmission}) {
  const [formData,setFormData]=useState({
 date:"",
 description:"",
 category: "",
 amount:0
 })
  function handleSubmit(e){
    e.preventDefault()
    onSubmission(formData)
  }
  function handleChange(e){
  setFormData({...formData,[e.target.name]:e.target.value})
  }
  return (
    <div className="ui segment">
      <form onChange={handleChange} onSubmit={handleSubmit} className="ui form">
        <div className="inline fields">
          <input value={formData.date} type="date" name="date" />
          <input value={formData.description} type="text" name="description" placeholder="Description" />
          <input value={formData.category} type="text" name="category" placeholder="Category" />
          <input value={formData.amount}type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
