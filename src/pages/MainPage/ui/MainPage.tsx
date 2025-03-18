import { TodoSection } from '@widgets/Todo';

export const MainPage = () => {
	return (
		<>
			<main className='relative z-1 flex max-h-(--main-height) flex-col items-center justify-center p-2 pb-0 md:p-3'>
				<TodoSection />
			</main>
		</>
	);
};
