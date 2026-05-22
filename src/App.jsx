import { HashRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import {
	ABOUT_ME_ROUTE,
	PICTURES_ROUTE,
	BLOG_ROUTE,
	BLOG_POST_ROUTE,
	RESUME_ROUTE,
} from './constants/constants.js';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import AboutMe from './components/AboutMe.jsx';
import Pictures from './components/Pictures.jsx';
import Blog from './components/Blog.jsx';
import LightToggle from './components/LightToggle.jsx';
import Resume from './components/Resume.jsx';
import BlogPost from './components/BlogPost.jsx';
import './styles/App.css';

function Home({ darkMode, setDarkMode }) {
	return (
		<>
			<Header />
			{/* Main contains cube and tabs */}
			<Main />
			<div id="light-toggle-container">
				<LightToggle darkMode={darkMode} setDarkMode={setDarkMode} />
			</div>
		</>
	);
}

export default function App() {
	let [darkMode, setDarkMode] = useState(false);
	return (
		<>
			<div id="page" className={darkMode ? 'dark' : 'light'}>
				<HashRouter>
					<Routes>
						<Route
							path="/"
							element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}
						/>
						<Route path={ABOUT_ME_ROUTE} element={<AboutMe />} />
						<Route path={PICTURES_ROUTE} element={<Pictures />} />
						<Route path={BLOG_ROUTE} element={<Blog />} />
						<Route path={BLOG_POST_ROUTE} element={<BlogPost />} />
						<Route path={RESUME_ROUTE} element={<Resume />} />
					</Routes>
				</HashRouter>
			</div>
		</>
	);
}
