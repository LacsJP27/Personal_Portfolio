import { HashRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import AboutMe from './components/AboutMe.jsx';
import ProjectList from './components/ProjectList.jsx';
import Pictures from './components/Pictures.jsx';
import Blog from './components/Blog.jsx';
import LightToggle from './components/LightToggle.jsx';
import './styles/App.css';

function Home({ darkMode, setDarkMode }) {
	return (
		<>
			<Header />
			{/* Main contains cube and tabs */}
			<Main />
			<LightToggle darkMode={darkMode} setDarkMode={setDarkMode} />
		</>
	);
}

export default function App() {
	let [darkMode, setDarkMode] = useState(false);
	return (
		<>
			<div id="background-mode" className={darkMode ? 'dark' : 'light'}>
				<HashRouter>
					<Routes>
						<Route
							path="/"
							element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}
						/>
						<Route path="/about-me" element={<AboutMe />} />
						<Route path="/projects" element={<ProjectList />} />
						<Route path="/pictures" element={<Pictures />} />
						<Route path="/blog" element={<Blog />} />
					</Routes>
				</HashRouter>
			</div>
		</>
	);
}
