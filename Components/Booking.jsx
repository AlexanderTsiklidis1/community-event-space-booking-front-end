import { Link } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;
import { useParams, useNavigate } from 'react-router-dom';



function Booking({ booking }) {
    const { bookingId } = useParams();
  
    return (
      <Link to={`/bookings/${booking.id}`} className="booking-card">
        <div className="booking-card-container">
          <h3>{booking.booking_name}</h3>
          <p>{booking.room_name}</p>
          <p>Start: {booking.start_time}</p>
          <p>End: {booking.end_time}</p>
          <p>Floor: {booking.floor}</p>
        </div>
      </Link>
    );
  }
  
  export default Booking;