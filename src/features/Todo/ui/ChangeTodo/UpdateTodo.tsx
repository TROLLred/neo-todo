import { ButtonUI } from '@shared/ui';
import { Todo, useTodoStore } from '../../model/todoStore';

interface IUpdateTodo extends Pick<Todo, 'id' | 'text'> {
	onClick?: React.MouseEventHandler;
}

export const UpdateTodo: React.FC<IUpdateTodo> = ({ id, text, onClick }) => {
	const { updateTodo } = useTodoStore();

	return (
		<ButtonUI
			disabled={!text.length}
			onClick={e => {
				onClick?.(e);
				updateTodo(id, text);
			}}
		>
			update
		</ButtonUI>
	);
};
