import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./componenets/Day8_26_11/Modified_App/Home";
import AboutUs from "./componenets/Day8_26_11/Modified_App/AboutUs";
import ContactUs from "./componenets/Day8_26_11/Modified_App/ContactUs";
import Login from "./componenets/Day8_26_11/Modified_App/Login";
import Dashboard from "./componenets/Day8_26_11/Modified_App/Dashboard";
import './App.css';
import NavBar from "./componenets/Day8_26_11/Modified_App/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dash" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
