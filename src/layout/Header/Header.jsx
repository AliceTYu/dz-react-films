import LiItemForList from '../../components/liItemForList/liItemForList';
import styles from './Header.module.css';

function Header({profile, setProfile, updateProfileItem}) {	
	
	return (
		<header className={styles.header}>
			<div className={styles.headerIcon}>
				<img src='favorite.svg'/>
			</div>
			<ul className={styles.headerList}>
				<LiItemForList className={'active'}>Поиск фильмов</LiItemForList>
				<LiItemForList>Мои фильмы</LiItemForList>

				{profile.filter(el => el.isLogined).map((p) => (
					<>
						{p.isLogined && (
							<LiItemForList icon={'user'}>{p.name}</LiItemForList>
						)}
						{p.isLogined && <LiItemForList onClick={() => setProfile(updateProfileItem(p.id, { isLogined: false }))}>Выйти</LiItemForList>}
					</>
				))}

				{profile.filter(el => !el.isLogined).length === profile.length && <LiItemForList icon={'input'}>Войти</LiItemForList>}				
			</ul>
		</header>
	);
}

export default Header;