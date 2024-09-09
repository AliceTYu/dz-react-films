import styles from './Header.module.css';
import cn from 'classnames';

function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.headerIcon}>
				<img src='favorite.svg'/>
			</div>
			<ul className={styles.headerList}>
				<li className={styles.headerItem}><a className={cn(styles.headerlink, styles.active)} href="#">Поиск фильмов</a></li>
				<li className={styles.headerItem}><a className={styles.headerlink} href="#">Мои фильмы</a></li>
				<li className={styles.headerItem}>
					<a className={styles.headerlink} href="#">Войти</a>
					<img className={styles.headerIcon2} src='int.svg'/>
				</li>
			</ul>
		</header>
	);
}

export default Header;