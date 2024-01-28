import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import MeetingRoomNewPage from "./Pages/RoomNewForm";
import FourOFour from "./Pages/FourOFour";
import NavBar from "../Components/NavBar";
import RoomShowPage from "./Pages/RoomShowPage"

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rooms/:id" element={<RoomShowPage />} />
          <Route path="/rooms/new" element={<MeetingRoomNewPage />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
