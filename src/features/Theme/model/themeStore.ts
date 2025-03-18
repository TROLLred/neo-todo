import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { type ThemeVariantsType } from '../lib/constants/themeVariants';
import { getSystemTheme } from '../lib/getSystemTheme';

export interface IThemeStore {
	theme: ThemeVariantsType;
	setTheme: (value: ThemeVariantsType) => void;
}

export const useThemeStore = create<IThemeStore>()(
	persist(
		set => ({
			theme: getSystemTheme(),
			setTheme: value =>
				set(() => ({
					theme: value,
				})),
		}),
		{
			name: 'todo-storage',
			storage: createJSONStorage(() => localStorage),
		},
	),
);
