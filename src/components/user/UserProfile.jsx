import React from "react";
import { userParams } from "react-router-dom";
import Feed from "../feed/Feed";

const UserProfile = () => {
  const { user } = userParams();
  return (
    <section className="container mainContainer">
      <h1 className="tile">{user}</h1>
      <Feed user={user} />
    </section>
  );
};

export default UserProfile;
