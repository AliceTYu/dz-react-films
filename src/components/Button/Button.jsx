import styles from './Button.module.css';
import cn from 'classnames';

function Button({children, onClick, className, color}) {
	return (
		<button onClick={onClick} className={cn(styles.button, styles[className], styles[color])}>
			{children}
		</button>
	);
}

export default Button;