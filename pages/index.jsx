import Head from 'next/head';
import style from '../styles/index.module.css';
import Link from 'next/link';
import FairyLights from '../components/fairylights/FairyLights';
import Bio from '../components/bio/Bio';
import { useState, useRef, useEffect } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import { BsBriefcase } from 'react-icons/bs';
import { IconContext } from 'react-icons';

export default function Home() {
	const [isBioHidden, setIsBioHidden] = useState(true);

	const handleClick = ({ target }) => {
		if (target.className.includes('paragraph')) return;
		setIsBioHidden((s) => !s);
	};
	const [titlePos, setTitlePos] = useState([0, 0]);
	const [width, height] = useWindowSize();
	const titleRef = useRef(null);
	useEffect(() => {
		if (titleRef === null) return;
		setTitlePos([
			titleRef.current.getBoundingClientRect().top,
			titleRef.current.getBoundingClientRect().right,
		]);
	}, [width, height]);
	return (
		<>
			<Head>
				<title>Max Hartley</title>
			</Head>
			<FairyLights>
				<section className={style.title} onClick={handleClick}>
					<h1 ref={titleRef}>
						Max Hartle<span>y</span>
					</h1>
					<h2>Full Stack Web Developer</h2>
				</section>
				<section className={style.links}>
					<a href='https://github.com/Velocima' target='_blank'>
						<svg
							width='119'
							height='118'
							viewBox='0 0 119 118'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M59 3C28.0787 3 3 28.074 3 59C3 83.7427 19.044 104.733 41.2993 112.139C44.0947 112.657 45 110.921 45 109.447V99.0213C29.4227 102.409 26.1793 92.4133 26.1793 92.4133C23.6313 85.9407 19.9587 84.2187 19.9587 84.2187C14.8767 80.742 20.346 80.8167 20.346 80.8167C25.9693 81.2087 28.928 86.5893 28.928 86.5893C33.9213 95.148 42.0273 92.6747 45.224 91.242C45.7233 87.6253 47.1747 85.152 48.78 83.7567C36.3433 82.3333 23.2673 77.5313 23.2673 56.0787C23.2673 49.9607 25.456 44.9673 29.0353 41.0473C28.4567 39.6333 26.5387 33.9353 29.5813 26.226C29.5813 26.226 34.2853 24.7233 44.986 31.966C49.452 30.7247 54.24 30.104 59 30.0807C63.76 30.104 68.5527 30.7247 73.028 31.966C83.7193 24.7233 88.414 26.226 88.414 26.226C91.4613 33.94 89.5433 39.638 88.9647 41.0473C92.558 44.9673 94.728 49.9653 94.728 56.0787C94.728 77.5873 81.6287 82.324 69.1593 83.71C71.166 85.446 73 88.8527 73 94.0793V109.447C73 110.935 73.896 112.685 76.738 112.135C98.9747 104.719 115 83.7333 115 59C115 28.074 89.926 3 59 3Z'
								stroke='#FC5185'
								strokeWidth='6'
							/>
							<ellipse cx='59.5' cy='59' rx='56.5' ry='56' stroke='#FC5185' strokeWidth='6' />
						</svg>
						GitHub
					</a>
					<a href='/Maximilian_Hartley_CV.PDF' target='_blank' download>
						<svg xmlns='http://www.w3.org/2000/svg' width='112' height='112.165'>
							<g fill='none'>
								<path
									className='c'
									d='M81.8 105.873V80.579v-.323a25.359 25.359 0 00-16.459-23.664 17.931 17.931 0 10-18.925-.151 25.629 25.629 0 00-16.858 23.815v25.276A56.139 56.139 0 0134.2 4.407 56.017 56.017 0 01112 56.083a56.09 56.09 0 01-30.2 49.789z'
								/>
								<path
									d='M87.798 94.736a50.311 50.311 0 0010.729-12.3 49.847 49.847 0 005.512-12.416A50.244 50.244 0 00106 56.083c0-6.765-1.32-13.325-3.927-19.496a49.927 49.927 0 00-10.72-15.921A49.836 49.836 0 0075.457 9.932C69.298 7.322 62.751 6 56 6c-6.752 0-13.298 1.323-19.457 3.932a49.837 49.837 0 00-15.895 10.734 49.928 49.928 0 00-10.72 15.921C7.322 42.76 6 49.317 6 56.083c0 4.685.644 9.321 1.914 13.778a49.84 49.84 0 005.389 12.299 50.32 50.32 0 0010.255 12.034V80.256c0-10.012 4.94-19.323 12.876-25.179a23.901 23.901 0 01-4.365-13.821c0-13.213 10.735-23.963 23.93-23.963 13.196 0 23.932 10.75 23.932 23.963 0 5.19-1.631 10.09-4.566 14.113 7.747 5.862 12.433 14.998 12.433 25.21v14.157m-6 11.137V80.579v-.323c0-10.493-6.46-19.781-16.457-23.664 5.378-3.295 8.59-9.028 8.59-15.336 0-9.905-8.044-17.963-17.931-17.963S38.07 31.35 38.07 41.256c0 6.19 3.12 11.866 8.346 15.185-10.084 3.728-16.858 13.298-16.858 23.815 0 .106 0 .211.002.318l-.002 24.958A56.283 56.283 0 018.18 85.285a55.84 55.84 0 01-6.037-13.779A56.26 56.26 0 010 56.083c0-7.571 1.48-14.916 4.4-21.83a55.9 55.9 0 0112.002-17.827 55.81 55.81 0 0117.8-12.019C41.106 1.483 48.44 0 56 0c7.56 0 14.894 1.483 21.798 4.407a55.808 55.808 0 0117.8 12.02 55.9 55.9 0 0112 17.826C110.52 41.167 112 48.51 112 56.083c0 5.304-.74 10.553-2.196 15.601a55.846 55.846 0 01-6.176 13.91A56.255 56.255 0 0181.8 105.872h-.002z'
									fill='#fc5185'
								/>
								<g stroke='#fc5185' strokeWidth='6'>
									<ellipse
										className='c'
										cx='56'
										cy='56.083'
										rx='56'
										ry='56.083'
										style={{ stroke: 'none' }}
									/>
									<ellipse cx='56' cy='56.083' rx='53' ry='53.083' />
								</g>
							</g>
						</svg>
						CV
					</a>
					<a href='mailto:hartley.max@outlook.com' target='_blank'>
						<svg xmlns='http://www.w3.org/2000/svg' width='128.475' height='112.165'>
							<path
								className='a'
								d='M103.147 21.44L31.48 39.308a2.279 2.279 0 00-1.66 2.763l1.04 4.172-21.08 5.256a2.28 2.28 0 101.102 4.423l21.08-5.255 7.16 28.72-12.597 3.142a2.28 2.28 0 001.103 4.423l12.598-3.141 1.04 4.172a2.279 2.279 0 002.763 1.66l71.666-17.868a2.279 2.279 0 001.66-2.763L105.908 23.1a2.279 2.279 0 00-2.761-1.66zm-4.353 5.783L74.64 59.733 38.184 42.333zm13.589 40.68L45.14 84.667l-9.612-38.55 38.838 18.534a2.279 2.279 0 002.814-.702l25.62-34.48z'
								style={{ fill: '#fc5185' }}
							/>
							<path
								className='a'
								style={{ fill: '#fc5185' }}
								d='M25.95 64.831L2.21 70.75a2.28 2.28 0 101.104 4.423l23.739-5.918a2.28 2.28 0 10-1.103-4.424zM19.224 84.349l-1.18.294a2.28 2.28 0 001.103 4.424l1.18-.294a2.28 2.28 0 00-1.103-4.424z'
							/>
							<g transform='translate(16.475 -.001)' stroke='#fc5185' strokeWidth='6' fill='none'>
								<ellipse cx='56' cy='56.083' rx='56' ry='56.083' stroke='none' />
								<ellipse cx='56' cy='56.083' rx='53' ry='53.083' />
							</g>
						</svg>
						Contact Me
					</a>
					<Link href='/portfolio'>
						<a>
							<div className={style.portfolioIconContainer}>
								<IconContext.Provider value={{ className: style.portfolioIcon }}>
									<BsBriefcase />
								</IconContext.Provider>
							</div>
							Portfolio
						</a>
					</Link>
				</section>
			</FairyLights>
			<Bio isHidden={isBioHidden} onClick={handleClick} top={titlePos[0]} left={titlePos[1]} />
		</>
	);
}
