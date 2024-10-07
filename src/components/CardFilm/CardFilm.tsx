import styles from './CardFilm.module.css';
import Button from './../Button/Button';
import Billet from '../Billet/Billet';
import { CardFilmProps } from './CardFilm.props';
import { Link } from 'react-router-dom';

function CardFilm(props:CardFilmProps) {
	return (
		<Link to={`/movie/${props.id}`}>
			<li className={styles.cardFilm}>
				<Billet rating={props.rating}/>
	
				<div className={styles.imgFilm}>
					<img className={styles.image} src={props.img}/>
				</div>
	
				<div className={styles.block}>
					<div className={styles.title}>{props.title}</div>
	
					{props.favorite == 0 ? <Button className={'hasIcon'} color={'green'}>
						<img src='/public/bookmark.svg'/> 
						В избранное
					</Button> : <Button className={'hasIcon'} color={'purple'}>
						<img src='/public/like.svg'/> 
						В избранном
					</Button>}
				</div>
			</li>
		</Link>
	);
}

export default CardFilm;