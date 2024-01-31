import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";


function NavBar() {
  const [selectedTab, setSelectedTab] = useState("meetingRooms");
  const location = useLocation();

  useEffect(() => {
   
    const tabName = location.pathname.split("/")[1];
    setSelectedTab(tabName || "meetingRooms"); 
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/">
          <div
            className={`${selectedTab === "meetingRooms" ? "active" : ""}`}
            onClick={() => setSelectedTab("meetingRooms")}
          >
            Meeting Rooms
          </div>
        </Link>
        <Link to="/bookings">
          <div
            className={`${selectedTab === "bookings" ? "active" : ""}`}
            onClick={() => setSelectedTab("bookings")}
          >
            Bookings
          </div>
        </Link>
        <Link to="/rooms/new">
          <div
            className={`${selectedTab === "newRoom" ? "active" : ""}`}
            onClick={() => setSelectedTab("newRoom")}
          >
            New Room
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;