import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from '../Pages/HomePage';
import RoomNewPage from "/Pages/RoomNewPage";
import FourOFour from "../Pages/FourOFourPage";
import NavBar from "../Components/NavBar";
import RoomShowPage from "../Pages/RoomShowPage"
import BookingsPage from "../Pages/BookingsPage";
import BookingShowPage2 from "../Pages/BookingShowPage2";
import BookingShowPage from "../Pages/BookingShowPage";
import './index.css'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rooms/:id" element={<RoomShowPage />} />
          <Route path="/rooms/:id/bookings/:bookingId" element={<BookingShowPage />} />
          <Route path="/bookings" element={<BookingsPage />} />
          <Route path="/bookings/:id" element={<BookingShowPage2 />} />
          <Route path="/rooms/new" element={<RoomNewPage />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </main>
      </Router>
    </div>
  );
}

export default App;
