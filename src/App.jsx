import './App.css';
import Button from './components/Button/Button';
import HeaderTitle from './components/HeaderTitle/HeaderTitle';
import Input from './components/Input/Input';
import TextBlock from './components/TextBlock/TextBlock';
import Header from './layout/Header/Header';

function App() {
	const clicked = () => {
		console.log('Нажали...');
	};

	return (
		<>
			<Header></Header>
			
			<HeaderTitle>Поиск</HeaderTitle>
			<TextBlock>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</TextBlock>
			<TextBlock size={20}>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</TextBlock>
			<Button onClick={clicked}>Искать</Button>
			<Input icon={true} placeholder='Введите название'></Input>
			<Input placeholder='Ваше имя'></Input>
		</>
	);
}

export default App;
