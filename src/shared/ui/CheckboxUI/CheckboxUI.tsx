import clsx from 'clsx';
import { useId, useState } from 'react';

interface ICheckboxUI {
	id?: string;
	name: string;
	value: string;
	checked: boolean;
	className?: string;
	disabled?: boolean;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const CheckboxUI: React.FC<ICheckboxUI> = ({
	id,
	name,
	value,
	checked,
	className,
	disabled = false,
	onChange,
}) => {
	const checkboxId = useId();
	const [active, setActive] = useState(checked);

	return (
		<label
			htmlFor={id ?? checkboxId}
			className={clsx(
				className,
				'relative transition-colors duration-300 ease-in-out outline-none select-none',
				disabled
					? 'text-surface-2'
					: 'text-text focus:text-primary hover:text-primary active:text-primary',
				active ? '*:text-text' : '*:text-[transparent!important]',
			)}
			tabIndex={0}
		>
			<input
				className='[&:disabled~span]:text-surface-2 pointer-events-none invisible absolute'
				type='checkbox'
				name={name}
				disabled={disabled}
				value={value}
				id={id ?? checkboxId}
				checked={active}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setActive(prev => !prev);
					onChange?.(e);
				}}
			/>
			{'['}
			<span className={'transition-colors duration-300 ease-in-out'}>✓</span>
			{']'}
		</label>
	);
};
