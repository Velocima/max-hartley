import styles from './bio.module.css';
import useWindowSize from '../../hooks/useWindowSize';
import { useEffect } from 'react';
import Link from 'next/link';

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
					opacity: isHidden ? 0 : 1,
			  }
			: {
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
				I am a self taught Full Stack Web Developer with a passion for creating bespoke,
				elegant websites. In 2017 I graduated from the University of Birmingham with a
				Bachelor's Degree in Mathematics. Shortly afterwards, my coding journey began
				through the
				<a href='https://www.codecademy.com/profiles/Velocimactor' target='_blank'>
					{' '}
					Codecademy{' '}
				</a>{' '}
				Web Development course where I found fulfilment in the flow coding. Since then my
				skill set has expanded and I have created professional websites for several local
				businesses. In the future I hope to advance my knowledge enough to contribute to new
				and exciting technologies. For examples of my work, check out my{' '}
				<Link href='/portfolio'>
					<a>Portfolio</a>
				</Link>
				.
			</p>
		</section>
	);
}
