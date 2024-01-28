import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/home" className="nav-link">
        Meeting Rooms
        </Link>
        <Link to="/bookings" className="nav-link">
          Bookings
        </Link>
        <Link to="/rooms/new" className="nav-link">
         New Room
        </Link>
      </div>
    </nav>
  );
}