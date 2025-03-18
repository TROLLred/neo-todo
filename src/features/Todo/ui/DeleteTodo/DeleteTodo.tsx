import { ButtonUI } from '@shared/ui';
import { Todo, useTodoStore } from '../../model/todoStore';

export const DeleteTodo: React.FC<Pick<Todo, 'id'>> = ({ id }) => {
	const { deleteTodo } = useTodoStore();

	return (
		<ButtonUI
			onClick={() => {
				deleteTodo(id);
			}}
		>
			DELETE
		</ButtonUI>
	);
};
