import { authSlice } from "./slice";
const { actions: slice } = authSlice; //distructuring

//login actions

export const loginAction = (phone) => (dispatch) => {
  dispatch(slice.setLogin(phone));
};

//logOut

export const logOutAction = () => (dispatch) => {
  dispatch(slice.setLogOut());
};
//get data from API
export const getDataAction = () => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) =>dispatch(slice.setData(json))) ;
};
