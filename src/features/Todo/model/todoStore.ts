import { v4 as uuidv4 } from 'uuid';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import {
	addTodoSetCallback,
	clearCompletedSetCallback,
	deleteTodoSetCallback,
	toggleTodoSetCallback,
	updateTodoSetCallback,
} from './actions';

export type Todo = {
	id: string;
	text: string;
	completed: boolean;
};

export type TodoFilter = 'all' | 'active' | 'completed';

export interface ITodoStore {
	todos: Todo[];
	activeTodos: Todo[];
	completedTodos: Todo[];
	currentFilter: TodoFilter;
	addTodo: (text: string, id?: string) => void;
	deleteTodo: (id: string) => void;
	toggleTodo: (id: string) => void;
	updateTodo: (id: string, newText: string) => void;
	clearCompleted: () => void;
	setFilter: (filter: TodoFilter) => void;
}

export const useTodoStore = create<ITodoStore>()(
	persist(
		set => ({
			todos: [],
			activeTodos: [],
			completedTodos: [],
			currentFilter: 'all',
			addTodo: (text, id) =>
				set(state => addTodoSetCallback(state, { id: id ?? uuidv4(), text })),
			deleteTodo: id => set(state => deleteTodoSetCallback(state, { id })),
			toggleTodo: id => set(state => toggleTodoSetCallback(state, { id })),
			updateTodo: (id, text) =>
				set(state => updateTodoSetCallback(state, { id, text })),
			clearCompleted: () => set(clearCompletedSetCallback),
			setFilter: (filter: TodoFilter) => set(() => ({ currentFilter: filter })),
		}),
		{
			name: 'todo-storage',
			storage: createJSONStorage(() => localStorage),
		},
	),
);
