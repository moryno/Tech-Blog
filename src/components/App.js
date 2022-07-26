import Home from "../pages/Home";
import { Login } from "../pages/Login";
import Footer from "./Footer";
import Posts from "../pages/Posts";
import Register from "../pages/Register";
import TopBar from "./TopBar";
import Compose from "../pages/Compose";
import Settings from "../pages/Settings";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/Context";

function App() {
  const { user } = useContext(UserContext);
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/compose" element={user ? <Compose /> : <Register />} />
        <Route path="/post/:postId" element={<Posts />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
