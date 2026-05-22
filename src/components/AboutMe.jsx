import ReactMarkdown from 'react-markdown';
import BackBtn from './BackBtn.jsx';
import aboutMe from '../content/about-me.md?raw';
import '../styles/AboutMe.css';

export default function AboutMe() {
	return (
		<>
			<BackBtn />
			<div id="about-me-content">
				<ReactMarkdown>{aboutMe}</ReactMarkdown>
			</div>
		</>
	);
}
