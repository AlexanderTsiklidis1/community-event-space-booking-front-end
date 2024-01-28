import { Link } from "react-router-dom";

function NavBar() {
    const [selectedTab, setSelectedTab] = useState('meetingRooms');
    const handleTabSelect = (tab) => {
        setSelectedTab(tab);
    };
    return (
        <nav className="navbar">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Link to="/"><div onClick={() => handleTabSelect('meetingRooms')}>Meeting Rooms</div></Link>
                <Link to="/bookings"><div onClick={() => handleTabSelect('bookings')}>Bookings</div></Link>
                <Link to ="/rooms/new"><div onClick={() => handleTabSelect('newRoom')}>New Room</div></Link>
            </div>
        </nav>
    );
}

export default NavBar;