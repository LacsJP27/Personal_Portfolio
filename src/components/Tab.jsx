import { ArrowRight } from 'react-feather';
import '../styles/Tab.css';

export default function Tab({
	number,
	name,
	isActive = false,
	onClick = null,
}) {
	return (
		<>
			<div className={`tab ${isActive ? 'active' : ''}`} onClick={onClick}>
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
