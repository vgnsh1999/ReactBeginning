import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {

  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 2000,
      date: new Date(2023, 7, 20),
      location: "Chennai",
    },
    {
      id: "e2",
      title: "Food",
      amount: 200,
      date: new Date(2023, 7, 20),
      location: "Chennai",
    },
    {
      id: "e3",
      title: "Dress",
      amount: 1000,
      date: new Date(2023, 7, 20),
      location: "Chennai",
    },
    {
      id: "e4",
      title: "Fuel",
      amount: 150,
      date: new Date(2023, 7, 20),
      location: "Chennai",
    },
  ];

  const addExpenseHandler = expense =>{
    console.log('in app.js');
    console.log(expense);
  }


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
};

export default App;
