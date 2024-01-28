import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function BookingForm({ bookingDetails, handleSubmit, toggleView, children }) {
    let { id } = useParams();
    const [booking, setBooking] = useState({
    start: "",
    end: "",
    floor: "",
    capacity: "",
  });

    const handleTextChange = (event) => {
        setBooking({ ...booking, [event.target.id]: event.target.value });
    };

    useEffect(() => {
        if (bookingDetails) {
        setBooking(bookingDetails);
        }
    }, [id, bookingDetails]);

    const onSubmit = (event) => {
        event.preventDefault();
        handleSubmit(booking, id);
        console.log("Form submitted:", booking);
    };

    return (
        <form onSubmit={onSubmit}>
        <h2>Find available rooms:</h2>
        <div>
            <label htmlFor="start">Start:</label>
            <input
            type="datetime-local"
            id="start"
            value={booking.start}
            onChange={handleTextChange}
            />
        </div>
        <div>
            <label htmlFor="end">End:</label>
            <input
            type="datetime-local"
            id="end"
            value={booking.end}
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
            <label htmlFor="capacity">Capacity:</label>
            <input
            type="text"
            id="capacity"
            value={booking.capacity}
            onChange={handleTextChange}
            />
        </div>
        <button type="submit">Find</button>
        </form>
    );
}

export default BookingForm;