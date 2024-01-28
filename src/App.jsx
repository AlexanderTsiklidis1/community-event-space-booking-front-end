import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import MeetingRoomNewPage from "../Pages/MeetingRoomNewPage";
import FourOFour from "../Pages/FourOFour";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rooms/new" element={<MeetingRoomNewPage />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
