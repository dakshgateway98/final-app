import React, { Component, useState, useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { MDBCol, MDBCard, MDBCardImage, MDBInput } from "mdbreact";
import { createUser } from "./../../Redux/Actions/userActions";
import { MDBCardBody } from "mdbreact";
import "../../Assets/Styles/SignUp.css";
import { Link } from "react-router-dom";

const SignUp = (props) => {
  const [userName, setUserName] = useState();
  const [userNameErr, setUserNameErr] = useState();
  const [email, setEmail] = useState();
  const[emailErr,setEmailErr] = useState();
  const [designation, setDesignation] = useState();
  const [designationErr, setDesignationErr] = useState();
  const [adderss, setAddress] = useState();
  const [adderssErr, setAddressErr] = useState();
  const [password, setPassword] = useState();
  const [passErr,setPassErr]= useState();
  const [contact, setContact] = useState();
  const [contactErr, setContactErr] = useState();

  const dispatch = useDispatch();

  const userData = useSelector((state) => state.user.data);
  const isLoading = useSelector((state) => state.user.isLoading);
  const err = useSelector((state) => state.user.error);

  const clickonSignUp = () => {
    const userObject = {
      name: userName,
      email: email,
      contact: contact,
      designation: designation,
      address: adderss,
      password:password,
      categories: []
    }
  //  console.log("USER BANA")
  //  setUserAdd(tempUser);
    dispatch(createUser(userObject));

    props.history.push("/login")


  };

  const validateUserName = (value) => {
    // const validEmailRegex = RegExp(
    //   /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
    // );
    if(value)
        {
          if(value.trim().length <5)
          {
           setUserNameErr("User name should be more than 5 character")
          }
          else
          {
            setUserNameErr("")
          }
        }
        else{
          {
            setUserNameErr("Please Enter UserName")
          }
        }
  }
  const validateEmail = (value) => {
    const validEmailRegex = RegExp(
      /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
    );
    if(value)
        {
          if(validEmailRegex.test(value))
          {
           setEmailErr("")
          }
          else
          {
           setEmailErr("Enter Valid Email Only")
          }
        }
        else{
          {
            setEmailErr("Please Enter Email")
          }
        }
  }
  const validateContact = (value) => {
    const validEmailRegex = RegExp(
      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    );
    if(value)
        {
          if(!(validEmailRegex.test(value)))
          {
           setContactErr("Enter Valid Contact")
          }
          else
          {
            setContactErr("")
          }
        }
        else{
          {
            setContactErr("Please Enter Contact")
          }
        }
  }
  const validateAddress = (value) => {
    if(value)
    {
      if(value.trim().length < 10)
      {
       setAddressErr("Address should be minimum 10 character")
      }
      else
      {
        setAddressErr("")
      }
    }
    else{
      {
        setAddressErr("Please Enter Contact")
      }
    }
  }
 const validateDesignation = (value) => {
  if(value)
  {
    if(value.trim().length < 4)
    {
     setDesignationErr("Designation should be minimum 3 character")
    }
    else
    {
      setDesignationErr("")
    }
  }
  else{
    {
      setDesignationErr("Please Enter Designation")
    }
  }
 }
 const validatePass = (value) => {
  if (value) {
    if (value.length < 4) {
     setPassErr("Minimum 4 Character Required")
    } else {
    setPassErr("")
    }
    } else {
    setPassErr("Please Enter Password")
    }
   
}

  return (
    <div className="make-it-center w-50 ">
      <MDBCol md="8" lg="8" sm="8">
        <div className="give-box-shadow">
          <MDBCard narrow>
            <MDBCardImage
              className="text-center darken-3  white-text"
              cascade
              tag="div"
              style={{
                height: "100px",
                backgroundColor: "rgb(27 182 231 / 0.76)",
              }}
            >
              <h2 className="h2-responsive py-4" >
                Sign Up
              </h2>
            </MDBCardImage>
          </MDBCard>
          <MDBCardBody>
            <form
              className="form"
              noValidate
              //    onSubmit={this.props.handleSubmit}
            >
              <small className="form-text text-danger"></small>
              <div>
                <MDBInput
                  label="User Name"
                  name="usernameForSignUp"
                  icon="user"
                  onChange={(event) => {
                    setUserName(event.target.value);
                    validateUserName(event.target.value)
                  }}
                  value={userName}
                  type="text"
                />
                <small className="form-text text-danger">{userNameErr}</small>
                
              </div>
              <div>
                <MDBInput
                  label="Email"
                  icon="envelope"
                  name="emailForSignUp"
                  onChange={(event) => {
                    setEmail(event.target.value);
                    validateEmail(event.target.value);
                  }}
                  value={email}
                  type="text"
                />
                <small className="form-text text-danger">{emailErr}</small>
              </div>
              <div>
                <MDBInput
                  label="Password"
                  name="passwordForLogin"
                  icon="lock"
                  onChange={(event) => {
                    setPassword(event.target.value);
                    validatePass(event.target.value);
                  }}
                  value={password}
                  type="password"
                />
                <small className="form-text text-danger">{passErr}</small>
                
              </div>
              <div>
                <MDBInput
                  label="Contact"
                  name="contact"
                  icon="phone-square"
                  onChange={(event) => {
                    setContact(event.target.value);
                    validateContact(event.target.value);
                  }}
                  value={contact}
                  type="number"
                />
                <small className="form-text text-danger">{contactErr}</small>
                
              </div>
              <div>
                <MDBInput
                  label="Address"
                  name="addressForSignUp"
                  icon="address-book"
                  onChange={(event) => {
                    setAddress(event.target.value);
                    validateAddress(event.target.value)
                  }}
                  value={adderss}
                  type="text"
                />
                <small className="form-text text-danger">{adderssErr}</small>
                
              </div>
              <div>
                <MDBInput
                  label="Designation"
                  name="designationForSignUp"
                  icon="user-plus"
                  onChange={(event) => {
                    setDesignation(event.target.value);
                    validateDesignation(event.target.value)
                  }}
                  value={designation}
                  type="text"
                />
                <small className="form-text text-danger">{designationErr}</small>
                
              </div>

              <button
                className="btn btn-dark mt-2 btn-block"
                //   onClick={this.props.handleSubmit}
                onClick={clickonSignUp}
                disabled={!(userNameErr===""&&passErr==="" && emailErr==="" &&designationErr===""&&adderssErr===""&&contactErr==="" )}
              >
                Sign Up
              </button>
              <small className="form-text text-info mt-4">
                Email will be sent to set Password For Login
              </small>
              <div className="col-6 py-4 mt-4 d-flex flex-column align-item-center">
                <Link to="/login" onClick={() => {}}>
                  Already have Account......?{" "}
                </Link>
              </div>
            </form>
          </MDBCardBody>
        </div>
      </MDBCol>
    </div>
  );
};

export default SignUp;
