
import styles from './Container.module.css';

export const Container = (props) => {
  return (
    <div className={`${styles.container} ${styles[props.customClass]}`}>
      {props.children}
    </div>
  );
};