import styles from './HeaderTitle.module.css';

function HeaderTitle({children}) {
	return (
		<div className={styles.header}>
			{children}
		</div>
	);
}

export default HeaderTitle;