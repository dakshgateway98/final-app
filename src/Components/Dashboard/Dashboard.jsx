import React, { Component, useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import SideNavbar from "./SideNavbar";
import Header from "../Dashboard/Header";
import AddExpense from "./AddExpense";
import DisplayExpense from "./DisplayExpense";
import "../../Assets/Styles/Dashboard.css";
import { getUser } from "./../../Redux/Actions/userActions";

export const Dashboard = (props) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.data);
  const isLoading = useSelector((state) => state.user.isLoading);
  const err = useSelector((state) => state.user.error);


 
  useEffect(() => {

    dispatch(getUser(1));

  }, []);


  //console.log( "PropLoading", isLoading);
  if (isLoading) {
    return <div>Loading....</div>;
  } else if (err) {
    return <div>{err}</div>;
  } else {
   // console.log("ELSE RENDER", userData);
    return (
      <div>
        <Header />
        <div className="row ">
          <div className="col-3">
            <SideNavbar user={userData} />
          </div>

          <div className="col-9 p-0">
            <div className="row" style={{ marginTop: "60px" }}>
              <div className="col-7 mt-2">
                <DisplayExpense user={userData} />
              </div>
              <div className="col-5 give-padding-margin ">
                <AddExpense user={userData}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Dashboard;
