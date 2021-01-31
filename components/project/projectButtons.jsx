import { useState } from 'react';

export default function ProjectButton({ isSelected, onClick }) {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={isSelected ? '22' : '14'}
			height={isSelected ? '22' : '14'}
			style={{
				transition: 'all 0.15s, transform 0.3s',
				margin: !isSelected ? '7px' : '3px',
				transform: `scale(${isSelected ? 1 : isHovered ? 1.5 : 1})`,
			}}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onClick={onClick}
		>
			<circle
				style={{ transition: '0.15s' }}
				cx={isSelected ? '11' : '7'}
				cy={isSelected ? '11' : '7'}
				r={isSelected ? '9.5' : '7'}
				fill={isSelected ? '#fc518500' : '#fc5185'}
				strokeWidth={isSelected ? '3' : '0'}
				stroke='#fc5185'
			/>
		</svg>
	);
}
