import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetail";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <ExpenseDetail title={props.title} location={props.location} amount={props.amount}  />
    </div>
  );
}

export default ExpenseItem;
