import { useLayoutEffect, useRef, useState } from 'react';
import { TODO_FILTERS } from '../../lib/constants/todoFilters';
import { useTodoStore } from '../../model/todoStore';
import { TodoFilterItem } from './TodoFilterItem';

export const TodoFilter: React.FC = () => {
	const { currentFilter, setFilter } = useTodoStore();
	const [currentValue, setCurrentValue] = useState(currentFilter);
	const [maxWidth, setMaxWidth] = useState(0);
	const listRef = useRef<HTMLUListElement>(null);

	useLayoutEffect(() => {
		if (listRef.current) {
			const childrens = listRef.current.childNodes;
			childrens.forEach(children => {
				const currentWidth = (children as HTMLElement).clientWidth;
				if (maxWidth < currentWidth) setMaxWidth(currentWidth);
			});
		}
	}, [listRef, maxWidth]);

	return (
		<ul
			ref={listRef}
			className={'flex justify-center'}
			style={{ '--filter-width': `${maxWidth}px` } as React.CSSProperties}
		>
			{TODO_FILTERS.map(filter => (
				<li className='flex justify-center' key={filter}>
					<TodoFilterItem
						name={'todoFilter'}
						currentValue={currentValue}
						value={filter}
						onChange={() => {
							setFilter(filter as 'all' | 'active' | 'completed');
							setCurrentValue(filter as 'all' | 'active' | 'completed');
						}}
					/>
				</li>
			))}
		</ul>
	);
};
