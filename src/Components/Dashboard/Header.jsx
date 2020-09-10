import React, { useState, useEffect } from "react";
import "../../Assets/Styles/Header.css";
import { editUser } from "../../Redux/Actions/userActions";

import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";

const Header = (props) => {
  const [user, setUser] = useState(props.user);

  // find left Amount
  // useEffect()(

  // if(Object.keys(userData.categories).length !==0){
  //   user.categories[props.selectedCategory].expenses.map()
  // }
  // )

  const [categoryName, setCategoryName] = useState();
  const [amount, setAmount] = useState();
  const [image, setImage] = useState();
  const [leftAmount, setLeftAmount] = useState(0);

  const dispatch = useDispatch();

  const userData = useSelector((state) => state.user.data);
  const isLoading = useSelector((state) => state.user.isLoading);
  const err = useSelector((state) => state.user.error);
  // useEffect( () => {
  //    dispatch( editUser());
  // //  setUser(userData)
  //   }, []);

  // useEffect(() => {
  //   if (Object.keys(userData.categories).length !== 0) {
  //     var sum = 0;

  //     user.categories[props.selectedCategory].expenses.map((expense) => {
  //       sum = sum + Number(expense.spentAmount);
  //     });

  //     console.log("SUM FOR ", sum);
  //     setLeftAmount(user.categories[props.selectedCategory].maxamount - sum);
  //   }
  // }, []);

  const clickOnSubmit = () => {
    const tempUser = user;
    //  console.log(tempUser.categories , "LENGTH");
    const object = {
      id: tempUser.categories.length + 1,
      categoryName: categoryName,
      enabled: true,
      expenses: [],
      image: image,
      maxamount: amount,
    };
    tempUser.categories.push(object);
    setUser(tempUser);
    dispatch(editUser(tempUser.id, tempUser));
    //  console.log("User Array" , tempUser)
  };
  const logout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("userToken");
    // console.log("Props LOGOUT",props)
    // return props.history.push({
    //   pathname: "/login",
    //   //  state: { name: localStorage.getItem('name') }
    // });
    // props.history.push( "/login")
    // return(
    // <Redirect to="/login" />
    // )
  };

  return (
    <div>
      <nav
        className="navbar navbar-light increment-z-index give-height w-100"
        style={{ backgroundColor: "#e3f2fd", position: "fixed" }}
      >
        <div className="col-4 h-100 d-flex align-items-center h4">
          {/* <img src={require("../../Assets/Images/logo-header.PNG")} alt=""  height={10 } width={10}/> */}
          {user.name}
        </div>
        <div className="col-4 h-100 d-flex justify-content-center">
        <Link to="/survey">
          <button
            type="button"
            className="btn btn-default btn-md "
            // onClick={logout}
            style={{ paddingBottom: "10px" }}
          >
            <i
              className="fa fa-sign-out"
              style={{ fontSize: "10px", marginRight: "4px" }}
            ></i>
            Survey
          </button>
        </Link>
        <Link to="/profile">
          <button
            type="button"
            className="btn btn-default btn-md"
            //    onClick={logout}
            style={{ paddingBottom: "10px" }}
          >
            <i
              className="fa fa-sign-out"
              style={{ fontSize: "10px", marginRight: "4px" }}
            ></i>
            Profile
          </button>
        </Link>
        </div>
        <div className="col-4 h-100 d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-default btn-md text-center"
            style={{ paddingBottom: "24px" }}
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            <div>
              <i
                className="fa fa-plus"
                style={{ fontSize: "10px", marginRight: "4px" }}
              ></i>{" "}
              Add Category
            </div>
          </button>

          <Link to="/">
            <button
              type="button"
              className="btn btn-default btn-md"
              onClick={logout}
              style={{ paddingBottom: "10px" }}
            >
              <i
                className="fa fa-sign-out"
                style={{ fontSize: "10px", marginRight: "4px" }}
              ></i>
              Logout
            </button>
          </Link>
        </div>
      </nav>

      {/* MODAL */}
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">
                Add Category
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Category Name</label>
                <input
                  onChange={(e) => {
                    setCategoryName(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Name of Category"
                />
              </div>

              <div className="mb-2">
                <label className="file mt-3">
                  <input
                    onChange={(e) => {
                      setImage(e.target.value);
                    }}
                    type="file"
                    id="file"
                    aria-label="File browser example"
                  />
                  <span className="file-custom"></span>
                </label>
              </div>

              <label htmlFor="exampleFormControlTextarea3">Max-Amount</label>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">$</span>
                </div>
                <input
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                  aria-label="Amount (to the nearest dollar)"
                  id="exampleFormControlTextarea3"
                />
                <div className="input-group-append">
                  <span className="input-group-text">.00</span>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                data-dismiss="modal"
                className="btn btn-primary"
                onClick={clickOnSubmit}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
