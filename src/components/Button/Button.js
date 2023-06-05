// import * as evk from "eslint-visitor-keys"
import styles from './Button.module.scss';
import clsx from 'clsx';

const Button = (props) => {
  return (<button className={clsx(styles.button, props.className)}>{props.children}</button>);
};

// console.log(evk.KEYS.AssignmentExpression) // → ["left", "right"]

export default Button;