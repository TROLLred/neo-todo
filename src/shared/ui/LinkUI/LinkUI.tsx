import clsx from 'clsx';

interface ILinkUI extends React.LinkHTMLAttributes<HTMLAnchorElement> {
	target?: '_blank' | '_self';
}

export const LinkUI: React.FC<ILinkUI> = ({
	children,
	className,
	target = '_blank',
	...props
}) => (
	<a
		{...props}
		target={target}
		className={clsx(
			'text-text focus:text-primary hover:text-primary active:text-primary transition-colors ease-in-out outline-none',
			className,
		)}
	>
		{'<'}
		<span className='text-text'>{children}</span>
		{'>'}
	</a>
);
