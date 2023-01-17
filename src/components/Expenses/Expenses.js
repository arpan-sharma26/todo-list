import "../Expenses/Expenses.css";
import ExpenseList from "../Expenses/ExpenseList";
import ExpenseFilter from "../Expenses/ExpenseFilter";
import ExpensesChart from "../Expenses/ExpensesChart";
import { useState } from "react";

const Expenses = (props) => {

    const [selectedYear, setSelectedYear] = useState("2020");

    const onYearChange = (year) => {
        setSelectedYear(year.target.value)
    };

    const filteredItems = props.items.filter((item) => {
        return new Date(item.date).getFullYear().toString() === selectedYear
    });

    return <div className="expenses">
        <ExpenseFilter selected={selectedYear} dropdownYearChange={onYearChange} />
        <ExpensesChart expenses={filteredItems}></ExpensesChart>
        <ExpenseList items={filteredItems}/>
    </div>
};

export default Expenses;