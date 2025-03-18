import clsx from 'clsx';
import { useId } from 'react';

interface ITodoFilterItem {
	name: string;
	value: string;
	className?: string;
	currentValue: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const TodoFilterItem: React.FC<ITodoFilterItem> = ({
	name,
	value,
	currentValue,
	className,
	onChange,
}) => {
	const radioId = useId();

	return (
		<label
			htmlFor={radioId}
			className={clsx(
				className,
				'text-text focus:text-primary hover:text-primary active:text-primary relative flex min-w-[var(--filter-width)] justify-between uppercase transition-colors duration-300 ease-in-out outline-none select-none before:transition-colors before:duration-300 before:ease-in-out before:content-["["] after:transition-colors after:duration-300 after:ease-in-out after:content-["]"]',
				value !== currentValue &&
					'before:text-transparent after:text-transparent',
			)}
			tabIndex={0}
		>
			<input
				type='radio'
				name={name}
				value={value}
				id={radioId}
				checked={value === currentValue}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					onChange?.(e);
				}}
				className='absolute hidden'
			/>
			<span className={clsx(value === currentValue && 'text-text')}>
				{value.trim()}
			</span>
		</label>
	);
};
