import { MainPage } from '@pages/MainPage';
import { Background } from '@widgets/Background';
import { Footer } from '@widgets/Footer';
import { Preloader } from '@widgets/Preloader';

function App() {
	return (
		<>
			<Background />
			<Preloader />
			<MainPage />
			<Footer />
		</>
	);
}

export default App;
