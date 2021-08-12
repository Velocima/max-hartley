import styles from './project.module.css';
import Link from 'next/link';
import { AiOutlineGlobal } from 'react-icons/ai';

export default function Project({ project, style }) {
	const { title, year, link, image, github } = project;
	return (
		<section className={styles.projectContainer} style={style}>
			<div className={styles.background}>
				<img src={image} alt='' className={styles.backgroundImage} />
			</div>
			<div className={styles.backgroundShader}></div>
			<h1>{title}</h1>

			<div className={styles.links}>
				{title === 'Personal Portfolio' ? (
					<Link href={link}>
						<a>
							<AiOutlineGlobal />
						</a>
					</Link>
				) : (
					<a href={link} target='_blank'>
						<AiOutlineGlobal />
					</a>
				)}
				<a href={github} target='_blank'>
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
				</a>
			</div>
			<p>{year}</p>
		</section>
	);
}
