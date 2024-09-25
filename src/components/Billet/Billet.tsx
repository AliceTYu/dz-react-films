import styles from './Billet.module.css';
import { BilletProps } from './Billet.props';

function Billet(props:BilletProps) {
	return (
		<div className={styles.favorite}>
			<img src='/public/star.svg'/>
			<div>{props.rating}</div>
		</div>
	);
}

export default Billet;