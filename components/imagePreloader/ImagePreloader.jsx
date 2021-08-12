import styles from './image_preloader.module.css';
import React from 'react';
import projectInfo from '../../projects/projects';
import Image from 'next/head';

export default function ImagePreloader() {
	return (
		<div className={styles.imagePreloader}>
			{projectInfo.map((project, i) => {
				<Image height={0} width={0} src={project.image} alt='' />;
			})}
		</div>
	);
}
