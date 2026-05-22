import microsoftLogo from '../assets/microsoft.svg';
import googleLogo from '../assets/google.svg';
import momentusLogo from '../assets/momentus.png';
import OULogo from '../assets/OU.png';
import firstPost from '../content/first-post.md?raw';

export const EXPERIENCE = [
	{
		company: 'Microsoft',
		title: 'SWE Intern (Current)',
		icon: microsoftLogo,
		description:
			"Working with Microsoft's Commerce and Ecosystems team as a Software Engineer Intern this upcoming summer",
	},
	{
		company: 'University of Oklahoma',
		title: 'Teaching Assistant (Current)',
		icon: OULogo,
		description:
			'Help students understand core computer science concepts in a tutoring environment.',
	},
	{
		company: 'Google',
		title: 'SWE Intern',
		icon: googleLogo,
		description:
			"Worked with the search ads team to integrate Google Gemini into Google's programmable search engine.",
	},
	{
		company: 'Momentus Technologies',
		title: 'SWE Intern',
		icon: momentusLogo,
		description:
			"Upgraded the frontend web components, using Vue.js, to utilize a newer version of Vue addressing the company's tech debt.",
	},
];
// List in order of importance
export const PROJECTS = [
	{
		title: 'BeachBox (Hackathon Winner)',
		githubLink: 'https://github.com/tuann72/2026-hookemhacks',
		gif: '/BeachBoxDemoShort.gif',
		description:
			"Built and iterated a web game with a team of four utilizing computer vision body detection with Mediapipe to control in-game punches against another real-life player winning the Best use of Supabase at Hook'em Hacks 2026.",
	},
	{
		title: 'Skillsprout',
		githubLink: 'https://github.com/tuann72/skillsprout',
		gif: '/skillsprout_demo.gif',
		description:
			'Built and deployed a full-stack AI learning platform during Hacklahoma 2026 (Hackathon) (Next.js, TypeScript, React) using the Claude API with forced tool use to generate structured skill trees from user prompts, backed by a Supabase/PostgreSQL schema.',
	},
	{
		title: 'PantryPilot Pro',
		githubLink: 'https://github.com/JacobWoolbright/PantryPilot2',
		description:
			'Developed ”Pantry Pilot,” a Java web/mobile application utilizing Maven to generate personalized grocery lists and recipe recommendations based on user preferences and on-hand ingredients. Utilized React Native and Expo to develop and test the mobile UI and application workflow',
	},
	{
		title: 'Person-Leading Turtlebot',
		githubLink:
			'https://github.com/LacsJP27/Intelligent-Robotics-Final-Project',
		gif: '/PersonLeadShort.gif',
		description:
			"Developed a program to detect the presence of people behind a robot and determine whether the robot should coninue it's preprogrammed tour or wait for people to catch up.",
	},
];

export const PICTURES = [
	{
		title: '🥇 Oklahoma City, OK (3:45)',
		image: '/okc_marathon.jpg',
	},
	{
		title: '🏛️ Boston, MA',
		image: '/jordan_boston.jpeg',
	},
	{
		title: '🐶 Norman, OK',
		image: '/dupes.jpg',
	},
	{
		title: '🎉 Pittsburgh, PA',
		image: '/aidan_laolu.JPG',
	},
	{
		title: '⚾️ Chicago, IL',
		image: '/ali_cubsgame.jpeg',
	},
	{
		title: '🏃‍♂️ Dallas, TX (3:52)',
		image: '/dallas_marathon.jpg',
	},
	{
		title: '🫨 Dallas, TX',
		image: '/dad_family.JPG',
	},
	{
		title: '🌲 Ohiopyle, PA',
		image: '/mom_family.jpeg',
	},
	{
		title: '⛳️ Dallas, TX',
		image: '/golf.jpeg',
	},
];

export const BLOG_POSTS = [
	{
		title: 'Welcome to my blog!',
		date: '2026-05-20',
		slug: 'first-post',
		content: firstPost,
	},
];
