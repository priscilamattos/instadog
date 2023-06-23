import React from "react";

import Feed from "./feed/Feed";
import Head from "./Helper/Head";

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head title="Photos" />
      <Feed />
    </section>
  );
};

export default Home;
