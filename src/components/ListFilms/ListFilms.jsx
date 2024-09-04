import styles from './ListFilms.module.css';

function ListFilms({ children }) {
	return (
		<ul className={styles.listFilms}>
			{children}
		</ul>
	);
}

export default ListFilms;