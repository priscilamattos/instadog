import { BrowserRouter, Route, Routes } from "react-router-dom";

import styles from "../src/App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProtectedRouter from "./components/Helper/ProtectedRouter";
import Home from "./components/Home";
import Login from "./components/login/Login";
import Photo from "./components/Photo/Photo";
import User from "./components/user/User";
import { UserStorage } from "./UserContext";
import UserProfile from "./components/user/UserProfile";

function App() {
  return (
    <main>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route path="account/*" element={<User />} />
            <Route path="photo/:id" element={<Photo />} />
            <Route path="profile/:user" element={<UserProfile />} />
            <Route
              path="user/*"
              element={
                <ProtectedRouter>
                  <User />
                </ProtectedRouter>
              }
            />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </main>
  );
}

export default App;
