import React, { useState } from "react";
import "../../Assets/Styles/Header.css";
import { editUser } from "../../Redux/Actions/userActions";

import {  useDispatch, useSelector } from "react-redux";

const Header = (props) => {

const[user , setUser] = useState(props.user);
const[categoryName,setCategoryName] = useState();
const[amount,setAmount] = useState();
const[image,setImage] = useState();
const[leftAmount,setLeftAmount] = useState(0);

 const dispatch = useDispatch();
 

const userData = useSelector((state) => state.user.data);
const isLoading = useSelector((state) => state.user.isLoading);
const err = useSelector((state) => state.user.error);
// useEffect( () => {
//    dispatch( editUser());
// //  setUser(userData)
//   }, []);
const clickOnSubmit = () => {
  const tempUser = user;
//  console.log(tempUser.categories , "LENGTH");
  const object = {
    id:tempUser.categories.length+1,
    categoryName:categoryName,
    enabled:true,
    expenses:[],
    image:image,
    maxamount:amount
  }
   tempUser.categories.push(object);
   setUser(tempUser);
   dispatch( editUser(tempUser.id,tempUser));
 //  console.log("User Array" , tempUser)
} 




  return (
    <div>
      <nav
        className="navbar navbar-light increment-z-index give-height w-100"
        style={{ backgroundColor: "#e3f2fd" , position:"fixed"}}
      >
        <div className="col-4 h-100 d-flex align-items-center">
            {/* <img src={require("../../Assets/Images/logo-header.PNG")} alt=""  height={10 } width={10}/> */}
            LOGO
        </div>
        <div className="col-4 h-100 d-flex justify-content-center">

        <div className="form-group  d-flex w-50" >
                <label htmlFor ="exampleFormControlInput1" className="h-100" style={{marginTop:'7px', marginRight:'20px'}}>Amount</label>
                <input
                style={{backgroundColor:'white'}}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  value={leftAmount}
               //   placeholder="Name of Category"
               disabled={true}
            //   value={100}
                />
              </div>

        </div>
        <div className="col-4 h-100 d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-default btn-md text-center"
            style={{paddingBottom:'24px'}}
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
          <button 
          type="button" 
          className="btn btn-default btn-md"
          style={{paddingBottom:'24px'}}>
            <i
              className="fa fa-sign-out"
              style={{ fontSize: "10px", marginRight: "4px" }}
            ></i>
            Logout
          </button>
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
                  onChange={(e) => { setCategoryName(e.target.value)}}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Name of Category"
                />
              </div>

              <div className="mb-2">
                <label className="file mt-3">
                  <input
                   onChange={(e) => { setImage(e.target.value)}}
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
                 onChange={(e) => { setAmount(e.target.value)}}
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
