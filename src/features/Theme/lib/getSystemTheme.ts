import { type ThemeVariantsType } from './constants/themeVariants';

export const getSystemTheme = (): ThemeVariantsType => {
	if (typeof window !== 'undefined' && window.matchMedia) {
		return window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light';
	}
	return 'light';
};
