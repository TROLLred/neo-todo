import { ButtonUI } from '@shared/ui';
import { useBackgroundStore } from '../model/backgroundStore';

export const ToggleBackground: React.FC = () => {
	const { background, setBackground } = useBackgroundStore();

	return (
		<ButtonUI
			onClick={() => {
				setBackground(background !== 'liquid' ? 'liquid' : 'rings');
			}}
		>
			{background}
		</ButtonUI>
	);
};
