import React, { useState, useEffect } from "react";
import "../../Assets/Styles/AddExpense.css";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../Redux/Actions/userActions";

export const AddExpense = (props) => {
  const { user, selectedCategory, editId } = props;
  const [userAdd, setUserAdd] = useState(props.user);
  const [expenseName, setExpenseName] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [image, setImage] = useState();
  //const [editId, seteditId] = useState();

  const dispatch = useDispatch();

  const userData = useSelector((state) => state.user.data);
  const isLoading = useSelector((state) => state.user.isLoading);
  const err = useSelector((state) => state.user.error);

  const clickOnEditExpense = () => {};

  useEffect(() => {
    console.log("USEEFFECT");
    if (editId !== null) {
      const expense = user.categories[selectedCategory].expenses.filter(
        (expense) => expense.id === editId
      );
      console.log("EXPENSE", expense);
      // setExpenseName(expense[0].name);
      // setDescription(expense[0].description);
      // setPrice(expense[0].spentAmount);
      // setImage(expense[0].image);
    }
  }, [editId]);

  const clickOnAddExpense = () => {
    const tempUser = user;
    console.log(tempUser, "ADD EXPENSE");
    const len = Object.keys(tempUser.categories[selectedCategory].expenses)
      .length;
    const id = tempUser.categories[selectedCategory].expenses[len - 1].id;
    if (
      Object.keys(tempUser.categories[selectedCategory].expenses).length === 0
    ) {
      const object = {
        id: 1,
        name: expenseName,
        description: description,
        spentAmount: price,
        image: image,
      };
      tempUser.categories[selectedCategory].expenses.push(object);
      setUserAdd(tempUser);
      dispatch(editUser(tempUser.id, tempUser));
      console.log("EXPENSE LENGTH", 0);
    } else {
      const object = {
        id: id,
        name: expenseName,
        description: description,
        spentAmount: price,
        image: image,
      };
      tempUser.categories[selectedCategory].expenses.push(object);
      setUserAdd(tempUser);
      dispatch(editUser(tempUser.id, tempUser));
    }
  };

  return (
    <div
      className="make-it-stiky"
      style={{
        boxShadow:
          "0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)",
        padding: "9px",
      }}
    >
      <div className="head-for-addExpense">
        <h3>Add Expense</h3>
      </div>
      <form action="">
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Expense Name</label>
          <input
            onChange={(e) => {
              setExpenseName(e.target.value);
            }}
            value={expenseName}
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Name of Expense"
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea2">Description</label>
          <textarea
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
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
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            value={price}
            className="form-control"
            aria-label="Amount (to the nearest dollar)"
            id="exampleFormControlTextarea3"
          />
          <div className="input-group-append">
            <span className="input-group-text">.00</span>
          </div>
        </div>

        <label className="file mt-3 col-12">
          <input
            onChange={(e) => {
              setImage(e.target.value);
            }}
            value={image}
            type="file"
            id="file"
            aria-label="File browser example"
          />
          <span className="file-custom"></span>
        </label>

        <button
          type="button"
          className="btn btn-primary"
          onClick={clickOnAddExpense}
        >
          Add Expense
        </button>

        <button
          onClick={clickOnEditExpense}
          type="button"
          className="btn btn-primary"
        >
          EDIT Expense
        </button>
      </form>
    </div>
  );
};

export default AddExpense;
