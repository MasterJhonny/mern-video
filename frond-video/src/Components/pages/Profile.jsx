import React from "react";
import { Title, Box, Container, Avatar } from "../Styled.Components";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user } = useAuth0();

  return (
    <div className="main">
      <Container>
        <br />
        <Title>Profile</Title>
        <Container>
          <Avatar src={user.picture} alt="avatar user" />
          <h3>{user.name}</h3>
          <i>{user.email}</i>
        </Container>
      </Container>
    </div>
  );
};

export { Profile };
