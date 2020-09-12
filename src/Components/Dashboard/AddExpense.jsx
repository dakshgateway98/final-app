import React, { useState, useEffect, useRef } from "react";
import "../../Assets/Styles/AddExpense.css";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../Redux/Actions/userActions";

export const AddExpense = (props) => {
  const { user, selectedCategory, editId } = props;
  const [userAdd, setUserAdd] = useState(props.user);
  const [expenseName, setExpenseName] = useState();
  const [expenseNameErr, setExpenseNameErr] = useState();

  const [description, setDescription] = useState();
  const [descriptionErr, setDescriptionErr] = useState();
  const [price, setPrice] = useState();
  const [priceErr, setPriceErr] = useState();
  const [image, setImage] = useState("");
  const [imageErr, setImageErr] = useState();
  //const [editId, seteditId] = useState();
  const [remainAmont, setRemainAmount] = useState();

  const dispatch = useDispatch();

  const userData = useSelector((state) => state.user.data);
  const isLoading = useSelector((state) => state.user.isLoading);
  const err = useSelector((state) => state.user.error);

  const clickOnEditExpense = () => {
    if (editId !== null) {
      const tempUser = user;
      // console.log(tempUser, "ADD EXPENSE");
      const editedExpense = {
        id: editId,
        name: expenseName,
        description: description,
        spentAmount: price,
        image: image,
      };
      const index = tempUser.categories[selectedCategory].expenses.findIndex(
        (expense) => expense.id === editId
      );
      tempUser.categories[selectedCategory].expenses[index] = editedExpense;

      setUserAdd(tempUser);
      dispatch(editUser(tempUser.id, tempUser));
      setExpenseName("");
      setDescription("");
      setPrice("");
      // setImage('');
      console.log("MYDATA", expenseName, description, price);
    }
  };

  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    console.log("USEEFFECT");
    if (editId !== null) {
      const expense = user.categories[selectedCategory].expenses.filter(
        (expense) => expense.id === editId
      );
      console.log("EXPENSE", expense[0]);
      if (expense[0] !== undefined) {
        setExpenseName(expense[0].name);
        setDescription(expense[0].description);
        setPrice(expense[0].spentAmount);
        setImage(expense[0].image);
      }
    }
  }, [editId]);

  useEffect(() => {
    if (Object.keys(user.categories).length !== 0) {
      var sum = 0;

      user.categories[selectedCategory].expenses.map((expense) => {
        sum = sum + Number(expense.spentAmount);
      });

      console.log("SUM FOR ", sum);
      setRemainAmount(
        Number(user.categories[props.selectedCategory].maxamount) - sum
      );
      //props.remainAmount(remainAmount)
    }
  }, [selectedCategory]);

  const clickOnAddExpense = () => {
    //   console.log(tempUser, "ADD EXPENSE");
    const tempUser = user;
    if (
      Object.keys(tempUser.categories[selectedCategory].expenses).length === 0
    ) {
      //  console.log("ADD EXPENSE");
      const object = {
        id: 1,
        name: expenseName,
        description: description,
        spentAmount: price,
        image: image,
      };

      //  console.log("EXPENSE" ,object );
      //  console.log("TEMPUSER PUSH", tempUser.categories[selectedCategory].expenses.push(object));
      //  console.log("TEMP USER" ,tempUser);
      tempUser.categories[selectedCategory].expenses.push(object);
      setUserAdd(tempUser);
      dispatch(editUser(tempUser.id, tempUser));
    } else {
      const len = Object.keys(tempUser.categories[selectedCategory].expenses)
        .length;
      const id = tempUser.categories[selectedCategory].expenses[len - 1].id;

      const object = {
        id: id + 1,
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

  const validateExpenseName = (value) => {
    const nuberRegex = RegExp(/\d/);
    if (value) {
      if (nuberRegex.test(value)) {
        setExpenseNameErr("Please enter only alphabate");
      } else if (value.trim().length <= 2) {
        setExpenseNameErr("Expense Name should be greater than two charecter");
      } else {
        setExpenseNameErr("");
      }
    } else {
      {
        setExpenseNameErr("Please Enter Expense Name");
      }
    }
  };

  const validateDescription = (value) => {
    //  const nuberRegex = RegExp(/\d/);
    if (value) {
      if (value.trim().length <= 10) {
        setDescriptionErr("Description should be greater than 10 charecter");
      } else {
        setDescriptionErr("");
      }
    } else {
      {
        setDescriptionErr("Please Enter Description Name");
      }
    }
  };
  const validateExpenseAmount = (value) => {
    console.log("Remain Amount", remainAmont);
    const nuberRegex = new RegExp("^[0-9]+$");
    if (value) {
      if (!nuberRegex.test(value)) {
        setPriceErr("Please Enter Number");
      } else if (value > Number(remainAmont)) {
        setPriceErr(`Value should be less than or equal to Remain amount`);
      } else {
        setPriceErr("");
      }
    } else {
      {
        setPriceErr("Please Enter Expense Amount");
      }
    }
  };

  const validateImg = (value) => {
    if (value) {
      setImageErr("");
    } else {
      {
        setImageErr("Please select Image");
      }
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
              validateExpenseName(e.target.value);
            }}
            value={expenseName}
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Name of Expense"
          />
        </div>
        <small className="form-text text-danger">{expenseNameErr}</small>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea2">Description</label>
          <textarea
            onChange={(e) => {
              setDescription(e.target.value);
              validateDescription(e.target.value);
            }}
            value={description}
            className="form-control"
            id="exampleFormControlTextarea2"
            rows="3"
          ></textarea>
        </div>
        <small className="form-text text-danger">{descriptionErr}</small>

        <label htmlFor="exampleFormControlTextarea3">Price</label>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">$</span>
          </div>
          <input
            type="text"
            onChange={(e) => {
              setPrice(e.target.value);
              validateExpenseAmount(e.target.value);
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
        <small className="form-text text-danger">{priceErr}</small>

        <label className="file mt-3 col-12">
          <input
            onChange={(e) => {
              setImage(e.target.value);
              validateImg(e.target.value);
            }}
            //  value={image}
            type="file"
            id="file"
            aria-label="File browser example"
          />
          {/* <img src={require(image)} alt={`${image}`}/> */}
          <span className="file-custom"></span>
        </label>

        <button
          type="button"
          className="btn btn-primary"
          onClick={clickOnAddExpense}
          disabled={
            !(
              expenseNameErr === "" &&
              priceErr === "" &&
              imageErr === "" &&
              descriptionErr === ""
            )
          }
        >
          Add Expense
        </button>

        <button
          onClick={clickOnEditExpense}
          type="button"
          className="btn btn-primary"
          disabled={
            !(
              expenseNameErr === "" &&
              priceErr === "" &&
              imageErr === "" &&
              descriptionErr === ""
              
            )
          }
        >
          EDIT Expense
        </button>
      </form>
    </div>
  );
};

export default AddExpense;
