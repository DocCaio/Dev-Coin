
import { Link } from 'react-router';
import styles from './LinkButton.module.css';

export const LinkButton = ({to , text}) => {
  return (
    <Link className={styles.btn} to={to}>
      {text}
    </Link>
  );
};