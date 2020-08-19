import React, { Component ,useState } from 'react'
import {
    MDBCol,
    MDBCard,
    MDBCardImage,
    MDBInput,
  } from "mdbreact";
import { MDBCardBody } from "mdbreact";
import  "../../Assets/Styles/SignUp.css";
import { Link  } from "react-router-dom";

 

const SignUp = (props) => {

    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [designation, setDesignation] = useState();
    const [adderss, setAddress] = useState();

console.log(userName,"Username")


    return (
        <div className="make-it-center w-50 " >
   
        <MDBCol md="8" lg="8" sm="8">
        <div className="give-box-shadow">
          <MDBCard narrow>
            <MDBCardImage
              className="text-center darken-3  white-text"
              cascade
              tag="div"
              style={{ height: "100px" , backgroundColor:'rgb(27 182 231 / 0.76)' }}
            >
              <h2 className="h2-responsive py-4">Sign Up</h2>
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
                      setUserName(event.target.value)
                  }}
              
                 value={userName}
                  type="text"
                />
                {/* <small className="form-text text-danger">{props.errors.passwordForLogin}</small>
                */}
              </div>
              <div>
                <MDBInput
                  label="Email"
                  icon="envelope"
                  name="emailForSignUp"
                  onChange={(event) => {
                    setEmail(event.target.value)
                }}
            
                  value={email}
                  type="text"
                />
                {/* <small className="form-text text-danger">{this.props.errors.emailForLogin}</small> */}
                
              </div>
              
              <div>
                <MDBInput
                  label="Address"
                  name="addressForSignUp"
                  icon="address-book"
                  onChange={(event) => {
                    setAddress(event.target.value)
                }}
            
                  value={adderss}
                  type="text"
                />
                {/* <small className="form-text text-danger">{props.errors.passwordForLogin}</small>
                */}
              </div>
              <div>
                <MDBInput
                  label="Designation"
                  name="designationForSignUp"
                  icon="user-plus"
                  onChange={(event) => {
                    setDesignation(event.target.value)
                }}
            
                  value={designation}
                  type="text"
                />
                {/* <small className="form-text text-danger">{props.errors.passwordForLogin}</small>
                */}
              </div>

              <button
                className="btn btn-dark mt-2 btn-block"
             //   onClick={this.props.handleSubmit}

              >
                Sign Up
              </button>
         <small className="form-text text-info mt-4">Email will be sent to set Password For Login</small>
         <div className="col-6 py-4 mt-4 d-flex flex-column align-item-center">
                
                <Link 
                to="/login"
                onClick = { () => {
               
                }}>Already have Account......? </Link>
                
              
            </div>
            </form>
          </MDBCardBody>
          </div>
        </MDBCol>
       
      </div>
    )
}



export default SignUp;
