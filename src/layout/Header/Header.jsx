import { useContext } from 'react';
import LiItemForList from '../../components/liItemForList/liItemForList';
import styles from './Header.module.css';
import { UserContext } from '../../context/user.context';

function Header({profile, setProfile, updateProfileItem}) {	
	const {nameProfile, loadProfile} = useContext(UserContext);
	
	return (
		<header className={styles.header}>
			<div className={styles.headerIcon}>
				<img src='/favorite.svg'/>
			</div>

			<ul className={styles.headerList}>
				<LiItemForList link={'/'}>Поиск фильмов</LiItemForList>
				<LiItemForList link={'/favorites'}>Мои фильмы</LiItemForList>

				{profile.filter(el => el.isLogined).map((p) => (
					<>
						{loadProfile && (
							<LiItemForList icon={'user'}>{nameProfile}</LiItemForList>
						)}
						{loadProfile && <LiItemForList onClick={() => setProfile(updateProfileItem(p.id, { isLogined: false }))}>Выйти</LiItemForList>}
						{/* {p.isLogined && (
							<LiItemForList icon={'user'}>{p.name} / {nameProfile}</LiItemForList>
						)}
						{p.isLogined && <LiItemForList onClick={() => setProfile(updateProfileItem(p.id, { isLogined: false }))}>Выйти</LiItemForList>} */}
					</>
				))}

				{!loadProfile && <LiItemForList link={'/login'} icon={'input'}>Войти</LiItemForList>}	

				{/* {profile.filter(el => !el.isLogined).length === profile.length && <LiItemForList icon={'input'}>Войти</LiItemForList>}				 */}
			</ul>
		</header>
	);
}

export default Header;