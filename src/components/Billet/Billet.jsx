import styles from './Billet.module.css';

function Billet({data}) {
	return (
		<div className={styles.favorite}>
			<img src='/public/star.svg'/>
			<div>{data.rating}</div>
		</div>
	);
}

export default Billet;