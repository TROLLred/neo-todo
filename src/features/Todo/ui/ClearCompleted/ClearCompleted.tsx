import { ButtonUI } from '@shared/ui';
import { useTodoStore } from '../../model/todoStore';

interface IClearCompleted {
	className?: string;
}

export const ClearCompleted: React.FC<IClearCompleted> = ({ className }) => {
	const { completedTodos, clearCompleted } = useTodoStore();

	return (
		<ButtonUI
			disabled={!completedTodos.length}
			className={className}
			onClick={clearCompleted}
		>
			CLEAR_COMPLETED
		</ButtonUI>
	);
};
