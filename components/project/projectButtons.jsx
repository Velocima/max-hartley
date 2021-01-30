export default function ProjectButton({ isSelected }) {
	return isSelected ? (
		<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22'>
			<g stroke='#fc5185' strokeWidth='3' fill='none'>
				<circle cx='11' cy='11' r='11' stroke='none' />
				<circle cx='11' cy='11' r='9.5' />
			</g>
		</svg>
	) : (
		<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14'>
			<circle cx='7' cy='7' r='7' fill='#fc5185' />
		</svg>
	);
}
