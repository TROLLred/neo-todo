import { useTodoStore } from '@features/Todo/model/todoStore';
import { TodoListItem } from './TodoListItem';

interface ITodoList {
	currentFilter?: 'all' | 'active' | 'complete';
}

export const TodoList: React.FC<ITodoList> = () => {
	const { todos, activeTodos, completedTodos, currentFilter } = useTodoStore();

	const todosMap = {
		all: todos,
		active: activeTodos,
		completed: completedTodos,
	};

	return (
		<ul className='flex flex-col gap-3 transition-colors'>
			{todosMap[currentFilter].length
				? todosMap[currentFilter].map(todo => (
						<TodoListItem {...todo} key={todo.id} />
					))
				: currentFilter !== 'completed'
					? 'N0THING_T0_D0'
					: 'N0_C0MPLETE'}
		</ul>
	);
};
