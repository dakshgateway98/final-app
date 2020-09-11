import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import ExpenseCard from "./ExpenseCard";

export const DisplayExpense = (props) => {
  const { user, expenses, selectedCategory } = props;
  const [stateExpense, setStateExpense] = useState(expenses);
  const [ remainAmount , setRemainAmount] = useState()
  console.log("USER", user);
  console.log("DISPLAY", expenses);
  console.log("SELECTED Category ", user.categories[selectedCategory]);


  useEffect( () => {
  
    if(Object.keys(user.categories).length !==0)
    {
      var sum = 0;
    
      user.categories[selectedCategory].expenses.map(expense => {
        sum=sum+Number(expense.spentAmount)
      })
  
      console.log("SUM FOR " , sum)
      setRemainAmount(Number(user.categories[props.selectedCategory].maxamount) - sum )
    }
    
    
     }, [selectedCategory]);
  //    useEffect( () => {

  //    }, [expenses]);
  //console.log(props.expenses,"EXPENSES")

  // const clickOnEdit = (id) =>{

  // console.log("HELO ID",id);

  // }

  if (Object.keys(expenses).length === 0) {
    return <div>Add Expenses</div>;
  } else {
    return (
      <div>
        <div className="mb-4">
          Remaining Amount
          <input
            style={{ backgroundColor: "white" }}
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
             value={remainAmount}
            //   placeholder="Name of Category"
            disabled={true}
            //   value={100}
          />
        </div>
        {expenses.map((expense, index) => {
          return (
            <div>
              <div key={index}>
                <ExpenseCard
                  user={user}
                  expe={expense}
                  clickOnEdit={(id) => props.clickOnEdit(id)}
                  selectedCategory={selectedCategory}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};

export default DisplayExpense;
