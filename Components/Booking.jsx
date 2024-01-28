import { Link } from "react-router-dom";

function Booking({ booking }) {
    return (
        <Link to ={`bookings/${booking.id}`}>
            <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '300px' }}>
                <h3>{booking.name}</h3>
                <p>Start: {booking.start}</p>
                <p>End: {booking.End}</p>
            </div>
        </Link>
    );
}

export default Booking;