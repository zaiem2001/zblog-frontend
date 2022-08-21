import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserContext } from "./Context/AuthContext";

import Topbar from "./Components/topbar/Topbar";
import Homepage from "./Pages/homepage/Homepage";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import Settings from "./Pages/settings/Settings";
import Single from "./Pages/single/Single";
import Write from "./Pages/write/Write";

const App: React.FC = () => {
  const { isLoggedIn, logout, user, setUser } = useContext(UserContext);

  return (
    <>
      <Topbar isLoggedIn={isLoggedIn} logout={logout} user={user} />
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/posts" element={<Homepage />} />

        <Route
          path="/register"
          element={isLoggedIn ? <Navigate to="/" replace /> : <Register />}
        />

        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/" replace /> : <Login />}
        />

        <Route path="/post/:title/:id" element={<Single />} />

        <Route
          path="/write"
          element={isLoggedIn ? <Write /> : <Navigate to="/login" replace />}
        />

        <Route
          path="/settings"
          element={
            isLoggedIn ? (
              <Settings user={user} setUser={setUser} logout={logout} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </>
  );
};

export default App;
