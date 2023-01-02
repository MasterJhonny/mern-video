import React from "react";
import { Button } from "../Styled.Components";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  const hadleLogin = () => {
    loginWithRedirect();
  };

  return (
    <div className="main">
      <div className="main-form">
        <br />
        <br />
        <br />
        <Button onClick={hadleLogin}>Login</Button>
      </div>
    </div>
  );
};

export { Login };
