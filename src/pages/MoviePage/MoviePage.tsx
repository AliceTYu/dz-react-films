import { useLoaderData, useParams } from 'react-router-dom';
import styles from './MoviePage.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Film } from '../../interfaces/films.intesface';

function MoviePage() {
  const [dataFilms, setDataFilms] = useState<Film[]>([]);

    const {id} = useParams()

    const data = useLoaderData() as Film
    console.log(`Первая - ${data}`);

    const GetDetail = async (tt: string) => {
      try {
        const {data} = await axios.get<Film[]>(`https://search.imdbot.workers.dev/?tt=${tt}`)
        setDataFilms(data.short)
        console.log(data);
        
      } catch (e) {
        console.error(e)
        return
      }
    }

    useEffect(() => {
      GetDetail(id)
    }, [id])

  return (
    <>
      <div>id - {id}</div>
      <div>MoviePage - {data.short.name}</div>
    </>
  )
}

export default MoviePage;