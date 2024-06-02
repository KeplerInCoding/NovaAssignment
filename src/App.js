import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import WhoWeAre from "./pages/WhoWeAre";
import WhatWeDo from "./pages/WhatWeDo";
import OurTeam from "./pages/OurTeam";
import ContactUs from "./pages/ContactUs";
import Header from "./components/Header";


function App() {
  return (
    <div>
      <Header/>


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
