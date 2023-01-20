import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import About from "./components/About";
import Book from "./components/Book";
import Contact from "./components/Contact";
import Logout from "./components/Logout";
import Login from "./components/Login"
import NavBar from './components/NavBar';
import AdminLogin from "./adminComponents/AdminLogin";
import AdminSignUp from "./adminComponents/AdminSignUp";
import Orders from "./components/Orders";
import AdminLanding from "./adminComponents/AdminLanding";
import Commuter from "./adminComponents/Commuter";
import Driver from "./adminComponents/Driver";
import CreateDriver from "./adminComponents/CreateDriver";
import Dashboard from "./adminComponents/Dashboard";
import SideBar from "./adminComponents/SideBar";


function App() {

  const [admin, setAdmin] = useState([]);

  const [users, setUsers] = useState([]);

  // define state for logged in commuter
  const [commuter, setCommuter] = useState([]);

  //state for conditional rendering when logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // define variable for navigation
  const navigate = useNavigate();

  ////////////////
  useEffect(() => {
    navigate('/login')
  }, [])
  ////////////////

  //auto-login user
  useEffect(() => {
    fetch('/me')
      .then(res => {
        if (res.ok) {
          res.json().then(user => setCommuter(user));
        }
      });
  }, []);

  // logout user
  function handleLogout() {
    fetch('/logout', {
      method: 'DELETE'
    })
      .then(res => {
        if (res.ok) {
          setCommuter(null);
          setIsLoggedIn(false)
          return <Route path='/' element={<Login />} />;
        }
      })
  };

  useEffect(() => {
    fetch("/commuters").then((r) => r.json()).then(setUsers);
  }, []);
  useEffect(() => {
    fetch("/admins").then((res) => res.json()).then(setAdmin);
  }, [])

  function addUser(newUser) {
    const updateUsersArray = [...users, newUser];
    setUsers(updateUsersArray)
  }

  function addAdmin(newAdmin) {
    const updateAdmin = [...admin, newAdmin];
    setAdmin(updateAdmin)
  }

  //////////////////////////
  // fetch drivers data
  const [driver, setDriver] = useState([]);

  useEffect(() => {
    fetch("/drivers")
      .then((r) => r.json())
      .then(setDriver);
  }, []);

  function addDriver(newDriver) {
    const updateDriver = [...driver, newDriver];
    setDriver(updateDriver);
  }
  //////////////////////////

  if (isLoggedIn) {
    return (
      <div>
        <NavBar />
        <Routes>
          {/* <Route
            exact
            path="/signup"
            element={<Register onAddUser={addUser} />}
          />
          <Route exact path="/" element={<Home currentCommuter={commuter} />} />
          <Route
            exact
            path="/login"
            element={<Login onLogin={setCommuter} isLoggedIn={setIsLoggedIn} />}
          /> */}
          {/* <Route exact path="/" element={<Register onAddUser={addUser} />} /> */}
          <Route
            exact
            path="/home"
            element={<Home currentCommuter={commuter} />}
          />
          <Route exact path="/about" element={<About />} />
          <Route
            exact
            path="/book"
            element={<Book currentCommuter={commuter} />}
          />
          <Route
            exact
            path="/orders"
            element={<Orders currentCommuter={commuter} />}
          />

          <Route
            exact
            path="/contact"
            element={<Contact isLoggedIn={setIsLoggedIn} />}
          />
          <Route
            exact
            path="/logout"
            element={
              <Logout handleLogout={handleLogout} isLoggedIn={setIsLoggedIn} />
            }
          />
        </Routes>
      </div>
    );
  } else {
    return (
      <div>
        {/* <Login onLogin={setCommuter} isLoggedIn={setIsLoggedIn} /> */}
        {/* <SideBar /> */}
        
        <Routes>
        
          <Route
            exact
            path="/signup"
            element={<Register onAddUser={addUser} />}
          />
          <Route
            exact
            path="/login"
            element={<Login onLogin={setCommuter} isLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/adminLogin" element={<AdminLogin />} />

          <Route
            path="/adminSignup"
            element={<AdminSignUp onAddAdmin={addAdmin} />}
          />
          <Route path="/admin/*" element={<AdminLanding />} />
          {/* <Route path='/dash' element={<Dashboard />} /> */}
          <Route path='/commuter' element={<Commuter />} />
          <Route path='/driver' element={<Driver />} />
          <Route path='/createDriver' element={<CreateDriver onAddDriver={addDriver} />} />
        </Routes>

      </div>
    );

  }
}

export default App;
