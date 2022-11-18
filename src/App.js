import { BrowserRouter, Route, Routes } from "react-router-dom";

import styles from "../src/App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/login/Login";
import { UserStorage } from "./UserContext";

function App() {
  return (
    <main>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </main>
  );
}

export default App;
