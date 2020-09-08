import axios from "axios";
import {
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAIL,
    GET_ALL_USER_REQUEST,
    GET_ALL_USER_SUCCESS,
    GET_ALL_USER_FAIL,
    CREATE_USER_REQUEST,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL,
    EDIT_USER_REQUEST,
    EDIT_USER_SUCCESS,
    EDIT_USER_FAIL
} from '../Constants/Constant';

// Get USER
const getUserRequest = () => {
  return {
    type: GET_USER_REQUEST,
  };
};

const getUserSuccess = (json) => {
  return {
    type: GET_USER_SUCCESS,
    data: json,
  };
};

export const getUser = (id) => {
  //console.log("Function call");
  return (dispatch) => {
   // console.log("Action Inside Dispatch");
    dispatch(getUserRequest());

    //Alternate way
    //dispatch({ type: USERINFO_FAIL, data: json });

        return axios.get(`http://localhost:3333/users/${id}`, { timeout: 20000 })
            .then(response => response.data)
            .then(json => {
               
                if(json){
                    return (dispatch(getUserSuccess(json)));
                }
                else{
                    return (dispatch({ type: GET_USER_FAIL, error: "Not Found" ,data:[]}));
                }
            })
            .catch(err => {
                console.error(err);
                //return dispatch(errorServer(err));
                return dispatch({ type: GET_USER_FAIL, error: err, data: [] });
            });
    };
}



// POST USER
const createUserRequest = () => {
    return {
        type: CREATE_USER_REQUEST
    }
}

const createUserReceiveData = (json) => {
    return {
        type: CREATE_USER_SUCCESS,
        data: json
    }
}

export const createUser = (user) => {
    //console.log('Create User Starting')
    return dispatch => {
        dispatch(createUserRequest());

        //Alternate way
        //dispatch({ type: USERINFO_FAIL, data: json });

        return axios.post("http://localhost:3333/users", user)
            .then(response => response.data)
            .then(json => {
                if (json.Success === 'false') {
                    return dispatch({ type: CREATE_USER_FAIL, data: json });
                } else {
                    return (dispatch(createUserReceiveData(json)));
                }
            })
            .catch(err => {
                console.error(err);
                //return dispatch(errorServer(err));
                return dispatch({ type: CREATE_USER_FAIL, error: err, data: [] });
            });
    };
}




// EDIT USER 

const editUserRequest = () => {
    return {
        type: EDIT_USER_REQUEST
    }
}

const editUserReceiveData = (json) => {
    return {
        type: EDIT_USER_SUCCESS,
        data: json
    }
}

export const editUser = (id, user) => {
  
    return dispatch => {
        dispatch(editUserRequest());

        //Alternate way
        //dispatch({ type: USERINFO_FAIL, data: json });

        return axios.patch(`http://localhost:3333/users/${id}`, user)
            .then(response => response.data)
            .then(json => {
                if (json.Success === 'false') {
                    return dispatch({ type: EDIT_USER_FAIL, data: json });
                } else {
                    return (dispatch(editUserReceiveData(json)));
                }
            })
            .catch(err => {
                console.error(err);
                //return dispatch(errorServer(err));
                return dispatch({ type: EDIT_USER_FAIL, data: [], error: err });
            });
    };
}



// Get ALL USER
const getAllUserRequest = () => {
    return {
      type: GET_ALL_USER_REQUEST,
    };
  };
  
  const getAllUserSuccess = (json) => {
    return {
      type: GET_ALL_USER_SUCCESS,
      data: json,
    };
  };
  
  export const getAllUser = (id) => {
    //console.log("Function call");
    return (dispatch) => {
     // console.log("Action Inside Dispatch");
      dispatch(getAllUserRequest());
  
      //Alternate way
      //dispatch({ type: USERINFO_FAIL, data: json });
  
          return axios.get(`http://localhost:3333/users`, { timeout: 20000 })
              .then(response => response.data)
              .then(json => {
                 
                  if(json){
                      return (dispatch(getAllUserSuccess(json)));
                  }
                  else{
                      return (dispatch({ type: GET_ALL_USER_FAIL, error: "Not Found" ,data:[]}));
                  }
              })
              .catch(err => {
                  console.error(err);
                  //return dispatch(errorServer(err));
                  return dispatch({ type: GET_ALL_USER_FAIL, error: err, data: [] });
              });
      };
  }
  