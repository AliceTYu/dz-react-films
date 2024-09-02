import './App.css';
import Button from './components/Button/Button';
import HeaderTitle from './components/HeaderTitle/HeaderTitle';
import TextBlock from './components/TextBlock/TextBlock';

function App() {

	return (
		<>
			<HeaderTitle>Поиск</HeaderTitle>
			<TextBlock>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</TextBlock>
			<TextBlock size={20}>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</TextBlock>
			<Button>Искать</Button>
		</>
	);
}

export default App;
