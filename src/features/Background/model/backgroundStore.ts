import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type BackgroundType = 'liquid' | 'rings';

export interface ITodoStore {
	background: BackgroundType;
	setBackground: (background: BackgroundType) => void;
}

export const useBackgroundStore = create<ITodoStore>()(
	persist(
		set => ({
			background: 'liquid',
			setBackground: (background: BackgroundType) =>
				set(() => ({ background })),
		}),
		{
			name: 'todo-storage',
			storage: createJSONStorage(() => localStorage),
		},
	),
);
