import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import ProtectedRouter from "./components/Helper/ProtectedRouter";
import Home from "./components/Home";
import Login from "./components/login/Login";
import NotFound from "./components/NotFound";
import Photo from "./components/Photo/Photo";
import User from "./components/user/User";
import UserProfile from "./components/user/UserProfile";
import { UserStorage } from "./UserContext";

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <div className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <Route path="account/*" element={<User />} />
              <Route path="photo/:id" element={<Photo />} />
              <Route path="profile/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
              <Route
                path="user/*"
                element={
                  <ProtectedRouter>
                    <User />
                  </ProtectedRouter>
                }
              />
            </Routes>
          </div>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </main>
  );
}

export default App;
