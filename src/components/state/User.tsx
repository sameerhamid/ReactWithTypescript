import React, { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  // const [user, setUser] = useState<AuthUser | null>(null);
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLoggin = () => {
    setUser({ name: "sameer", email: "sameer@gmail.com" });
  };
  // const handleLoggOut = () => {
  //   setUser(null);
  // };
  return (
    <div>
      <button onClick={handleLoggin}>Loggin</button>
      {/* <button onClick={handleLoggOut}>Logout</button> */}
      <div>User name is :{user?.email}</div>
      <div>User name is :{user?.name}</div>
    </div>
  );
};

export default User;
