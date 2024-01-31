import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

function BookingForm({ bookingDetails }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [booking, setBooking] = useState({
    booking_name: "",
    start_time: "",
    end_time: "",
    attendees: "",
    room_name: "",
    floor: "",
    start_date: "",
    end_date: "",
  });

  const handleTextChange = (event) => {
    setBooking({ ...booking, [event.target.id]: event.target.value });
  };

  const addBooking = () => {
    const {
      booking_name,
      start_time,
      end_time,
      attendees,
      room_name,
      floor,
      start_date,
      end_date,
    } = booking;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        booking_name,
        start_time,
        end_time,
        attendees,
        room_name,
        floor,
        start_date,
        end_date,
      }),
    };

    fetch(`${API}/rooms/${id}/bookings`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("Booking added:", data);
        navigate("/bookings")
      })
      .catch((error) => {
        console.error("Error adding booking:", error);
      });
  };

  useEffect(() => {
    if (bookingDetails) {
      setBooking(bookingDetails);
    }
  }, [id, bookingDetails]);

  const handleSubmit = (event) => {
    event.preventDefault();
    addBooking();
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Book Room:</h2>
      <div>
        <label htmlFor="booking_name">Booking Name:</label>
        <input
          type="text"
          id="booking_name"
          value={booking.booking_name}
          onChange={handleTextChange}
        />
      </div>
      <div>
        <label htmlFor="start_time">Start Time:</label>
        <input
          type="datetime"
          id="start_time"
          value={booking.start_time}
          onChange={handleTextChange}
        />
      </div>
      <div>
        <label htmlFor="end_time">End Time:</label>
        <input
          type="datetime"
          id="end_time"
          value={booking.end_time}
          onChange={handleTextChange}
        />
      </div>
      <div>
        <label htmlFor="attendees">Attendees:</label>
        <input
          type="text"
          id="attendees"
          value={booking.attendees}
          onChange={handleTextChange}
        />
      </div>
      <div>
        <label htmlFor="room_name">Room Name:</label>
        <input
          type="text"
          id="room_name"
          value={booking.room_name}
          onChange={handleTextChange}
        />
      </div>
      <div>
        <label htmlFor="floor">Floor:</label>
        <input
          type="text"
          id="floor"
          value={booking.floor}
          onChange={handleTextChange}
        />
      </div>
      <div>
        <label htmlFor="start_date">Start Date:</label>
        <input
          type="date"
          id="start_date"
          value={booking.start_date}
          onChange={handleTextChange}
        />
      </div>
      <div>
        <label htmlFor="end_date">End Date:</label>
        <input
          type="date"
          id="end_date"
          value={booking.end_date}
          onChange={handleTextChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default BookingForm;
