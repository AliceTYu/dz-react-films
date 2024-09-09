import styles from './Input.module.css';

function Input({placeholder, icon}) {
	return (
		<div className={styles.inputBlock}>
			{icon && <img src='search.svg'/>}
			<input className={styles.input} placeholder={placeholder}/>
		</div>
	);
}

export default Input;