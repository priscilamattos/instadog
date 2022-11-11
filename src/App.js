import { BrowserRouter, Route, Routes } from "react-router-dom";

import styles from "../src/App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/login/Login";
import { UserStorage } from "./UserContext";

const App = () => {
  return (
    <div>
      <UserStorage>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />;
            <Route path="/login/*" element={<Login />} />;
          </Routes>
          <Footer />
        </BrowserRouter>
      </UserStorage>
    </div>
  );
};

export default App;
