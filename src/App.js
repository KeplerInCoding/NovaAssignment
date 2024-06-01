import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import WhoWeAre from "./pages/WhoWeAre";
import WhatWeDo from "./pages/WhatWeDo";
import OurTeam from "./pages/OurTeam";
import ContactUs from "./pages/ContactUs";
import { Link } from "react-router-dom";


function App() {
  return (
    <div>
      <div className="flex flex-col text-red-900">
        <Link to="/">Main</Link>
        <Link to="/who-we-are">Who We Are</Link>
        <Link to="/what-we-do">What We Do</Link>
        <Link to="/our-team">Our Team</Link>
        <Link to="/contact-us">Contact Us</Link>
      </div>


      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/who-we-are" element={<WhoWeAre/>}></Route>
        <Route path="/what-we-do" element={<WhatWeDo/>}></Route>
        <Route path="/our-team" element={<OurTeam/>}></Route>
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>

    </div>
  );
}

export default App;
