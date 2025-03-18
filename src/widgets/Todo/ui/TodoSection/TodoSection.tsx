import { TodosCounter } from '@entities/Todo';
import {
	AddTodo,
	ClearCompleted,
	TodoFilter,
	useTodoStore,
} from '@features/Todo';
import noiseTexture from '@images/noiseTexture.png';
import { BorderUI } from '@shared/ui';
import { TodoList } from '../TodoList';

export const TodoSection: React.FC = () => {
	const { activeTodos } = useTodoStore();

	return (
		<BorderUI className='bg-mantle-15 relative flex max-h-[100%] flex-col gap-2 shadow-(--shadow) backdrop-blur-[2rem] md:gap-3'>
			<div
				className={`pointer-events-none fixed inset-0 bg-repeat opacity-1 bg-blend-multiply`}
				style={{ backgroundImage: `url(${noiseTexture})` }}
			/>
			<AddTodo />
			<BorderUI className='flex h-[100%] flex-col overflow-y-auto shadow-(--shadow-inset)'>
				<TodoList />
			</BorderUI>
			<div className='xs:grid-cols-[auto_1fr] grid gap-2 md:grid-cols-[auto_1fr_auto] md:gap-3'>
				<BorderUI className='col-span-full md:col-auto'>
					<TodoFilter />
				</BorderUI>
				<BorderUI className='flex justify-center md:-order-1'>
					<TodosCounter count={activeTodos.length} />
				</BorderUI>
				<BorderUI className='flex justify-center md:justify-end'>
					<ClearCompleted />
				</BorderUI>
			</div>
		</BorderUI>
	);
};
