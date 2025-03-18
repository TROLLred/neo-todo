import { CheckboxUI } from '@shared/ui';
import { Todo } from '../../model/todoStore';

interface IToggleTodo extends Pick<Todo, 'id' | 'completed'> {
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	disabled?: boolean;
}

export const ToggleTodo: React.FC<IToggleTodo> = ({
	id,
	disabled,
	completed,
	onChange,
}) => (
	<CheckboxUI
		disabled={disabled}
		checked={completed}
		id={id}
		name={id}
		value={`${completed}`}
		onChange={onChange}
	/>
);
