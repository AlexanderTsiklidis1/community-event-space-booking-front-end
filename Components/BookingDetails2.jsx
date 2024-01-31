import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const API = import.meta.env.VITE_BASE_URL;

const BookingDetails = () => {
	const [booking, setBooking] = useState([]);
	
	const { id} = useParams();
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
		<div>
			<h3>{booking.booking_name}</h3>
			<p>Start: {booking.start_time}</p>
			<p>End: {booking.end_time}</p>
			<p>floor:{booking.floor}</p>
			<button onClick={handleDelete}>Cancel</button>
		</div>
	);
};

export default BookingDetails;
