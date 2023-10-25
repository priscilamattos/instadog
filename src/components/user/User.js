import React from "react";
import { Route, Routes } from "react-router-dom";

import Feed from "../../components/feed/Feed";
import NotFound from "../NotFound";
// import { UserContext } from "../../UserContext";
import UserHeader from "./UserHeader";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";

// import Head from "../Helper/Head";

const User = () => {
  // const { data } = React.useContext(UserContext);
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/post" element={<UserPhotoPost />} />
        <Route path="/stats" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
