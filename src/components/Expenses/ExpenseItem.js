import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetail";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };
  const deleteExpense = () => {
    console.log("Expense Deleted");
  };

  const updateAmountTo100 = () => {
    setAmount("100");
    console.log(amount);
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <ExpenseDetail
          title={props.title}
          location={props.location}
          amount={props.amount}
        />
        <button onClick={clickHandler}>Change Title</button>
        <button onClick={deleteExpense}>Delete Expense</button>
        <button onClick={updateAmountTo100}>Set to 100</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
