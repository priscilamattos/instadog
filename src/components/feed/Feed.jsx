import React from "react";
import { Link } from "react-router-dom";

function Feed() {
  return (
    <div>
      Feed
      <Link to="post" className="">
        POST
      </Link>
    </div>
  );
}

export default Feed;
