import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { getUser, editUser } from "../../Redux/Actions/userActions";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Button from "@material-ui/core/Button";
import Switch from "react-switch";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      error: "",
      isLoaded: true,
      open:false,
      catAmountErr:""
    };
  }
// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

  handleEnableCategory = (cate) => {
    let tempCate = cate;
    tempCate.enabled = !cate.enabled;
    // console.log(cate.enable)
    let tempUser = this.state.user;
    let index = tempUser.categories.indexOf(cate);
    tempUser.categories[index] = tempCate;
    this.setState({
      user: tempUser,
    });
    //  console.log(tempUser,"TEMPUSER")
    this.props.editUser(tempUser.id, tempUser);
  };
  changeMaxAmountValue = (cate, value) => {
    console.log("ID", cate, "VALUE", value);
    let tempCate = cate;
    tempCate.maxamount = value;
    // console.log(cate.enable)
    let tempUser = this.state.user;
    let index = tempUser.categories.indexOf(cate);
    tempUser.categories[index] = tempCate;
    this.setState({
      user: tempUser,
    });
     console.log(tempUser,"TEMPUSER")
    this.props.editUser(tempUser.id, tempUser);
    this.setState({
      open:true
    })
  };

  handleClose = (event, reason) =>{
    if (reason === 'clickaway') {
      return;
    }

    this.setState({
      open:false
    })
  }
  validateCatValue = (value) => {
   // console.log("Remain Amount", remainAmont);
    const nuberRegex = new RegExp("^[0-9]+$");
    if (value) {
      if (!nuberRegex.test(value)) {
        this.setState({
          catAmountErr:"Please Enter Number"});
      }else if (Number(value) === 0) {
        
        this.setState({
          catAmountErr:"Value should not be zero"});
      } 
       else if (value > 10000) {
        
        this.setState({
          catAmountErr:"Value should be less than or equal to 10,000"});
      } else {
        this.setState({
          catAmountErr:""});
      }
    } else {
      {
        this.setState({
          catAmountErr:"Please Enter Expense Amount"});
        
      }
    }

  }
  componentWillReceiveProps(nextProps) {
    // console.log(nextProps.user, "USER");
    if (nextProps.isLoading !== this.props.isLoading) {
      //   const User = nextProps.user;
      this.setState({
        user: nextProps.user,
        error: nextProps.error,
        isLoaded: nextProps.isLoading,
      });
    }
    //console.log("componentWillReceiveProps", " State ", this.state);
  }
  componentDidMount() {
    this.props.getUser(localStorage.getItem("id"));
  }
  render() {
    const { error, isLoaded, user } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (isLoaded) {
      return <div>Loading...</div>;
    } else {
      console.log(user, "ELSE IN PROFILE");
      return (
        <div className="mt-4">
          <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
         open={this.state.open}
         onClose={this.handleClose}
         message="SUCCESS"
        //  action={
           
        //  }
           autoHideDuration={2000} 
           />
            
             
    
          <Link to="/dashboard">
            <button
              style={{ backgroundColor: "rgb(136, 136, 136)" }}
              className="btn m-2"
            >
              Go to DashBoard
            </button>
          </Link>
          <TableContainer component={Paper}>
          <small className="text-danger mt-1 ml-3">{this.state.catAmountErr}</small>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Index</TableCell>
                  <TableCell align="center">Category Name</TableCell>
                  <TableCell align="center">Type</TableCell>
                  <TableCell align="center">Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
             
                {user.categories.map((cate) => (
                  <TableRow key={cate.id}>
                  
                    <TableCell align="center">{cate.id}</TableCell>
                    <TableCell align="center">{cate.categoryName}</TableCell>
                    <TableCell align="center">
                      <Switch
                        onChange={() => this.handleEnableCategory(cate)}
                        checked={cate.enabled}
                      />
                    </TableCell>
                    <TableCell
                      className="d-flex justify-content-center"
                      align="center"
                    >
                      <input
                        id={cate.id}
                        type="text"
                        className="form-control m-0 w-25"
                        defaultValue={Number(cate.maxamount)}
                       // value={this.state.catValue}
                        onChange={
                          (e) => {
                            this.validateCatValue(e.target.value)
                            }
                         // this.validateCatValue(e.target.value)
                        }
                        
                      />
                     
                      <button
                        onClick={() => {
                          this.changeMaxAmountValue(
                            cate,
                            document.getElementById(cate.id).value
                          );
                        }}
                        style={{ backgroundColor: "rgb(136, 136, 136)" }}
                        className="btn btn-sm "
                       disabled={ this.state.catAmountErr !== ""}
                      >
                        Save
                      </button>
                    </TableCell>
                    {/* <TableCell align="center">
                     {cate.spentAmount}
                    </TableCell> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.data,
    isLoading: state.user.isLoading,
    error: state.user.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editUser: (id, user) => dispatch(editUser(id, user)),
    getUser: (id) => dispatch(getUser(id)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Profile));
