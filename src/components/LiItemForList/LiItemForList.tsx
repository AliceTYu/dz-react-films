import styles from './LiItemForList.module.css';
import cn from 'classnames';
import { LiItemForListProps } from './LiItemForList.props';
import { NavLink, useLocation } from 'react-router-dom';

function LiItemForList({ children, className, icon, link, onClick }: LiItemForListProps) {
	const location = useLocation();
	return (
		<li className={styles.headerItem}>
			<NavLink onClick={onClick} className={cn(styles.headerlink, styles[className], {
				[styles.active] : location.pathname === link
			})} to={link}>{children}</NavLink>
			{icon ==='input' && <img className={styles.headerIcon2} src='/int.svg'/>}
			{icon ==='user' && <img className={styles.headerIcon2} src='/user.svg'/>}
		</li>
	);
}

export default LiItemForList;