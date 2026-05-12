import { ArrowRight } from 'react-feather';
import '../styles/Tab.css';

export default function Tab({ number, name }) {
	return (
		<>
			<div className="tab">
				<span className="tab-number">{number}</span>
				<span className="tab-name">{name}</span>
				<div className="tab-arrow">
					<ArrowRight size={18} />
				</div>
			</div>
			<hr></hr>
		</>
	);
}
