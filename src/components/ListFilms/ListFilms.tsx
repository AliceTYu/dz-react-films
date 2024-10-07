import styles from './ListFilms.module.css';
import { ListFilmsProps } from './ListFilms.props';

function ListFilms({ children }: ListFilmsProps) {
	return (
		<ul className={styles.listFilms}>
			{children}
		</ul>
	);
}

export default ListFilms;