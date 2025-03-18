import { MadeBy } from '@entities/MadeBy';
import { ToggleBackground } from '@features/Background';
import { Theme } from '@features/Theme';

export const Footer: React.FC = () => (
	<footer className='bg-crust align-center relative z-1 flex justify-between gap-3 p-4 transition-colors duration-300 ease-in-out'>
		<MadeBy />
		<div>
			<Theme />
			<ToggleBackground />
		</div>
	</footer>
);
