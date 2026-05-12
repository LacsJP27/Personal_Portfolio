import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';

function Website() {
	return (
		<>
			<Header />
			{/* Main contains cube and tabs */}
			{/* <Main /> */}
			{/* <LightToggle /> */}
		</>
	);
}

export default function App() {
	return (
		<>
			<HashRouter>
				<Routes>
					<Route path="/" element={<Website />} />
					{/* <Route path="/about-me" element={<AboutMe />} /> */}
				</Routes>
			</HashRouter>
		</>
	);
}
