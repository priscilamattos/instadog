import { BrowserRouter, Route, Routes } from "react-router-dom";

import styles from "../src/App.css";
import { UserContextProvider } from "./api/apiContext";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/login/Login";

const App = () => {
  return (
    <div>
      <UserContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />;
            <Route path="/login/*" element={<Login />} />;
          </Routes>
          <Footer />
        </BrowserRouter>
      </UserContextProvider>
    </div>
  );
};

export default App;
