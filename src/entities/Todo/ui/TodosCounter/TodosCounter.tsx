interface ITodosCounter {
	className?: string;
	count: number;
}

export const TodosCounter: React.FC<ITodosCounter> = ({ className, count }) => (
	<span className={className}>ITEMS_LEFT: {count}</span>
);
