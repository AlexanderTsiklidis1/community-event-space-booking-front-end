import { Link } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;
import { useParams, useNavigate } from 'react-router-dom';



function Booking({ booking }) {
    const { bookingId} = useParams();
    
    return (
        <Link to ={`/bookings/${booking.id}`}>
            <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '300px' }}>
                <h3>{booking.booking_name}</h3>
                <p>Start: {booking.start_time}</p>
                <p>End: {booking.end_time}</p>
            </div>
        </Link>
    );
}

export default Booking;