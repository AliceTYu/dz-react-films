import styles from './TextBlock.module.css';

function TextBlock({children, size}) {
	return (
		<div className={styles.textBlock} style={{fontSize: size}}>
			{children}
		</div>
	);
}

export default TextBlock;