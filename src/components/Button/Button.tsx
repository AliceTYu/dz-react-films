import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';

function Button({children, className, color, ...props}: ButtonProps) {
	return (
		<button {...props} className={cn(styles.button, styles[className], {
			[styles['green']]: color === 'green',
			[styles['purple']]: color === 'purple'
		})}>
			{children}
		</button>
	);
}

export default Button;