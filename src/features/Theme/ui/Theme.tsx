import { ButtonUI } from '@shared/ui';
import { useLayoutEffect } from 'react';
import { ThemeVariants } from '../lib/constants/themeVariants';
import { useThemeStore } from '../model/themeStore';

export const Theme = () => {
	const { theme, setTheme } = useThemeStore();

	useLayoutEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
	}, [theme]);

	return (
		<ButtonUI
			onClick={() => {
				setTheme(
					theme === ThemeVariants.LIGHT
						? ThemeVariants.DARK
						: ThemeVariants.LIGHT,
				);
			}}
		>
			{theme}
		</ButtonUI>
	);
};
