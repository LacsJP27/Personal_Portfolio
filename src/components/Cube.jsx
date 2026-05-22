import { useRef, useEffect, useState } from 'react';

const WIDTH = 65;
const HEIGHT = 35;
const CAMERA_TO_SCREEN = 35;
const NUM_POINT_SAMPLES = 40;
const ROTATION_RATE = 0.008;
const OFFSET_VAL = 4;
const EXPLOSION_DURATION = 0.5;
const EXPLOSION_DISTANCE = 420;

class Square {
	constructor(
		corner = [0, 0, 0],
		dir1 = [0, 0, 0],
		dir2 = [0, 0, 0],
		normal = [0, 0, 0],
		char = '0',
	) {
		this.corner = corner;
		this.dir1 = dir1;
		this.dir2 = dir2;
		this.normal = normal;
		this.char = char;
	}
}

function createBuffer(zBuffer = false) {
	const buffer = [];
	for (let y = 0; y < HEIGHT; y++) {
		buffer[y] = [];
		for (let x = 0; x < WIDTH; x++) {
			if (zBuffer) {
				buffer[y][x] = Infinity;
				continue;
			}
			buffer[y][x] = ' ';
		}
	}

	return buffer;
}

const FACES = [
	new Square([-1, -1, 1], [1, 0, 0], [0, 1, 0], [0, 0, 1], 'j'),
	new Square([-1, -1, -1], [1, 0, 0], [0, 1, 0], [0, 0, -1], 'p'),
	new Square([-1, -1, -1], [0, 0, 1], [0, 1, 0], [-1, 0, 0], 'l'),
	new Square([1, -1, 1], [0, 0, -1], [0, 1, 0], [1, 0, 0], 'a'),
	new Square([-1, 1, 1], [0, 0, -1], [1, 0, 0], [0, 1, 0], 'c'),
	new Square([-1, -1, 1], [1, 0, 0], [0, 0, -1], [0, -1, 0], 's'),
];

function renderBuffer(buffer, cubeRef) {
	let res = '';
	for (let y = 0; y < buffer.length; y++) {
		for (let x = 0; x < buffer[0].length; x++) {
			res += buffer[y][x];
		}
		res += '\n';
	}
	if (cubeRef.current) cubeRef.current.innerText = res;
}

function rotateX(point, alpha) {
	const [x, y, z] = point;
	const xp = x;
	const yp = y * Math.cos(alpha) - z * Math.sin(alpha);
	const zp = y * Math.sin(alpha) + z * Math.cos(alpha);

	return [xp, yp, zp];
}

function rotateY(point, alpha) {
	const [x, y, z] = point;
	const xp = x * Math.cos(alpha) + z * Math.sin(alpha);
	const yp = y;
	const zp = x * -Math.sin(alpha) + z * Math.cos(alpha);

	return [xp, yp, zp];
}

function rotateZ(point, alpha) {
	const [x, y, z] = point;
	const xp = x * Math.cos(alpha) - y * Math.sin(alpha);
	const yp = x * Math.sin(alpha) + y * Math.cos(alpha);
	const zp = z;

	return [xp, yp, zp];
}

function projection(point) {
	const [x, y, z] = point;
	const xp = x * (CAMERA_TO_SCREEN / (z + OFFSET_VAL)) * 1.5;
	const yp = y * (CAMERA_TO_SCREEN / (z + OFFSET_VAL));

	return [xp, yp];
}

function pointOutOfBounds(point) {
	const outOfBounds =
		point[0] < 0 ||
		point[0] > WIDTH - 1 ||
		point[1] < 0 ||
		point[1] > HEIGHT - 1;

	return outOfBounds;
}

function buildExplosion(
	lastBufferRef,
	rectWidth,
	rectHeight,
	charWidth,
	charHeight,
) {
	const cx = rectWidth / 2;
	const cy = rectHeight / 2;
	const particles = [];
	const offsetX = (rectWidth - WIDTH * charWidth) / 2;
	const offsetY = (rectHeight - HEIGHT * charHeight) / 2 + charHeight;

	for (let y = 0; y < lastBufferRef.current.length; y++) {
		for (let x = 0; x < lastBufferRef.current[0].length; x++) {
			const char = lastBufferRef.current[y][x];
			if (char === ' ') continue;

			const px = x * charWidth + offsetX;
			const py = y * charHeight + offsetY;
			const normX = x / WIDTH - 0.5;
			const normY = y / HEIGHT - 0.5;
			const angle = Math.atan2(normY, normX);
			const dir = [Math.cos(angle), Math.sin(angle)];
			const particle = {
				char,
				x: px,
				y: py,
				dir,
			};
			particles.push(particle);
		}
	}

	return particles;
}

function renderFace(face, angleX, angleY, angleZ, buffer, zBuffer) {
	const sampleStep = 2 / NUM_POINT_SAMPLES;
	for (let u = 0; u <= 2; u += sampleStep) {
		for (let v = 0; v <= 2; v += sampleStep) {
			const point = new Array(3);
			point[0] = face.corner[0] + u * face.dir1[0] + v * face.dir2[0];
			point[1] = face.corner[1] + u * face.dir1[1] + v * face.dir2[1];
			point[2] = face.corner[2] + u * face.dir1[2] + v * face.dir2[2];

			const rotated = rotateZ(rotateY(rotateX(point, angleX), angleY), angleZ);
			const projected = projection(rotated);
			const buffIdx = [
				Math.round(projected[0] + WIDTH / 2),
				Math.round(projected[1] + HEIGHT / 2),
			];

			if (pointOutOfBounds(buffIdx)) continue;

			if (rotated[2] < zBuffer[buffIdx[1]][buffIdx[0]]) {
				zBuffer[buffIdx[1]][buffIdx[0]] = rotated[2];
				buffer[buffIdx[1]][buffIdx[0]] = face.char;
			}
		}
	}

	return buffer;
}

function animate(
	faces,
	angleX,
	angleY,
	angleZ,
	cubeRef,
	frameIdRef,
	lastBufferRef,
	currAnglesRef,
) {
	const buffer = createBuffer();
	const zBuffer = createBuffer(true);
	lastBufferRef.current = buffer;

	angleX += ROTATION_RATE + 0.005;
	angleY += ROTATION_RATE;
	angleZ += ROTATION_RATE;
	currAnglesRef.current = [angleX, angleY, angleZ];
	for (const face of faces) {
		renderFace(face, angleX, angleY, angleZ, buffer, zBuffer);
	}
	renderBuffer(buffer, cubeRef);
	frameIdRef.current = requestAnimationFrame(() =>
		animate(
			faces,
			angleX,
			angleY,
			angleZ,
			cubeRef,
			frameIdRef,
			lastBufferRef,
			currAnglesRef,
		),
	);
}

export default function Cube({ shouldExplode, onExplosionComplete }) {
	const cubeRef = useRef(null);
	const frameIdRef = useRef(null);
	const lastBufferRef = useRef(null);
	const currAnglesRef = useRef([0, 0, 0]);
	const [mode, setMode] = useState('spinning');
	const [particles, setParticles] = useState([]);
	const [rect, setRect] = useState(null);
	const [scattered, setScattered] = useState(false);

	useEffect(() => {
		animate(FACES, 0, 0, 0, cubeRef, frameIdRef, lastBufferRef, currAnglesRef);
		return () => cancelAnimationFrame(frameIdRef.current);
	}, []);

	useEffect(() => {
		if (shouldExplode) {
			explodeCube();
			setTimeout(() => {
				onExplosionComplete();
			}, EXPLOSION_DURATION * 1000);
		}
	}, [shouldExplode]);

	function explodeCube() {
		setMode('exploding');
		const rect = cubeRef.current.getBoundingClientRect();
		setRect(rect);
		const rectWidth = rect.width;
		const rectHeight = rect.height;

		cancelAnimationFrame(frameIdRef.current);

		const testSpan = document.createElement('span');
		testSpan.style.fontFamily = getComputedStyle(cubeRef.current).fontFamily;
		testSpan.style.fontSize = getComputedStyle(cubeRef.current).fontSize;
		testSpan.style.position = 'absolute';
		testSpan.style.visibility = 'hidden';
		testSpan.innerText = 'a';
		document.body.appendChild(testSpan);
		const charWidth = testSpan.getBoundingClientRect().width;
		const charHeight = testSpan.getBoundingClientRect().height;

		document.body.removeChild(testSpan);

		const explosionParticles = buildExplosion(
			lastBufferRef,
			rectWidth,
			rectHeight,
			charWidth,
			charHeight,
		);
		setParticles(explosionParticles);

		requestAnimationFrame(() => {
			requestAnimationFrame(() => setScattered(true));
		});
	}

	if (mode == 'exploding') {
		return (
			<div
				style={{
					position: 'relative',
					width: rect?.width,
					height: rect?.height,
				}}
			>
				{particles.map((p, idx) => (
					<span
						key={idx}
						style={{
							position: 'absolute',
							margin: 0,
							left: `${p.x}px`,
							top: `${p.y}px`,
							fontFamily: 'monospace',
							whiteSpace: 'pre',
							transform: scattered
								? `translate(${p.dir[0] * EXPLOSION_DISTANCE}px, ${p.dir[1] * EXPLOSION_DISTANCE}px)`
								: `translate(0, 0)`,
							transition: `transform ${EXPLOSION_DURATION}s ease-out`,
						}}
					>
						{p.char}
					</span>
				))}
			</div>
		);
	}

	return <pre ref={cubeRef}></pre>;
}
