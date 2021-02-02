import Link from 'next/link';
import styles from '../styles/portfolio.module.css';
import Project from '../components/project/project';
import ProjectButton from '../components/project/projectButtons';
import projectInfo from '../projects/projects';
import { useState, useEffect } from 'react';

export default function Portfolio() {
	const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
	const [currentButtonIndex, setCurrentButtonIndex] = useState(0);
	const [previousProjectIndex, setPreviousProjectIndex] = useState(projectInfo.length - 1);
	const [nextProjectIndex, setNextProjectIndex] = useState(1);
	const [isProjectChanging, setIsProjectChanging] = useState(false);
	const [isProjectChangeNext, setIsProjectChangeNext] = useState(true);

	const handleNavUpClick = () => {
		if (isProjectChanging) return;
		setIsProjectChangeNext(false);
		setIsProjectChanging(true);
		setPreviousProjectIndex(
			currentProjectIndex === 0 ? projectInfo.length - 1 : currentProjectIndex - 1
		);
		setCurrentButtonIndex((prevState) =>
			prevState === 0 ? projectInfo.length - 1 : prevState - 1
		);
		setTimeout(() => {
			setIsProjectChanging(false);
			setCurrentProjectIndex((prevState) =>
				prevState === 0 ? projectInfo.length - 1 : prevState - 1
			);
		}, 500);
	};

	const handleNavDownClick = () => {
		if (isProjectChanging) return;
		setIsProjectChangeNext(true);
		setIsProjectChanging(true);
		setNextProjectIndex(
			currentProjectIndex === projectInfo.length - 1 ? 0 : currentProjectIndex + 1
		);
		setCurrentButtonIndex((prevState) =>
			prevState === projectInfo.length - 1 ? 0 : prevState + 1
		);
		setTimeout(() => {
			setIsProjectChanging(false);
			setCurrentProjectIndex((prevState) =>
				prevState === projectInfo.length - 1 ? 0 : prevState + 1
			);
		}, 500);
	};

	const handleNavButtonClick = (index) => {
		if (isProjectChanging || index === currentProjectIndex) return;
		setIsProjectChangeNext(index > currentProjectIndex);
		if (index > currentProjectIndex) {
			setNextProjectIndex(index);
		} else {
			setPreviousProjectIndex(index);
		}
		setIsProjectChanging(true);
		setCurrentButtonIndex(index);
		setTimeout(() => {
			setIsProjectChanging(false);
			setCurrentProjectIndex(index);
		}, 500);
	};

	const handleMouseEnterNavButton = (index) => {
		if (index === currentProjectIndex || isProjectChanging) return;
		setNextProjectIndex((prevState) => (prevState < index ? index : prevState));
		setPreviousProjectIndex((prevState) => (prevState > index ? index : prevState));
	};

	const handleMouseLeaveNavButton = () => {
		if (isProjectChanging) return;
		setPreviousProjectIndex(
			currentProjectIndex === 0 ? projectInfo.length - 1 : currentProjectIndex - 1
		);
		setNextProjectIndex(
			currentProjectIndex === projectInfo.length - 1 ? 0 : currentProjectIndex + 1
		);
	};

	useEffect(() => {
		setPreviousProjectIndex(
			currentProjectIndex === 0 ? projectInfo.length - 1 : currentProjectIndex - 1
		);
		setNextProjectIndex(
			currentProjectIndex === projectInfo.length - 1 ? 0 : currentProjectIndex + 1
		);
	}, [currentProjectIndex]);

	const projectStyle = {
		transition: isProjectChanging ? '0.5s' : 'none',
		transform: `translateY(${
			!isProjectChanging ? '-80vh' : isProjectChangeNext ? '-160vh' : 0
		})`,
	};

	return (
		<>
			<main className={styles.main}>
				<Link href='/'>
					<a className={styles.home}>
						<svg xmlns='http://www.w3.org/2000/svg' width='112' height='112.165'>
							<defs></defs>
							<g stroke='#fc5185' strokeWidth='6' fill='none'>
								<ellipse cx='56' cy='56.083' rx='56' ry='56.083' stroke='none' />
								<ellipse cx='56' cy='56.083' rx='53' ry='53.083' />
							</g>
							<path
								className='b'
								d='M83.511 56.7l-27.5-24.354-27.52 24.365v34.813a1.62 1.62 0 001.624 1.622h17.2V77.881a1.62 1.62 0 011.622-1.624h14.128a1.62 1.62 0 011.622 1.624v15.265h17.2a1.616 1.616 0 001.622-1.622V56.7z'
								fill='#fc5185'
							/>
							<path
								className='b'
								d='M55.852 19.019L16.828 53.573l4.111 4.636 35.072-31.057L91.07 58.209l4.1-4.636-39.007-34.554-.152.176-.159-.176zM28.491 23.993h9.893l-.087 5.86-9.806 8.858V23.993z'
								fill='#fc5185'
							/>
						</svg>
					</a>
				</Link>
				<section className={styles.projects}>
					{[previousProjectIndex, currentProjectIndex, nextProjectIndex].map(
						(index, i) => {
							return (
								<Project
									project={projectInfo[index]}
									style={projectStyle}
									key={i}
								/>
							);
						}
					)}
				</section>

				<nav className={styles.nav}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='67.773'
						height='57.965'
						onClick={handleNavUpClick}
					>
						<path fill='none' d='M4.904 0h57.965v57.965H4.904z' />
						<path
							d='M33.887 7.361L0 41.248l7.907 7.907 25.98-25.98 25.98 25.98 7.907-7.907z'
							fill='#fc5185'
							fillRule='evenodd'
						/>
					</svg>
					{projectInfo.map((project, index) => {
						return (
							<ProjectButton
								isSelected={index === currentButtonIndex}
								onClick={() => {
									handleNavButtonClick(index);
								}}
								key={index}
								onMouseEnter={() => handleMouseEnterNavButton(index)}
								onMouseLeave={handleMouseLeaveNavButton}
								index={index}
							/>
						);
					})}
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='67.773'
						height='57.965'
						onClick={handleNavDownClick}
					>
						<path fill='none' d='M62.869 57.965H4.908V0h57.961z' />
						<path
							d='M33.886 50.604l33.887-33.887-7.907-7.907-25.98 25.98L7.906 8.81l-7.907 7.907z'
							fill='#fc5185'
							fillRule='evenodd'
						/>
					</svg>
				</nav>
			</main>
		</>
	);
}
