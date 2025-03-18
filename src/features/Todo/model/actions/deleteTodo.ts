import { ITodoStore, Todo } from '../todoStore';

export const deleteTodoSetCallback = (
	state: ITodoStore,
	{ id }: Pick<Todo, 'id'>,
) => {
	const todos: Todo[] = [];
	const activeTodos: Todo[] = [];
	const completedTodos: Todo[] = [];

	state.todos.forEach(todo => {
		if (todo.id === id) return;

		todos.push(todo);
		if (todo.completed) completedTodos.push(todo);
		else activeTodos.push(todo);
	});

	return {
		todos,
		activeTodos,
		completedTodos,
	};
};
