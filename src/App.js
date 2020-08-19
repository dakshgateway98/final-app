import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Routes/Routes';
import { Provider } from "react-redux"
import configureStore from "./Redux/Store/configureStore";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const store = configureStore();


function App() {
  return (
    <Provider store={store}>
    <Routes/>
    </Provider>
  );
}

export default App;
