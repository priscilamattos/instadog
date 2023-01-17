import React from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as AddPhoto } from "../../assets/adicionar.svg";
import { ReactComponent as Stats } from "../../assets/estatisticas.svg";
import { ReactComponent as MyPhotos } from "../../assets/feed.svg";
import { ReactComponent as Logout } from "../../assets/sair.svg";
import { UserContext } from "../../UserContext";
import styles from "./../../css/UserHeaderNav.module.css";

function UserHeaderNav() {
  const [mobile, setMobile] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);

  return (
    <nav className={styles.nav}>
      <NavLink to="feed">
        <MyPhotos />
        {mobile && "My Photos"}
      </NavLink>
      <NavLink to="stats">
        <Stats />
        {mobile && "Stats"}
      </NavLink>
      <NavLink to="post">
        <AddPhoto />
        {mobile && "Post"}
      </NavLink>
      <button onClick={userLogout}>
        <Logout />
        {mobile && "Logout"}
      </button>
    </nav>
  );
}

export default UserHeaderNav;
