import React from "react";

import { TokenPost } from "./endpoints/TokenPost";
import { UserPost } from "./endpoints/UserPost";

const Api = () => {
  return (
    <div>
      <h2>User Post</h2>
      <UserPost />
      <h2>Token Post</h2>
      <TokenPost />
    </div>
  );
};

export default Api;
