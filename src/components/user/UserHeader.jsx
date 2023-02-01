import React from "react";
import styles from "./../../css/UserHeader.module.css";
import UserHeaderNav from "./UserHeaderNav";
import { useLocation } from "react-router-dom";

function UserHeader() {
  const [title, setTitle] = React.useState("");
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case "/user/feed":
        setTitle("What is new?");
        break;
      case "/user/stats":
        setTitle("Account Insights");
        break;
      case "/user/post":
        setTitle("Post Your Photo");
        break;
      default:
        setTitle("My Account");
    }
  }, [location]);
  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
}

export default UserHeader;
