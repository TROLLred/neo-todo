export const ThemeVariants = {
	LIGHT: 'light',
	DARK: 'dark',
} as const;

export type ThemeVariantsType =
	(typeof ThemeVariants)[keyof typeof ThemeVariants];
