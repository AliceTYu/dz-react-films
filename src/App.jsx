import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import CardFilm from './components/CardFilm/CardFilm';
import Heading from './components/Heading/Heading';
import Input from './components/Input/Input';
import ListFilms from './components/ListFilms/ListFilms';
import TextBlock from './components/TextBlock/TextBlock';
import Header from './layout/Header/Header';

const INITIAL_ARRAY = [
	{id: 1, title: 'Black Widow', img: '/public/cardFilms/image_01.jpg', rating: 324, favorite: 0},
	{id: 2, title: 'Shang Chi', img: '/public/cardFilms/image_02.jpg', rating: 124, favorite: 0},
	{id: 3, title: 'Loki', img: '/public/cardFilms/image_03.jpg', rating: 235, favorite: 1},
	{id: 4, title: 'How I Met Your Mother', img: '/public/cardFilms/image_04.jpg', rating: 123, favorite: 0},
	{id: 5, title: 'Money Heist', img: '/public/cardFilms/image_05.jpg', rating: 8125, favorite: 1},
	{id: 6, title: 'Friends', img: '/public/cardFilms/image_06.jpg', rating: 123, favorite: 0},
	{id: 7, title: 'The Big Bang Theory', img: '/public/cardFilms/image_07.jpg', rating: 12, favorite: 0},
	{id: 8, title: 'Two And a Half Men', img: '/public/cardFilms/image_08.jpg', rating: 456, favorite: 0}
];

function App() {
	const [data, setData] = useState(INITIAL_ARRAY);

	const clicked = () => {
		console.log('Нажали...');
	};

	return (
		<>
			<Header/>
			
			<div className='appBlock'>
				<Heading>Поиск</Heading>
				<TextBlock>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</TextBlock>
				
				<div className='appInput'>
					<Input icon={true} placeholder='Введите название'></Input>
					<Button className={'default'} onClick={clicked}>Искать</Button>
				</div>
			</div>

			<ListFilms>
				{data.map(el => (
					<CardFilm key={el.id} data={el}></CardFilm>
				))}
			</ListFilms>
		</>
	);
}

export default App;
