import { forwardRef } from 'react';
import styles from './Input.module.css';
import cn from 'classnames';

const Input = forwardRef(function Input({icon, isValid = true, classNames, ...props}, ref) {
	return (
		<div className={cn(styles.inputBlock, styles[classNames], {
			[styles['inValid']]: !isValid
		})} >
			{icon && <img src='search.svg'/>}
			<input {...props} ref={ref} className={styles.input}/>
		</div>
	);
});

export default Input;