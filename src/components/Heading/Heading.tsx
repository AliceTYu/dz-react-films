import styles from './Heading.module.css';
import { HeadingProps } from './Heading.props';

function Heading({children}: HeadingProps) {
	return (
		<div className={styles.header}>
			{children}
		</div>
	);
}

export default Heading;