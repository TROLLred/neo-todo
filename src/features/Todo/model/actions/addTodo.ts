import { ITodoStore, Todo } from '../todoStore';

export const addTodoSetCallback = (
	state: ITodoStore,
	{ id, text }: Pick<Todo, 'id' | 'text'>,
) => {
	const newTodo = {
		id: id,
		text: text,
		completed: false,
	};

	return {
		todos: [...state.todos, newTodo],
		activeTodos: [...state.activeTodos, newTodo],
	};
};
