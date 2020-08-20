import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  EDIT_USER_REQUEST,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAIL
} from "../Constants/Constant";

const initialState = {
  isLoading: false,
  data: [],
  error: "",
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      //   console.log("Reducer Request")
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case GET_USER_SUCCESS:
      //     console.log("Reducer Success", action)
      return {
        ...state,
        data: action.data,
        isLoading: false,
        error: "",
      };
    case GET_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case CREATE_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case CREATE_USER_SUCCESS:
      //  console.log("Reducer Success", action)
      return {
        ...state,
        isLoading: false,
        error: "",
      };
    case CREATE_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case EDIT_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case EDIT_USER_SUCCESS:
      //  console.log("Reducer Success", action)
      return {
        ...state,
        isLoading: false,
        error: "",
      };
    case EDIT_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
export default userReducer;
