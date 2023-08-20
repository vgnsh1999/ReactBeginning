import ExpenseItem from "./components/Expenses/ExpenseItem";
import Card from "./components/UI/Card";
import "./components/Expenses/Expenses.css";

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
  return (
    <Card className="expense">
      <h2>Lets get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
        location={expenses[0].location}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
        location={expenses[1].location}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
        location={expenses[2].location}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
        location={expenses[3].location}
      />
    </Card>
  );
}

export default App;
