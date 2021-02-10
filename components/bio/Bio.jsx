import styles from './bio.module.css';
import useWindowSize from '../../hooks/useWindowSize';
import { useEffect } from 'react';

export default function Bio({ isHidden, onClick, top, left }) {
	const [width, height] = useWindowSize();

	const bioStyle = {
		opacity: isHidden ? 0 : 1,
		pointerEvents: isHidden ? 'none' : 'all',
	};

	let bubbleStyle = {
		top: width < 1200 ? top - 100 : top,
		left: left + 40,
		maxWidth: width - left - 55,
	};

	let triangeStyle = {
		top: top + 25,
		left: left + 25,
	};
	useEffect(() => {
		bubbleStyle = {
			top,
			left: left + 40,
			maxWidth: width - left - 55,
		};

		triangeStyle = {
			top: top + 25,
			left: left + 25,
		};
	}, [width]);

	return (
		<section className={styles.bio} onClick={onClick} style={bioStyle}>
			<div className={styles.speechBubble} style={bubbleStyle}>
				<div className={styles.triangle} style={triangeStyle}></div>
				<p className='paragraph'>
					I'm a self taught developer currently living in the UK. ... Lorem ipsum, dolor
					sit amet consectetur adipisicing elit. Sunt ducimus aperiam blanditiis ipsa
					officiis reprehenderit, deserunt voluptates fugiat expedita perspiciatis
					eligendi illum quae, perferendis necessitatibus nostrum est, aliquid
					exercitationem fuga.
				</p>
			</div>
		</section>
	);
}
