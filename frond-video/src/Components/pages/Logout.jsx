import React from 'react';
import { Button } from '../Styled.Components';
import { useAuth0 } from '@auth0/auth0-react';

const Logout = () => {

const { logout } = useAuth0();

const hadleLogout = () => {
    logout();
  };

  return (
    <div className="main">
      <div className="main-form">
        <br />
        <br />
        <br />
        <Button onClick={hadleLogout}>Logout</Button>
      </div>
    </div>
  );
};

export { Logout };
