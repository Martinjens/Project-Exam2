import React, { useState } from "react";
import LoginForm from "../auth/login/Loginform";

function LoginPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSuccessfulLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      <LoginForm setIsLoggedIn={setIsLoggedIn} />
    </>
  );
}

export default LoginPage;
