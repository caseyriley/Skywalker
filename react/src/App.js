import React from "react";
import { BrowserRouter} from "react-router-dom";
import MainPage from "./components/MainPage";
import Login from "./components/Login";


function App() {
  const loggedIn = window.localStorage.getItem("auth_token");

  return (
    <>
      <div id="fb-root"></div>
      
      <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v8.0" nonce="EJjP46dz"></script>
    <BrowserRouter>
      {loggedIn ? <MainPage /> : <Login />}
    </BrowserRouter>
    </>
  );

}

export default App;


//^^^^