import { useParams } from 'react-router-dom';
import styles from './MoviePage.module.css';

function MoviePage() {
    const {id} = useParams()

  return (
    <div>MoviePage - {id}</div>
  )
}

export default MoviePage;