import { ThemeVariants } from '@features/Theme';

export const ColorsByTheme = {
	[ThemeVariants.LIGHT]: {
		bg: [230, 233, 239],
		color: [76, 79, 105],
	},
	[ThemeVariants.DARK]: {
		bg: [24, 24, 37],
		color: [205, 214, 244],
	},
} as const;

export type TColorsByThemeType =
	(typeof ColorsByTheme)[keyof typeof ColorsByTheme];
