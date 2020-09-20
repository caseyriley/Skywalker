import React from 'react';

const LogoutButton = (props) => {
  return (
    <div className={`logout-button ${props.bottomNavState ? "visible" : "none"}`} onClick={() => { localStorage.removeItem("auth_token"); window.location.href = 'http://localhost:3000' }}>
      <span>log out</span>
    </div>
  )
}
export default LogoutButton;