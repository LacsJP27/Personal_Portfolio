import { Sun, Moon } from 'react-feather';

export default function LightToggle({ darkMode, setDarkMode }) {
	darkMode = darkMode || false;

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};
	return (
		<div id="light-toggle" onClick={toggleDarkMode}>
			<div id="light-toggle-button">{darkMode ? <Sun /> : <Moon />}</div>
		</div>
	);
}
