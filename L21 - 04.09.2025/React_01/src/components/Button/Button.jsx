// rafce - react arrow functional component export
// rfce - react functional component export
import styles from './Button.module.css';

const Button = (props) => {
	return <button className={styles.container}>טקסט מקדים {props.text}</button>;
};

export default Button;
