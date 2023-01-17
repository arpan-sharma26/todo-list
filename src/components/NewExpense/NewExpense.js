import "../NewExpense/NewExpense.css"
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpense) => {
        const expenseData = {
            ...enteredExpense,
            id : Math.random().toString()
        }
        props.onAddExpense(expenseData);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseFormData={saveExpenseDataHandler}/>
        </div>
    )
};

export default NewExpense;