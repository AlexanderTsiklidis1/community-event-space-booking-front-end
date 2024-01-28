import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API = import.meta.env.VITE_BASE_URL;

const MeetingRoomNewForm = () => {
	const navigate = useNavigate();
	const [meetingRoom, setMeetingRoom] = useState({
		room_name: '',
		floor: '',
		capacity: '',
	});

	const addMeetingRoom = () => {
		fetch(`${API}/rooms`, {
			method: 'POST',
			body: JSON.stringify(meetingRoom),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(() => {
				navigate(`/rooms`);
			})
			.catch((error) => console.error('catch', error));
	};

	const handleTextChange = (event) => {
		setMeetingRoom({ ...meetingRoom, [event.target.id]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		addMeetingRoom();
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor='room_name'>Room Name:</label>
				<input
					id='room_name'
					value={meetingRoom.room_name}
					type='text'
					onChange={handleTextChange}
					placeholder='Room Name'
					required
				/>
				<label htmlFor='floor'>Floor:</label>
				<input
					id='floor'
					value={meetingRoom.floor}
					type='number'
					onChange={handleTextChange}
					placeholder='Floor Number'
					required
				/>
				<label htmlFor='capacity'>Capacity:</label>
				<input
					id='capacity'
					value={meetingRoom.capacity}
					type='number'
					onChange={handleTextChange}
					placeholder='Capacity'
					required
				/>
				<br />
				<input type='submit' />
			</form>
		</div>
	);
};

export default MeetingRoomNewForm;