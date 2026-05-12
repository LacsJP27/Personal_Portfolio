import Tab from './Tab';

export default function Main() {
	return (
		<div id="main">
			<div id="cube-container">{/* <Cube /> */}</div>

			<div id="tabs">
				<Tab number={1} name="Experience" />
				<Tab number={2} name="Projects" />
				<Tab number={3} name="Pictures" />
				<Tab number={4} name="Blog" />
			</div>
		</div>
	);
}
