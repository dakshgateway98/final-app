import React, { Component } from 'react'
//import { connect } from 'react-redux';
import  "../../Assets/Styles/Login.css";
import { useGoogleLogin , GoogleLogin ,GoogleLogout} from 'react-google-login'
//import {  MDBRow } from "mdbreact";
import { Link  } from "react-router-dom";
import {
    MDBCol,
    MDBCard,
    MDBCardImage,
    MDBInput,
  } from "mdbreact";
  import { MDBCardBody } from "mdbreact";
  

const responseGoogle = (response) =>{
    console.log(response)
}
const logout = (res) =>{
  console.log("LOGOUT",res)
}

const Login = () => {
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
                <h2 className="h2-responsive py-4">Sign In</h2>
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
                    label="Email"
                    icon="envelope"
                    name="emailForLogin"
                  //  onChange={this.props.handleInputChangesForLogin}
              
             //       value={this.props.emailForLogin}
                    type="text"
                  />
                  {/* <small className="form-text text-danger">{this.props.errors.emailForLogin}</small> */}
                  
                </div>
                <div>
                  <MDBInput
                    label="Password"
                    name="passwordForLogin"
                    icon="lock"
                //    onChange={this.props.handleInputChangesForLogin}
                
                 //   value={this.props.passwordForLogin}
                    type="password"
                  />
                  {/* <small className="form-text text-danger">{props.errors.passwordForLogin}</small>
                  */}
                </div>

                <button
                  className="btn btn-dark  btn-block"
               //   onClick={this.props.handleSubmit}

                >
                  Sign In
                </button>
                <div className="row">
                <div className="col-6 py-4 mt-3 d-flex justify-content-center">
                <GoogleLogin
    clientId="997523334199-qvpsmmji4fp1i2tlsu9grvvk30o4kibc.apps.googleusercontent.com"
    buttonText="Login"
    render={renderProps => (
        <button className="btn btn-primary" onClick={renderProps.onClick} disabled={renderProps.disabled}>Google Login</button>
      )}
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
                    {/* <Link onClick = { () => {
                     
                    }}>Don't Have An Account......? </Link> */}
                    
                  
                </div>
                <div className="col-6 py-4 mt-4 d-flex flex-column align-item-center">
                
                    <Link 
                    to="/signUp"
                    onClick = { () => {
                   
                    }}>Don't Have An Account......? </Link>
                    
                  
                </div>
                </div>
              </form>
            </MDBCardBody>
            </div>
          </MDBCol>

          <GoogleLogout
      clientId="997523334199-qvpsmmji4fp1i2tlsu9grvvk30o4kibc.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={logout}
    >
    </GoogleLogout>
        </div>
    )
}



export default Login;
