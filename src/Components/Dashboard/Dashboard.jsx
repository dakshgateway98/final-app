import React, {  useState, useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import SideNavbar from "./SideNavbar";
import Header from "../Dashboard/Header";
import AddExpense from "./AddExpense";
import DisplayExpense from "./DisplayExpense";
import "../../Assets/Styles/Dashboard.css";
import { getUser } from "./../../Redux/Actions/userActions";

export const Dashboard = (props) => {
  const dispatch = useDispatch();
 
  useEffect( () => {
     dispatch( getUser(3));
    setUser(userData)
    }, []);
  const userData = useSelector((state) => state.user.data);
  const isLoading = useSelector((state) => state.user.isLoading);
  const err = useSelector((state) => state.user.error);
  const [selectedCategory,setSelectedCategory] = useState(0);
  const [user,setUser] = useState();
  const [editId,seteditId] = useState(null);
 
const settingCategory = (id) => {
 
const index =  userData.categories.findIndex(category => (category.id === id) )
console.log("SLECTED CATEGORY" ,index)
setSelectedCategory(index);
}

const clickOnEdit = (id) => {
  seteditId(id);
//console.log("ID",id);
}
  
 
  //console.log( "PropLoading", isLoading);
  if (isLoading ) {
    return <div>Loading....</div>;
  } else if (err) {
    return <div>{err}</div>;
  } 
 // else{
 else if(user) {
   // console.log("RENDER")
  // console.log("USER", user)
  // console.log("ELSE RENDER", userData);
    return (
      <div>
        <Header 
        user={userData}
        selectedCategory={selectedCategory}
         />
        <div className="row ">
          <div className="col-3">
            <SideNavbar
             user={userData}
             selectedCategory={(id) => settingCategory(id)} />
          </div>

          <div className="col-9 p-0">
            <div className="row" style={{ marginTop: "60px" }}>
              <div className="col-7 mt-2">
               {(Object.keys(userData.categories).length !==0) ?
              <DisplayExpense 
              user={userData} 
              clickOnEdit={clickOnEdit}
             expenses={userData.categories[selectedCategory].expenses} 
             selectedCategory={selectedCategory}
              />:
              <div>No expenses First Add CATEGORY</div> 
              }
                
              </div>
              <div className="col-5 give-padding-margin ">
              {(Object.keys(userData.categories).length !==0) ?
            <AddExpense 
            editId = {editId}
            selectedCategory ={selectedCategory}
            user={userData} />
              :
              <div>ADD category First </div> 
              }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  else{
    return <div>NOT</div>
  }
};

export default Dashboard;
