import { BrowserRouter as Router, Routes,Route, Link, NavLink } from "react-router-dom";
import Home from "./componenets/Day8_26_11/Home";
import AboutUs from "./componenets/Day8_26_11/AboutUs";
import ContactUs from "./componenets/Day8_26_11/ContactUs";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/about-us'>About Us</Link></li>
            <li><Link to='/contact-us'>Contact Us</Link></li>
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

    </div>
  );
}

export default App;
