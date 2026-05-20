import { ArrowLeft } from 'react-feather';
import '../styles/CloseBtn.css';

export default function CloseBtn({ setActiveSection }) {
	return (
		<button className="close-btn" onClick={() => setActiveSection(null)}>
			<ArrowLeft size={16} />
		</button>
	);
}
