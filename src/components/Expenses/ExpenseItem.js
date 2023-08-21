import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetail";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const clickHandler = () =>{
    console.log('Clicked!!!');
  }
  const deleteExpense = () =>{
    console.log('Expense Deleted');
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <ExpenseDetail title={props.title} location={props.location} amount={props.amount}  />
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={deleteExpense}>Delete Expense</button>
    </Card>
  );
}

export default ExpenseItem;
