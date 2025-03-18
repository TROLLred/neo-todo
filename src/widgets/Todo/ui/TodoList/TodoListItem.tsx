import { DeleteTodo, ToggleTodo, UpdateTodo } from '@features/Todo';
import { Todo, useTodoStore } from '@features/Todo/model/todoStore';
import { BorderUI, ButtonUI, InputUI } from '@shared/ui';
import { useState } from 'react';

/* Вообще это скорее entity, но, поскольку, сложнее передать несколько слотов из features 
и проект маленький, было решено переместить его ближе к предку в widgets */
export const TodoListItem: React.FC<Todo> = ({ id, text, completed }) => {
	const [currentText, setCurrentText] = useState(text);
	const [isChangeMode, setIsChangeMode] = useState(false);
	const { toggleTodo } = useTodoStore();

	return (
		<li className='flex shadow-(--shadow)'>
			<BorderUI className='flex w-[100%] flex-col gap-3 md:flex-row'>
				<label htmlFor={id} className='flex w-[100%] gap-3'>
					<ToggleTodo
						id={id}
						disabled={isChangeMode}
						completed={completed}
						onChange={() => {
							toggleTodo(id);
						}}
					/>
					<InputUI
						className={completed && !isChangeMode ? 'line-through' : ''}
						value={currentText}
						disabled={!isChangeMode}
						onInput={e => {
							setCurrentText((e?.target as HTMLInputElement).value ?? text);
						}}
					/>
				</label>
				<div className='flex justify-around gap-3'>
					{isChangeMode ? (
						<>
							<UpdateTodo
								id={id}
								text={currentText}
								onClick={() => {
									setIsChangeMode(prev => !prev);
								}}
							/>
							<ButtonUI
								onClick={() => {
									setCurrentText(text);
									setIsChangeMode(false);
								}}
							>
								cancel
							</ButtonUI>
						</>
					) : (
						<>
							<ButtonUI
								onClick={() => {
									setIsChangeMode(true);
								}}
							>
								change
							</ButtonUI>
							<DeleteTodo id={id} />
						</>
					)}
				</div>
			</BorderUI>
		</li>
	);
};
