
import loading from '../../img/loading.svg';
import styles from './Loading.module.css';

export const Loading = () => {
  return (
    <div className={styles.loading_container}>
        <img className={styles.loading} src={loading} alt='loading'/>
    </div>
  );
};