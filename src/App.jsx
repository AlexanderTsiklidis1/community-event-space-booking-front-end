import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from '../Pages/HomePage';
// import RoomNewPage from "/Pages/RoomNewPage";
import FourOFour from "../Pages/FourOFourPage";
import NavBar from "../Components/NavBar";
import RoomShowPage from "../Pages/RoomShowPage"

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rooms/:id" element={<RoomShowPage />} />
          {/* <Route path="/rooms/new" element={<RoomNewPage />} /> */}
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
