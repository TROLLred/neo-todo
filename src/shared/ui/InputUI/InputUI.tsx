import clsx from 'clsx';
import { useId } from 'react';

interface IInputUI
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
	type?: 'text';
	ref?: React.RefObject<HTMLInputElement | null>;
}

export const InputUI: React.FC<IInputUI> = props => {
	const { ref, id, type, className } = props;
	const inputId = useId();

	return (
		<input
			{...props}
			ref={ref}
			id={id ?? inputId}
			type={type ?? 'text'}
			className={clsx(
				'border-text focus:border-primary text-text placeholder:text-subtext-0 caret-primary flex w-[100%] border-b-1 transition-colors duration-300 ease-in-out outline-none disabled:pointer-events-none disabled:border-transparent disabled:text-ellipsis disabled:select-none',
				className,
			)}
		/>
	);
};
