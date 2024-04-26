import { dataLabel } from "../data";

function ExpenseList({expenses}) {
  return <div id='allcat'>
    <div id="desc">
    <label>{dataLabel.description} </label>
    {[...Array(expenses)].map((_, index) =>  <p>{expenses.description}</p>)}
   </div>

    <div id ="amount">
    <label>{dataLabel.amount}</label>
    <p>{expenses.amount}</p></div>

    <div id="category">
    <label>{dataLabel.category}</label>
    <p>{expenses.category}</p></div>
  </div>
}

export default ExpenseList;