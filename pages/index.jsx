import Head from 'next/head';
import style from '../styles/index.module.css';
import Link from 'next/link';
import FairyLights from '../components/fairylights/FairyLights';
import Bio from '../components/bio/Bio';
import { useState, useRef, useEffect } from 'react';
import useWindowSize from '../hooks/useWindowSize';

export default function Home() {
	const [isBioHidden, setIsBioHidden] = useState(true);

	const handleClick = ({ target }) => {
		console.log(target);
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
				<title>Create Next App</title>
				<link rel='icon' href='/logo.png' />
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
							className={style.github}
							xmlns='http://www.w3.org/2000/svg'
							width='120.775'
							height='117.794'
							viewBox='0 0 120.775 117.794'
						>
							<defs></defs>
							<g transform='translate(-290.221 -58.431)'>
								<path
									className='a'
									d='M350.609,58.431a60.394,60.394,0,0,0-19.091,117.69c3.018.558,4.126-1.311,4.126-2.906,0-1.439-.056-6.2-.082-11.243-16.8,3.654-20.345-7.125-20.345-7.125-2.747-6.979-6.705-8.836-6.705-8.836-5.479-3.748.413-3.671.413-3.671,6.064.426,9.257,6.224,9.257,6.224,5.386,9.231,14.127,6.563,17.573,5.02.542-3.9,2.107-6.568,3.834-8.076-13.413-1.526-27.513-6.705-27.513-29.844A23.37,23.37,0,0,1,318.3,99.456c-.627-1.522-2.694-7.663.585-15.982,0,0,5.071-1.622,16.611,6.191a57.254,57.254,0,0,1,30.243,0c11.526-7.813,16.59-6.191,16.59-6.191,3.287,8.319,1.219,14.46.592,15.982a23.324,23.324,0,0,1,6.215,16.208c0,23.195-14.127,28.3-27.574,29.8,2.166,1.875,4.1,5.549,4.1,11.183,0,8.08-.07,14.583-.07,16.572,0,1.608,1.087,3.491,4.148,2.9A60.4,60.4,0,0,0,350.609,58.431Z'
									fill='#fc5185'
								/>
								<path
									className='b'
									d='M313.093,145.134c-.133.3-.6.391-1.035.185s-.684-.607-.542-.907.6-.4,1.04-.189.689.611.537.911Zm-.743-.55'
									fill='#fc5185'
								/>
								<path
									className='b'
									d='M315.539,147.863c-.288.266-.851.142-1.233-.279a.923.923,0,0,1-.177-1.255c.3-.267.843-.142,1.239.279s.472.984.171,1.255Zm-.576-.618'
									fill='#fc5185'
								/>
								<path
									className='b'
									fill='#fc5185'
									d='M317.92,151.34c-.37.258-.975.017-1.349-.52s-.37-1.182.008-1.44.971-.025,1.35.507.369,1.191-.009,1.453Zm0,0'
								/>
								<path
									className='b'
									fill='#fc5185'
									d='M321.182,154.7c-.331.365-1.036.266-1.552-.232a1.161,1.161,0,0,1-.343-1.543c.335-.365,1.044-.262,1.564.232s.684,1.181.331,1.543Zm0,0'
								/>
								<path
									className='b'
									fill='#fc5185'
									d='M325.682,156.652c-.146.472-.825.687-1.509.486s-1.13-.761-.992-1.238.824-.7,1.513-.485,1.13.755.988,1.237Zm0,0'
								/>
								<path
									className='b'
									fill='#fc5185'
									d='M330.624,157.013c.017.5-.563.911-1.281.92s-1.306-.387-1.314-.877.567-.911,1.289-.924,1.306.387,1.306.881Zm0,0'
								/>
								<path
									className='b'
									fill='#fc5185'
									d='M335.223,156.231c.086.485-.413.984-1.126,1.117s-1.35-.172-1.439-.653c-.087-.5.421-1,1.121-1.126s1.353.168,1.444.662Zm0,0'
								/>
							</g>
						</svg>
						GitHub
					</a>
					<a href='' target='_blank'>
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
							<g
								transform='translate(16.475 -.001)'
								stroke='#fc5185'
								strokeWidth='6'
								fill='none'
							>
								<ellipse cx='56' cy='56.083' rx='56' ry='56.083' stroke='none' />
								<ellipse cx='56' cy='56.083' rx='53' ry='53.083' />
							</g>
						</svg>
						Contact Me
					</a>
					<Link href='/portfolio'>
						<a className={style.portfolioLink}>Portfolio</a>
					</Link>
				</section>
			</FairyLights>
			<Bio
				isHidden={isBioHidden}
				onClick={handleClick}
				top={titlePos[0]}
				left={titlePos[1]}
			/>
		</>
	);
}
