import React from 'react';

const LogoutButton = (props) => {
  return (
    <div className={`logout-button`
     } onClick={() => { 
      localStorage.removeItem("auth_token"); 
      window.location.reload();
      }}>
      <span>log out</span>
    </div>
  )
}
export default LogoutButton;