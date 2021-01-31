import styles from './project.module.css';
import Link from 'next/link';
import { useState } from 'react';

export default function Project(props) {
	const { title, description, year, link, image, style } = props;
	const [isLinkHovered, setIsLinkHovered] = useState(false);
	return (
		<section className={styles.projectContainer} style={style}>
			<div
				className={styles.background}
				style={{
					background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image}) center`,
					transform: `scale(${isLinkHovered ? 1 : 1.2})`,
				}}
			></div>
			<h1>{title}</h1>
			<Link href={link}>
				<a
					onMouseEnter={() => setIsLinkHovered(true)}
					onMouseLeave={() => setIsLinkHovered(false)}
				>
					View Project
				</a>
			</Link>
			<p>
				Project
				<br />
				<span>{description}</span>
				<br />
				Year - {year}
			</p>
		</section>
	);
}
