import { ArrowLeft } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import '../styles/BackBtn.css';

export default function BackBtn() {
	const navigate = useNavigate();
	return (
		<button id="back-btn" onClick={() => navigate(-1)}>
			<ArrowLeft />
		</button>
	);
}
