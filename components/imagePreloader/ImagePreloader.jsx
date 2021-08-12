import styles from './image_preloader.module.css';
import React from 'react';
import projectInfo from '../../projects/projects';

export default function ImagePreloader() {
	console.log(projectInfo);
	return (
		<div className={styles.imagePreloader}>
			{projectInfo.map((project, i) => (
				<img key={i} src={project.image} alt='' />
			))}
		</div>
	);
}
