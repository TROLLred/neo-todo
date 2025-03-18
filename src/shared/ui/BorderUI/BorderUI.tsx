import clsx from 'clsx';

interface IBorderUI extends React.PropsWithChildren {
	className?: string;
}

export const BorderUI: React.FC<IBorderUI> = ({ children, className }) => (
	<div
		className={clsx(
			'border-surface-2-25 transition-border border-1 p-2 transition-colors duration-300 ease-in-out md:p-3',
			className,
		)}
	>
		{children}
	</div>
);
