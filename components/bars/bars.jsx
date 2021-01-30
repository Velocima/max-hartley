import styles from './bars.module.css';
import useWindowSize from '../../hooks/useWindowSize';

export default function Bars({ paused }) {
	const [width, height] = useWindowSize();

	const createBarStyle = (right) => {
		const random = Math.random();
		return {
			animationDuration: `${5 - random * 3}s`,
			animationDelay: `${random * 2}s`,
			height: `${width / 20}px`,
			right,
		};
	};
	const bars = [
		-1 * ((2 * width) / 6),
		width / 12,
		(2 * width) / 6,
		(3 * width) / 6,
		(4 * width) / 6,
		(5 * width) / 6,
		(6 * width) / 6,
	].map((bar, i) => <Bar style={createBarStyle(bar)} key={i} />);

	return <>{bars}</>;
}

const Bar = ({ style }) => {
	return <div className={styles.bar} style={style}></div>;
};
