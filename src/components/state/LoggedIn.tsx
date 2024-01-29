import React, { useState } from "react";

const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoggin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <button onClick={handleLoggin}>Login</button>
      <br />
      <button onClick={handleLogout}>Logout</button>
      <br />
      <div>User is : {isLoggedIn ? "logged in" : "logged out"} </div>
    </div>
  );
};

export default LoggedIn;
