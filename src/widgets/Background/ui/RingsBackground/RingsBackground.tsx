import { useRings } from '@widgets/Background/lib/hooks/useRings';
import { useRef } from 'react';

export const RingsBackground: React.FC = () => {
	const parentRef = useRef(null);
	useRings(parentRef);

	return (
		<div
			className={
				'absolute inset-0 z-0 flex *:flex *:max-h-[100dvh] *:max-w-[100%]'
			}
			ref={parentRef}
		></div>
	);
};
