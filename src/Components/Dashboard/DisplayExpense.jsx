import React, { Component, useEffect ,useState } from 'react'
import { connect } from 'react-redux'
import ExpenseCard from './ExpenseCard';

export const DisplayExpense = (props) => {

   const { user , expenses} = props
   const [stateExpense,setStateExpense] = useState(expenses);
   console.log("USER",user)
   console.log("DISPLAY",expenses)
//    useEffect( () => {
   
//    }, [expenses]);
//console.log(props.expenses,"EXPENSES")

// const clickOnEdit = (id) =>{

// console.log("HELO ID",id);

// }

if(Object.keys(expenses).length === 0 ){
    return(
        <div>
           Add Expenses
        </div>
    )
}
else {
    return (
        expenses.map(( expense , index) => {
            return(
                <div key={index}>
                    <ExpenseCard
                     expe = {expense}
                     clickOnEdit={(id) => props.clickOnEdit(id)}/>
                </div>
            )
        })
        //  <div>
            
        //     <ExpenseCard/>
        //     <ExpenseCard/>
        //     <ExpenseCard/>
        //     <ExpenseCard/>
        //     <ExpenseCard/>
        //     <ExpenseCard/>
        // </div>
        
    )
}
}

export default DisplayExpense;
