import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import About from "./components/About";
import Book from "./components/Book";
import Contact from "./components/Contact";
import Logout from "./components/Logout";
import Login from "./components/Login"
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/signup" element={<Register />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/book" element={<Book />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
