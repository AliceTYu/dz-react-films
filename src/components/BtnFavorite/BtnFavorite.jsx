import styles from './BtnFavorite.module.css';
import cn from 'classnames';

function BtnFavorite({green, title, purple}) {
	return (
		<div className={cn(styles.BtnFavorite, green && styles.green, purple && styles.purple)}>
			{green && <img src='/public/Bookmark.svg'/>}
			{purple && <img src='/public/like.svg'/>}
			<div>{title}</div>
		</div>
	);
}

export default BtnFavorite;