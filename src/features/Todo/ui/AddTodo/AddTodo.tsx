import { BorderUI, ButtonUI, InputUI } from '@shared/ui';
import { useRef, useState } from 'react';
import { useTodoStore } from '../../model/todoStore';

export const AddTodo: React.FC = () => {
	const [value, setValue] = useState('');
	const inputRef = useRef<HTMLInputElement>(null);
	const { addTodo } = useTodoStore();

	const clearInput = () => {
		if (!inputRef.current) return;

		setValue('');
		inputRef.current.value = '';
	};

	const onSubmitHandler: React.FormEventHandler = (e?: React.FormEvent) => {
		e?.preventDefault();

		addTodo(value);
		clearInput();
	};

	return (
		<form onSubmit={onSubmitHandler} className='flex gap-3'>
			<BorderUI className='w-[100%]'>
				<label className='flex items-center gap-3'>
					<span className='transition-colors duration-300 ease-in-out'>
						{'~/todo'}
					</span>
					<InputUI
						autoComplete={'off'}
						ref={inputRef}
						onInput={e => {
							setValue((e.target as HTMLInputElement)?.value ?? '');
						}}
					/>
				</label>
			</BorderUI>
			<BorderUI>
				<ButtonUI type='submit' disabled={!value.length}>
					ADD
				</ButtonUI>
			</BorderUI>
		</form>
	);
};
