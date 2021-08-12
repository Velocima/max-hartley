import styles from './project.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineGlobal } from 'react-icons/ai';

export default function Project({ project, style }) {
	const { title, year, link, image, github } = project;
	return (
		<section className={styles.projectContainer} style={style}>
			<div className={styles.background}>
				<Image
					src={image}
					className={styles.backgroundImage}
					layout='fill'
					objectFit='cover'
					quality={100}
				/>
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
				</a>
			</div>
			<p>{year}</p>
		</section>
	);
}
