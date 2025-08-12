import { useReducer, useState } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";

function App() {
  // Remove the useState hook and replace it with useReducer hook
  // Implement the functionality to add and remove the transaction in reducer function
  // const [expenses, setExpenses] = useState([]);

  function expensesReducer(state,action){
    switch(action.type){
      case "ADD":
        return [action.expense,...state];
      case "REMOVE":
        return state.filter((exp,index)=>action.index !== index);
      default:
          return [];
    }
  }

  const [expenses,dispatch] = useReducer(expensesReducer,[]);



  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm dispatch={dispatch}/>
        <div className="expenseContainer">
          <ExpenseInfo expenses={expenses} />
          <ExpenseList expenses={expenses} deleteExpense={dispatch}/>
        </div>
      </div>
    </>
  );
}

export default App;
