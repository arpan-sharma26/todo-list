import "../NewExpense/ExpenseForm.css";
import {useState} from "react";

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("2023-01-01");

    // another way to use useState
    // const [userInput, setUserInput] = useState({
    //     enteredTitle : "",
    //     enteredAmount : "",
    //     enteredDate : "",
    // });

    const titleChangeHandler = (e) => {
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredTitle: e.target.value
        //     }
        // })
        setEnteredTitle(e.target.value)
    };

    const amountChangeHandler = (e) => {
        // setUserInput((prevState) => {return {
        //     ...prevState,
        //     enteredAmount : e.target.value
        // }})
        setEnteredAmount(e.target.value)
    };

    const dateChangeHandler = (e) => {
        // setUserInput((prevState) => {return {
        //     ...prevState,
        //     enteredDate : e.target.value
        // }})
        setEnteredDate(e.target.value)
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title : enteredTitle,
            amount : +enteredAmount,
            date : new Date(enteredDate)
        };

        props.onSaveExpenseFormData(expenseData);

        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("2023-01-01");
    }

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input onChange={amountChangeHandler} value={enteredAmount} type="number" min="0.01" step="0.01"/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input onChange={dateChangeHandler} type="date" min="2023-01-01" max="2025-12-31" value={enteredDate}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;