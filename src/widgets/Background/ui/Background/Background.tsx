import { useBackgroundStore } from '@features/Background';
import { RingsBackground } from '../RingsBackground/RingsBackground';
import { SimplexNoiseBackground } from '../SimplexNoiseBackground/SimplexNoiseBackground';

export const Background: React.FC = () => {
	const { background } = useBackgroundStore();

	return (
		<>
			{background === 'liquid' ? (
				<SimplexNoiseBackground />
			) : (
				<RingsBackground />
			)}
		</>
	);
};
