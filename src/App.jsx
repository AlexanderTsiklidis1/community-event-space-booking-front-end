import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from '../Pages/HomePage';
import RoomNewPage from "/Pages/RoomNewPage";
import FourOFour from "../Pages/FourOFourPage";
import NavBar from "../Components/NavBar";
import RoomShowPage from "../Pages/RoomShowPage"
import BookingsPage from "../Pages/BookingsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rooms/:id" element={<RoomShowPage />} />
          <Route path="/bookings" element={<BookingsPage />} />
          <Route path="/rooms/new" element={<RoomNewPage />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </main>
      </Router>
    </div>
  );
}

export default App;
