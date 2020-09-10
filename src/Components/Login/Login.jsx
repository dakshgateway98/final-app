import React, { Component, useState, useEffect } from "react";
//import { connect } from 'react-redux';
import "../../Assets/Styles/Login.css";
import { useGoogleLogin, GoogleLogin, GoogleLogout } from "react-google-login";
//import {  MDBRow } from "mdbreact";
import { getAllUser } from "./../../Redux/Actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MDBCol, MDBCard, MDBCardImage, MDBInput } from "mdbreact";
import { MDBCardBody } from "mdbreact";

const Login = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const responseGoogle = (response) => {
    console.log(response);
  };

  const logout = (res) => {
    console.log("LOGOUT", res);
  };

  const dispatch = useDispatch();

  const allUserData = useSelector((state) => state.user.data);
  const isLoading = useSelector((state) => state.user.isLoading);
  const err = useSelector((state) => state.user.error);

  useEffect(() => {
    dispatch(getAllUser());
  }, []);

  const clickOnSignIn = () => {
    console.log("ALLUSERDATA", allUserData);

    let flag = false;

    allUserData.map((user) => {
      if (
        email === user.email &&
        password === user.password
      ) {
        localStorage.setItem("userToken", user.name + user.contact );
        localStorage.setItem("id" ,user.id)
        flag = true;
      }
    });
    if (flag === true) {
      return props.history.push({
        pathname: "/dashboard",
        //  state: { name: localStorage.getItem('name') }
      });
    } else {
     // console.log("dwdw");
     alert("Wrong username");
  //    toast.error("Wrong username");
      setEmail();
      setPassword();

      return props.history.push({
        pathname: "/",
      });
    }
  };

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
                  name="email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  value={email}
                  type="text"
                />
                {/* <small className="form-text text-danger">{this.props.errors.emailForLogin}</small> */}
              </div>
              <div>
                <MDBInput
                  label="Password"
                  name="password"
                  icon="lock"
                  //    onChange={this.props.handleInputChangesForLogin}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  value={password}
                  type="password"
                />
                {/* <small className="form-text text-danger">{props.errors.passwordForLogin}</small>
                 */}
              </div>

              <button
                type="button"
                className="btn btn-dark  btn-block"
                onClick={clickOnSignIn}
              >
                Sign In
              </button>
              <div className="row">
                <div className="col-6 py-4 mt-3 d-flex justify-content-center">
                  <GoogleLogin
                    clientId="997523334199-qvpsmmji4fp1i2tlsu9grvvk30o4kibc.apps.googleusercontent.com"
                    buttonText="Login"
                    render={(renderProps) => (
                      <button
                        className="btn btn-primary"
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                      >
                        Google Login
                      </button>
                    )}
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                  />
                  {/* <Link onClick = { () => {
                     
                    }}>Don't Have An Account......? </Link> */}
                </div>
                <div className="col-6 py-4 mt-4 d-flex flex-column align-item-center">
                  <Link to="/signUp" onClick={() => {}}>
                    Don't Have An Account......?{" "}
                  </Link>
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
      ></GoogleLogout>
    </div>
  );
};

export default Login;
