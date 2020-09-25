import React from 'react';

const LogoutButton = (props) => {
  return (
    <div className={`logout-button`
      // ${props.bottomNavState ? "visible" : "none"}
     } onClick={() => { 
      localStorage.removeItem("auth_token"); 
      window.location.reload();
      // window.location.href = 'https://skywalker3.herokuapp.com' 
      // window.location.href = 'http://localhost:3000' 
      }}>
      <span>log out</span>
    </div>
  )
}
export default LogoutButton;