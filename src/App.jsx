import { useEffect, useReducer, useRef, useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import CardFilm from './components/CardFilm/CardFilm';
import Heading from './components/Heading/Heading';
import Input from './components/Input/Input';
import ListFilms from './components/ListFilms/ListFilms';
import TextBlock from './components/TextBlock/TextBlock';
import Header from './layout/Header/Header';
import { INITIAL_STATE, inputFormReducer } from './App.state';
import { useLocalStorage } from './hooks/use-localStorage.hook';

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

function mapItems(items) {
	if (!items){
		return [];
	}
	return items.map(i => ({
		...i
	}));
}

function App() {
	const [profile, setProfile] = useLocalStorage('profile');

	const [data, setData] = useState(INITIAL_ARRAY);
		
	const [inputFormState, dispatchInputForm] = useReducer(inputFormReducer, INITIAL_STATE);
	const { isValid, ifFormReadyToSubmit, values }  = inputFormState;
	const nameRef = useRef();

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const addProfile = item => {
		setProfile([...profile, {
			id: profile.length > 0 ? Math.max(...profile.map(i => i.id)) + 1 : 1,
			name: item.name,
			isLogined: true
		}]);
	};

	const focusError = (isValid) => {
		switch(true){
		case !isValid.name:
			nameRef.current.focus();
			break;
		}
	};

	useEffect(() => {
		let timerForm;
		if (!isValid.name){
			focusError(isValid);
			timerForm = setTimeout(() => {
				dispatchInputForm({ type: 'RESET_VALIDITY' });
			}, 1500);
		}
		return () => {
			clearTimeout(timerForm);
		};
	}, [isValid]);

	useEffect(() => {
		if (ifFormReadyToSubmit){
			addProfile(values);
			dispatchInputForm({ type: 'CLEAR'});
		}
	}, [ifFormReadyToSubmit, values, addProfile]);

	const updateProfileItem = (id, updates) => {
		return profile.map((item) =>
		  item.id === id ? { ...item, ...updates } : item
		);
	  };

	const onChange = (e) => {
		dispatchInputForm({type: 'SET_VALUE', payload: {[e.target.name]: e.target.value}});
	};

	const addProfileItem = (e) => {
		e.preventDefault();
		let flagIsLogin = true;
		profile.map(el => {
			if (el.name === e.target.name.value) {
				flagIsLogin = false;
				setProfile(updateProfileItem(el.id, { isLogined: true }));
				dispatchInputForm({ type: 'CLEAR'});
			}} 
		);
		if (!flagIsLogin){
			return;
		}
		dispatchInputForm({ type: 'SUBMIT'});
	};

	return (
		<>
			<Header updateProfileItem={updateProfileItem} setProfile={setProfile} profile={mapItems(profile)}/>
			
			<div className='appBlock'>
				<Heading>Поиск</Heading>
				<TextBlock>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</TextBlock>
				
				<div className='appInput'>
					<Input icon={true} placeholder='Введите название'></Input>
					<Button className={'default'}>Искать</Button>
				</div>

				{mapItems(profile).filter(i => !i.isLogined).length === mapItems(profile).length && <form className='block_input' onSubmit={addProfileItem}>
					<Input autocomplete="off" onChange={onChange} name={'name'} isValid={isValid.name} ref={nameRef} placeholder='Имя пользователя' value={values.name} ></Input>
					<Button className={'default'}>Войти в профиль</Button>
				</form>}
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
