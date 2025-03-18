import { Logo } from '@entities/Logo';
import { ProgressbarUI } from '@shared/ui/ProgressbarUI/ProgressbarUI';
import clsx from 'clsx';
import { useEffect, useState, useTransition } from 'react';

const ANIMATION_DURATION = 3000;

export const Preloader: React.FC = () => {
	const [currentProgress, setCurrentProgress] = useState(0);
	const [isVisible, setIsVisible] = useState(true);
	const [isPending, startTransition] = useTransition();

	useEffect(() => {
		setCurrentProgress(100);
		const timeout = setTimeout(() => {
			//setIsLoaded(true);
			startTransition(() => {
				setIsVisible(false);
			});
		}, ANIMATION_DURATION);

		return () => clearTimeout(timeout);
	}, [isVisible]);

	return isVisible ? (
		<div
			className={clsx(
				'bg-mantle fixed inset-0 z-[200] flex flex-col items-center justify-center gap-3 p-4 transition-opacity duration-300 ease-in-out',
				isPending && 'opacity-0',
			)}
		>
			<Logo />
			<ProgressbarUI
				className='max-w-[350px]'
				progress={currentProgress}
				duration={ANIMATION_DURATION}
			/>
		</div>
	) : null;
};
