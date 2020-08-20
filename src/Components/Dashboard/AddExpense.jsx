import React, { Component } from "react";
import '../../Assets/Styles/AddExpense.css';

export const AddExpense = (props) => {
  return (
    <div className="make-it-stiky" style={{ boxShadow:'0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)', padding:'9px'}}>
      <div className="head-for-addExpense">
        <h3>Add Expense</h3>
      </div>
      <form action="">
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Expense Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Name of Expense"
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea2">Description</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea2"
            rows="3"
          ></textarea>
        </div>

        <label htmlFor="exampleFormControlTextarea3">Price</label>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">$</span>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Amount (to the nearest dollar)"
            id="exampleFormControlTextarea3"
          />
          <div className="input-group-append">
            <span className="input-group-text">.00</span>
          </div>
        </div>

        <label className="file mt-3 col-12">
          <input type="file" id="file" aria-label="File browser example" />
          <span className="file-custom"></span>
        </label>

      
        <button type="button" className="btn btn-primary">
          Add Expense
        </button>
        
        <button type="button" className="btn btn-primary">
          EDIT Expense
        </button>
      </form>
    </div>
  );
};

export default AddExpense;
