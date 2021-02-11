import styles from './bio.module.css';
import useWindowSize from '../../hooks/useWindowSize';
import { useEffect } from 'react';

export default function Bio({ isHidden, onClick, top, left }) {
	const [width, height] = useWindowSize();

	const bioStyle = {
		opacity: isHidden ? 0 : 1,
		pointerEvents: isHidden ? 'none' : 'all',
	};

	let bubbleStyle =
		width > 1200
			? {
					top,
					left: left + 40,
					maxWidth: width - left - 55,
					transform: isHidden ? 'translateY(-100vh)' : 'translateY(0)',
					opacity: isHidden ? 0 : 1,
			  }
			: {
					transform: isHidden ? 'translateY(-100vh)' : 'translateY(0)',
					opacity: isHidden ? 0 : 1,
			  };

	useEffect(() => {
		bubbleStyle =
			width > 1200
				? {
						top,
						left: left + 40,
						maxWidth: width - left - 55,
						transform: isHidden ? 'translateY(-100vh)' : 'translateY(0)',
						opacity: isHidden ? 0 : 1,
				  }
				: {
						transform: isHidden ? 'translateY(-100vh)' : 'translateY(0)',
						opacity: isHidden ? 0 : 1,
				  };
	}, [width]);

	return (
		<section className={styles.bio} onClick={onClick} style={bioStyle}>
			<p className={styles.speechBubble} style={bubbleStyle}>
				I'm a self taught developer currently living in the UK. ... Lorem ipsum, dolor sit
				amet consectetur adipisicing elit. Sunt ducimus aperiam blanditiis ipsa officiis
				reprehenderit, deserunt voluptates fugiat expedita perspiciatis eligendi illum quae,
				perferendis necessitatibus nostrum est, aliquid exercitationem fuga.
			</p>
		</section>
	);
}
