import styles from './TextBlock.module.css';
import { TextBlockProps } from './TextBlock.props';

function TextBlock({children, size}: TextBlockProps) {
	return (
		<div className={styles.textBlock} style={{fontSize: size}}>
			{children}
		</div>
	);
}

export default TextBlock;