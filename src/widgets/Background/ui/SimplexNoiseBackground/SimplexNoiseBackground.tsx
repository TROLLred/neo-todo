import { useRef } from 'react';
import { useSimplexNoise } from '../../lib/hooks/useSimplexNoise';

export const SimplexNoiseBackground: React.FC = () => {
	const parentRef = useRef(null);
	useSimplexNoise(parentRef);

	return (
		<div
			className={
				'absolute inset-0 z-0 flex *:flex *:max-h-[100dvh] *:max-w-[100%]'
			}
			ref={parentRef}
		></div>
	);
};
