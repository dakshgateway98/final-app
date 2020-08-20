import React, { Component } from 'react'
import { connect } from 'react-redux'
import ExpenseCard from './ExpenseCard';

export const DisplayExpense = (props) => {
    return (
        <div>
            <ExpenseCard/>
            <ExpenseCard/>
            <ExpenseCard/>
            <ExpenseCard/>
            <ExpenseCard/>
            <ExpenseCard/>
            <ExpenseCard/>
        </div>
    )
}


export default DisplayExpense;
