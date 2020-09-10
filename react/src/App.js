import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import MainPage from "./components/MainPage";
import Login from "./components/Login";

function App() {
  const loggedIn = window.localStorage.getItem("auth_token");

  return (
    <BrowserRouter>
      {loggedIn ? <MainPage /> : <Login />}
    </BrowserRouter>
  );

}

export default App;
