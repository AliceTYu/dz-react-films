import { useState } from 'react';
import CardFilm from '../../components/CardFilm/CardFilm';
import ListFilms from '../../components/ListFilms/ListFilms';
import { MainPageProps } from './MainPage.props';
import Heading from '../../components/Heading/Heading';
import TextBlock from '../../components/TextBlock/TextBlock';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import styles from './MainPage.module.css';
import axios, { AxiosError } from 'axios';
import { Film } from '../../interfaces/films.intesface';
import ErrorPage from '../ErrorPage/ErrorPage';

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

function MainPage({}:MainPageProps) {
  const [dataFilms, setDataFilms] = useState<Film[]>([]);
  const [filmInput, setFilmInput] = useState<string>('')

  const [isLoaading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | undefined>()

  const getSearch = async (q: string) => {
	try {
		setError('')
		setIsLoading(true)
		const {data} = await axios.get<Film[]>(`https://search.imdbot.workers.dev/?q=${q}`)
		if (data.description.length === 0){
			setIsLoading(false)
			setDataFilms('')
		} else {
			setDataFilms(data.description)
			setIsLoading(false)
		}
	} catch (e) {
		setIsLoading(false)
		if ( e instanceof AxiosError){
			setError(e.message)
		}
		return
	}
  }

  const onChange = (e) => {
	setFilmInput(e.target.value)
};

  return (
    <>
      <div className={styles.appBlock}>
        <Heading>Поиск</Heading>
        <TextBlock>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</TextBlock>

        <div className={styles.appInput}>
			<Input onChange={onChange} value={filmInput} icon={true} placeholder='Введите название'></Input>
			<Button onClick={() => getSearch(filmInput)} className={'default'}>Искать</Button>
		</div>
      </div>

	  {error && <ErrorPage/>}
	  {!dataFilms && <ErrorPage/>}

      {!isLoaading && dataFilms && <ListFilms>
			{dataFilms.map(el => (
				<CardFilm 
					key={el['#IMDB_ID']} 
					id={el['#IMDB_ID']} 
					img={el['#IMG_POSTER']}
					title={el['#TITLE']}
					rating={el['#RANK']}></CardFilm>
			))}
		</ListFilms>}

		{isLoaading && <>Загрузка...</>}
    </>
  )
}

export default MainPage;