import Link from 'next/link';
import styles from '../styles/portfolio.module.css';
import Project from '../components/project/project';
import ProjectButton from '../components/project/projectButtons';
import projectInfo from '../projects/projects';

export default function Portfolio() {
	return (
		<>
			<main className={styles.main}>
				<Link href='/'>
					<a className={styles.home}>
						<svg xmlns='http://www.w3.org/2000/svg' width='112' height='112.165'>
							<defs></defs>
							<g stroke='#fc5185' strokeWidth='6' fill='none'>
								<ellipse cx='56' cy='56.083' rx='56' ry='56.083' stroke='none' />
								<ellipse cx='56' cy='56.083' rx='53' ry='53.083' />
							</g>
							<path
								className='b'
								d='M83.511 56.7l-27.5-24.354-27.52 24.365v34.813a1.62 1.62 0 001.624 1.622h17.2V77.881a1.62 1.62 0 011.622-1.624h14.128a1.62 1.62 0 011.622 1.624v15.265h17.2a1.616 1.616 0 001.622-1.622V56.7z'
								fill='#fc5185'
							/>
							<path
								className='b'
								d='M55.852 19.019L16.828 53.573l4.111 4.636 35.072-31.057L91.07 58.209l4.1-4.636-39.007-34.554-.152.176-.159-.176zM28.491 23.993h9.893l-.087 5.86-9.806 8.858V23.993z'
								fill='#fc5185'
							/>
						</svg>
					</a>
				</Link>
				<section className={styles.projects}>
					{projectInfo.map((project) => {
						return (
							<Project
								image={project.image}
								title={project.title}
								description={project.description}
								year={project.year}
								link={project.link}
								key={project.title}
							/>
						);
					})}
				</section>

				<nav className={styles.nav}>
					<svg xmlns='http://www.w3.org/2000/svg' width='67.773' height='57.965'>
						<path fill='none' d='M4.904 0h57.965v57.965H4.904z' />
						<path
							d='M33.887 7.361L0 41.248l7.907 7.907 25.98-25.98 25.98 25.98 7.907-7.907z'
							fill='#fc5185'
							fillRule='evenodd'
						/>
					</svg>
					<ProjectButton isSelected={true} />
					<ProjectButton />
					<ProjectButton />
					<ProjectButton />
					<svg xmlns='http://www.w3.org/2000/svg' width='67.773' height='57.965'>
						<path fill='none' d='M62.869 57.965H4.908V0h57.961z' />
						<path
							d='M33.886 50.604l33.887-33.887-7.907-7.907-25.98 25.98L7.906 8.81l-7.907 7.907z'
							fill='#fc5185'
							fillRule='evenodd'
						/>
					</svg>
				</nav>
			</main>
		</>
	);
}
