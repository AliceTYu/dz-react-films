import styles from './LiItemForList.module.css';
import cn from 'classnames';

function LiItemForList({ children, className, icon, onClick }) {
	return (
		<li className={styles.headerItem}>
			<a onClick={onClick} className={cn(styles.headerlink, styles[className])} href="#">{children}</a>
			{icon ==='input' && <img className={styles.headerIcon2} src='int.svg'/>}
			{icon ==='user' && <img className={styles.headerIcon2} src='user.svg'/>}
		</li>
	);
}

export default LiItemForList;