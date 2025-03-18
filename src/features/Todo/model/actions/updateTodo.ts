import { ITodoStore, Todo } from '../todoStore';

export const updateTodoSetCallback = (
	state: ITodoStore,
	{ id, text }: Pick<Todo, 'id' | 'text'>,
) => {
	const todos: Todo[] = [];
	const activeTodos: Todo[] = [];
	const completedTodos: Todo[] = [];

	state.todos.forEach(todo => {
		const currentTodo =
			todo.id === id
				? {
						...todo,
						text,
					}
				: todo;

		todos.push(currentTodo);
		if (todo.completed) completedTodos.push(currentTodo);
		else activeTodos.push(currentTodo);
	});

	return {
		todos,
		activeTodos,
		completedTodos,
	};
};
