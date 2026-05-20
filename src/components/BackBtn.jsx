import { ArrowLeft } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import '../styles/BackBtn.css';

export default function BackBtn({ route = -1 }) {
	const navigate = useNavigate();
	return (
		<button id="back-btn" onClick={() => navigate(route)}>
			<ArrowLeft />
		</button>
	);
}
