import clsx from 'clsx';

interface IButtonUI extends React.PropsWithChildren {
	className?: string;
	type?: 'button' | 'submit';
	onClick?: React.MouseEventHandler;
	disabled?: boolean;
}

export const ButtonUI: React.FC<IButtonUI> = ({
	className,
	children,
	onClick,
	disabled = false,
	type = 'button',
}) => {
	return (
		<button
			disabled={disabled}
			className={clsx(
				className,
				'text-text *:text-text focus:text-primary hover:text-primary active:text-primary disabled:text-surface-2 disabled:*:text-surface-2 uppercase transition-colors duration-300 ease-in-out outline-none',
			)}
			type={type}
			onClick={onClick}
		>
			{'['}
			<span className='transition-colors duration-300 ease-in-out'>
				{children}
			</span>
			{']'}
		</button>
	);
};
