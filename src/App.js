import { BrowserRouter, Route, Routes } from "react-router-dom";

import styles from "../src/App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProtectedRouter from "./components/Helper/ProtectedRouter";
import Home from "./components/Home";
import Login from "./components/login/Login";
import User from "./components/user/User";
import { UserStorage } from "./UserContext";

function App() {
  return (
    <main>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
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
