import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
const API = import.meta.env.VITE_BASE_URL;

function RoomDetails() {
  const [bookings, setBookings] = useState([]);
  const [room, setRoom] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/rooms/${id}/bookings`)
      .then((response) => response.json())
      .then((responseJSON) => {
        setBookings(responseJSON.bookingsByRoom);
        setRoom(responseJSON.room);
      })
      .catch((error) => console.log(error));
  }, [id]);
const handleDelete = () => {
  deleteBooking()
}
const deleteBooking = () => {
    const httpOptions = { method: "DELETE" };
    fetch(`${API}/bookings/${id}/`, httpOptions)
      .then((res) => {
        console.log(res);
        alert("Booking was deleted successfully!");
        navigate('/bookings');
      })
      .catch((err) => console.error(err));
    };

  return (
    <div className="room-details-container">
      <h2 className="room-details-title">{room.room_name}</h2>
      <p className="room-details-text">Capacity: {room.capacity}</p>
      <p className="room-details-floor">Floor: {room.floor}</p>
      <BookingForm />
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            <div className="booking-card-container">
              <h3 className="booking-card-title">{booking.booking_name}</h3>
              <p className="booking-card-text">Start: {booking.start_time}</p>
              <p className="booking-card-text">End: {booking.end_time}</p>
              <p className="booking-card-text">Floor: {booking.floor}</p>
              <p className="booking-card-text">Attendees: {booking.attendees}</p>
              <button
                className="booking-card-button"
                onClick={handleDelete}
              >
                Cancel
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RoomDetails;
