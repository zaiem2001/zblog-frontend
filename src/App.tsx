import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserContext } from "./Context/AuthContext";
import { ThemeProvider } from "styled-components";

import Homepage from "./Pages/homepage/Homepage";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import Settings from "./Pages/settings/Settings";
import Single from "./Pages/single/Single";
import Write from "./Pages/write/Write";
import About from "./Pages/About/About";

import Topbar from "./Components/topbar/Topbar";
import { darkModeTheme, lightModeTheme } from "./Theme/Themes";
import { StyledContainer } from "./index.styled";

const App: React.FC = () => {
  const { isLoggedIn, logout, user, setUser, isDarkMode, toggleDarkMode } =
    useContext(UserContext);

  return (
    <ThemeProvider theme={isDarkMode ? darkModeTheme : lightModeTheme}>
      <StyledContainer>
        <Topbar
          isLoggedIn={isLoggedIn}
          logout={logout}
          user={user}
          onThemeToggle={toggleDarkMode}
          isDarkMode={isDarkMode}
        />
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

          <Route path="/about" element={<About />} />

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
      </StyledContainer>
    </ThemeProvider>
  );
};

export default App;
