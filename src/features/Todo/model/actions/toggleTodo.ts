import { ITodoStore, Todo } from '../todoStore';

export const toggleTodoSetCallback = (
	state: ITodoStore,
	{ id }: Pick<Todo, 'id'>,
) => {
	const todos: Todo[] = [];
	const activeTodos: Todo[] = [];
	const completedTodos: Todo[] = [];

	state.todos.forEach(todo => {
		const currentTodo =
			todo.id === id
				? {
						...todo,
						completed: !todo.completed,
					}
				: todo;

		todos.push(currentTodo);
		if (currentTodo.completed) completedTodos.push(currentTodo);
		else activeTodos.push(currentTodo);
	});

	return {
		todos,
		activeTodos,
		completedTodos,
	};
};

/*todos: state.todos.map(todo =>
		todo.id === id
			? {
					...todo,
					completed: !todo.completed,
			  }
			: todo
	),*/
