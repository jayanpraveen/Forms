import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import "./Index.css";
import { BrowserRouter } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:8723/api";
axios.defaults.headers.post["Content-Type"] = "application/text";
axios.defaults.withCredentials = true;

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
