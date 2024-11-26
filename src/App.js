import { BrowserRouter as Router, Routes,Route, Link, NavLink } from "react-router-dom";
import Home from "./componenets/Day8_26_11/Home";
import AboutUs from "./componenets/Day8_26_11/AboutUs";
import ContactUs from "./componenets/Day8_26_11/ContactUs";

function App() {
  return (
    <div className="App">
      <Router>
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
