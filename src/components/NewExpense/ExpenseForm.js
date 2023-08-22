import React, { useState } from "react";

import "./ExpenseForm.css";
import userEvent from "@testing-library/user-event";

const ExpenseForm = (props) => {
    // using multiple states
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

//using single state
// const [userInput,setUserInput] = useState({
//     enteredTitle: '',
//     enteredAmount: '',
//     enteredDate: ''
// });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredTitle:event.target.value,
    // })
    // setUserInput((previousState)=>{
    //     return {...previousState,enteredTitle:event.target.value}
    // })
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredAmount:event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredDate:event.target.value,
    // })
  };

  const submitHandler = (event) =>{
    event.preventDefault();
    const expenseData = {
      title:enteredTitle,
      amount:enteredAmount,
      date:new Date(enteredDate)
    }
    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    //for cleaning up the old data that state is holding after recieving new data in 'value' attribute - Two way binding
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
