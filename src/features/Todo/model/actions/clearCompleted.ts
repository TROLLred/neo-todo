import { ITodoStore } from '../todoStore';

export const clearCompletedSetCallback = (state: ITodoStore) => ({
	todos: state.activeTodos,
	completedTodos: [],
});
