import { BrowserRouter as Router, Routes,Route, Link, NavLink } from "react-router-dom";
import Home from "./componenets/Day8_26_11/Ex1/Home";
import AboutUs from "./componenets/Day8_26_11/Ex1/AboutUs";
import ContactUs from "./componenets/Day8_26_11/Ex1/ContactUs";
import Login from "./componenets/Day8_26_11/Ex2/Login";
import Dashboard from "./componenets/Day8_26_11/Ex2/Dashboard";
import './App.css'

function App() {
  return (
    <div>
      {/*EXERCISE 1*/}
      <Router>
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to="/home" className="navbar-link">Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="/about-us" className="navbar-link">About Us</Link>
            </li>
            <li className="navbar-item">
              <Link to="/contact-us" className="navbar-link">Contact Us</Link>
            </li>
          </ul>
        </nav>
        {
          /* *****Wraps <Link> with additional props for styling active and pending states.*****   
          <nav>
            <ul>
              <li><NavLink to='/home' className="styles">Home</NavLink></li>
              <li><NavLink to='/about-us' className="styles">About Us</NavLink></li>
              <li><NavLink to='/contact-us' className="styles">Contact Us</NavLink></li>
            </ul>
          </nav> */
        }
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/contact-us" element={<ContactUs/>}/>
        </Routes>
      </Router>

      {/*EXERCISE 2*/}
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/dash" element={<Dashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
