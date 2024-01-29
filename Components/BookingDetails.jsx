import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const API = import.meta.env.VITE_BASE_URL;

const BookingDetails = () => {
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
	}, [id, API]);

	const handleDelete = () => {
		deleteBooking();
	};

	const deleteBooking = () => {
		const httpOptions = { method: 'DELETE' };
		fetch(`${API}/bookings/${id}`, httpOptions)
			.then(() => navigate(`/bookings`))
			.catch((error) => console.log(error));
	};

	return <div>BookingDetails</div>;
};

export default BookingDetails;
