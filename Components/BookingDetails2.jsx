import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const API = import.meta.env.VITE_BASE_URL;

const BookingDetails2 = () => {
	const [booking, setBooking] = useState([]);
	const { id } = useParams();
	const navigate = useNavigate();
  
	useEffect(() => {
	  fetch(`${API}/bookings/${id}`)
		.then((response) => response.json())
		.then((responseJSON) => {
		  setBooking(responseJSON);
		})
		.catch((error) => console.log(error));
	}, [id]);
  
	const handleDelete = () => {
	  deleteBooking();
	};
  
	const deleteBooking = () => {
	  const httpOptions = { method: 'DELETE' };
	  fetch(`${API}/bookings/${id}`, httpOptions)
		.then(() => navigate(`/bookings`))
		.catch((error) => console.log(error));
	};
  
	return (
	  <div className="booking-details-container">
		<h2 className="booking-details-title">Booking Details</h2>
		<div className="booking-details-info">
		  <h3>{booking.booking_name}</h3>
		  <p>Start: {booking.start_time}</p>
		  <p>End: {booking.end_time}</p>
		  <p>Floor: {booking.floor}</p>
		  <p>Attendees:{booking.attendees}</p>
		</div>
		<button onClick={handleDelete} className="booking-details-cancel">
		  Cancel Booking
		</button>
	  </div>
	);
  };

export default BookingDetails2;
