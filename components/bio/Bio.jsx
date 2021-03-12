import styles from './bio.module.css';
import Link from 'next/link';

export default function Bio({ isHidden, onClick, top, left }) {
	const bioStyle = {
		opacity: isHidden ? 0 : 1,
		pointerEvents: isHidden ? 'none' : 'all',
	};

	return (
		<section className={styles.bio} onClick={onClick} style={bioStyle}>
			<p className={`${styles.speechBubble} paragraph`}>
				I am a self taught Full Stack Web Developer with a passion for creating bespoke,
				elegant websites. In 2017 I graduated from the University of Birmingham with a
				Bachelor's Degree in Mathematics. My coding journey began shortly after through the
				<a href='https://www.codecademy.com/profiles/Velocimactor' target='_blank'>
					{' '}
					Codecademy{' '}
				</a>
				Web Development course where I found fulfilment in the flow of coding. Since then I
				have expanded my skill set and created professional websites for several local
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
