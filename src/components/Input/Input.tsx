import { forwardRef } from 'react';
import styles from './Input.module.css';
import cn from 'classnames';
import { InputProps } from './Input.props';

const Input = forwardRef<HTMLInputElement, InputProps>(function Input({icon = false, isValid = true, classNames, ...props}, ref) {
	return (
		<div className={cn(styles.inputBlock, {
			[styles.classNames]: classNames !== undefined,
			[styles['']]: classNames === undefined
		}, {
			[styles['inValid']]: !isValid
		})} >
			{icon && <img src='search.svg'/>}
			<input {...props} ref={ref} className={styles.input}/>
		</div>
	);
});

export default Input;