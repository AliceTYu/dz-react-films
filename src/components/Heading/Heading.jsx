import styles from './Heading.module.css';

function Heading({children}) {
	return (
		<div className={styles.header}>
			{children}
		</div>
	);
}

export default Heading;