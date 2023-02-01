import React from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as AddPhoto } from "../../assets/adicionar.svg";
import { ReactComponent as Stats } from "../../assets/estatisticas.svg";
import { ReactComponent as MyPhotos } from "../../assets/feed.svg";
import { ReactComponent as Logout } from "../../assets/sair.svg";
import useMedia from "../../hooks/useMedia";
import { UserContext } from "../../UserContext";
import styles from "./../../css/UserHeaderNav.module.css";
import { useLocation } from "react-router-dom";

function UserHeaderNav() {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
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
    </>
  );
}

export default UserHeaderNav;
