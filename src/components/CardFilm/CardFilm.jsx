import Billet from '../Billet/Billet';
import Button from '../Button/Button';
import styles from './CardFilm.module.css';

function CardFilm({data}) {
	return (
		<li className={styles.cardFilm}>
			<Billet data={data}/>

			<div className={styles.imgFilm}>
				<img className={styles.image} src={data.img}/>
			</div>

			<div className={styles.block}>
				<div className={styles.title}>{data.title}</div>

				{data.favorite == 0 ? <Button className={'hasIcon'} color={'green'}>
					<img src='/public/bookmark.svg'/> 
					В избранное
				</Button> : <Button className={'hasIcon'} color={'purple'}>
					<img src='/public/like.svg'/> 
					В избранном
				</Button>}
			</div>
		</li>
	);
}

export default CardFilm;