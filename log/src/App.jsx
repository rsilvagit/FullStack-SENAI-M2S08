import { useContext, useState } from "react";
import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Contato from "./pages/Contato";
import Perfil from "./pages/Perfil";
import { AuthContext } from "./Context/AuthContext";
import Header from "./Components/Header/Index";

function App() {
  const {isLoggedIn} = useContext(AuthContext);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/"  element={isLoggedIn ? <Home/> : <Navigate to = "/login"/>} />
          <Route path="login" element={!isLoggedIn ? <Login/> : <Navigate to= "/"/>} />
          <Route path="contato" element={isLoggedIn ? <Contato/> : <Navigate to = "/login"/>} />
          <Route path="perfil" element={isLoggedIn ? <Perfil/> : <Navigate to= "/login" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

