import { useNavigate } from 'react-router-dom';
import BackBtn from './BackBtn.jsx';

export default function AboutMe() {
	const navigate = useNavigate();

	return (
		<>
			<BackBtn />
			<h1>About Me</h1>
			<p>TODO</p>
		</>
	);
}
