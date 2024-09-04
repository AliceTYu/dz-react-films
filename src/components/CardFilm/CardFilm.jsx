import BtnFavorite from '../BtnFavorite/BtnFavorite';
import styles from './CardFilm.module.css';

function CardFilm({data}) {
	return (
		<div className={styles.cardFilm}>
			<div className={styles.favorite}>
				<img src='/public/star.svg'/>
				<div>{data.rating}</div>
			</div>
			<div className={styles.imgFilm}>
				<img className={styles.image} src={data.img}/>
			</div>
			<div className={styles.block}>
				<div className={styles.title}>{data.title}</div>
				{data.favorite == 0 ? <BtnFavorite purple={true} title='В избранное'/> : <BtnFavorite green={true} title='В избранном'/>}
			</div>
		</div>
	);
}

export default CardFilm;