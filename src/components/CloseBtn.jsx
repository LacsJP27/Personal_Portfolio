import { ArrowLeft } from 'react-feather';

export default function CloseBtn({ setActiveSection }) {
	return (
		<button className="close-btn" onClick={() => setActiveSection(null)}>
			<ArrowLeft size={16} />
		</button>
	);
}
