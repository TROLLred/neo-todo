import clsx from 'clsx';

interface ILogo {
	className?: string;
}

export const Logo: React.FC<ILogo> = ({ className }) => (
	<pre className={clsx('text-text leading-[120%]', className)}>
		{[
			'  ______      ____',
			' /_  __/___  / __ \\____',
			'  / / / __ \\/ / / / __ \\',
			' / / / /_/ / /_/ / /_/ /',
			'/_/  \\____/_____/\\____/',
		].join('\n')}
	</pre>
);
