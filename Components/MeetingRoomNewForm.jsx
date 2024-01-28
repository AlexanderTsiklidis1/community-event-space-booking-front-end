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

	return <div>MeetingRoomNewForm</div>;
};

export default MeetingRoomNewForm;
