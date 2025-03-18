import clsx from 'clsx';

interface IProgressbarUI {
	progress: number;
	className?: string;
	duration: number;
}

export const ProgressbarUI: React.FC<IProgressbarUI> = ({
	className,
	progress,
	duration,
}) => (
	<div className={clsx('flex h-4 w-[100%] overflow-hidden', className)}>
		<span
			className='bg-text h-[100%] w-0 transition-[width] ease-in-out'
			style={{ width: `${progress}%`, transitionDuration: `${duration}ms` }}
		></span>
	</div>
);
